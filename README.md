# Senior Design — Lecture Slides

Slidev decks for the Vanderbilt ECE Senior Design sequence, published as a static site on GitHub Pages:
**https://vanderbilt-ece.github.io/senior-design/**

The landing page has one tile per lecture; each tile opens that lecture's deck.

## Layout

```
slidev_template/   shared theme, components, styles, and the single dependency set (package.json)
lectures/NN-slug/  one Slidev deck each: slides.md (+ symlinks into slidev_template/)
scripts/build-site.mjs   builds every deck + generates the landing page into _site/
.github/workflows/deploy.yml   builds and deploys to GitHub Pages on every push to main
```

## Working on a lecture

```bash
cd slidev_template && npm ci          # once; all decks share these dependencies
cd ../lectures/07-system-architecture-design
ln -s ../../slidev_template/node_modules node_modules   # once per deck (the build script does this automatically)
npx slidev --open                     # live preview
```

Edit `slides.md`, commit, push to `main` — the site rebuilds automatically.
The tile's title comes from the `title:` and the description from the `info:` field in the slide's frontmatter.

## Adding a lecture

Copy an existing `lectures/NN-slug/` folder (keeping its symlinks), rename it, and edit `slides.md`.
It shows up on the landing page automatically. Keep `routerMode: hash` in the frontmatter — GitHub Pages
has no SPA fallback, so hash URLs are what make refresh and deep links (`.../07-.../#/12`) work.

## Building the whole site locally

```bash
node scripts/build-site.mjs            # everything -> _site/
node scripts/build-site.mjs 05 07      # only some lectures
SITE_BASE=/ node scripts/build-site.mjs   # if serving from a domain root instead of /senior-design/
```
Use Node 20.
