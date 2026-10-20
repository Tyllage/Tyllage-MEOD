import { site, whatsappLink } from '../../data/site.js'
import './GroupBuy.css'

const steps = [
  {
    number: '1',
    title: 'Start a group',
    text: "Tell us you'd like to lead one.",
  },
  {
    number: '2',
    title: 'Share your link',
    text: 'Invite your block, office or school group.',
  },
  {
    number: '3',
    title: 'One delivery',
    text: 'We deliver to the leader, who gets a thank-you reward.',
  },
]

const groupBuyMessage =
  "Hi MEOD Farm, I'd like to start a group buy for my neighbourhood/office."

const exampleOrder = 25
const groupSize = 3
const groupOrderTotal = exampleOrder * groupSize
const isFreeDelivery = groupOrderTotal >= site.delivery.freeOverAmount
const aloneTotal = exampleOrder + site.delivery.feeAmount
const togetherTotal = isFreeDelivery
  ? exampleOrder
  : exampleOrder + site.delivery.feeAmount / groupSize

function GroupBuy() {
  return (
    <section className="groupbuy">
      <div className="container">
        <div className="groupbuy-header">
          <p className="section-eyebrow">Group Buy</p>
          <h2 className="section-title">Order together, save together</h2>
          <p className="section-intro">
            Neighbours, colleagues or parents pool one order through a group
            leader, so everyone reaches free delivery over {site.delivery.freeOver}{' '}
            and MEOD makes fewer delivery trips.
          </p>
        </div>

        <div className="groupbuy-grid">
          <div className="groupbuy-compare-wrap">
            <div className="groupbuy-compare">
              <div className="card groupbuy-compare-box">
                <h3 className="groupbuy-compare-title">Ordering alone</h3>
                <ul className="groupbuy-compare-lines">
                  <li>
                    <span>Your order</span>
                    <span>${exampleOrder}</span>
                  </li>
                  <li>
                    <span>Delivery</span>
                    <span>+${site.delivery.feeAmount}</span>
                  </li>
                </ul>
                <p className="groupbuy-compare-total">
                  You pay <strong>${aloneTotal}</strong>
                </p>
              </div>

              <div className="card groupbuy-compare-box groupbuy-compare-box--highlight">
                <h3 className="groupbuy-compare-title">Ordering together</h3>
                <ul className="groupbuy-compare-lines">
                  <li>
                    <span>
                      Group order ({groupSize} × ${exampleOrder})
                    </span>
                    <span>${groupOrderTotal}</span>
                  </li>
                  <li>
                    <span>Delivery</span>
                    <span>FREE (over {site.delivery.freeOver})</span>
                  </li>
                </ul>
                <p className="groupbuy-compare-total">
                  You pay <strong>${togetherTotal}</strong>
                </p>
                <p className="groupbuy-compare-trips">
                  1 delivery trip instead of {groupSize}
                </p>
              </div>
            </div>

            <p className="groupbuy-compare-caption">
              Example based on MEOD Fresh delivery fees.
            </p>
          </div>

          <div className="groupbuy-sidebar">
            <div className="groupbuy-steps">
              {steps.map((step) => (
                <div className="groupbuy-step" key={step.number}>
                  <span className="groupbuy-step-number">{step.number}</span>
                  <div className="groupbuy-step-copy">
                    <h3 className="groupbuy-step-title">{step.title}</h3>
                    <p className="groupbuy-step-text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="groupbuy-note">
              Reward details are being finalised with MEOD.
            </p>

            <div className="groupbuy-cta">
              <a
                className="btn btn-primary"
                href={whatsappLink(groupBuyMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a group buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GroupBuy
