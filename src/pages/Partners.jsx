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

      {/* How It Works - 2-column layout matching original */}
      <section className="about-section about-section-alt" id="how-it-works">
        <div className="partners-how-it-works-split">
          <div className="partners-how-left">
            <h2>How It Works</h2>
            <p>At BMS, we want our partners to have every possible resource available for making account signing a seamless process. You make the sale and submit the application; we take it from there. You have more time to focus on sales because we take care of everything else.</p>
            <a href="#becoming-partner" className="btn-green">GET STARTED</a>
          </div>
          <div className="partners-how-right">
            <div className="partner-step-row">
              <div className="partner-step-icon-img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50" height="50">
                  <rect x="12" y="8" width="40" height="48" rx="3" fill="#e8eef9" stroke="#4a7cdc" strokeWidth="2"/>
                  <path d="M22 4h20v8a2 2 0 01-2 2H24a2 2 0 01-2-2V4z" fill="#4a7cdc"/>
                  <rect x="20" y="20" width="24" height="2" rx="1" fill="#4a7cdc" opacity="0.5"/>
                  <rect x="20" y="26" width="18" height="2" rx="1" fill="#4a7cdc" opacity="0.5"/>
                  <rect x="20" y="32" width="24" height="2" rx="1" fill="#4a7cdc" opacity="0.5"/>
                  <rect x="20" y="38" width="14" height="2" rx="1" fill="#4a7cdc" opacity="0.5"/>
                  <path d="M38 52l-6-3-6 3V40h12z" fill="#4a7cdc" opacity="0.3"/>
                </svg>
              </div>
              <div className="partner-step-text">
                <h4>Application</h4>
                <p>Simply submit the application via fax, email, or e-signature. The application will be entered and reviewed by our team.</p>
              </div>
            </div>
            <div className="partner-step-row">
              <div className="partner-step-icon-img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50" height="50">
                  <rect x="6" y="16" width="40" height="32" rx="3" fill="#e8eef9" stroke="#4a7cdc" strokeWidth="2"/>
                  <path d="M6 22l20 12 20-12" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <circle cx="48" cy="20" r="12" fill="#4dbd74" stroke="#fff" strokeWidth="2"/>
                  <path d="M43 20l3 3 7-7" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="partner-step-text">
                <h4>Approval</h4>
                <p>Applications are generally reviewed the day they are submitted. You may have an answer within hours of your submission.</p>
              </div>
            </div>
            <div className="partner-step-row">
              <div className="partner-step-icon-img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50" height="50">
                  <rect x="4" y="20" width="36" height="22" rx="3" fill="#e8eef9" stroke="#4a7cdc" strokeWidth="2"/>
                  <path d="M40 28h14l6 8v6H40V28z" fill="#4a7cdc" opacity="0.3" stroke="#4a7cdc" strokeWidth="2"/>
                  <circle cx="16" cy="46" r="6" fill="#4a7cdc"/>
                  <circle cx="16" cy="46" r="3" fill="#e8eef9"/>
                  <circle cx="48" cy="46" r="6" fill="#4a7cdc"/>
                  <circle cx="48" cy="46" r="3" fill="#e8eef9"/>
                </svg>
              </div>
              <div className="partner-step-text">
                <h4>Shipping</h4>
                <p>The BMS in-house deployment team ships a preprogrammed terminal directly to the merchant…</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Friendly Programs - icon-left, text-right cards */}
      <section className="about-section" id="agent-friendly">
        <div className="partners-programs">
          <h2>The Most Agent Friendly Programs Out There</h2>
          <p>At BMS, we want you to make more money and maintain your customers longer. We realize that the more time you spend dealing with customer support the less time that you have to drive new business. We give you the support and resources you need to grow and to make the money you deserve.</p>

          <div className="partners-benefits-grid">
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon-circle">
                <svg viewBox="0 0 48 48" width="28" height="28">
                  <path d="M12 32c-2 0-4 2-4 4v4h16v-4c0-2-2-4-4-4H12z" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <circle cx="16" cy="24" r="5" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <path d="M28 32c-2 0-4 2-4 4" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <circle cx="32" cy="24" r="5" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <path d="M8 40h32" fill="none" stroke="#4a7cdc" strokeWidth="2" opacity="0.3"/>
                </svg>
              </div>
              <div className="partner-benefit-text">
                <h4>Outstanding Support for Partners</h4>
                <p>We are here for you and your merchants, 24/7.</p>
              </div>
            </div>
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon-circle">
                <svg viewBox="0 0 48 48" width="28" height="28">
                  <circle cx="24" cy="24" r="14" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <line x1="24" y1="14" x2="24" y2="34" stroke="#4a7cdc" strokeWidth="2"/>
                  <path d="M30 18h-8a4 4 0 000 8h4a4 4 0 010 8h-8" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                </svg>
              </div>
              <div className="partner-benefit-text">
                <h4>Upfront Bonus for Partners</h4>
                <p>You receive a bonus for simply signing a new account.</p>
              </div>
            </div>
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon-circle">
                <svg viewBox="0 0 48 48" width="28" height="28">
                  <polyline points="6,34 18,20 26,28 42,12" fill="none" stroke="#4a7cdc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="34,12 42,12 42,20" fill="none" stroke="#4a7cdc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="partner-benefit-text">
                <h4>Sizeable Residuals for Partners</h4>
                <p>Residuals of up to 100%, on top of your bonus.</p>
              </div>
            </div>
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon-circle">
                <svg viewBox="0 0 48 48" width="28" height="28">
                  <circle cx="24" cy="14" r="6" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <path d="M24 22v16" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <path d="M18 28h12" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <circle cx="24" cy="42" r="4" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                </svg>
              </div>
              <div className="partner-benefit-text">
                <h4>Competitive Rates for Merchants</h4>
                <p>Our professionals have negotiated the best rates for you.</p>
              </div>
            </div>
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon-circle">
                <svg viewBox="0 0 48 48" width="28" height="28">
                  <rect x="8" y="10" width="32" height="22" rx="3" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <path d="M8 18h32" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <rect x="12" y="24" width="10" height="4" rx="1" fill="#4a7cdc" opacity="0.3"/>
                  <circle cx="24" cy="42" r="4" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <line x1="24" y1="32" x2="24" y2="38" stroke="#4a7cdc" strokeWidth="2"/>
                </svg>
              </div>
              <div className="partner-benefit-text">
                <h4>American Express Opt Blue for Merchants</h4>
                <p>An elite Amex program recently made available for small businesses. Merchants have one statement, one settlement, with simplified processing.</p>
              </div>
            </div>
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon-circle">
                <svg viewBox="0 0 48 48" width="28" height="28">
                  <path d="M40 30v6a4 4 0 01-4 4H12a4 4 0 01-4-4v-6" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <path d="M14 18a10 10 0 0120 0" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <circle cx="24" cy="14" r="3" fill="#4a7cdc" opacity="0.3"/>
                  <path d="M18 26h12" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                  <path d="M20 30h8" fill="none" stroke="#4a7cdc" strokeWidth="2"/>
                </svg>
              </div>
              <div className="partner-benefit-text">
                <h4>24-Hour Customer Service for Merchants</h4>
                <p>Merchants can reach a BMS customer service advisor whenever they need one.</p>
              </div>
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
