import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">&#9876;</span>
          <span className="logo-text">The Tower</span>
        </Link>
        <button
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
