# Certificates, letters, press and photos

Every document on the site comes from **one list**: `src/data/documents.js`.
The home page certificates section, the wins and their detail panels, the experience cards,
the project pages and every document page all read from that list, so they always agree.

## Where the files are

| What | Where | Example |
| --- | --- | --- |
| The document (PDF, or JPG for photos) | `public/certificates/files/` | `files/sih-2025-winner.pdf` |
| The large picture shown on the page (WebP, about 1600 px, under 300 KB) | `public/certificates/images/` | `images/sih-2025-winner.webp` |
| The small thumbnail for cards | `public/certificates/images/` | `images/sih-2025-winner-thumb.webp` |
| The link preview for WhatsApp and LinkedIn (1200 x 630 JPG) | `public/certificates/images/` | `images/sih-2025-winner-share.jpg` |

Every document has its own page at `/certificates/<slug>`, for example
https://www.yashshah.co.in/certificates/sih-2025-winner, and the index of all of them is at
https://www.yashshah.co.in/certificates.

## Slugs are permanent

The slug is the last part of the address, and it goes into the resume.
**Never rename a slug once the site is published.** Slugs use only lowercase letters, digits and
hyphens. No file or folder under `public/` may contain a space or a capital letter, because
GitHub Pages is case-sensitive even though Windows is not. `npm run check` fails if one does.

## Privacy

The repository is public, and git keeps every file forever. So:

- Only redacted copies ever go into `public/certificates/`. The originals stay in `DOC`, outside the site.
- A redacted file is **flattened**: the page is turned into a picture, the private details are covered
  with solid black boxes, and a new PDF is made from that picture. No hidden text survives underneath.
- Every PDF loses its metadata, and every photo loses its EXIF data, including GPS location.
- Recommendation letters never go on the site. Neither does the IEEE membership card (it shows the
  member number). The IEEE membership certificate is used instead.

Currently redacted:

| Slug | What is covered |
| --- | --- |
| `hindustan-platinum-internship-2024` | The supervisor's direct email and phone number |
| `lalit-rakesh-appreciation-2024` | The partner's CA membership number, two mobile numbers and personal email |
| `cybershadez-2026-appreciation` | The student enrolment number |

## How to add a new document

1. Put the original in `DOC` as usual.
2. Add one line for it to the `DOCS` list in `Yash Website/tools/prepare-documents.py`, with its new slug.
   If something must be covered, add the boxes under `redact` (the comparison picture in
   `reports/redactions` shows whether they are in the right place).
3. Run `python -I "Yash Website/tools/prepare-documents.py" <slug>`. It writes the PDF, the picture,
   the thumbnail and the share picture into `public/certificates/`.
4. Add an entry to `src/data/documents.js` with the title and dates exactly as printed, the issuer,
   a 2 or 3 sentence description in first person (only facts from the document or already on the
   site), the verify link if the issuer has one, and the related project or win.
5. Run `npm run build` and `npm run check`. The check fails if the page, picture, thumbnail,
   share picture or PDF is missing.

## Where each kind of document appears

| Field in documents.js | What it does |
| --- | --- |
| `type` | Internship, hackathon, course, appreciation, membership, research, press or photo. Sets the filter and the group. |
| `win: "<id>"` | Shows the certificate or photo in that win's detail panel (ids are in `wins` in `site.js`). |
| `experience: "<id>"` | Gives that internship card its "View certificate" button. |
| `related: { project: "<slug>" }` | Lists it on that project page, and links back from the document page. |
| `photo: true` | Treats it as a photo: it can appear in project galleries and win panels. |
| `pin: true` | Puts it first in its group. |
| `verify` | Adds the "Verify on the issuer's site" button. |
