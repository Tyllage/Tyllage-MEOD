# Exclusive Industry Research — MEOD Farm

**MEOD Sales Channels • AI Outreach • Operational Constraints**
*Draft for MEOD discovery and approval. No live customer data is assumed.*

## 1. Research summary

MEOD already has a lot of digital sales infrastructure.

- **MEOD Fresh** shows an ecommerce catalogue, bundles, discounts, delivery schedules, store rewards and WhatsApp customer contact.
- **MEOD Farm** promotes direct online sales, farm experiences and commercial partnerships.

So the real problem is **how efficiently MEOD markets and converts customers across its existing systems**. It is not a lack of an ecommerce site.

## 2. Evidence tiers

| Tier | Source | What it supports |
| --- | --- | --- |
| MEOD public | meod.com.sg | Farm profile, produce, visitor experience and distribution options |
| MEOD public | meodfresh.com | Shopify storefront, catalogue, bundles, promotions, rewards, delivery schedule and stated contact hours |
| User-supplied discovery | Problem Statement 6B and Zoom notes | Sales team pain points, Excel and group-buy workflow needs, privacy and AI assistant requirements. *Not independently verified* |
| Platform official | Meta Cloud API docs | Sending and receiving business messages, webhook integration, connecting agents and bots |
| Platform official | OneMap API docs | Singapore geocoding and routing with token authentication |
| Platform official | ngrok docs | Temporary webhook tunnel for development, not a substitute for production hosting |

## 3. Existing product and sales signals

- MEOD Fresh sells locally grown greens and wider grocery categories: meats, seafood, produce, pantry and wellness. Recommendations should tell MEOD-grown items apart from other stock.
- At the time of research, the site listed an **S$60 delivery threshold** and **Tue/Thu/Sat deliveries**. These may change.
- Products are already discounted and bundles already sold, so proposing "new discounts" alone would not stand out.
- The site appears to run on Shopify, so the API scope and website integration must be tested, not assumed.
- The MEOD Farm site promotes collaborations and experiences. These are possible future segments for campaigns and gift bundles.

## 4. Customer acquisition and retention opportunities

| Opportunity | What to test | Potential measure |
| --- | --- | --- |
| Repeat-purchase reminders | Relevant reminders for customers who opted in | Repeat purchase rate |
| Cart-relevant cross-sell | Recommend in-stock complementary products | Basket size / acceptance |
| WhatsApp enquiry assistance | Multilingual stock and delivery FAQ | Average handling time / accuracy |
| Group-leader conversion | Referral links or codes, with commission visibility | Attributable orders / reconciliation |
| Campaign segmentation | Past purchase categories and a consent-based product cohort | Conversion per campaign |
| Human takeover | Live escalation of complex queries | Unresolved rate / CSAT |

## 5. WhatsApp Business Platform feasibility

**Cloud API access**

- The official Cloud API is built for programmatic business conversations.
- Access requires a Meta business portfolio, a WhatsApp Business Account and a business phone number.
- Business-initiated outreach is governed by templates and consent, and messaging windows affect how replies are handled.

**Running a 24/7 bot**

- A 24/7 bot is an application and operations choice: webhooks and jobs are hosted continuously.
- Staffed service runs only during defined human hours, or as MEOD agrees.
- Check current Meta pricing, templates, group features and coexistence during onboarding.

**WhatsApp Communities**

- A normal WhatsApp Community is **not** a reliable substitute for official order automation.
- Group participants can be exposed to privacy risks.
- Do not assume the Cloud API can automatically extract members' details or purchases.

## 6. OpenAI usage and privacy

OpenAI is useful for:

- summarising permitted catalogue context,
- classifying intent,
- translating,
- generating personalised messages.

Prices, stock, discounts, commission and identity access **stay under application rules**.

Customer segmentation is computed in the database using permitted pseudonymous identifiers. Send OpenAI only the minimum structured fields each language task needs, never the full customer database.

## 7. Group-buy operations and commission risk

Before development, MEOD must decide how a group leader is paid. It could be a referral commission, a mark-up, a discount or a separate service fee.

MEOD must also define:

- whether commission applies to gross or net merchandise,
- whether refunds, partial fulfilment, cancelled orders, delivery charges or promotional discounts change eligibility.

What leaders and MEOD can see about participants must be approved separately.

## 8. APIs and deployment research

- **ngrok** is a development tunnel for receiving test webhooks on a local laptop. Do not rely on it as the main always-on production endpoint.
- **OneMap** Search and Routing APIs support Singapore address lookup and routing. They need tokens and can return quota errors. Defer until group pickup or delivery routing is proven necessary.

## 9. Unknowns requiring primary MEOD discovery

- [ ] Confirm where orders actually come from: Shopify, a spreadsheet, an ERP, or a mix.
- [ ] Clarify "Microsoft Narvation" in the notes, and whether it is an internal Microsoft system.
- [ ] Confirm whether any customer history can be exported, and the lawful basis for personalised marketing.
- [ ] Clarify who sees personal data, and who is responsible for privacy notices.
- [ ] Confirm whether group-buy leaders represent community buyers or act as resellers.
- [ ] Confirm actual delivery logistics, marketing team workload, stock discrepancies and weekly enquiry volume.

## 10. Source links

- <https://meodfresh.com/>
- <https://meod.com.sg/>
- <https://www.postman.com/meta/whatsapp-business-platform/documentation/wlk6lh4/whatsapp-cloud-api>
- <https://whatsappbusiness.com/developers/developer-hub/>
- <https://ngrok.com/>
- <https://www.onemap.gov.sg/apidocs/>
- <https://www.pdpc.gov.sg/>
