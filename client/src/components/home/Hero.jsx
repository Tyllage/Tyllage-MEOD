import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import './Hero.css'

const heroContent = {
  eyebrow: site.tagline,
  heading: 'More Than A Farm',
  description:
    'Pesticide-free Asian greens, lettuces, herbs and mushrooms, grown in Lim Chu Kang since 2014.',
  stats: [
    { value: '6 ha', label: 'Farm land' },
    { value: '30+', label: 'Varieties and counting' },
    { value: '100%', label: 'Pesticide-free' },
  ],
}

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-image"
        src="/images/hero-farm.jpg"
        alt="Rows of leafy greens growing under netting at MEOD Farm"
        loading="eager"
      />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <p className="hero-eyebrow">{heroContent.eyebrow}</p>
        <h1 className="hero-heading">{heroContent.heading}</h1>
        <p className="hero-description">{heroContent.description}</p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={site.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop Fresh Greens
          </a>
          <Link className="btn btn-outline hero-btn-outline" to="/experiences">
            Book a Farm Tour
          </Link>
        </div>

        <dl className="hero-stats">
          {heroContent.stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
