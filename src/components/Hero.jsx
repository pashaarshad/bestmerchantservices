import React, { useState } from 'react'

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '', business: '', phone: '', email: '', message: ''
  })
  const [captchaChecked, setCaptchaChecked] = useState(false)

  const bullets = [
    'FREE Equipment', 'Best Rates Offered',
    'Zero Set-Up Fees', 'POS System Specialists',
    'FREE Payment Gateway', '$500 Rate Guarantee',
    'Cash Discount Options', 'Same Day Approval',
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaChecked) {
      alert('Please verify that you are not a robot.')
      return
    }
    alert('Thank you! We will get back to you shortly.')
    setFormData({ name: '', business: '', phone: '', email: '', message: '' })
    setCaptchaChecked(false)
  }

  return (
    <section className="hero" id="headers">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">
            <strong>Start Accepting</strong>
            <svg viewBox="0 0 300 12" preserveAspectRatio="none">
              <path d="M0 8 Q75 0 150 8 Q225 16 300 8" stroke="#9bc63c" strokeWidth="3" fill="none"/>
            </svg>
          </span>
          <br />
          Credit Cards Today!
        </h1>

        <div className="hero-divider"></div>

        <ul className="hero-bullets">
          {bullets.map((item, i) => (
            <li key={i}>
              <span className="check-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="hero-divider-2"></div>

        <div className="hero-payment-cards">
          <img
            src="https://bestmerchantservices.com/wp-content/uploads/2022/08/payment-cards.png"
            alt="Payment Cards - Visa, Mastercard, American Express, Discover, Google Pay, Apple Pay"
          />
        </div>
      </div>

      <div className="hero-form-wrapper">
        <form className="hero-form" onSubmit={handleSubmit}>
          <h3>Get A Free Quote Today!</h3>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text" name="name" placeholder="Your Name"
                value={formData.name} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                type="text" name="business" placeholder="Business Name"
                value={formData.business} onChange={handleChange} required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="tel" name="phone" placeholder="Phone Number"
                value={formData.phone} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                type="email" name="email" placeholder="Email Address"
                value={formData.email} onChange={handleChange} required
              />
            </div>
          </div>

          <div className="form-group">
            <textarea
              name="message" placeholder="Your Message..."
              value={formData.message} onChange={handleChange}
            ></textarea>
          </div>

          {/* reCAPTCHA "I'm not a robot" checkbox */}
          <div className="recaptcha-container">
            <div className="recaptcha-box" onClick={() => setCaptchaChecked(!captchaChecked)}>
              <div className={`recaptcha-checkbox ${captchaChecked ? 'checked' : ''}`}>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <span className="recaptcha-label">I'm not a robot</span>
              <div className="recaptcha-branding">
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                <span>reCAPTCHA</span>
              </div>
            </div>
          </div>

          <button type="submit" className="form-submit-btn">GET STARTED</button>

          <p className="form-disclaimer">
            By providing my phone number to "Best Merchant Services", I agree and acknowledge that "Best Merchant Services" may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency will vary, and you will be able to opt out by replying "STOP". For more information on how your data will be handled please visit: <a href="#">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Hero
