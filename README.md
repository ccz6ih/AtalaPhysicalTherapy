# Atala Physical Therapy — atalaphysicaltherapy.com

Next.js rebuild of the WordPress/Elementor site for Atala Physical Therapy (Carlsbad, CA), repositioned for self-pay (cash-based) patients while keeping every existing URL, title, description and piece of page copy so search rankings carry over.

- **Stack:** Next.js 16 (App Router, Turbopack, Cache Components), React 19, TypeScript, Tailwind CSS 4, GSAP (one hero animation), Nodemailer.
- **Hosting:** Vercel. Every page is prerendered static HTML; the only server code is `/api/lead`.
- **No CMS.** Content lives in typed files in `src/content/` — edit, commit, push, Vercel deploys.

## Run it

```bash
npm install
cp .env.example .env.local   # fill in SMTP to test real emails
npm run dev                  # http://localhost:3000
npm run build && npm start   # production check
```

## Where things live

| What | File |
| --- | --- |
| Phone, address, booking/payment links, tracking IDs, nav, **self-pay prices** | `src/content/site.ts` |
| Service pages (6) — all copy from WordPress | `src/content/services.ts` |
| Conditions list | `src/content/conditions.ts` |
| Team bios | `src/content/team.ts` |
| Google reviews, patient letters, "Back at their peak" photos | `src/content/reviews.ts` |
| Blog posts (generated from the WP export) | `src/content/posts.json` |
| Page titles & meta descriptions (from Rank Math) | `src/content/seo.json` |
| Quiz copy | `src/content/quiz.ts` |
| Design tokens (colors, type scale) | `src/app/globals.css` |
| Schema.org JSON-LD | `src/lib/schema.ts` |
| Redirects & headers | `next.config.ts` |

Images stay at their original WordPress paths under `public/wp-content/uploads/…` (resized to ≤2400px and recompressed) so Google Images and any external links keep working. After adding or replacing images, regenerate the size map:

```bash
python3 - <<'PY'
import os,json
from PIL import Image
d={'/'+os.path.relpath(os.path.join(r,f),'public'):list(Image.open(os.path.join(r,f)).size)
   for r,_,fs in os.walk('public') for f in fs if f.lower().endswith(('jpg','jpeg','png','webp'))}
json.dump(d,open('src/content/image-dims.json','w'),indent=0)
PY
```

## Forms & leads

All forms post to `/api/lead/` (contact, appointment request, quiz call-back, self-pay inquiry). Delivery is SMTP (the SiteGround mailbox) and/or a webhook — set the env vars in `.env.example` in Vercel → Project → Settings → Environment Variables. Spam protection: hidden honeypot field, minimum fill time, per-IP rate limit.

- Appointment requests redirect to `/thank-you-for-scheduling-your-appointment/` (same URL as before, so existing Google Ads conversion goals keep firing).
- Every successful form pushes `generate_lead` to the dataLayer; phone, booking, payment and email clicks push `phone_click`, `book_online_click`, `payment_click`, `email_click`.
- In production with no SMTP/webhook configured, the API returns an error telling the visitor to call — leads are never silently dropped.
- **No PHI is collected online.** The old WordPress intake form emailed medical history; that's replaced by the PDF packet + in-clinic intake. If the clinic wants online intake, use the EHR's HIPAA-compliant form (BetterHealthcare) and link it from `/online-patient-form/`.

## Tracking

Carried over from WordPress: GTM `GTM-MJR3WK7S` and `GTM-T6RNMD9F` (Elementor snippets) plus the Site Kit Google tag `GT-5NGCTGN` and Google Ads `AW-11547202367`. Two GTM containers plus a gtag is redundant — once you confirm which container owns GA4/Ads, trim the list with `NEXT_PUBLIC_GTM_IDS` / `NEXT_PUBLIC_GTAG_IDS`.

## SEO carried over / fixed

- Same URLs with trailing slashes; same H1s, titles and meta descriptions (the redundant " - Atala Physical Therapy" suffix is dropped only where the title already names the clinic).
- 301s for WordPress-only URLs: test intake pages, `/privacy-policy-2/`, `/category/*`, `/feed`, Rank Math sitemaps → `/sitemap.xml`, etc.
- `MedicalClinic` schema with correct address (**the WordPress schema had "222 Grey Hawk Ct", locality "California", coordinates in the wrong part of Carlsbad and 7-day 9–5 hours — all fixed**), geo, services, team `Person` nodes, `BlogPosting`, `BreadcrumbList`, Google `Review`s and an FAQ on the self-pay page.
- `robots.txt` blocks Vercel preview deployments automatically.
- New page: `/self-pay-physical-therapy/` (targets "cash-based physical therapy Carlsbad"); new blog index `/resources/`.

## Before launch — confirm with the clinic

1. **Self-pay prices** → `selfPay.visits[].price` in `site.ts` (cards show "Ask for today's rate" until set).
2. **HSA/FSA and superbill** perks → set `confirm: false` in `selfPay.perks` once confirmed (hidden until then).
3. **Office hours** → `site.openingHours` (left empty on purpose; must match the Google Business Profile).
4. **Google review count** → `googleSummary` in `reviews.ts` (Trustindex showed 16).
5. Privacy policy was WordPress boilerplate about comments/logins; replaced with a policy that describes this site. Have the clinic review it.

