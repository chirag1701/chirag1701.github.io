# My blog

A minimal Jekyll blog for GitHub Pages: big lowercase name, a "popular" and "recent" list, tags, RSS,
footnotes that float into the margin as sidenotes, automatic dark mode, and Google site search.

## Publish it (one-time setup)

1. Create a GitHub repository named **`<your-username>.github.io`** (public).
2. Upload everything in this folder to it (drag-and-drop on GitHub's "Add file → Upload files" works).
3. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, branch `main`, folder `/ (root)`.
4. Wait a minute or two, then open `https://<your-username>.github.io`.

`_config.yml` is already set up for `chirag1701.github.io`. To add a newsletter later, uncomment the
`subscribe` entry in `nav` and set `subscribe_url`.

> Using a repo with any other name (e.g. `blog`)? Set `baseurl: "/blog"` in `_config.yml`;
> the site will be at `https://<your-username>.github.io/blog`.

## Writing posts

Add a file to `_posts/` named `YYYY-MM-DD-some-title.md`:

```markdown
---
title: Some title
tags: [ai, careers]
popular: true      # optional — lists it under "popular"
hn: https://news.ycombinator.com/item?id=...   # optional discussion icons
lobsters: https://lobste.rs/s/...
reddit: https://reddit.com/r/...
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
| `index.html` | Homepage (popular + recent, 20 per page) |
| `popular.html`, `tags.html` | Popular and tag index pages |
| `assets/css/style.css` | All styling (light + dark) |
| `assets/js/sidenotes.js` | Moves footnotes into the margin |

## Preview locally (optional)

Needs Ruby. `bundle install` then `bundle exec jekyll serve` and open http://localhost:4000.
