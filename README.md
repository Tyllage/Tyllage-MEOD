# Tyllage — MEOD Farm

[![CI](https://github.com/Tyllage/Tyllage-MEOD/actions/workflows/ci.yml/badge.svg)](https://github.com/Tyllage/Tyllage-MEOD/actions/workflows/ci.yml)

> **AI-powered sales, customer engagement and group-buy operations for MEOD Farm.**
> Problem Statement 6B: *Improving Sales and Marketing Outreach Through AI* (Agriculture / AgriTech / eCommerce).

Tyllage is a sales and marketing operations layer for [MEOD Farm](https://meod.com.sg/) and its [MEOD Fresh](https://meodfresh.com/) Shopify store. It is meant to sit **alongside** the store, not replace it. The goal is to ease MEOD's marketing manpower bottleneck and lift repeat purchases with:

- live catalogue and stock visibility,
- multilingual WhatsApp customer support with human handover,
- personalised, consent-based outreach,
- transparent group-buy commission settlement.

> **Status:** MEOD-first pilot, in the discovery and prototype stage. No live customer data is used. Everything in this repo is a draft for MEOD's discovery and approval.

---

## Contents

- [What's in this repo](#whats-in-this-repo)
- [Planned modules](#planned-modules)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Deployment (Railway)](#deployment-railway)
- [Project documents](#project-documents)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## What's in this repo

| Path | Description |
| --- | --- |
| `client/` | React 19 + Vite 8 public website for MEOD Farm (Home, About, Produce, Farm & More, Experiences, Careers, Find Us, Privacy) |
| `docs/` | Project documents: proposal, product spec, deployment plan, research, funding |
| `Dockerfile` | Production image: builds `client/` and serves it with `serve` (SPA mode). To be replaced by the Express server later |
| `railway.json` | Railway config-as-code (Dockerfile builder, health check, restart policy) |
| `docker-compose.yml` | Local production-like preview, with optional PostgreSQL |
| `.github/` | CI workflow, Dependabot, issue and PR templates |

## Planned modules

| Module | Purpose |
| --- | --- |
| **Tyllage SalesDesk** | One staff dashboard for inventory, customer orders, campaigns and group-buy settlements |
| **Tyllage Sync** | Syncs Shopify products, stock and orders, with idempotent webhooks and reconciliation |
| **Tyllage Assist** | WhatsApp multilingual FAQ, product finding, cart drafts and human handover |
| **Tyllage Recommend** | Permissioned, purchase-history-based suggestions for in-stock items |
| **Tyllage Campaign Studio** | Consent-aware audience selection and staff-approved message templates |
| **Tyllage GroupBuy** | Leader-specific links and codes, checkout discounts, commission ledger |
| **Growth Insights** | Repeat buyers, conversion, campaign revenue and service workload |

See the [Product Specification](docs/PRODUCT_SPECIFICATION.md) for roles, data objects and acceptance stories.

## Tech stack

**Current:** React 19, React Router 7, Vite 8, Oxlint, `serve` (static hosting), Docker, Railway.

**Planned** (see the [Deployment Plan](docs/DEPLOYMENT_PLAN.md)): Node.js/Express API with JWT/RBAC, PostgreSQL, Shopify Admin API, WhatsApp Cloud API, OpenAI API (limited to language tasks), and optionally OneMap.

```
MEOD Fresh / Shopify ⇄ Sync Adapter ⇄ Node/Express rules API ⇄ PostgreSQL ⇄ React Admin Dashboard
WhatsApp Cloud API → verified webhook → intent handler → authorised DB/Shopify adapter
                   → OpenAI (natural language only) → server-validated reply / human support
```

## Getting started

**Prerequisites:** Node.js `^20.19` or `>=22.12` (Vite 8 needs one of these), and npm.

```bash
cd client
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Production build into `client/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint with Oxlint |

### Production-like preview with Docker

```bash
docker compose up --build              # http://localhost:8080
docker compose --profile db up         # also starts PostgreSQL 16 on :5432
```

## Deployment (Railway)

The site deploys to Railway from `main` using the root `Dockerfile` (set in `railway.json`).

1. In the Railway service (**Tyllage - MEOD**), go to **Settings → Source** and leave **Root Directory** empty (the repo root). The Dockerfile builds `client/` itself.
2. Under **Settings → Config-as-code**, set the path to `/railway.json`. Railway also finds it automatically at the repo root.
3. Railway sets `PORT`, and the container listens on it. The health check hits `/`.
4. Under **Settings → Networking**, generate a domain.

Only changes to `client/**`, `Dockerfile`, `.dockerignore` or `railway.json` start a redeploy (`watchPatterns`). Docs-only commits do not.

> Why the earlier build failed: the repo root has no `package.json` (the app lives in `client/`), so Railway's auto-detection had nothing to build. The Dockerfile now tells it exactly what to build.

Future backend variables (`DATABASE_URL`, `SHOPIFY_*`, `WHATSAPP_*`, `OPENAI_*`, `JWT_SECRET`, and others) are listed in the [Deployment Plan](docs/DEPLOYMENT_PLAN.md#7-production-variables). Set them only in Railway's Variables tab. Never commit them.

## Project documents

| Document | Summary |
| --- | --- |
| [Problem Statement 6B](docs/PROBLEM_STATEMENT.md) | Who, what, barriers and value proposition |
| [Project Proposal](docs/PROJECT_PROPOSAL.md) | Executive summary, solution, privacy, pilot design, roadmap |
| [Product Specification](docs/PRODUCT_SPECIFICATION.md) | Roles, modules, acceptance stories, data model, non-functional requirements |
| [Deployment Plan](docs/DEPLOYMENT_PLAN.md) | Infrastructure, setup steps, release gates, rollout schedule |
| [Industry Research](docs/INDUSTRY_RESEARCH.md) | MEOD sales channels, WhatsApp/OpenAI feasibility, unknowns |
| [Funding Breakdown](docs/FUNDING.md) | S$5,000 six-month pilot envelope |
| [Audit](AUDIT.md) | Current repo status against plan and release gates |

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md) first.

## Security

Do not open public issues for vulnerabilities or data exposure. See [SECURITY.md](SECURITY.md).

## License

Copyright © 2026 Tyllage. All rights reserved. See [LICENSE](LICENSE).
MEOD Farm and MEOD Fresh names, content and branding belong to MEOD.
