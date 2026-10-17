# Deployment & Pilot Rollout Plan — Tyllage × MEOD Farm

**Shopify Integration • 24/7 WhatsApp • Human Handover**
*Draft for MEOD discovery and approval. No live customer data is assumed.*

## 1. Deployment goal

Host a reliable Node.js backend, a PostgreSQL database and a staff frontend for a controlled, MEOD-first pilot.

- The public Shopify site stays online and is **not** replaced.
- WhatsApp receives business enquiries through the Meta-hosted Cloud API and an HTTPS webhook endpoint that is always available.

## 2. Architecture and trust boundaries

```
MEOD Fresh / Shopify ⇄ Sync Adapter ⇄ Node/Express rules API ⇄ PostgreSQL ⇄ React Admin Dashboard

WhatsApp Cloud API → verified webhook → intent handler → authorised DB/Shopify adapter
                   → OpenAI (limited natural language only) → server-validated reply / human support
```

OneMap is an optional delivery integration after the MVP.

## 3. Infrastructure roles

| Service | Role | Control |
| --- | --- | --- |
| Railway (or equivalent) | Always-on API, React app and DB hosting | Health monitoring and usage alarms |
| PostgreSQL | Customer refs, campaign events, group commission and sync state | Restricted network access and backups |
| Shopify API | Master for the current catalogue and orders | Least-privilege scopes, webhooks and periodic reconciliation |
| WhatsApp Cloud API | Inbound and outbound business messaging | Meta WABA onboarding, consent, templates and policy checks |
| OpenAI API | Multilingual descriptions, classification, recommendations | Project-scoped key, spend control and redaction |
| ngrok | Temporary webhook address for local development only | Never used as 24/7 production hosting |
| OneMap | Optional geocoding and route checks | Auth token, quotas, and no unnecessary keeping of customer addresses |

### Current Railway project (`Tyllage` → `production`)

| Service | Source | Notes |
| --- | --- | --- |
| **Tyllage - MEOD** | `Tyllage/Tyllage-MEOD` (this repo) | Builds from the root `Dockerfile` via `railway.json`, then `serve` hosts `client/dist` on `$PORT` (temporary until `server/` exists) |
| **Postgres** (+ `postgres-volume`) | Railway template | Reserved for the future API. Reference it as `${{Postgres.DATABASE_URL}}` |
| **Tyllage - Comcrop** | Separate repo | Not managed here |

## 4. Setup steps

1. Agree data owners, legitimate processing purposes and privacy requirements with MEOD.
2. Create MEOD-controlled accounts: a Meta Business portfolio, a WhatsApp Business Account, a phone number and a Meta developer app. Confirm any constraints on migrating or sharing the existing number.
3. Create a MEOD-controlled OpenAI API project, service account, API key and budgets. **Never share keys over chat or hard-code them in the repository.**
4. Provision staging and production Node and PostgreSQL, each with its own secrets, plus HTTPS, an uptime monitor and protected backups.
5. Integrate Shopify in staging: scoped token, signed webhooks, mapping and backfill. Test missing and duplicate events.
6. Build the bot-to-human status, agent inbox, response-time expectations, consent checks and customer identity verification.
7. Only then turn on controlled live messaging and promotions, with MEOD's written approval.

## 5. WhatsApp workflow and 24/7 handover

Incoming WhatsApp events are verified, de-duplicated and stored.

For each message, the bot checks that the intent is supported and looks up authoritative stock. It then answers routine questions or asks for any essential missing details.

For complaints, refunds, stock disputes, food safety, payment or unclear conversations, the bot **opens a support ticket and stops claiming it can resolve the issue**. A staff member replies when available. After hours, the bot tells the customer where they are in the queue, without promising 24/7 human service.

## 6. Commercial rules

All price totals, discount eligibility, commissions, refund adjustments and order updates happen in the deterministic backend and the authorised Shopify checkout. **The AI assistant cannot edit those figures.** If stock data is stale, the assistant must say it cannot confirm availability and offer human help.

## 7. Production variables

Names are illustrative. Set them only in Railway → Service → **Variables**. Never commit them.

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Server-only database URL |
| `SHOPIFY_SHOP_DOMAIN` / `SHOPIFY_ACCESS_TOKEN` | Admin API connection |
| `META_WABA_ID` / `WHATSAPP_PHONE_NUMBER_ID` | WhatsApp account identifiers |
| `WHATSAPP_ACCESS_TOKEN` / `WHATSAPP_VERIFY_TOKEN` | Messaging and webhook verification |
| `OPENAI_API_KEY` / `OPENAI_MODEL` | AI inference under the MEOD project |
| `JWT_SECRET` / `SESSION_SECRET` | Session security |
| `PUBLIC_SITE_URL` / `CORS_ORIGIN` | Approved origins |
| `AI_MOCK_MODE` / `WHATSAPP_MOCK_MODE` | Staging and test flags, if implemented |
| `PORT` | Injected by Railway. The web container listens on it |

## 8. Testing and release gates

| Check | Must pass |
| --- | --- |
| Stock sync | Correct SKU/variant, stale status shown, webhooks idempotent |
| Privacy | No unrelated buyer PII visible in group-leader or marketing views |
| Human handover | A complaint creates a ticket in the correct queue, and the after-hours message is accurate |
| Commission | Price, discount, eligible base and refund adjustments reconcile |
| Messaging | Consent, template and window checks, rate limit and opt-out all work |
| Safety | Secrets isolated, no direct AI database writes, approvals logged, rollback possible |
| Resilience | Webhook retry, health endpoint, and a rehearsed backup restore |

These gates are signed off by hand before each pilot stage. [CI](../.github/workflows/ci.yml) only covers the automated baseline: lint, client build and Docker image build on every PR.

## 9. Rollout schedule (planning assumption)

| Period | Gate |
| --- | --- |
| Weeks 1–2 | Process discovery, permissions and mock prototype |
| Weeks 3–4 | Staging Shopify integration, inventory and orders, and RBAC |
| Weeks 5–6 | WhatsApp-assisted customer service and human ticketing |
| Weeks 7–8 | Group-buy settlement and segmented outreach in staging |
| Weeks 9–12 | Small pilot, acceptance evidence, then refine or stop |

## 10. Ownership and incident response

**MEOD approves:**

- marketing consent notices,
- the scope of customer data,
- pricing and commission rules,
- the sending phone number,
- human service hours,
- access to the store integration.

**The Tyllage technical team owns** controlled development, testing, rollout and the documented incident process.

If customer data is suspected to have leaked:

1. Disable the affected integration.
2. Rotate secrets.
3. Follow MEOD's response procedures (see [SECURITY.md](../SECURITY.md)).
