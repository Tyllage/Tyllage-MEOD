import { popularProducts } from '../../data/products.js'
import './PopularProducts.css'

function PopularProducts() {
  return (
    <section className="popular">
      <div className="container">
        <div className="popular-header">
          <p className="section-eyebrow">Best Sellers</p>
          <h2 className="section-title">Popular this week</h2>
          <p className="section-intro">
            Harvested fresh and loved by our regulars. Order online and
            we&rsquo;ll deliver to your door.
          </p>
        </div>

        <div className="popular-grid">
          {popularProducts.map((product) => (
            <div className="card popular-card" key={product.name}>
              <div className="popular-card-image-wrap">
                <img
                  className="popular-card-image"
                  src={product.image}
                  alt={`${product.name} (${product.nameChinese}), ${product.weight} pack`}
                  loading="lazy"
                />
              </div>

              <div className="popular-card-body">
                <h3 className="popular-card-name">{product.name}</h3>
                <p className="popular-card-name-cn">{product.nameChinese}</p>
                <p className="popular-card-weight">{product.weight}</p>

                <div className="popular-card-price-row">
                  <span className="popular-card-price">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.wasPrice && (
                    <>
                      <span className="popular-card-was">
                        ${product.wasPrice.toFixed(2)}
                      </span>
                      <span className="popular-sale-tag">Sale</span>
                    </>
                  )}
                </div>

                <a
                  className="btn btn-primary popular-card-buy"
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on MEOD Fresh
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="popular-footer">
          <a
            className="popular-view-all"
            href="https://meodfresh.com/collections/best-selling"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all best sellers →
          </a>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
