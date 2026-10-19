import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import './WhereToBuy.css'

const options = [
  {
    name: 'MEOD Fresh',
    tag: 'Recommended',
    text: 'Our own online store. Freshest stock, bundle deals and delivery on Tue, Thu & Sat.',
    featured: true,
    cta: {
      label: 'Shop MEOD Fresh',
      href: site.shopUrl,
      variant: 'primary',
    },
  },
  {
    name: 'RedMart',
    text: 'Add MEOD greens to your RedMart grocery order.',
    cta: {
      label: 'Shop on RedMart',
      href: 'https://www.lazada.sg/catalog/?q=meod&m=redmart',
      variant: 'outline',
    },
  },
  {
    name: 'Cold Storage',
    text: 'Find MEOD greens in the chilled section of Cold Storage supermarkets.',
    note: 'Available in-store',
  },
]

function WhereToBuy() {
  return (
    <section className="wheretobuy">
      <div className="container">
        <div className="wheretobuy-header">
          <p className="section-eyebrow">Where To Buy</p>
          <h2 className="section-title">Get our greens</h2>
          <p className="section-intro">
            Order online for home delivery, or pick us up at your nearest
            supermarket.
          </p>
        </div>

        <div className="wheretobuy-grid">
          {options.map((option) => (
            <div
              key={option.name}
              className={`card wheretobuy-card${option.featured ? ' wheretobuy-card--featured' : ''}`}
            >
              {option.tag && (
                <span className="wheretobuy-tag">{option.tag}</span>
              )}
              <h3 className="wheretobuy-card-title">{option.name}</h3>
              <p className="wheretobuy-card-text">{option.text}</p>

              {option.cta && (
                <a
                  className={`btn btn-${option.cta.variant} wheretobuy-card-cta`}
                  href={option.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {option.cta.label}
                </a>
              )}

              {option.note && (
                <span className="wheretobuy-note">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  {option.note}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="wheretobuy-footer">
          <Link className="wheretobuy-contact" to="/find-us">
            Corporate events or partnerships? Get in touch →
          </Link>
        </p>
      </div>
    </section>
  )
}

export default WhereToBuy
