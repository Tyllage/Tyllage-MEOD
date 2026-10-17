# Contributing to Tyllage — MEOD Farm

Thanks for helping. This is a pilot project for a real business, so please read this and the [Code of Conduct](CODE_OF_CONDUCT.md) before you start.

## Ground rules

- **No real customer data.** Use synthetic fixtures only. Never commit real names, phone numbers, addresses or order records, including in screenshots.
- **No secrets in git.** API keys and tokens belong in `.env` (git-ignored) locally and in Railway Variables in production. See [SECURITY.md](SECURITY.md).
- **AI never owns money or stock.** Prices, discounts, commissions and stock must come from deterministic server code or Shopify, never from model output. See the [Product Specification](docs/PRODUCT_SPECIFICATION.md).

## Getting set up

```bash
git clone https://github.com/Tyllage/Tyllage-MEOD.git
cd Tyllage-MEOD/client
npm install
npm run dev
```

You need Node.js `^20.19` or `>=22.12`.

## Workflow

1. Create a branch from `main`:
   - `feat/<short-name>` for features
   - `fix/<short-name>` for bug fixes
   - `docs/<short-name>` for documentation
   - `chore/<short-name>` for tooling
2. Keep commits small and use [Conventional Commits](https://www.conventionalcommits.org/), e.g. `feat(produce): add seasonal filter` or `docs: update deployment plan`.
3. Run checks before pushing:
   ```bash
   cd client
   npm run lint
   npm run build
   ```
4. Open a pull request into `main` using the PR template. CI (lint, build, Docker image) must pass, and at least one teammate must review.
5. Squash-merge once approved. Merging to `main` deploys to Railway automatically.

## Code style

- React function components and hooks, plus plain CSS files next to the components.
- Site-wide content such as contact details and links lives in `client/src/data/site.js`. Change it there rather than hard-coding.
- Fix all Oxlint errors. Explain any warnings you leave in place in the PR.

## Issues

Use the **Bug report** or **Feature request** templates. Report security problems privately, as described in [SECURITY.md](SECURITY.md), not as public issues.
