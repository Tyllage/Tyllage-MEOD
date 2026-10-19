import { useEffect, useState } from 'react'
import { whatsappUrl } from '../data/site.js'
import './FloatingActions.css'

import { site } from '../data/site.js'
import './FloatingActions.css'

const whatsappUrl = `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`

const SHOW_AFTER_PX = 400

function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > SHOW_AFTER_PX)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <div className="floating-actions">
      <button
        type="button"
        className={`floating-btn floating-btn--top${showScrollTop ? ' is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showScrollTop ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      <a
        className="floating-btn floating-btn--whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.43 9.43 0 0 1-4.81-1.32l-.35-.21-3.57.94.95-3.48-.23-.36a9.41 9.41 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.46-9.44 2.53 0 4.9.99 6.69 2.78a9.38 9.38 0 0 1 2.77 6.68c0 5.21-4.24 9.44-9.46 9.44zm8.05-17.49A11.3 11.3 0 0 0 12.04.67C5.77.67.66 5.77.66 12.04c0 2 .52 3.96 1.52 5.69L.57 23.33l5.74-1.5a11.36 11.36 0 0 0 5.72 1.46h.01c6.27 0 11.38-5.1 11.38-11.37 0-3.04-1.18-5.9-3.33-8.05z" />
        </svg>
      </a>
    </div>
  )
}

export default FloatingActions
