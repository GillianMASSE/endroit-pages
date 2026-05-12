# EnDroit — Marketing site

The marketing site at [endroit.app](https://endroit.app), built with Astro and deployed to GitHub Pages.

## Stack

- [Astro 5](https://astro.build/) — static site generator
- Vanilla CSS (scoped per component)
- GitHub Actions → GitHub Pages

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves dist/ locally
```

## Pages

| Route        | File                                  |
|--------------|---------------------------------------|
| `/`          | `src/pages/index.astro`              |
| `/features`  | `src/pages/features.astro`           |
| `/pricing`   | `src/pages/pricing.astro`            |
| `/about`     | `src/pages/about.astro`              |
| `/contact`   | `src/pages/contact.astro`            |
| `/signup`    | `src/pages/signup.astro`             |
| `/terms`     | `src/pages/terms.astro`              |
| `/privacy`   | `src/pages/privacy.astro`            |
| `/blog`      | `src/pages/blog/index.astro` + 4 posts |

## TikTok verification

The file `public/tiktokf3tzspridAg5IjWuTd2en6qupXbort4T.txt` must remain at the site
root — it is required by TikTok to verify domain ownership for the Developer Portal.

## Deployment

Every push to `main` triggers a GitHub Action that builds the site and deploys it to
GitHub Pages. The `CNAME` file in `public/` configures the custom domain `endroit.app`.

## Brand

- Background `#0a0a0f`
- Surface `#13131a`
- Accent (gold) `#FFD700`
- Accent (secondary blue) `#0A84FF`
- Text `#e8e8f0`
- Muted `#8888aa`