## Cutover

1. Import the GitHub repo in Vercel (framework auto-detected), add env vars, deploy.
2. Add `atalaphysicaltherapy.com` + `www` in Vercel → Domains, then update DNS (A `76.76.21.21` for apex, CNAME `cname.vercel-dns.com` for www — use the values Vercel shows). **Keep the MX records pointing at SiteGround** so the office mailbox and SMTP keep working.
3. After DNS propagates: submit `https://atalaphysicaltherapy.com/sitemap.xml` in Search Console, spot-check old URLs, test a form.

## Condition guides (traffic pages)

`src/content/guides.ts` holds the in-depth guides served at `/conditions-we-treat/<slug>/` (sciatica, low back pain, herniated disc, neck pain, rotator cuff, frozen shoulder, ACL rehab, knee and hip replacement rehab, runner's knee, plantar fasciitis, tennis elbow). Each has an answer-first summary, symptoms, causes, how PT helps, a phased plan, self-care, red flags, FAQs (FAQPage schema) and published guideline sources.

- **Have a licensed therapist read each guide**, then set `reviewedBy: "Terri Brusseau Kraus, PT, MPT"` on it — the page shows "Clinically reviewed by…" and the schema gets `reviewedBy`. This matters for Google's health-content quality signals.
- To add a guide: copy an object in `guides.ts`, then add a route folder `src/app/conditions-we-treat/<slug>/page.tsx` (copy any existing one). The menu, body map, hub grid and sitemap pick it up automatically.

## Signature interactions

- **Body map** (`BodyMap.tsx`): tap a region to see conditions, guides, a typical plan, who you'll see and a booking CTA. Used on the homepage and `/conditions-we-treat/#body-map`.
- **Altitude rail** (`AltitudeRail.tsx`): the elevation line pinned to the right edge on large screens; waypoints come from `data-stage` attributes on sections (falls back to `h2`s). Small screens get a thin progress bar.
- **Zoom-out menu** (`SiteMenu.tsx`, `Shell.tsx`, `MenuContext.tsx`): the page zooms out to reveal a wayfinding menu ("Where are you starting?"); choosing a link zooms back in, then navigates.
- **Page transitions** (`app/template.tsx` + `globals.css`): React `<ViewTransition>`; the new page rises behind a mountain-ridge edge. All motion is disabled under `prefers-reduced-motion`.

**Body map artwork:** `public/brand/body-map.svg` is Adobe Stock #1516525606 (licensed by The Modern Evolution), recolored to the Atala palette with metadata stripped. Hotspot and glow positions in `BodyMap.tsx` use its 1024×1024 coordinate space — keep them in sync if the artwork is swapped.

## Share images (Open Graph)

Every page has a branded 1200×630 share card: logo, page title and the ridge line on the left, the page's photo on the right.

- Renderer: `src/lib/og.tsx` (fonts in `src/assets/og/`). Images are drawn once at build time and cached; they're served as JPEG to stay under WhatsApp's preview size limit.
- Each route has a small `opengraph-image.tsx` that passes its title, subtitle and photo. `src/app/opengraph-image.tsx` is the fallback for any page without its own.
- **Adding a page or guide:** copy a sibling `opengraph-image.tsx` into the new route folder and change the slug.

## Logo

`public/brand/atala-logo.svg` (dark) and `atala-logo-white.svg` (on dark backgrounds) are vector traces of the original 200px PNG. `atala-logo-800.png` is a high-resolution raster used for the logo in structured data. If the clinic ever finds the designer's original vector file, drop it in at the same paths.

## Activity pages

`/physical-therapy-for-surfers/`, `/physical-therapy-for-golfers/` and `/physical-therapy-for-runners/` come from `src/content/activities.ts` and `src/components/ActivityTemplate.tsx`. They link into the condition guides and appear in the menu ("By sport"), on the Sports Rehabilitation page and in the sitemap. Local places (Tamarack, Aviara, Carlsbad 5000, etc.) are named descriptively; Atala isn't affiliated with them, and the pages say so.

## Condition guides, batch 2

Ankle sprain, Achilles tendinopathy, meniscus tear, carpal tunnel syndrome, spinal stenosis and shoulder impingement live in `src/content/guides-more.ts` and are merged into `guides` automatically (body map, menu, hub and sitemap pick them up). As with batch 1, set `reviewedBy` once Terri has read them.

## Lead storage and the leads page

Every form submission is saved to Postgres (in addition to the email), and the clinic can work the list at **/leads/** (password protected, hidden from search engines).

Setup in Vercel:
1. **Storage → Create Database → Neon (Postgres)**, connect it to this project. That adds `DATABASE_URL` automatically.
2. **Settings → Environment Variables:** add `LEADS_PASSWORD` (a long password the clinic will use).
3. Redeploy. The `leads` table is created automatically on the first submission.

On /leads/: filter by status (new, contacted, booked, not a fit), change status and add notes inline, see monthly totals, and download everything as CSV. If the database is down, the email still goes out; if email fails, the lead is still saved.
