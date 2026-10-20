import { useState } from 'react'
import { site } from '../../data/site.js'
import './BookingSection.css'

const experienceOptions = ['Farm Tour', 'Workshop', 'School Visit', 'Others']

const icons = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 20.5l1.3-3.9A8.5 8.5 0 1 1 8 19.6z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  address: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
}

const today = new Date().toISOString().split('T')[0]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  experience: experienceOptions[0],
  pax: 2,
  date: '',
  message: '',
}

function buildWhatsappUrl(form) {
  const lines = [
    `Hi MEOD Farm, I'd like to book a visit.`,
    '',
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Experience: ${form.experience}`,
    `Number of pax: ${form.pax}`,
    `Preferred date: ${form.date}`,
  ]
  if (form.message.trim()) lines.push(`Message: ${form.message.trim()}`)

  return `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(lines.join('\n'))}`
}

function BookingSection() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const update = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.open(buildWhatsappUrl(form), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section className="booking" id="book">
      <div className="container booking-grid">
        <div className="booking-info">
          <p className="booking-eyebrow">Book a visit</p>
          <h2 className="booking-title">Plan your visit</h2>
          <p className="booking-lead">
            Fill in the form and we'll confirm your booking via WhatsApp or email. Capacity is
            limited per day to ensure a quality experience for everyone.
          </p>

          <ul className="booking-contacts">
            <li>
              <span className="booking-contact-icon">{icons.email}</span>
              <div>
                <span className="booking-contact-label">Organised tours</span>
                <a href={`mailto:${site.experienceEmail}`}>{site.experienceEmail}</a>
              </div>
            </li>
            <li>
              <span className="booking-contact-icon">{icons.whatsapp}</span>
              <div>
                <span className="booking-contact-label">WhatsApp</span>
                <span>{site.phone}</span>
              </div>
            </li>
            <li>
              <span className="booking-contact-icon">{icons.address}</span>
              <div>
                <span className="booking-contact-label">Find us</span>
                <span>{site.address}</span>
              </div>
            </li>
          </ul>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="booking-field booking-field--full">
            <label htmlFor="booking-name">Full Name</label>
            <input
              id="booking-name"
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              required
              value={form.name}
              onChange={update}
            />
          </div>

          <div className="booking-field">
            <label htmlFor="booking-email">Email</label>
            <input
              id="booking-email"
              name="email"
              type="email"
              placeholder="you@email.com"
              autoComplete="email"
              required
              value={form.email}
              onChange={update}
            />
          </div>

          <div className="booking-field">
            <label htmlFor="booking-phone">WhatsApp / Phone</label>
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              placeholder="+65 XXXX XXXX"
              autoComplete="tel"
              required
              value={form.phone}
              onChange={update}
            />
          </div>

          <div className="booking-field">
            <label htmlFor="booking-experience">Experience</label>
            <select
              id="booking-experience"
              name="experience"
              value={form.experience}
              onChange={update}
            >
              <option value="" disabled>
                What are you most excited about?
              </option>
              {experienceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="booking-field">
            <label htmlFor="booking-pax">Number of Pax</label>
            <input
              id="booking-pax"
              name="pax"
              type="number"
              min="1"
              max="40"
              required
              value={form.pax}
              onChange={update}
            />
          </div>

          <div className="booking-field booking-field--full">
            <label htmlFor="booking-date">Preferred Date</label>
            <input
              id="booking-date"
              name="date"
              type="date"
              min={today}
              required
              value={form.date}
              onChange={update}
            />
          </div>

          <div className="booking-field booking-field--full">
            <label htmlFor="booking-message">Message (optional)</label>
            <textarea
              id="booking-message"
              name="message"
              rows="4"
              placeholder="Any special requests or questions?"
              value={form.message}
              onChange={update}
            />
          </div>

          <button type="submit" className="booking-submit">
            Book Now
          </button>

          {sent && (
            <p className="booking-sent" role="status">
              Thanks! Send the pre-filled WhatsApp message and our team will confirm your visit.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default BookingSection
