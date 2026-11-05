# My blog

A minimal Jekyll site for GitHub Pages: an about-me homepage, a blog at /blog/, tags, RSS,
footnotes that float into the margin as sidenotes, automatic dark mode, and Google site search.

## Publish it (one-time setup)

1. Create a GitHub repository named **`<your-username>.github.io`** (public).
2. Upload everything in this folder to it (drag-and-drop on GitHub's "Add file → Upload files" works).
3. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, branch `main`, folder `/ (root)`.
4. Wait a minute or two, then open `https://<your-username>.github.io`.

`_config.yml` is already set up for `chirag1701.github.io`. Edit the `nav` list there to change the menu.

> Using a repo with any other name (e.g. `blog`)? Set `baseurl: "/blog"` in `_config.yml`;
> the site will be at `https://<your-username>.github.io/blog`.

## Writing posts — the easy way

Open **https://chirag1701.github.io/write/** — a Medium-style editor. Drafts are saved to the private
`blog-drafts` repo (nobody can see them); **Publish** moves the post into this repo and it goes live.
It needs a fine-grained GitHub token (Contents: read & write on `chirag1701.github.io` and `blog-drafts`),
stored only in your browser.

## Writing posts — by hand

Add a file to `_posts/` named `YYYY-MM-DD-some-title.md`:

```markdown
---
title: Some title
published: false   # draft: not built into the site. Set to true to post it.
tags: [ai, careers]
---

Your post in Markdown. Footnotes[^1] become sidenotes on wide screens.

[^1]: Like this.
```

Commit it and the site rebuilds automatically. The URL will be `/some-title/`.

## Files

| File | What it is |
| --- | --- |
| `_config.yml` | Your name, links, settings |
| `_posts/` | Blog posts |
| `about.md` | About page |
| `about.md` + `_layouts/home.html` | Homepage: about me, then recent posts |
| `blog/index.html` | All posts, 20 per page |
| `tags.html` | Tag index page |
| `assets/css/style.css` | All styling (light + dark) |
| `assets/js/sidenotes.js` | Moves footnotes into the margin |

## Preview locally (optional)

Needs Ruby. `bundle install` then `bundle exec jekyll serve` and open http://localhost:4000.
