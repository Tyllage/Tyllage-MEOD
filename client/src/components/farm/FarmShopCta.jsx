import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import './FarmShopCta.css'

const icons = {
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  ),
}

const details = [
  { icon: 'pin', label: 'Find us', value: site.address },
  { icon: 'clock', label: 'Opening hours', value: site.hours },
  { icon: 'calendar', label: 'Farm visits', value: site.visiting[0].value },
]

function FarmShopCta() {
  return (
    <section className="farm-cta">
      <svg
        className="farm-cta-wave"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 L1440,0 L1440,30 Q720,90 0,30 Z" />
      </svg>

      <div className="container farm-cta-inner">
        <p className="farm-cta-eyebrow">Come say hello</p>
        <h2 className="farm-cta-title">Visit our farm shop</h2>
        <p className="farm-cta-text">
          Browse our full range in person at the farm, or shop online through Meodfresh.
        </p>
        <div className="farm-cta-actions">
          <a className="btn btn-primary" href={site.shopUrl} target="_blank" rel="noopener noreferrer">
            Shop Meodfresh
          </a>
          <Link className="btn btn-outline farm-cta-outline" to="/contact">
            Visit the Farm
          </Link>
        </div>

        <ul className="farm-cta-details">
          {details.map((detail) => (
            <li key={detail.label}>
              <span className="farm-cta-icon">{icons[detail.icon]}</span>
              <span>
                <span className="farm-cta-label">{detail.label}</span>
                <span className="farm-cta-value">{detail.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FarmShopCta
