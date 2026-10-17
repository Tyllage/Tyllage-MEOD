import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { site, navLinks } from '../data/site.js'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          {site.name}
        </NavLink>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="navbar-cta"
            href={site.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Store
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
