# Carolina Decor & More website

Plain static website (HTML, CSS, a little JavaScript) for Carolina Decor & More, 14130 NC Highway 50, Surf City, NC 28445.

**Status: draft, pending owner review.** Unconfirmed details are highlighted in yellow on the site (`.tbd` and `.tbd-note`), and a draft banner runs across the top of every page.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: hero, hours, categories, featured finds, monthly market, consign and booth calls to action, map |
| `consign.html` | Consign With Us: steps, terms, inquiry form |
| `rent-a-booth.html` | Rent a Booth: benefits, pricing table, application form |
| `events.html` | Monthly Market: details, dates, vendor signup |
| `artists.html` | Meet Our Artists |
| `visit.html` | Visit & Contact: story, hours, map, FAQ, contact form |

Shared styles live in `assets/css/styles.css` and scripts in `assets/js/main.js`. The header and footer are repeated in each page, so a change there needs to be made in all six files.

## Brand

- Teal `#0197B2` from the logo (accessible darker teal `#01758A` for buttons and links)
- Aqua `#BFE3E8` and ink gray `#3D4346` from the store hours flyer
- Fonts (Google Fonts): Bodoni Moda (headings), Montserrat (body and spaced capitals), Allura (script accents)
- Logo files: `logo-teal.png` and `logo-white.png` are transparent versions made from the original `logo.webp`. A vector original from the designer would be sharper.

## Open items for the owner

Confirmed from the store's hours flyer: Tuesday to Saturday, 10 AM to 5 PM, closed Sunday and Monday. Address matches.

Still needed:

- [ ] Confirm phone number 910-803-0473 (one tourism listing shows 910-508-6599)
- [ ] Confirm the domain carolinadecorandmore.com (seen on the yard sign) is owned and where it's registered
- [ ] Higher resolution header photo (current file is 640 × 427 and looks soft on large screens)
- [ ] Consignment split, period, payout schedule, unsold item policy, accepted categories, drop-off process
- [ ] Booth types, sizes, monthly rent, commission, vendor work-day rules, whether staff ring up vendor sales
- [ ] Monthly market dates, hours, vendor fee, rain policy
- [ ] Owner story for the Visit page
- [ ] Hold and delivery policies (FAQ)
- [ ] Artist profiles: written okay, bio, photo and links from each artist (starting with Zeke, whose signature is on the surfboards)
- [ ] Facebook and Instagram links (footer icons currently point to `#`)
- [ ] More photos: interior, furniture, jewelry, market days

## Before launch

- [ ] Connect forms to a form service (Formspree, Netlify Forms or similar). Forms currently show a "not sent yet" message and send nothing. File upload on the consign form needs a service that supports attachments.
- [ ] Remove the draft banner and all `.tbd` placeholders
- [ ] Update `SITE` URLs in canonical tags, Open Graph tags, schema markup, `sitemap.xml` and `robots.txt` if the domain differs
- [ ] Claim and sync the Google Business Profile with the same name, address, phone and hours
- [ ] Choose hosting (Netlify, Cloudflare Pages or GitHub Pages all work for a static site)
