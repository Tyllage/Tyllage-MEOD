import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import './WhatWeDo.css'

const icons = {
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 20c7 0 14-7 14-15 0 0-14-1-14 9 0 3 1 5 2 6" />
      <path d="M5 20c0-4 2-7 5-9" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 20s-7-4.4-9.3-9A5 5 0 0 1 12 6a5 5 0 0 1 9.3 5c-2.3 4.6-9.3 9-9.3 9z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  ),
}

const cards = [
  {
    title: 'Fresh Produce',
    image: '/images/fresh-produce.jpg',
    alt: 'Freshly harvested leafy greens in crates at MEOD Farm',
    icon: 'leaf',
    text: '100% pesticide-free vegetables, harvested early every morning for maximum freshness and nutrition.',
    linkLabel: 'Shop our greens',
    href: site.shopUrl,
    external: true,
  },
  {
    title: 'Farm & More',
    image: '/images/farm-and-more.jpg',
    alt: 'MEOD Farm & More ready-to-eat products made from the harvest',
    icon: 'heart',
    text: 'Ready-to-eat products made from our harvest that boost energy, health and overall wellness.',
    linkLabel: 'Explore products',
    href: '/farm-and-more',
  },
  {
    title: 'Experiences',
    image: '/images/experiences.jpg',
    alt: 'Visitors on a guided tour through the greenhouses at MEOD Farm',
    icon: 'calendar',
    text: 'Farm tours and workshops — see, touch and taste where your food grows.',
    linkLabel: 'Plan a visit',
    href: '/experiences',
  },
]

function WhatWeDo() {
  return (
    <section className="whatwedo">
      <div className="container">
        <div className="whatwedo-header">
          <h2 className="whatwedo-title">What We Do</h2>
          <p className="whatwedo-intro">
            From nurturing a seed to becoming your leafy dinner, we put
            nature&rsquo;s best into every harvest — not just fibre, but
            vitamins, minerals and antioxidants your body needs.
          </p>
        </div>

        <div className="whatwedo-grid">
          {cards.map((card) => {
            const content = (
              <>
                <img
                  className="whatwedo-card-image"
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                />
                <div className="whatwedo-card-body">
                  <span className="whatwedo-icon">{icons[card.icon]}</span>
                  <h3 className="whatwedo-card-title">{card.title}</h3>
                  <p className="whatwedo-card-text">{card.text}</p>
                  <span className="whatwedo-card-link">{card.linkLabel} →</span>
                </div>
              </>
            )

            if (card.external) {
              return (
                <a
                  key={card.title}
                  className="card whatwedo-card"
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              )
            }

            return (
              <Link key={card.title} className="card whatwedo-card" to={card.href}>
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
