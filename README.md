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

## Cloudflare Pages

Connect this repository to Cloudflare Pages with the following settings:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
