# Project Proposal — Tyllage × MEOD Farm Pilot

**AI-Powered Sales, Customer Engagement & Group-Buy Operations**
*MEOD-first validation • Sales & Marketing Outreach Through AI*
*Draft for MEOD discovery and approval. No live customer data is assumed.*

## 1. Executive summary

Tyllage is a practical sales and marketing operations layer for MEOD Farm and its MEOD Fresh sales channels. It brings together:

- live catalogue and stock visibility,
- customer order support,
- personalised outreach,
- group-buy settlement,
- human escalation.

The aim is to ease marketing manpower bottlenecks and lift repeat purchases **without building another ecommerce storefront**.

The first release uses Shopify as the upstream product and order source, where MEOD grants access. It adds a secure operational database and WhatsApp Business Platform messaging. OpenAI handles multilingual intent detection, personalised copy and product suggestions. Deterministic services own stock validation, prices, discounts, commissions and order states.

## 2. Problem Statement 6B

| Dimension | Working understanding from user-shared Zoom notes |
| --- | --- |
| Who | MEOD sales and marketing staff, customers and group-buy leaders |
| What | Manual stock and order enquiries, ad hoc promotions, limited marketing manpower, Excel-based records and group-buy settlement friction |
| Barriers | Disconnected systems, repetitive WhatsApp conversations, no reliable shared customer and order view, and privacy-sensitive participant data |
| Outcome sought | Relevant recommendations, faster service, accurate order totals and transparent group-leader commissions |
| Assumption | How far Shopify and the Microsoft system are integrated today is still to be confirmed with MEOD |

Full statement: [PROBLEM_STATEMENT.md](PROBLEM_STATEMENT.md)

## 3. Verified current MEOD context

- MEOD Farm publicly describes a **6-hectare Singapore farm**, pesticide-free produce and farm experiences.
- MEOD Fresh already runs a **Shopify-powered store** with promotions, bundles, online shopping and deliveries on selected days.
- Public listings include Asian greens, lettuces, mushrooms and other groceries.
- The website lists WhatsApp customer contact hours. 24/7 automated replies would be a **new** proposed capability, not one that exists today.

Sources: <https://meod.com.sg/> and <https://meodfresh.com/>. Inventory and prices change, so they must be fetched from authorised store data and never hard-coded into prototype logic.

## 4. Proposed solution — Tyllage

Tyllage is a single hub for sales engagement and group-buy operations.

- **MEOD staff** keep control of products, available quantity, selling price, promotions, buyer eligibility and agent handover.
- **Customers** get helpful multilingual information, real-time stock checks and an order confirmation before checkout.
- **Group-buy leaders** get an accurate summary of their commission and collections.

| Capability | Name | Purpose |
| --- | --- | --- |
| Sales operations | Tyllage SalesDesk | One dashboard for inventory, customer orders, campaigns and group-buy settlements |
| AI service | Tyllage Assist | 24/7 WhatsApp multilingual FAQ, product finding, cart drafts and human handover |
| Personalisation | Tyllage Recommend | Permissioned, purchase-history-based product suggestions and relevant cross-sell |
| Campaigns | Tyllage Campaign Studio | Audience selection by product or by customer, with consent-aware approved templates |
| Group buying | Tyllage GroupBuy | Leader-specific links and codes, checkout discounts, order grouping and commission ledger |
| Stock and orders | Tyllage Sync | Shopify product, stock and order sync with reconciliation and idempotent webhooks |
| Analytics | Growth Insights | Repeat buyers, conversion, campaign revenue and service workload |

## 5. Customer and group-leader experience

1. A customer asks on WhatsApp, in English, Chinese, Malay or Tamil where supported. The bot checks the approved live catalogue and stock, then replies with availability.
2. When the customer wants to buy, the backend creates a draft order or points them to MEOD's existing checkout. It shows the final amount payable and any discount.
3. A group leader sees only the membership, order and commission fields the group-buy programme needs. Seeing participants' phone numbers or addresses requires a role-specific justification.
4. MEOD fulfilment sees only the delivery or pickup details it needs. Sales and marketing segments use pseudonymous buyer IDs unless identity is necessary and authorised.
5. Complaints, returns, food-safety concerns and ambiguous orders create a human-support ticket, and the AI stops handling that conversation.

## 6. Privacy and approval by design

The Zoom notes ask for redacted customer details and for group leaders to see only selected data. This is an **access-control requirement**. It does not guarantee that data can always be hidden from MEOD: the seller or processor may legitimately need some personal information for fulfilment, payment, service and legal duties.

Before a live pilot, the following must be agreed:

- data minimisation,
- consent,
- retention,
- disclosure rules,
- a signed data-handling arrangement.

## 7. Scope and pilot priorities

| MVP — validate first | Phase 2 or later |
| --- | --- |
| Product, stock and order sync, plus an internal admin dashboard | Advanced predictive recommendations |
| Multilingual FAQs and human handover | Full conversational order taking |
| Manual approval for AI-produced promotions | Automated campaign experimentation |
| Group-buy leader and commission calculator | Automated payouts and tax handling |
| Order and cart summary with price revalidation | Complex geo-optimised delivery allocation |
| Customer segmentation with opt-in records | Cross-farm marketplace and deeper ERP integration |

## 8. Pilot design and evidence

The pilot is MEOD-first, with:

- a limited, agreed product range,
- one or two group-buy leaders,
- a small cohort of opted-in buyers.

It starts with **synthetic data**. Approved live data comes in only once privacy, API and payment boundaries are confirmed. The pilot first records a baseline for service workload, stock answers, conversion, repeat purchases and commission accuracy. It does not promise improvement percentages in advance.

| Metric | Operational definition |
| --- | --- |
| Stock answer accuracy | Correct stock responses ÷ audited stock enquiries |
| Assisted conversion | Confirmed orders after an assisted conversation ÷ eligible conversations |
| Repeat purchase rate | Customers ordering again within a defined period ÷ eligible prior buyers |
| Support deflection | Queries safely resolved without human support ÷ eligible enquiries |
| Group-buy reconciliation | Orders and commission records reconciled without exceptions |
| Campaign effectiveness | Attributed revenue and conversions compared with the consented audience |

## 9. Risks and key questions

- Who owns the Shopify store, and will MEOD grant read/write API scopes?
- The meeting notes mention "Microsoft Narvation". Is that Microsoft Dynamics, Microsoft Navision or another system? Confirm before specifying the integration.
- Are group buyers managed in WhatsApp Communities, individual chats, spreadsheets or another platform?
- Is payment processed only by Shopify, or does MEOD need a separate approved payment flow?
- What personal data may group leaders view, and which notices and consents cover that?
- Is MEOD willing to use the official Meta Cloud API and register an approved sending number?
- What are the actual discount and commission structures, and the exception and refund rules?

## 10. Roadmap

| Stage | Scope |
| --- | --- |
| 1 | Discovery, mock inventory and prototype |
| 2 | Shopify sandbox or read-only integration, restricted customer lookup, group-buy test |
| 3 | Consent-based WhatsApp pilot and one approved live campaign |
| 4 | Measured rollout |

Tyllage aims to help MEOD sell more efficiently through its existing sales channels, not to replace them.
