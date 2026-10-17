import { Link } from 'react-router-dom'
import { site, footerLinks, socials } from '../data/site.js'
import './Footer.css'

const socialIcons = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.5 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4V11H8.5v3H10.5v6h3v-6h2.2l.4-3H13.5v-1.5c0-.6.4-1 1-1z" />
    </svg>
  ),
}

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-name">{site.name}</p>
          <p className="footer-tagline">{site.tagline}</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer-contact">
          <p>{site.address}</p>
          <p>{site.email}</p>
          <p>WhatsApp: {site.whatsapp}</p>
          <p>{site.hours}</p>
        </div>
      </div>

      <div className="footer-divider-wrap">
        <hr className="footer-divider" />
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} {site.name}. All rights reserved.
        </p>

        <div className="footer-social">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} on ${social.label}`}
            >
              {socialIcons[social.label]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
