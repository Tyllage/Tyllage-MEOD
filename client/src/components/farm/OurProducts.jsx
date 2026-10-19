import './OurProducts.css'

const products = [
  {
    tag: 'Farm-Made',
    image: '/images/product-pesto.jpg',
    name: 'Authentic Italian Basil Pesto',
    text: 'Made from our own freshly harvested basil in a secret recipe. Rich, aromatic, and preservative-free.',
  },
  {
    tag: 'A Good Snack',
    image: '/images/product-crackers.jpg',
    name: 'Low GI Rice Cracker',
    text: 'High fibre, low glycemic index. A simple healthy snack that actually tastes great.',
  },
  {
    tag: 'Fabulously Frozen for You',
    image: '/images/product-gelato.jpg',
    name: 'Goodness Gracious Gelato',
    text: "Guilt-free, vegetable and plant-based gelato made from our super vegetables that you won't stop falling in love with.",
  },
  {
    tag: 'Daily Health and Vitality Supplement',
    image: '/images/product-vegepowder.jpg',
    name: 'Shiitake Mushroom Tonics',
    text: 'Concentrated extracts of shiitake mushrooms that blend with the goodness of Lingzhi, Cordyceps, Tremella and Dendrobium. In a ready-to-drink bottle form.',
  },
]

function OurProducts() {
  return (
    <section className="farm-products">
      <div className="container">
        <p className="section-eyebrow">Our Products</p>
        <h2 className="section-title">More than a local farm</h2>
        <p className="section-intro">
          MEOD is not just a local farm, but a purveyor of fresh produce and food products that
          meet the sophisticated demands of today&rsquo;s food and dining expectations.
        </p>

        <ul className="farm-products-grid">
          {products.map((product) => (
            <li key={product.name} className="card farm-product">
              {product.image && (
                <img
                  className="farm-product-image"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              )}
              <div className="farm-product-body">
                <span className="farm-product-tag">{product.tag}</span>
                <h3 className="farm-product-name">{product.name}</h3>
                <p className="farm-product-text">{product.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OurProducts
