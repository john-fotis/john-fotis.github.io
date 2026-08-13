# John Fotis Portfolio

This repository contains a HugoBlox Developer Portfolio site, configured for deployment to GitHub Pages.

## Local development

```bash
pnpm install
pnpm run dev
```

## Build

```bash
hugo --minify
```

## Deploy

GitHub Actions workflows in `.github/workflows/` build and deploy the site automatically to GitHub Pages on pushes to `main`.