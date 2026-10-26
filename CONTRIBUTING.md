# Contributing to Tyllage — MEOD Farm

> **Tyllage does not accept outside contributions.**
> This repository is proprietary and is maintained only by the Tyllage team. Pull requests, patches and feature work from anyone outside the team will be closed without review. Forking or copying this repository does not give you any right to use, run, modify or redistribute the code. See [LICENSE](LICENSE).

If you are not a member of the Tyllage team:

- **Found a security problem?** Report it privately as described in [SECURITY.md](SECURITY.md). Do not open a public issue.
- **Interested in licensing, a pilot or a partnership?** Contact the team through the [Tyllage GitHub organisation](https://github.com/Tyllage).

The rest of this guide is for **Tyllage team members** only. This is a pilot project for a real business, so please read this and the [Code of Conduct](CODE_OF_CONDUCT.md) before you start.

## Ground rules

- **Ownership.** All work you do on this repository belongs to Tyllage LLP and is covered by the [Tyllage Proprietary License](LICENSE). You also agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).
- **No copying out.** Do not copy Tyllage code into personal projects, other repositories or public places (gists, forums, AI chat tools that keep your data) without approval.
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
