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

The `/guides/` index and each guide are static HTML pages under `public/`, so
their article content and metadata are available without running JavaScript.
Keep `public/sitemap.xml` in sync when adding or removing public pages.

## Cloudflare Pages

Connect this repository to Cloudflare Pages with the following settings:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
