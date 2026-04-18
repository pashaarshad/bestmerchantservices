import React from 'react'
import { Link } from 'react-router-dom'
import FooterCTA from '../components/FooterCTA'
import partnersImg from '../assets/images/partners-handshake.jpg'

const Partners = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="about-hero">
        <h1 className="about-hero-title">
          <span className="about-hero-highlight">Partners</span>
        </h1>
      </section>

      {/* Partners Intro */}
      <section className="about-section" id="partners-intro">
        <div className="about-container">
          <div className="about-image">
            <img
              src={partnersImg}
              alt="Partners Handshake"
            />
          </div>
          <div className="about-text">
            <h2>Partners</h2>
            <p>BMS offers our Partners customized tools and resources that you need to make sales. Every Partner needs tools that work for their sales methods; every merchant needs individualized plans. We have developed the best tools for you to complete every sale.</p>
            <a href="#becoming-partner" className="btn-green">Get started</a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="about-section about-section-alt" id="how-it-works">
        <div className="partners-how-it-works">
          <h2>How It Works</h2>
          <p>At BMS, we want our partners to have every possible resource available for making account signing a seamless process. You make the sale and submit the application; we take it from there. You have more time to focus on sales because we take care of everything else.</p>

          <div className="partners-steps">
            <div className="partner-step">
              <div className="partner-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1b53e0" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h4>Application</h4>
              <p>Simply submit the application via fax, email, or e-signature. The application will be entered and reviewed by our team.</p>
            </div>
            <div className="partner-step">
              <div className="partner-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1b53e0" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
              </div>
              <h4>Approval</h4>
              <p>Applications are generally reviewed the day they are submitted. You may have an answer within hours of your submission.</p>
            </div>
            <div className="partner-step">
              <div className="partner-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1b53e0" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h4>Shipping</h4>
              <p>The BMS in-house deployment team ships a preprogrammed terminal directly to the merchant…</p>
            </div>
          </div>
          <a href="#becoming-partner" className="btn-green">Get free Quote</a>
        </div>
      </section>

      {/* Agent Friendly Programs */}
      <section className="about-section" id="agent-friendly">
        <div className="partners-programs">
          <h2>The Most Agent Friendly Programs Out There</h2>
          <p>At BMS, we want you to make more money and maintain your customers longer. We realize that the more time you spend dealing with customer support the less time that you have to drive new business. We give you the support and resources you need to grow and to make the money you deserve.</p>

          <div className="partners-benefits-grid">
            <div className="partner-benefit">
              <div className="partner-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#349044" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4>Outstanding Support for Partners</h4>
              <p>We are here for you and your merchants, 24/7.</p>
            </div>
            <div className="partner-benefit">
              <div className="partner-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#349044" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h4>Upfront Bonus for Partners</h4>
              <p>You receive a bonus for simply signing a new account.</p>
            </div>
            <div className="partner-benefit">
              <div className="partner-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#349044" strokeWidth="2">
                  <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
                  <polyline points="17,6 23,6 23,12"/>
                </svg>
              </div>
              <h4>Sizeable Residuals for Partners</h4>
              <p>Residuals of up to 100%, on top of your bonus.</p>
            </div>
            <div className="partner-benefit">
              <div className="partner-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#349044" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                </svg>
              </div>
              <h4>Competitive Rates for Merchants</h4>
              <p>Our professionals have negotiated the best rates for you.</p>
            </div>
            <div className="partner-benefit">
              <div className="partner-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#349044" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>American Express Opt Blue for Merchants</h4>
              <p>An elite Amex program recently made available for small businesses. Merchants have one statement, one settlement, with simplified processing.</p>
            </div>
            <div className="partner-benefit">
              <div className="partner-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#349044" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h4>24-Hour Customer Service for Merchants</h4>
              <p>Merchants can reach a BMS customer service advisor whenever they need one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Becoming a Partner Form Section */}
      <section className="about-section about-section-alt" id="becoming-partner">
        <div className="partners-contact">
          <h2>Question About Becoming a Partner?</h2>
          <p>To know more benefits of being our partner write to us at <a href="mailto:partners@bestmerchantservices.com">partners@bestmerchantservices.com</a></p>
          <form className="partner-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will be in touch soon.'); }}>
            <div className="partner-form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="partner-form-row">
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
            </div>
            <textarea placeholder="Message" rows="4"></textarea>
            <button type="submit" className="btn-green">Submit</button>
          </form>
          <p className="partner-disclaimer">By providing my phone number to "Best Merchant Services", I agree and acknowledge that "Best Merchant Services" may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency will vary, and you will be able to opt out by replying "STOP". For more information on how your data will be handled please visit: <Link to="/privacy-policy">Privacy Policy</Link>.</p>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA />
    </>
  )
}

export default Partners
