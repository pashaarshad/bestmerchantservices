import React from 'react'
import { Link } from 'react-router-dom'
import footerCtaImg from '../assets/images/footer-cta.svg'

const FooterCTA = () => {
  return (
    <section className="footer-cta-section" id="footer-cta">
      <div className="footer-cta-container">
        <h2 className="footer-cta-title">
          Join the BMS family and get all of the solutions you need. And none you don't.
        </h2>
        <Link to="/contact-us" className="btn-footer-cta">GET FREE QUOTE</Link>
        <div className="footer-cta-image">
          <img
            src={footerCtaImg}
            alt="BMS Payment Illustration"
          />
        </div>
      </div>
    </section>
  )
}

export default FooterCTA
