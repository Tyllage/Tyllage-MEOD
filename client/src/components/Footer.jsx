import { Link } from 'react-router-dom'
import { site, footerLinks } from '../data/site.js'
import './Footer.css'

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
    </footer>
  )
}

export default Footer
