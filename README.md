# LW4L — Lone Wolf For Life

A **frontend-only, display/information website** for the LW4L movement. No database, no account system, no build step, and no paid hosting required.

## Files

- `index.html` — complete website and page content
- `styles.css` — responsive design and visual styling
- `script.js` — mobile navigation, scroll reveals, copyright year
- `assets/lw4l-original-logo.png` — original LW4L logo preserved unchanged
- `assets/favicon.svg` — browser tab icon (a separate simplified icon; does not replace the original logo)
- `.nojekyll` — allows GitHub Pages to serve files directly

## Preview on your phone or computer

Open `index.html` in a browser. Internet access is needed to load the optional Google Fonts; the website has system-font fallbacks.

## Publish for FREE with GitHub Pages

1. Create a **public** repository under your GitHub organization (e.g. `lw4l-website`).
2. Upload the **contents** of this folder into the repository root. Don't upload the ZIP as a single file.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose **main** and **/(root)**, then **Save**.
6. Wait for GitHub Pages to finish publishing. The site will normally be at `https://YOUR-ORG.github.io/lw4l-website/`.

All internal asset references are relative, so the website works at repository subpaths.

## Customize

- Update copy and section links in `index.html`.
- Update colors, typography, spacing, and responsive styles in `styles.css`.
- Update social URLs in the `#connect` section of `index.html`.
- Keep the supplied `assets/lw4l-original-logo.png` unchanged to preserve the approved brand.

## Important limitations

- This is an **informational website only**. There is no registration, authentication, Ghost Mode tracker, database, or stored member progress.
- Ghost Mode is presented as a *concept*, not as a working product. The page says so explicitly.
- The hooded character in the hero is a CSS illustration with **no face shown**.
- The project has no analytics, cookies, or data collection scripts.
- The website has not been tested on every device or browser; verify it on your phone before announcing it.
- Google Fonts are requested from Google's font CDN when online; to remove that external request, delete the `@import` in `styles.css` and use the built-in font fallbacks.

## Later expansion

If LW4L later adds accounts, challenges, or a community platform, this static site can remain the public-facing homepage while those features are built separately.
