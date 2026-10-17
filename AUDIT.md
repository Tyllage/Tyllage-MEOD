# Project Audit

Audit of the repository against the [Product Specification](docs/PRODUCT_SPECIFICATION.md) and the [Deployment Plan](docs/DEPLOYMENT_PLAN.md).

**Last updated:** 17 October 2026 · **Branch audited:** `main` at `0af8915` (Foundation of MEOD website)

## 1. Summary

| Area | Status |
| --- | --- |
| Public website (`client/`) | 🟢 Built: 9 routes, React 19 + Vite 8, lint passes, production build passes |
| Railway deployment | 🟡 Fixed in config. The first build failed (no `package.json` at repo root). Now builds from the `Dockerfile` |
| CI / repo hygiene | 🟡 Added: GitHub Actions CI, Dependabot, issue and PR templates |
| Backend API (Node/Express) | 🔴 Not started |
| PostgreSQL schema | 🔴 Not started. The Railway Postgres service is provisioned but unused |
| Shopify / WhatsApp / OpenAI integrations | 🔴 Not started, waiting on MEOD discovery and access |
| Privacy & consent controls | 🔴 Not started, waiting on a MEOD data-handling agreement |

## 2. Build and deployment findings

| # | Finding | Severity | Resolution |
| --- | --- | --- | --- |
| D-1 | Railway build failed because the app lives in `client/` and the repo root has nothing for Railpack to detect | High | Root `Dockerfile` + `railway.json` (`builder: DOCKERFILE`) |
| D-2 | No SPA fallback, so a deep link like `/about` would 404 on refresh with a plain static server | Medium | `serve -s` (single-page mode) in the Dockerfile |
| D-3 | Any commit (including docs) would trigger a redeploy | Low | `watchPatterns` in `railway.json` |
| D-4 | `client/README.md` is still the Vite template | Low | Open. Replace when client changes are allowed |
| D-5 | Node version not pinned (Vite 8 needs `^20.19 \|\| >=22.12`) | Low | CI and the Dockerfile use Node 22. Consider adding `engines` to `client/package.json` |

## 3. Release-gate readiness

Gates from [Deployment Plan §8](docs/DEPLOYMENT_PLAN.md#8-testing-and-release-gates).

| Gate | Ready? | Notes |
| --- | --- | --- |
| Stock sync | ❌ | Needs Tyllage Sync + Shopify staging store |
| Privacy | ❌ | Needs RBAC, pseudonymisation and an approved data scope |
| Human handover | ❌ | Needs agent inbox and ticketing |
| Commission | ❌ | Needs MEOD-approved commission rules |
| Messaging | ❌ | Needs Meta WABA onboarding and approved templates |
| Safety | 🟡 | `.env*` git-ignored. Secrets policy in [SECURITY.md](SECURITY.md). No server yet |
| Resilience | 🟡 | Railway health check and restart policy configured for the web service |

## 4. Open questions blocking development

See [Industry Research §9](docs/INDUSTRY_RESEARCH.md#9-unknowns-requiring-primary-meod-discovery) and [Proposal §9](docs/PROJECT_PROPOSAL.md#9-risks-and-key-questions). The most important:

1. Shopify store ownership and API scopes.
2. What "Microsoft Narvation" refers to.
3. Commission basis and refund rules.
4. The lawful basis and consent for personalised marketing.

## 5. Audit checklist (repeat before each pilot stage)

- [ ] `npm run lint` and `npm run build` pass in CI
- [ ] No secrets, tokens or real customer data committed (`git log -p | grep -i -E "key|token|secret"`)
- [ ] Dependabot alerts reviewed
- [ ] Only synthetic fixtures. No real phone numbers in screenshots or demo data
- [ ] Railway variables separated per environment (staging / production)
- [ ] Backup restore rehearsed (once the database is in use)
- [ ] MEOD written approval recorded for any live messaging or data access
