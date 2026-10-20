import './ExperienceIntro.css'

const icons = {
  group: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.2c2.8.4 5 2.8 5 5.8" />
    </svg>
  ),
  sliders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="10" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  ),
  host: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 20c7 0 14-7 14-15 0 0-14-1-14 9 0 3 1 5 2 6" />
      <path d="M5 20c0-4 2-7 5-9" />
    </svg>
  ),
}

const highlights = [
  {
    icon: 'sliders',
    title: 'Made for your group',
    text: 'Group customisation is welcome.',
  },
  {
    icon: 'group',
    title: '10–20 guests',
    text: 'Ideal group size is between 10–20; up to 40.',
  },
  {
    icon: 'host',
    title: 'A lively farm host',
    text: 'Book our lively farm host to make your trip worthwhile.',
  },
]

function ExperienceIntro() {
  return (
    <section className="exp-intro">
      <div className="container">
        <div className="exp-intro-grid">
          <div className="exp-intro-text">
            <h2 className="exp-intro-title">
              There is always something more on a farm that is more than a farm.
            </h2>
            <p>
              MEOD is a centre for agricultural innovation. Let us show you our high-tech farm
              where seeds become dinner, and where every leaf or stalk is capable of becoming a
              culinary delight on your plate.
            </p>
            <p>
              As you spend time here at MEOD, learn from our farmers and leaders as we take you
              on a quintessential journey of learning the humility of growing, the grandeur of
              feeding a nation, and our aim to create an impact on society that is greater than
              ourselves.
            </p>
          </div>

          <figure className="exp-intro-media">
            <img
              src="/images/experiences.jpg"
              alt="A MEOD farmer tending tomato vines in the greenhouse"
              loading="lazy"
            />
          </figure>
        </div>

        <ul className="exp-highlights">
          {highlights.map((item) => (
            <li key={item.title} className="exp-highlight">
              <span className="exp-highlight-icon">{icons[item.icon]}</span>
              <div>
                <h3 className="exp-highlight-title">{item.title}</h3>
                <p className="exp-highlight-text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ExperienceIntro
