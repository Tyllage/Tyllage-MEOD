import { site } from '../../data/site.js'
import './OurPromise.css'

const icons = {
  sun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 20c7 0 14-7 14-15 0 0-14-1-14 9 0 3 1 5 2 6" />
      <path d="M5 20c0-4 2-7 5-9" />
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3c4 4.5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6.5 6-11z" />
    </svg>
  ),
}

const promises = [
  {
    icon: 'sun',
    title: 'Safe & Healthy',
    text: 'Pesticide-free, chemical-free and GMO-free since 2014. Keeping our produce safe means keeping you safe.',
  },
  {
    icon: 'leaf',
    title: 'Fresh & Nutritious',
    text: 'Harvested daily, so you get the freshest, crispiest leaves packed with nutrients.',
  },
  {
    icon: 'droplet',
    title: 'Clean & Green',
    text: 'Our greenhouses use agri-technology to save energy, and we recycle, reuse and upcycle to cut our carbon footprint.',
  },
]

function OurPromise() {
  return (
    <section className="ourpromise">
      <div className="container">
        <div className="ourpromise-header">
          <p className="section-eyebrow">Our Promise</p>
          <h2 className="section-title">Safe, fresh and sustainable</h2>
        </div>

        <div className="ourpromise-grid">
          {promises.map((item) => (
            <div className="ourpromise-item" key={item.title}>
              <span className="ourpromise-icon">{icons[item.icon]}</span>
              <h3 className="ourpromise-item-title">{item.title}</h3>
              <p className="ourpromise-item-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="ourpromise-cta">
          <a
            className="btn btn-primary"
            href={site.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Taste the difference
          </a>
        </div>
      </div>
    </section>
  )
}

export default OurPromise
