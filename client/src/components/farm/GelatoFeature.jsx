import './GelatoFeature.css'

const benefits = ['Creamier', 'Silkier', 'Less Fat', 'Egg-free', 'Sugar-free', '100% Guilt-free']

const flavours = [
  {
    name: 'Mango Mint',
    image: '/images/gelato-mango-macro.jpg',
    text: 'Tropical sweetness meets cool mint — a refreshing burst in every scoop.',
  },
  {
    name: 'Kale Banana',
    image: '/images/gelato-kalebanana-macro.jpg',
    text: 'Our signature super kale blended with ripe banana — creamy, nutrient-packed, surprisingly delicious.',
  },
  {
    name: 'Kale Macadamia',
    image: '/images/gelato-kalemac-macro.jpg',
    text: 'Farm-fresh kale in healthy macadamia milk — earthy, nutty, and irresistibly smooth.',
  },
]

function GelatoFeature() {
  return (
    <section className="gelato">
      <div className="container">
        <div className="gelato-intro">
          <figure className="gelato-intro-media">
            <img
              className="gelato-intro-photo"
              src="/images/farm-and-more.jpg"
              alt="Bowls of mango, banana and kale gelato on a marble counter"
              loading="lazy"
            />
            <img
              className="gelato-logo"
              src="/images/ggg-logo.png"
              alt="Goodness Gracious Gelato logo"
              loading="lazy"
            />
          </figure>

          <div className="gelato-intro-text">
            <p className="gelato-eyebrow">Featuring</p>
            <h2 className="gelato-title">Goodness Gracious Gelato</h2>
            <p className="gelato-tagline">Say YES!! to your greens</p>

            <ul className="gelato-benefits">
              {benefits.slice(0, -1).map((benefit) => (
                <li key={benefit}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="gelato-highlight">{benefits.at(-1)}</p>

            <p className="gelato-note">
              Made with vegetable and plant-based, vegan-friendly ingredients. Crafted by Papitto
              for Meod.
            </p>
          </div>
        </div>

        <h3 className="gelato-flavours-title">Our Flavours</h3>
        <ul className="gelato-flavours">
          {flavours.map((flavour) => (
            <li key={flavour.name} className="gelato-flavour">
              <img src={flavour.image} alt={`Close-up of ${flavour.name} gelato`} loading="lazy" />
              <div className="gelato-flavour-body">
                <h4 className="gelato-flavour-name">{flavour.name}</h4>
                <p className="gelato-flavour-text">{flavour.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default GelatoFeature
