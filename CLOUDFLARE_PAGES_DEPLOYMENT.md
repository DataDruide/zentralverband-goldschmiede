# Cloudflare Pages Deployment Guide

This project uses **TanStack Start with Cloudflare Pages v2 (FaaS)**.

## Build & Deploy Configuration

The project includes a custom build script that prepares the deployment for Cloudflare Pages:

- **Build Command**: `npm run build:pages`
- **Output Directory**: `dist/server`
- **Framework Preset**: None (custom)

## Cloudflare Pages Setup

In your Cloudflare Pages project settings:

1. **Production branch**: `main`
2. **Build command**: `npm run build:pages`
3. **Build output directory**: `dist/server`

### Environment Variables (if needed)

If using Supabase or other services, configure in Cloudflare Pages environment settings:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key
- Any other `VITE_*` variables needed by the app

## Build Output Structure

After running `npm run build:pages`, `dist/server` contains:

```
dist/server/
├── _worker.js           # Pages Function handler (SSR)
├── assets/              # Client + Server assets (merged)
├── favicon.ico          # favicon from client
├── .assetsignore        # Asset filtering rules
├── wrangler.json        # Deployment metadata
└── .vite/               # Vite manifest for SSR
```

## Troubleshooting

### 404 Errors

1. Verify build command is set to `npm run build:pages`
2. Verify output directory is `dist/server`
3. Clear Cloudflare cache and redeploy

### Missing Environment Variables

Client-side env vars must start with `VITE_` prefix and be configured in Cloudflare Pages.

### Assets Not Loading

Check that:
- `dist/server/assets/` folder contains both client and server assets
- `_worker.js` is present in `dist/server/`
- No cache headers are preventing asset updates

## Local Testing

To test locally:

```bash
npm run build:pages
npx wrangler pages dev dist/server
```

This starts a local Cloudflare Pages environment on `http://localhost:8788`.
