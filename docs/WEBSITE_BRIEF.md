# Website Brief — MEOD Farm Redesign

*All future work on this site (meod.com.sg redesign) follows this brief.*

## 1. Why we're redesigning

The current meod.com.sg mixes too many fonts, has misaligned layouts (e.g. the Farm & More page), leaves too much empty space, and doesn't look appealing or trustworthy enough to support sales.

## 2. Goals

- Help MEOD increase sales (not just inform visitors).
- Address the problems in Problem Statement 6B and the [Project Proposal](PROJECT_PROPOSAL.md): manual stock/order enquiries, ad hoc promotions, limited marketing manpower, group-buy settlement friction.
- Surface our proposed Tyllage features (see [Product Specification](PRODUCT_SPECIFICATION.md)) directly on the site so they're tangible, not abstract.
- Audience for this site/pitch: MEOD's sales team and our teachers — it must read as credible and sellable, not just a demo.

## 3. Design rules

- **Fonts:** exactly two — `--font-heading` (section titles only) and `--font-body` (everything else). No other fonts anywhere.
- **Layout:** one max content width and one spacing scale, used on every page. Spacing variables need to be added to `theme.css` (not yet present — currently only colour and font variables exist there) before any page work starts.
- **Cards:** one card style, reused across pages — no per-page variants.
- **Purposeful sections:** every section has a clear purpose and a call to action, ideally leading to a sale (buy, join WhatsApp, join a group buy, visit).
- **Brand:** name stays "MEOD Farm". Colours only from `theme.css` — no ad hoc hex values.
- **Responsive:** must work at 390px phone width with no horizontal scrolling.

## 4. Brand palette (from `theme.css`)

| Token | Hex |
| --- | --- |
| forest | `#054F12` |
| dandelion | `#E6B964` |
| dandelion-dark | `#C99A3D` |
| sky | `#326383` |
| sand | `#E2DBD3` |

*(Note: `sky` and `sand` aren't yet defined in `theme.css` — add them alongside the spacing scale.)*

## 5. Proposal features → website

| Proposal feature | Website element |
| --- | --- |
| Tyllage Assist | Floating "Chat with us on WhatsApp" button (site-wide) |
| Campaign Studio | "Join our WhatsApp community" section with a clear opt-in |
| GroupBuy | "Start a group buy in your neighbourhood" section |
| Recommend | "Popular this week" product strip (static for now, personalised later) |

## 6. Homepage section order

1. Hero
2. What We Do
3. Our Promise
4. Popular this week
5. Get our greens (where to buy)
6. Group buy
7. WhatsApp community
8. Come visit us

## 7. Known gaps vs. current code

- `theme.css` currently defines only `--color-forest`, `--color-dandelion`, `--color-dandelion-dark`, `--color-bg`, `--color-bg-alt`, `--color-text`, `--color-text-muted`, `--color-border`, `--font-heading`, `--font-body`. It has **no spacing scale, no `--color-sky`, no `--color-sand`, no max-content-width variable, and no card style** yet — these are the first things to add before building sections.
- Existing pages (`Navbar`, `Footer`, `Layout`) and nav structure (`client/src/data/site.js`) are the starting point; no homepage sections exist yet.
