# LW4L — Lone Wolf For Life

Premium, frontend-only informational website for the LW4L movement.

## Deploy directly to GitHub Pages (no ZIP needed)

Upload these **six individual files** to the **root** of your existing `LW4L/lw4l` repository:

- `index.html`
- `styles.css`
- `script.js`
- `lw4l-original-logo.jpg`
- `favicon.svg`
- `README.md`

**IMPORTANT:** The original logo image is JPEG-encoded, so the updated website uses `.jpg` instead of the misleading `.png` filename from the earlier upload. Keep the exact new filename.

You can delete the old `lw4l-original-logo.png` after updating; it is no longer referenced. GitHub Pages: Settings → Pages → Deploy from branch → `main` → `/ (root)`.

After committing, allow a few minutes for deployment and refresh the site. If your browser shows the old site, try a private tab or clear its cache.

## What works

- Mobile and desktop navigation
- Responsive layouts
- Interactive Ghost Mode preview with three challenge concepts (no saved data)
- Scroll reading progress
- All social links
- Static GitHub Pages hosting with no backend, account, database, or build step

## Brand rules

- Original logo is unchanged in its image content (silver lettering, red 4).
- Metallic silver UI, charcoal backgrounds, faceless silhouette art.
- The only red branding is in the original logo and its original image.

## Technical notes

- Plain HTML, CSS, and JavaScript; no npm dependencies.
- Google Fonts are optional; local fallback fonts apply offline.
- Motion respects reduced-motion preferences.
- Challenge selector is a visual preview, **not** a working progress tracker.
