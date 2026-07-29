# Adeera marketing site — real-product content plan

Branch: `feat/real-product-showcase` (based on `main`)

## 0. Security — do this first, separately from everything below

`backend/server.js` has a **live Gmail address and app-password hardcoded**
and committed to `main` (pushed to `github.com/Mikee100/adeera`):

```js
auth: {
  user: 'mikekariuki10028@gmail.com',
  pass: 'qvfk dcie sjop hcxb',
},
```

**Revoke that app password in Google Account → Security today**, issue a new
one, and load it from an environment variable. This branch will change the
code to read `process.env.CONTACT_EMAIL_USER` / `CONTACT_EMAIL_PASS` (see
§5), but the *old* password stays valid — and stays in git history — until
you rotate it yourself.

## 1. What's actually going on here (read this before anything else)

I went in expecting "pure placeholders," per the original ask. What's
actually true is more specific, and changes the plan:

- **`main` is not what's checked out by default.** The repo's `HEAD` was
  detached on a stray, unmerged commit (`0122169`, message "Implement
  feature X…") that **deleted** nine real pages (`Pos.tsx`, `Inventory.tsx`,
  `Features.tsx`, `Pricing.tsx`, `Platform.tsx`, `Analytics.tsx`,
  `Integrations.tsx`, `Payments.tsx`, four `services/*` subpages) and **19
  real product screenshots**, replacing them with generic SaaS-template copy
  (fake CRM/cybersecurity/cloud consulting services, healthcare/education
  demo use-cases, Unsplash stock photos). I saved that commit as
  `preserve/feature-x-home-rewrite` so nothing is lost, and branched this
  work off the real `main` instead.
- **`main` already has real product screenshots** — just disorganized. A
  folder at `images/*.png` (repo root, sibling of `src/`) holds 19
  timestamped screenshots (`Screenshot 2026-03-11 195212.png` etc.) that are
  **genuine captures of the live Adeera Business OS**: today's revenue,
  sales targets, branch comparison charts, products & inventory, variations
  table, transaction history with real M-Pesa transaction IDs. `Pos.tsx`
  separately imports 5 real POS screenshots (browse products, checkout,
  receipt, sale completed, settings).
- **But they're wired in wrong.** The same dashboard screenshot
  (`195212.png`) is imported as both `HeroDashboard` in `Home.tsx` *and*
  `TeamWorkspace` in `About.tsx`. `Services.tsx` uses those same Business-OS
  screenshots to illustrate "CRM Integration," "Cybersecurity," and "Cloud
  Consulting" — services Adeera doesn't offer. Nothing in `images/` has a
  name that says what it shows.
- **The 6 files in `/public` (`hero-adeera.png`, `hero-dashboard.png`,
  `inventory-feature.png`, `pos-feature.png`, `services-pos.png`,
  `about-vision.png`) are all fake** — AI-generated renders or unrelated
  stock photos. `pos-feature.png` is literally a stock photo of a **Square**
  card reader in a boutique called "Mazingira Collective," with "Adeera"
  Photoshopped onto a tablet screen showing UI that doesn't exist in the
  product.
- **Testimonials are fabricated** in `Home.tsx` (Sarah Mwangi / David Ouma /
  Grace Akinyi, invented quotes) and **`About.tsx` ships a fake
  `aggregateRating` of 4.9★ / 100+ reviews in JSON-LD schema** — that's not
  just misleading copy, it's structured data Google can penalize as review
  spam if it's ever checked against reality.
- **We separately have a much better real-asset library already captured**,
  for the Kesho Labs case-study site, covering the same product: 10 Business
  OS screenshots + 3 narrated video tours, and — as of this week — full
  screenshot + video coverage of **both POS variants** (general retail till
  and the restaurant/table-service till), properly labeled and compressed.
  See §3.

Net effect: this isn't a "fill in placeholders" job so much as **"stop
pretending to be a generic SaaS consultancy and become a site about the
actual product," with a real asset library largely sitting in a sibling
project already.**

## 2. What Adeera actually is (per the real code, not the marketing copy)

- **Adeera Business OS** — a web dashboard: revenue/sales analytics, product
  & inventory management with variations, sales targets, branch comparison,
  transaction history, M-Pesa reconciliation. Live at `adeera.vercel.app`.
- **Adeera POS — Retail till** — an Electron desktop app for shop counters:
  barcode/variation checkout, cash/M-Pesa/credit/split payments, thermal
  receipt printing, offline queue with stock-drift reconciliation,
  multi-branch switching.
