---
title: How this blog works
tags: [meta, tools]
popular: true
---

This blog is a set of Markdown files in a GitHub repository. GitHub Pages turns them into a website every time I push. There's no database, no CMS, and nothing to pay for.

## Writing a post

Each post is a file in the `_posts` folder, named like `2026-11-04-how-this-blog-works.md`. The top of the file has a little block of settings called *front matter*:

```yaml
---
title: How this blog works
tags: [meta, tools]
popular: true        # optional: shows the post under "popular"
hn: https://news.ycombinator.com/item?id=123   # optional discussion link
---
```

Everything below that is ordinary Markdown.

## Footnotes become sidenotes

If you write a footnote[^side], it shows up in the right margin on a wide screen, next to the line that references it. On a phone it falls back to a normal footnote at the bottom.

> Blockquotes look like this. They're useful for quoting other people, or for a short aside that deserves a bit of emphasis.

## Code

Code blocks get syntax highlighting:

```python
def greet(name: str) -> str:
    # say hello
    return f"Hello, {name}!"

print(greet("world"))
```

And `inline code` looks like this.

[^side]: Like this one. Hover over it and the reference in the text lights up.
