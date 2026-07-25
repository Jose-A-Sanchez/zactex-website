# ZAC-TEX Construction & Roofing — Website

Static marketing site for ZAC-TEX Construction & Roofing (`zactexllc.com`).
Plain HTML/CSS/JS — no build step, deploys directly to Cloudflare Pages.

## Structure

```
index.html         Single-page site (hero, services, about, service area, contact)
css/styles.css      All styles, brand tokens defined at the top as CSS variables
js/main.js          Footer year + placeholder form handler
assets/             Logo + favicon exported from the brand PDF
```

## Brand tokens

| Token | Value |
|---|---|
| Navy | `#123C51` |
| Blue | `#006CA3` |
| Orange | `#EB6B27` |
| Warm white (bg) | `#F7F5F1` |

Fonts: Archivo (display/headings), Inter (body) — loaded via Google Fonts.

## Open TODOs before launch

Search the codebase for `TODO` comments — they're marked inline in `index.html`. Current list:

- [ ] Full services list (currently: Roofing, Remodeling, HVAC, Electrical, Plumbing — placeholder "more coming" card included)
- [ ] Service area — city/county list not yet finalized
- [ ] License number / insurance details for footer + trust badges
- [ ] Business email (`info@zactexllc.com`) — needs to be set up and confirmed
- [ ] Contact form — currently shows a demo alert; needs a real submission handler (Cloudflare Pages Function, Formspree, or similar)
- [ ] Real project photos to replace the abstract roofline hero graphic
- [ ] About section copy — currently placeholder, written in your uncle's voice once confirmed

## Local development

No build tools needed. Just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment (Cloudflare Pages)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select this repository.
4. Build settings: **no build command**, **output directory: `/`** (root) — this is a static site, no framework.
5. Deploy. Cloudflare will give you a `*.pages.dev` URL immediately.
6. Once confirmed working, go to the Pages project → **Custom domains** → add `zactexllc.com` (and `www.zactexllc.com`). Since DNS is already on Cloudflare, this connects automatically.
