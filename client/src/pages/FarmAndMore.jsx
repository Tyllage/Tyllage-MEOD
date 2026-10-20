import PageHero from '../components/PageHero.jsx'
import OurProducts from '../components/farm/OurProducts.jsx'
import GelatoFeature from '../components/farm/GelatoFeature.jsx'
import GelatoVsIceCream from '../components/farm/GelatoVsIceCream.jsx'
import FarmShopCta from '../components/farm/FarmShopCta.jsx'
import './FarmAndMore.css'

function FarmAndMore() {
  return (
    <div className="farm-page">
      <PageHero
        eyebrow="Farm & More"
        title="Eating well begins here"
        intro="The seeds of all nutrition, the intersection between sustainable food and vitality. We don't just grow, we put healthy and ready-to-eat food varieties on the table so everyone benefits."
        image="/images/farm-and-more%20(1).jpg"
        imageAlt="Jars of fresh basil pesto, rice crackers and fresh produce on a rustic table"
        imagePosition="center 35%"
      />

      <section className="container page">
        <p className="section-eyebrow">Farm-to-Wellness</p>
        <h2 className="section-title">Choosing to eat right</h2>
        <p className="section-intro">
          We are inspired by a single ideology — food should be safe and good health starts from
          the source of creation. We work with partners who share our ethos in curating
          exceptional products which are made from pure and good quality ingredients that
          support good health and vitality.
        </p>
      </section>

      <OurProducts />
      <GelatoFeature />
      <GelatoVsIceCream />
      <FarmShopCta />
    </div>
  )
}

export default FarmAndMore
