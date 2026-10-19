import './GelatoVsIceCream.css'

const comparison = [
  { label: 'Fat Content', gelato: '4–8%', iceCream: '10–16%' },
  { label: 'Air (Overrun)', gelato: '20–30%', iceCream: '50–100%' },
  { label: 'Serving Temp', gelato: '−10 to −15°C', iceCream: 'Below −18°C' },
  { label: 'Texture', gelato: 'Dense & velvety', iceCream: 'Light & fluffy' },
  { label: 'Flavour', gelato: 'More intense', iceCream: 'Softer' },
]

const icons = {
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 20c7 0 14-7 14-15 0 0-14-1-14 9 0 3 1 5 2 6" />
      <path d="M5 20c0-4 2-7 5-9" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z" />
    </svg>
  ),
}

const reasons = [
  {
    icon: 'heart',
    title: 'Healthier Option',
    text: "Gelato's lower fat content makes it a lighter and better alternative. Using MEOD's own vegetable and vegan-friendly ingredients adds texture and unique taste highlights to an otherwise ordinary dessert.",
  },
  {
    icon: 'leaf',
    title: 'Flavour Intensity',
    text: 'Experience an elevation in taste and profile of every scoop of gelato made from our unique hydroponically-grown farm fresh ingredients. Not just added vegetables, but the added goodness that comes from super vegetables that we use, such as the super kale.',
  },
  {
    icon: 'star',
    title: 'Artisanal Quality',
    text: 'To ensure top artisanal quality, our gelato is crafted in boutique-like batches, carefully sealing in the authentic freshness and goodness of our farm-based produce.',
  },
]

function GelatoVsIceCream() {
  return (
    <section className="gelato-vs">
      <div className="container">
        <h2 className="section-title">Gelato vs Ice Cream</h2>

        <div className="gelato-vs-grid">
          <div className="gelato-vs-table-wrap">
            <table className="gelato-vs-table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="visually-hidden">Property</span>
                  </th>
                  <th scope="col">Gelato</th>
                  <th scope="col">Ice Cream</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td className="gelato-vs-win">{row.gelato}</td>
                    <td>{row.iceCream}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="gelato-vs-reasons">
            <h3 className="gelato-vs-choose">So, which should you choose?</h3>
            <p className="gelato-vs-answer">
              If you can only pick one: <strong>gelato.</strong>
            </p>

            <ul className="gelato-vs-list">
              {reasons.map((reason) => (
                <li key={reason.title} className="gelato-vs-reason">
                  <span className="gelato-vs-icon">{icons[reason.icon]}</span>
                  <div>
                    <h4 className="gelato-vs-reason-title">{reason.title}</h4>
                    <p className="gelato-vs-reason-text">{reason.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="gelato-vs-quote">
          At MEOD, we are more than a farm. We don&rsquo;t just make gelato. We make Goodness
          Gracious Gelato!
        </p>
      </div>
    </section>
  )
}

export default GelatoVsIceCream
