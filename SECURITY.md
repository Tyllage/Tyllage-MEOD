# Security Policy

Tyllage will handle MEOD Farm business data and, once the pilot goes live, customer data covered by Singapore's [Personal Data Protection Act (PDPA)](https://www.pdpc.gov.sg/). Treat security and privacy issues as high priority.

## Supported versions

| Version | Supported |
| --- | --- |
| `main` (deployed to Railway) | ✅ |
| Other branches | ❌ |

## Reporting a vulnerability

**Do not open a public GitHub issue** for vulnerabilities, leaked secrets or exposed personal data.

- Use GitHub's [private vulnerability reporting](https://github.com/Tyllage/Tyllage-MEOD/security/advisories/new), or
- contact the Tyllage maintainers directly.

Include what is affected, steps to reproduce and the possible impact. We aim to acknowledge reports within **3 working days**.

## If secrets or customer data are exposed

Follow the incident process in the [Deployment Plan §10](docs/DEPLOYMENT_PLAN.md#10-ownership-and-incident-response):

1. **Disable** the affected integration (Shopify, WhatsApp, OpenAI or database).
2. **Rotate** every affected secret in Railway Variables and at the provider.
3. **Remove** the secret from git history. Deleting it in a later commit is not enough.
4. **Notify** MEOD and follow its data-breach response procedure, including any PDPC notification duties.

## Secret-handling rules

- Never commit `.env` files. Only `.env.example` with placeholder values is allowed.
- Store production secrets only in Railway → Service → **Variables**. Keep staging and production separate.
- Never share keys over chat, and never expose server tokens (Shopify Admin, WhatsApp, OpenAI) to the browser bundle. Anything prefixed `VITE_` is public.
- Use least-privilege scopes and project-scoped API keys with spending limits.

## Data-protection rules

- Use synthetic data only until MEOD gives written approval for live data.
- Pseudonymise customer identity by default. Group leaders see masked member details.
- Send OpenAI only the minimum fields a task needs, never full customer records.
- Never put real phone numbers or customer details in screenshots, demos or test fixtures.
