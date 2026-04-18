import React from 'react'
import FooterCTA from '../components/FooterCTA'
import aboutImg from '../assets/images/about-best-merchant-services.jpg'
import expertImg from '../assets/images/expert-solutions.jpg'
import whyBmsImg from '../assets/images/why-best-merchant-services.jpg'
import lowRatesImg from '../assets/images/merchant-services-low-rates.jpg'

const AboutUs = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="about-hero">
        <h1 className="about-hero-title">
          <span className="about-hero-highlight">About Us</span>
        </h1>
      </section>

      {/* About Best Merchant Services */}
      <section className="about-section" id="about-us">
        <div className="about-container">
          <div className="about-image">
            <img
              src={aboutImg}
              alt="About Best Merchant Services"
            />
          </div>
          <div className="about-text">
            <h2>About Best Merchant Services</h2>
            <p>With over 20 years of industry experience, the BMS team specializes in streamlining your payment needs and providing you with the best of service at the lowest cost possible.</p>
            <p>Our philosophy of building relationships with our customers and providing personalized solutions is what sets BMS apart from the competition. Following this belief system, we will always provide you with exactly what you need and never sell you anything you don't.</p>
            <p>BMS is an established provider in the payment processing industry. With more than two decades of experience, we have earned the respect of our clients by providing them with the latest in technology along with our superior service.</p>
            <a href="/contact-us" className="btn-green">Get free Quote</a>
          </div>
        </div>
      </section>

      {/* Expert Solutions */}
      <section className="about-section about-section-alt" id="expert-solutions">
        <div className="about-container about-container-reverse">
          <div className="about-text">
            <h2>Expert Solutions</h2>
            <p>We provide payment processing solutions to merchants in virtually every industry across the U.S. BMS delivers credit and debit card processing, e-commerce solutions, gift and loyalty card programs, and more.</p>
            <p>Effective, secure gateways for payment with the flexibility to fit your business. That's what BMS does best. Small business owners can finally realize their dreams with our help. We are proud to be a part of their journey.</p>
            <p>Expertise, reliability, stability, security, confidence, and cutting-edge technology are what we have to offer. Let us streamline your payment process. It's what we do best.</p>
            <a href="/contact-us" className="btn-green">Get free Quote</a>
          </div>
          <div className="about-image">
            <img
              src={expertImg}
              alt="Expert Solutions"
            />
          </div>
        </div>
      </section>

      {/* Why Best Merchant Services */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image about-image-cover">
            <img
              src={whyBmsImg}
              alt="Why Best Merchant Services"
            />
          </div>
          <div className="about-text">
            <h2>Why Best Merchant Services?</h2>
            <p className="about-subtitle">Because we Make it Painless.</p>
            <p>There's a reason more businesses choose BMS for their payment solutions. Sure, we provide similar services to other payment companies, but we customize plans to meet your unique needs. We won't sell you anything you don't need. We work with you to understand what you need most and help you implement those services.</p>
            <p>At BMS we take the guesswork out of accepting credit cards. We help businesses waste less time on all the nuances of merchant services. This way you can spend more time on what really matters, running your business.</p>
            <a href="/contact-us" className="btn-green">Get free Quote</a>
          </div>
        </div>
      </section>

      {/* We Will Pay You $500 */}
      <section className="about-section about-section-alt" id="pay-500">
        <div className="about-container">
          <div className="about-text">
            <h2>We Will Pay You $500!</h2>
            <p className="about-subtitle">Here's how it Works.</p>
            <p>It is really easy, just email or fax us your statements and we will get back to you within one business day. If we cannot beat your current rates, we will give you $500. No hassles, No gimmicks. Make sure to include your contact information with your statement, so we know where to send your money.</p>
            <a href="/contact-us" className="btn-green about-btn-desktop">Get free Quote</a>
          </div>
          <div className="about-info-list">
            <div className="info-list-item">
              <div className="info-list-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1b53e0" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <div className="info-list-content">
                <h4>What's Needed?</h4>
                <p>2 consecutive months of processing statements. Statements that are older than 3 months of date of submission are not eligible.</p>
                <p>The provided information must be official statements that disclose rates, and have no missing pages.</p>
              </div>
            </div>
            <div className="info-list-item">
              <div className="info-list-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1b53e0" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="info-list-content">
                <h4>Email Directions/Form</h4>
                <p>Send an email to: <a href="mailto:info@bestmerchantservices.com">info@bestmerchantservices.com</a>. Include "Beat My Rate" in the subject or "re." line. Add the above required statements to your fax. We will respond within 1 day with your results.</p>
              </div>
            </div>
            <div className="info-list-item">
              <div className="info-list-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1b53e0" strokeWidth="2">
                  <path d="M5 7h14M5 7a2 2 0 01-2-2h18a2 2 0 01-2 2M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7"/>
                  <rect x="9" y="11" width="6" height="4"/>
                </svg>
              </div>
              <div className="info-list-content">
                <h4>Fax Directions/Form</h4>
                <p>Send a fax to: <a href="tel:8185617773">(818) 561-7773</a> with a cover sheet addressed to Beat My Rate Program. Add the above required processing statements to your fax. We will respond within 1 day with your results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Low Rates */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image about-image-cover">
            <img
              src={lowRatesImg}
              alt="Merchant Services Low Rates"
            />
          </div>
          <div className="about-text">
            <h2>Low Rates</h2>
            <p>BMS has been one of the top merchant account service leaders for more than 20 years. With our experience and reputation, we have served over 70,000 customers. We use the highest levels of security to protect payments and stay ahead of hackers and data thieves.</p>
            <p>Merchants choose us for more than our rates, but if rates are what you are looking for, look no further. Ours are the low in the industry.</p>
            <a href="/contact-us" className="btn-green">Get free Quote</a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA />
    </>
  )
}

export default AboutUs
