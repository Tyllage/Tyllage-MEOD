import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import './WhatWeDo.css'

const featuredCard = {
  title: 'Fresh Produce',
  image: '/images/fresh-produce.jpg',
  alt: 'A hand holding freshly harvested purple lettuce in a MEOD greenhouse',
  text: '100% pesticide-free vegetables, harvested early every morning for maximum freshness and nutrition.',
}

const secondaryCards = [
  {
    title: 'Farm & More',
    image: '/images/farm-and-more.jpg',
    alt: "Bowls of ready-to-eat MEOD products made from the farm's harvest",
    text: 'Ready-to-eat products made from our harvest that boost energy, health and overall wellness.',
    linkLabel: 'Explore products',
    href: '/farm-and-more',
  },
  {
    title: 'Experiences',
    image: '/images/experiences.jpg',
    alt: 'A MEOD farmer tending tall rows of greens inside the greenhouse',
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
          <h2 className="section-title">What We Do</h2>
          <p className="section-intro">
            From nurturing a seed to becoming your leafy dinner, we put
            nature&rsquo;s best into every harvest — not just fibre, but
            vitamins, minerals and antioxidants your body needs.
          </p>
        </div>

        <div className="whatwedo-grid">
          <a
            className="card whatwedo-card whatwedo-card--featured"
            href={site.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="whatwedo-card-image"
              src={featuredCard.image}
              alt={featuredCard.alt}
              loading="lazy"
            />
            <div className="whatwedo-card-body">
              <h3 className="whatwedo-card-title">{featuredCard.title}</h3>
              <p className="whatwedo-card-text">{featuredCard.text}</p>
              <div className="whatwedo-tags">
                <span className="whatwedo-tag">
                  Free delivery over {site.delivery.freeOver}
                </span>
                <span className="whatwedo-tag">
                  Delivery {site.delivery.days}
                </span>
              </div>
              <span className="btn btn-primary whatwedo-card-cta">
                Shop our greens
              </span>
            </div>
          </a>

          <div className="whatwedo-secondary">
            {secondaryCards.map((card) => (
              <Link
                key={card.title}
                className="card whatwedo-card whatwedo-card--horizontal"
                to={card.href}
              >
                <img
                  className="whatwedo-card-image"
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                />
                <div className="whatwedo-card-body">
                  <h3 className="whatwedo-card-title">{card.title}</h3>
                  <p className="whatwedo-card-text">{card.text}</p>
                  <span className="whatwedo-card-link">
                    {card.linkLabel} <span className="whatwedo-arrow">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
