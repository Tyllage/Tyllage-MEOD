import { site, whatsappUrl } from '../../data/site.js'
import './ContactSection.css'

const encodedAddress = encodeURIComponent(site.address)
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&z=15&output=embed`
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`

const [street, postal] = site.address.split(', ')

const icons = {
  address: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  visit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 20.5l1.3-3.9A8.5 8.5 0 1 1 8 19.6z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  directions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h7.5a3.5 3.5 0 0 0 0-7h-7a3.5 3.5 0 0 1 0-7H16" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
}

const actions = [
  {
    key: 'whatsapp',
    title: 'Chat on WhatsApp',
    detail: site.phone,
    href: whatsappUrl,
    external: true,
    primary: true,
  },
  {
    key: 'email',
    title: 'Email us',
    detail: site.email,
    href: `mailto:${site.email}`,
  },
  {
    key: 'directions',
    title: 'Get directions',
    detail: 'Open in Google Maps',
    href: directionsUrl,
    external: true,
  },
]

function ContactSection() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-details">
            <h2 className="contact-title">The Farm</h2>

            <div className="contact-block">
              <span className="contact-icon">{icons.address}</span>
              <div>
                <h3 className="contact-label">Address</h3>
                <p>
                  {street}
                  <br />
                  {postal}
                </p>
              </div>
            </div>

            <div className="contact-block">
              <span className="contact-icon contact-icon--accent">{icons.visit}</span>
              <div>
                <h3 className="contact-label">How to visit</h3>
                <ul className="contact-visiting">
                  {site.visiting.map((item) => (
                    <li key={item.label}>
                      {item.label}: <strong>{item.value.toLowerCase()}</strong>
                    </li>
                  ))}
                </ul>
                <p className="contact-note">
                  Organised tours:{' '}
                  <a href={`mailto:${site.experienceEmail}`}>{site.experienceEmail}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title={`Map showing ${site.name} at ${site.address}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="contact-actions">
          {actions.map((action) => (
            <a
              key={action.key}
              className={`contact-action${action.primary ? ' contact-action--primary' : ''}`}
              href={action.href}
              {...(action.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <span className="contact-action-icon">{icons[action.key]}</span>
              <span className="contact-action-text">
                <span className="contact-action-title">{action.title}</span>
                <span className="contact-action-detail">{action.detail}</span>
              </span>
              <span className="contact-action-arrow">{icons.arrow}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
