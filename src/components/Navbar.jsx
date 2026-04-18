import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Our Services', to: '/our-services' },
    { label: 'Partners', to: '/partners' },
    { label: 'Contact Us', to: '/contact-us' },
  ]

  const isInternalPage = location.pathname !== '/'

  return (
    <>
      <nav className={`navbar ${scrolled || isInternalPage ? 'scrolled' : 'transparent'}`} id="navbar">
        <Link to="/" className="navbar-logo">
          <img
            src="https://bestmerchantservices.com/wp-content/uploads/2023/10/bms-logo-nav.png"
            alt="Best Merchant Services"
          />
        </Link>

        <div className="navbar-links">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className={location.pathname === link.to ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a href="tel:8003831553" className="navbar-call">
          <div className="navbar-call-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div className="navbar-call-text">
            <span>GIVE US A CALL</span>
            <span>(800) 383-1553</span>
          </div>
        </a>

        <div className="hamburger" onClick={() => setMobileOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-close" onClick={() => setMobileOpen(false)}></div>
        {links.map((link, i) => (
          <Link key={i} to={link.to} onClick={() => setMobileOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a href="tel:8003831553" onClick={() => setMobileOpen(false)}>
          (800) 383-1553
        </a>
        <Link to="/contact-us" className="mobile-cta" onClick={() => setMobileOpen(false)}>
          Get Free Quote
        </Link>
      </div>
    </>
  )
}

export default Navbar
