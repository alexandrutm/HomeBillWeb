# HomeBill website

The public website for HomeBill, built with Vite, React, and TypeScript.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm ci
npm run build
```

The generated site is written to `dist/`.

## Guides and search indexing

The `/guides/` index, each guide, and `/privacy-policy/` are static HTML pages
under `public/`, so their content and metadata are available without running
JavaScript. Keep `public/sitemap.xml` in sync when adding or removing public
pages.

The homepage's title, canonical URL, and social preview metadata are duplicated
in `index.html` and `src/pages/index.tsx` so they are available before React
runs. Keep both sets in sync and keep `public/homebill-og.png` at 1200×630.

## Cloudflare Pages

Connect this repository to Cloudflare Pages with the following settings:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
