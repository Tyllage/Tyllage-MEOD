import './PageHero.css'

function PageHero({ eyebrow, title, intro, image, imageAlt = '', imagePosition = 'center' }) {
  return (
    <section className={`page-hero${image ? '' : ' page-hero--plain'}`}>
      {image && (
        <img
          className="page-hero-image"
          src={image}
          alt={imageAlt}
          loading="eager"
          style={{ objectPosition: imagePosition }}
        />
      )}
      <div className="page-hero-overlay" />

      <div className="container page-hero-content">
        {eyebrow && <p className="page-hero-eyebrow">{eyebrow}</p>}
        <h1 className="page-hero-title">{title}</h1>
        {intro && <p className="page-hero-intro">{intro}</p>}
      </div>

      <svg
        className="page-hero-wave"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 Q720,100 1440,40 L1440,100 L0,100 Z"
          style={{ fill: 'var(--color-bg)' }}
        />
      </svg>
    </section>
  )
}

export default PageHero
