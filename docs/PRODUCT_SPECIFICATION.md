# Product Specification — Tyllage × MEOD Farm Pilot

**Functional Requirements • Data Model • User Flows**
*Draft for MEOD discovery and approval. No live customer data is assumed.*

## 1. Product boundary

Tyllage is an **add-on to MEOD Fresh / Shopify**. It is not a second checkout or a second stock master. The first UI is a staff dashboard plus a controlled WhatsApp customer layer.

Shopify stays the source of truth for:

- published products and prices,
- inventory at checkout,
- ecommerce order status.

This holds unless MEOD confirms that a different enterprise system is the source.

## 2. Roles and permissions

| Role | Allowed | Restricted |
| --- | --- | --- |
| MEOD admin | Manage product mapping, promotions, group leaders, escalation and reporting | Access only justified customer data. No unrestricted raw exports |
| Sales staff | View permitted customer order history, draft campaigns, answer escalations | No secret keys or rule changes |
| Group leader | Track their own group campaign, approved member and order summaries, and commission | No other groups. Member PII masked by default |
| Customer | See their own products, cart, order status, promotions and consent choices | No other customers' data |
| AI assistant | Read narrow tool outputs provided by the server. Generate summaries and drafts | No direct SQL, payment authorisation, inventory edits or mass sends |

## 3. Module requirements

| Module | Requirements |
| --- | --- |
| **Tyllage SalesDesk** | Stock snapshots, searchable order history, escalation inbox, promo approvals and a group-buy settlement report. Always shows the data source and last sync time |
| **Tyllage Sync** | Pull store products, variants, availability and orders through authorised Shopify Admin APIs and webhooks. Queue and retry webhook handling, use idempotency keys and reconcile periodically. **Never expose the Admin token to the browser** |
| **Tyllage Assist** | Detect the language, classify the enquiry (stock, price, delivery, order, promotion or complaint), call authorised backend lookups, ask for confirmation, and hand unresolved cases to human agents |
| **Tyllage Recommend** | Recommend only eligible in-stock items, using permitted prior order data. Show the reason (for example, "bought salad previously"). Offer an opt-out. Never infer sensitive traits |
| **Tyllage Campaign Studio** | The farm picks a SKU to promote. AI suggests related prior-purchase categories, and the backend selects the consented cohort. Staff preview and approve templates, recipients and send time before anything is sent |
| **Tyllage GroupBuy** | Each leader has a group-specific code or link. Orders record the discount applied and the gross/net basis. The commission ledger updates only after an eligible paid or fulfilled status, and handles cancellations and refunds |
| **Growth Insights** | Dashboards for message volume, handovers, campaign conversion, commissions, stock accuracy and repeat purchases |

## 4. End-to-end acceptance stories

| Scenario | Acceptance test |
| --- | --- |
| Stock check | The assistant queries the server and reports the exact SKU and available quantity, or "unavailable", with the last sync time. It never invents availability |
| Customer checkout | Cart prices and promotions are recalculated with store rules. The customer confirms, and an authorised platform handles secure checkout |
| Order status | The customer's identity is verified before any personal order details are shared. Only limited order information is returned |
| Promotional message | Consent, an approved template and a valid messaging window are all checked. No unapproved mass sends |
| Group commission | Base amount, discounts, commission rate and refund adjustments can be recalculated from records with the same result |
| Human handover | An agent ticket is created, context is redacted to the minimum, and the customer is told. The bot stops promising a resolution |

## 5. Data objects

| Object | Key fields / considerations |
| --- | --- |
| `products` | `shopify_product_id`, `variant_id`, `title`, `category`, `base_price`, `last_synced_at` |
| `inventory_snapshots` | `variant_id`, `available_qty`, `source`, `sync_status`, `updated_at` |
| `customers` | `pseudonymous_id`, `external_customer_ref`, `language`, `consent_flag`, `consent_timestamp` |
| `orders` | `external_order_id`, `pseudonymous_customer_id`, `status`, `gross`, `discount`, `net`, `source` |
| `order_items` | `order_id`, `variant_id`, `qty`, `captured_price` |
| `group_buy_events` | `event_id`, `leader_id`, `dates`, `code`, `terms`, `status` |
| `group_buy_orders` | `event_id`, `order_id`, `leader_ref`, `commission_status` |
| `commission_ledger` | `order_id`, `eligible_base`, `commission_rate`, `amount`, `adjustment`, `status` |
| `conversations` | opaque `customer_ref`, `channel`, `intent`, `ticket_id`, redacted transcript policy |
| `campaigns` | `sku`, `audience_rule`, `approved_template`, `approver`, `opt_in_scope`, `send_log` |
| `audit_logs` | `actor`, `event`, `object_id`, `timestamp`, `changes` |

## 6. Example deterministic calculation

> **Illustration only.** Subtotal S$60, discount S$5, so the buyer pays S$55 before any shipping or tax.
> If the agreed commission basis is the net merchandise total at 5%, the leader's commission is **S$2.75**.
> MEOD must approve the actual basis and how refunds are handled. The AI may explain these figures but must never change them.

## 7. Reference architecture

```
React + Vite client → Node.js/Express API (JWT/RBAC, validation, rules) → PostgreSQL
External adapters: Shopify API/webhooks · WhatsApp Cloud API webhooks
                   · OpenAI (limited language tasks) · OneMap (optional, SG address validation)
```

Secrets stay protected in the server environment. Local webhook testing can use ngrok. 24/7 production webhooks must use an HTTPS endpoint that is always hosted.

## 8. Non-functional requirements

- **Fail closed** when confirming orders if Shopify stock is stale or unavailable.
- Pseudonymise customer identity by default, with field-level access for the group-leader and MEOD roles.
- Validate webhook signatures where applicable. Add rate limits, audit logs and a dead-letter retry process.
- Support multiple languages, and fall back to a human when confidence is low.
- No promotion or order is sent or submitted on its own without the required checks and approval.
- Create synthetic test fixtures. **Never put real phone numbers in screenshots or demo data.**

## 9. Deferred / non-goals

The pilot will **not** include:

- robotics, IoT, digital twins or drone control,
- autonomous payment,
- unsupported WhatsApp group scraping,
- direct access to customer personal details.

The advanced order recommender and ERP sync depend on approved data being available.
