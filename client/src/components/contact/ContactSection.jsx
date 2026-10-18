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
  external: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  ),
}

function ContactSection() {
  return (
    <section className="contact">
      <div className="container contact-grid">
        <div className="contact-map">
          <iframe
            title={`Map showing ${site.name} at ${site.address}`}
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="contact-details">
          <h1 className="contact-title">The Farm</h1>

          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-icon">{icons.address}</span>
              <div>
                <h2 className="contact-label">Address</h2>
                <p>{street}</p>
                <p>{postal}</p>
                <a
                  className="contact-directions"
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions {icons.external}
                </a>
              </div>
            </li>

            <li className="contact-item">
              <span className="contact-icon contact-icon--accent">{icons.visit}</span>
              <div>
                <h2 className="contact-label">How To Visit</h2>
                {site.visiting.map((item) => (
                  <p key={item.label}>
                    {item.label}: {item.value}
                  </p>
                ))}
                <p>
                  Organized Tour Enquiries:{' '}
                  <a href={`mailto:${site.experienceEmail}`}>{site.experienceEmail}</a>
                </p>
              </div>
            </li>

            <li className="contact-item">
              <span className="contact-icon">{icons.whatsapp}</span>
              <div>
                <h2 className="contact-label">WhatsApp</h2>
                <p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {site.phone}
                  </a>
                </p>
              </div>
            </li>

            <li className="contact-item">
              <span className="contact-icon">{icons.email}</span>
              <div>
                <h2 className="contact-label">Email</h2>
                <p>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