- **Adeera POS — Restaurant till** — a *different* mode of the same
  Electron app for table service: waiter check-in, table floor plan with
  seat maps, kitchen display board (Open → Sent to Kitchen → Served →
  Closed), reservations, BOM recipe costing.

None of "CRM integration (Salesforce/HubSpot/Zoho)," "cybersecurity
consulting," "cloud migration consulting," or "SaaS marketplace" — the
current `/services` page — describe this product at all. That page pitches
Adeera as an IT consultancy reselling other companies' software, which is a
different business than the one the code implements.

## 3. Real assets available right now

### Already captured, well-labeled, ready to copy in (from the Kesho Labs repo)

`C:\Users\mikek\Desktop\kesho-labs\public\{screenshots,videos}\adeera\` —
Business OS:
`dashboard.png, dashboard-trends.png, analytics.png, inventory.png,
sales-history.png, sales-targets.png, profit-insights.png, credit.png,
reports.png, settings.png` + 3 narrated videos (`setup-tour`,
`architecture-tour`, `extended-tour`, each with a poster frame).

`C:\Users\mikek\Desktop\kesho-labs\public\{screenshots,videos}\adeera-pos-general\` —
Retail till: 13 screenshots (`checkout-catalog`, `variation-picker`,
`cart-built`, `checkout-payment`, `split-payment`, `cash-change`, `receipt`,
`print-preview`, `branch-switcher`, `shift-menu`, `printer-settings`,
`catalog-sync`, `app-updates`) + `making-a-sale.mp4` (~3.4MB, H.264, with
poster).

`C:\Users\mikek\Desktop\kesho-labs\public\{screenshots,videos}\adeera-pos-restaurant\` —
Restaurant till: 13 screenshots (`menu-ordering`, `waiter-checkin`,
`table-floor-plan`, `kitchen-display`, `orders-board`, `meals-menu`,
`bar-menu`, `payment`, `reservations`, `bom-recipes`, `activity-log`,
`staff-accounts`, `terminal-enrollment`) + `table-service-flow.mp4` (~3.8MB,
with poster).

That's 36 screenshots and 4 videos covering the whole product, already shot,
compressed, and named for what they show. Copying these into this repo's
`public/` is most of the visual-content problem solved in one move.

### Salvageable but needs relabeling

The 19 files in `images/*.png` at the repo root — genuine Business OS
captures, but unlabeled and reused incorrectly. Recommend **replacing them
with the Kesho Labs set above** (better composition, consistent sizing,
already has posters) rather than relabeling the old ones. Delete `images/`
once the swap is done.

### Must be deleted, no exceptions

`public/hero-adeera.png`, `hero-dashboard.png`, `inventory-feature.png`,
`pos-feature.png`, `services-pos.png`, `about-vision.png` — all fake, and
`pos-feature.png` in particular is a competitor's product wearing an Adeera
logo, which is a real problem if a visitor ever recognizes the Square
reader.

### Still needed (can't be assembled from what exists)

- A real team photo or founder photo (currently a stock Unsplash headshot
  with a "CEO & Founder" title and no name).
- Real customer testimonials with permission to publish (or drop
  testimonials entirely until they exist — fabricated quotes are worse than
  none).
- Real numbers for stats sections — active businesses, KES processed,
  uptime. If these aren't measured/tracked, don't invent replacements;
  either omit the stats band or replace it with qualitative claims that are
  true today ("Built for African retail," "Works offline," etc.).
- Real pricing, if you want the `/pricing` page to survive — the current
  tiers (Basic/Pro/Enterprise) are structurally reasonable but need real
  KES numbers or an explicit "contact for pricing" stance.

## 4. Page-by-page plan

| Page | Verdict | Why |
|---|---|---|
| `/` Home | **Rewrite** | Keep structure (hero, product grid, features, CTA), replace all imagery with real screenshots/video, delete testimonials until real ones exist, delete/replace fabricated stats band |
| `/about` | **Rewrite** | Real founder info or remove the team section outright; drop fake `aggregateRating` JSON-LD; keep company story if accurate |
| `/services` | **Remove or fully repurpose** | Currently pitches CRM/cybersecurity/cloud consulting Adeera doesn't do. Repurpose the route as a **Products** overview (Business OS / Retail POS / Restaurant POS) or delete and fold that content into Home + dedicated product pages |
| `/services/crm`, `/services/cloud`, `/services/security` | **Remove** | Not real Adeera offerings; keeping them is actively misleading about what the company sells |
| `/pos` (exists on `main`, not in nav) | **Promote & rewrite** | This should be a primary nav item — the retail POS deep-dive, with the real screenshots + `making-a-sale.mp4` |
| New: `/pos/restaurant` or extend `/pos` with tabs | **Add** | Nothing currently represents the restaurant till at all; it's a distinct, demo-able product surface |
| `/platform`, `/features`, `/integrations`, `/analytics`, `/inventory`, `/payments` (exist on `main`, orphaned from nav) | **Consolidate** | Six overlapping pages describing facets of one dashboard is more fragmentation than a small product needs. Recommend merging into one `/platform` (or `/dashboard`) page with sections, using the real Business OS screenshots, and removing the rest as standalone routes |
| `services/AiAssistant.tsx`, `services/Inventory.tsx`, `services/Payments.tsx`, `services/Pos.tsx` | **Audit, likely merge into product pages** | Check for real content vs. more generic filler; fold anything real into `/pos` and `/platform` rather than keeping a parallel `/services/*` tree |
| `/demo` | **Rewrite** | Current copy is generic-SaaS (healthcare/education/finance use cases, fake ROI testimonials). Replace with: an embedded product tour using the real videos, a real "try the live POS" link, and a genuine lead-capture form (the backend already POSTs to a real contact endpoint — reuse that pattern) |
| `/pricing` | **Keep structure, need real numbers** | Tiers are reasonable; needs actual KES pricing or "contact for pricing" instead of implying self-serve trial that may not exist |
| `/partnerships` | **Keep, trim claims** | "1.3 billion potential customers," generic partner-tier copy — fine as aspirational framing, but should not imply an existing partner program if one doesn't exist yet |
| `/contact` | **Keep** | Real backend integration; only needs the credential fix in §0 |
| `/privacy`, `/terms` | **Keep, review for accuracy** | Standard legal pages; verify they match actual data practices (data residency, what's collected) |
| `/404` | **Keep** | Fine as-is |

## 5. Navigation restructure

Current header nav (`Header.tsx`): Home / About / **Services ▾ (CRM, Cloud,
Security)** / Partnerships / Contact — built for an IT consultancy, not a
POS company.

Proposed: **Home / Platform / POS ▾ (Retail, Restaurant) / Pricing / About /
Contact**. This surfaces the actual product instead of burying it, and
drops the dropdown that currently sends visitors to fictional services.

## 6. Suggested order of work

1. **Security fix** (§0) — rotate the credential, move to env vars. Blocking, do it independent of everything else.
2. **Asset swap** — copy the Kesho Labs `adeera`, `adeera-pos-general`, `adeera-pos-restaurant` folders into this repo's `public/`; delete the 6 fake `/public` images and the 19 unlabeled `images/*.png`.
3. **Delete the fictional services tree** — `/services/crm`, `/services/cloud`, `/services/security`, and the CRM/Cloud/Security cards on `/services`.
4. **Rewrite Home** with real screenshots/video, honest stats (or none), no fake testimonials.
5. **Build out `/pos`** (retail) and add a restaurant POS section/page, using the real captures.
6. **Consolidate the orphaned dashboard pages** (`Platform`, `Features`, `Integrations`, `Analytics`, `Inventory`, `Payments`) into one coherent Business OS page.
7. **Rewrite `/about`** — real founder info or trim the team section; remove fake review schema.
8. **Rewrite `/demo`** to route to the real product + real video tours.
9. **Update nav** per §5.
10. **Sweep `src/config/seo.ts`** for OG image references (`cloud-og.jpg`, `crm-og.jpg`, `security-og.jpg` etc.) pointing at pages being deleted.

## 7. Open questions — need your input, can't be assembled from code

- Do you have a real founder/team photo and name to use on `/about`, or should the team section be dropped for now?
- Any real customer willing to give a quote/testimonial? If not, the stats/testimonials sections come out entirely rather than staying fabricated.
- Real pricing numbers, or should `/pricing` say "contact for a quote"?
- Keep `/partnerships` as an aspirational page, or drop it until there's an actual partner program?
- Should `/services/*` become `/products/*` (Business OS, Retail POS, Restaurant POS), or should Home + `/pos` + `/platform` be the whole site with no separate services section?
