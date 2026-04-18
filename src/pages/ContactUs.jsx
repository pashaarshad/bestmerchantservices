import React from 'react'
import { Link } from 'react-router-dom'
import FooterCTA from '../components/FooterCTA'

const ContactUs = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="about-hero">
        <h1 className="about-hero-title">
          <span className="about-hero-highlight">Contact Us</span>
        </h1>
      </section>

      {/* Contact Section */}
      <section className="about-section">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you. Whether you're curious about our services, need a free quote, or just want to chat — reach out!</p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1b53e0" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:8003831553">(800) 383-1553</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1b53e0" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:info@bestmerchantservices.com">info@bestmerchantservices.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1b53e0" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Best Merchant Services</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Request More Information</h3>
            <form className="contact-page-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will be in touch soon.'); }}>
              <div className="contact-form-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <textarea placeholder="Message" rows="4"></textarea>
              <button type="submit" className="btn-green">Submit</button>
            </form>
            <p className="partner-disclaimer">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA />
    </>
  )
}

export default ContactUs
