# yashshah.co.in

The portfolio website of Yash Shah, built with [Astro](https://astro.build) and published on GitHub Pages at **https://www.yashshah.co.in**.

## How publishing works

Every push to the `main` branch runs `.github/workflows/deploy.yml`, which:

1. installs the packages,
2. builds the site into `dist/`,
3. checks the built site (`npm run check`): the house rules for the words, every internal link and image with its exact upper and lower case, every certificate's page and files, file names, image sizes and alt text,
4. publishes `dist/` to GitHub Pages.

If the check fails, nothing is published and the old site stays live.

One-time setting in GitHub: **Settings > Pages > Build and deployment > Source** must be **GitHub Actions**. The custom domain `www.yashshah.co.in` stays set in the same Settings page.

## Where things live

| What | Where |
| --- | --- |
| All the words on the site (projects, wins, experience, skills) | `src/data/site.js` |
| Every certificate, letter, press item and photo | `src/data/documents.js` (see `CERTIFICATES.md`) |
| Home page layout | `src/pages/index.astro` |
| Project pages (one template for all of them) | `src/pages/projects/[slug].astro` |
| Certificate pages and the /certificates index | `src/pages/certificates/` |
| Header, footer and small parts | `src/components/` |
| Colours, fonts and spacing | `src/styles/global.css` |
| Photos and the blue grain images | `public/images/` |
| Resume PDF (website copy, no phone number) | `public/resume/yash-shah-resume.pdf` |
| Certificate files, pictures and link previews | `public/certificates/files/` and `public/certificates/images/` (see `CERTIFICATES.md`) |
| Old page addresses that now forward to the new pages | `src/pages/about.astro`, `contact.astro`, `experience.astro`, `projects.astro`, `certifications.astro` |

## Common edits

- **Add a certificate:** follow the steps in `CERTIFICATES.md`. Every document gets its own page at `/certificates/<slug>`.
- **Add a project page:** copy one entry in `projects` in `src/data/site.js`, give it a new `slug`, and fill in its `sections`. The page appears at `/projects/<slug>` on its own.
- **Change the resume:** replace `public/resume/yash-shah-resume.pdf` with the new PDF, keeping the same lowercase file name. Use the copy without the phone number.

## Testing like GitHub Pages

`Yash Website/tools/gh-pages-server.mjs` serves `dist/` the way GitHub Pages does (case-sensitive,
`/x` from `x.html`, `404.html` for missing pages), and `Yash Website/tools/crawl.mjs` opens every
page and requests every link and file on it:

```bash
node "Yash Website/tools/gh-pages-server.mjs" "Yash Website/new-site/yashshah.co.in/dist" 4600
node "Yash Website/tools/crawl.mjs" http://localhost:4600
```

## Run it on your computer

Needs Node.js 22.12 or newer.

```bash
npm ci
npm run dev      # live preview at http://localhost:4321
npm run build    # builds the site into dist/
npm run check    # checks the words, links, files and images in dist/
```

## House rules for the words

Simple first-person English. No em dashes, en dashes or semicolons. No phone number, home address or date of birth. No teammate names (the team size is fine). Say "design patents filed with the Indian Patent Office, under examination". Never say "design application", and never say or suggest that a patent has been granted. Never show application numbers. Recommendation letters never go on the site. Prefer a weaker true statement over a stronger one that can be attacked.
