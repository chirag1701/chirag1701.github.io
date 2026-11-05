// Moves kramdown footnotes into the right-hand margin as sidenotes on wide screens.
// On narrow screens the normal footnote list at the bottom of the post is shown instead.
(function () {
  var body = document.querySelector(".post-body")
  var section = body && body.querySelector("section")
  var footnotes = body && body.querySelector(".footnotes")
  if (!section || !footnotes) return

  var refs = Array.prototype.slice.call(section.querySelectorAll("a.footnote"))
  if (!refs.length) return

  document.querySelector(".site").classList.add("has-footnotes")
  section.classList.add("has-sidenotes")

  var rail = document.createElement("aside")
  rail.className = "sidenotes"
  rail.setAttribute("aria-hidden", "true")
  body.appendChild(rail)

  var pairs = refs.map(function (ref, i) {
    var id = decodeURIComponent(ref.getAttribute("href").slice(1))
    var li = document.getElementById(id)
    var note = document.createElement("div")
    note.className = "sidenote"
    if (li) {
      var clone = li.cloneNode(true)
      Array.prototype.forEach.call(clone.querySelectorAll(".reversefootnote"), function (a) { a.remove() })
      note.innerHTML = clone.innerHTML
    }
    var label = document.createElement("span")
    label.className = "sidenote__label"
    label.textContent = ref.textContent || String(i + 1)
    var first = note.querySelector("p") || note
    first.insertBefore(label, first.firstChild)
    rail.appendChild(note)

    function on() { ref.classList.add("is-active"); note.classList.add("is-active") }
    function off() { ref.classList.remove("is-active"); note.classList.remove("is-active") }
    ref.addEventListener("mouseenter", on); ref.addEventListener("mouseleave", off)
    note.addEventListener("mouseenter", on); note.addEventListener("mouseleave", off)
    return { ref: ref, note: note }
  })

  function layout() {
    if (getComputedStyle(rail).display === "none") return
    var top0 = body.getBoundingClientRect().top
    var nextFree = 0
    pairs.forEach(function (p) {
      var want = p.ref.getBoundingClientRect().top - top0 - 4
      var top = Math.max(want, nextFree)
      p.note.style.top = top + "px"
      nextFree = top + p.note.offsetHeight + 16
    })
  }

  layout()
  window.addEventListener("load", layout)
  window.addEventListener("resize", layout)
})()
