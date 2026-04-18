import React from 'react'
import FooterCTA from '../components/FooterCTA'

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <linearGradient id="checkGradient" x1="0.5" x2="0.5" y2="1">
        <stop offset="0" stopColor="#9bc63c"/>
        <stop offset="1" stopColor="#349044"/>
      </linearGradient>
    </defs>
    <circle cx="8" cy="8" r="8" fill="url(#checkGradient)"/>
    <path d="M11.5 5.5L7 10.5L4.5 8" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const OurServices = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="about-hero">
        <h1 className="about-hero-title">
          <span className="about-hero-highlight">Our Services</span>
        </h1>
      </section>

      {/* Card Acceptance Simplified */}
      <section className="about-section" id="chip-cards">
        <div className="about-container">
          <div className="about-image about-image-cover">
            <img
              src="https://bestmerchantservices.com/wp-content/uploads/2022/09/merchat-services-chip-cards-services.jpg"
              alt="Merchant Services Chip Cards"
            />
          </div>
          <div className="about-text">
            <h2>Card Acceptance Simplified</h2>
            <p><strong>Offer your customers the ability to pay with the card they want to, without a higher rate.</strong></p>
            <p>American Express® is offering a new program to merchants. This program is exclusive to a select number of payment service providers. At BMS, we are part of that elite network. Payments from Amex can now be processed in the same way as other major credit cards for a simplified workflow system.</p>
            <p><strong>Learn about the benefits:</strong></p>
            <ul className="services-checklist">
              <li><CheckIcon /> One deposit for all payment cards – matching the speed of other payment cards</li>
              <li><CheckIcon /> Next day deposits</li>
              <li><CheckIcon /> One simplified statement to manage all card transactions</li>
              <li><CheckIcon /> One customer service contact</li>
            </ul>
            <a href="/contact-us" className="btn-green">Get free Quote</a>
          </div>
        </div>
      </section>

      {/* Small Business Loans */}
      <section className="about-section about-section-alt" id="small-business-loans">
        <div className="about-container about-container-reverse">
          <div className="about-text">
            <h2>Small Business Loans</h2>
            <p><strong>Let Your Future Pay for Your Present</strong></p>
            <p>Are you considering an expansion or further purchases for your business?</p>
            <p>BMS offers cash advances against future sales. No need to take out a loan. Pay us back with a percentage of your credit card transactions. No payment books or due dates, simply sign up for the cash advance program, and after approval receive your funds.</p>
            <p>The process is quick, easy, and exclusive.</p>
            <p>We want to help you pay for today's improvements with tomorrow's sales</p>
          </div>
          <div className="about-image about-image-cover">
            <img
              src="https://bestmerchantservices.com/wp-content/uploads/2022/09/merchant-services-small-business-loans.jpg"
              alt="Small Business Loans"
            />
          </div>
        </div>

        {/* How It Works */}
        <div className="services-how-it-works">
          <h2>How It Works</h2>
          <p>Simply fill out our Small Business Loan Application. Once submitted, just sit back and relax. We will send you a quick response on your options for percentages and length of term. And remember, unlike a loan, there is no fixed payment schedule. Repayment is based on your processing. BMS will not change the terms of the agreement, unless it is mutually agreed upon.</p>
          <a href="/contact-us" className="btn-green">Get free Quote</a>
        </div>
      </section>

      {/* High Risk Merchant Welcome */}
      <section className="about-section" id="high-risk">
        <div className="about-container">
          <div className="about-image about-image-cover">
            <img
              src="https://bestmerchantservices.com/wp-content/uploads/2022/09/merchant-services-high-risk.jpg"
              alt="High Risk Merchant Services"
            />
          </div>
          <div className="about-text">
            <h2>High Risk Merchant Welcome</h2>
            <p><strong>Let Your Future Pay for Your Present</strong></p>
            <p>Have you been told that you are a high risk merchant? This label may have been related to your business or industry being deemed as risky, you run an offshore business, or even that your marketing is raising some flags. Your credit score may be low. There are several reasons that could apply to your business. Believe it or not, there is a huge list of industries in the high risk category. If yours is one of them, don't worry. We can help. We will provide a free assessment of your business and create a plan that will allow you to take credit card payments. BMS will help you get your business out of the "high risk" category and into the "successful" one.</p>
            <a href="/contact-us" className="btn-green">Get free Quote</a>
          </div>
        </div>
      </section>

      {/* Our Loyal Customers - Gift & Loyalty Cards */}
      <section className="about-section about-section-alt" id="our-customers">
        <div className="services-loyal-customers">
          <h2>Our Loyal Customers</h2>
          <p className="about-subtitle"><strong>Its all in the Details.</strong></p>
          <p>By offering Gift and Loyalty cards, your business can thrive even more. You will experience increased cash flow and consumer spending, not to mention increasing repeat business from your current customers.</p>

          <div className="services-cards-grid">
            <div className="services-card">
              <h4>Gift Cards</h4>
              <ul className="services-checklist">
                <li><CheckIcon /> Predesigned by our graphic design team or customized by you</li>
                <li><CheckIcon /> Online tracking</li>
                <li><CheckIcon /> Multiple franchise option to share the same card</li>
                <li><CheckIcon /> Supports credits, refunds, rebates, and incentives</li>
                <li><CheckIcon /> Your business benefits for prepaid services as well as unredeemed cards</li>
                <li><CheckIcon /> More secure and desirable than traditional gift certificates</li>
              </ul>
            </div>
            <div className="services-card">
              <h4>Loyalty Cards</h4>
              <ul className="services-checklist">
                <li><CheckIcon /> Predesigned by our graphic design team or customized by you</li>
                <li><CheckIcon /> Multiple franchise option to share the same card</li>
                <li><CheckIcon /> Rewards and point balances available online</li>
                <li><CheckIcon /> Consumers spend more to earn rewards</li>
                <li><CheckIcon /> Effective marketing promotional and customer retention tool</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA />
    </>
  )
}

export default OurServices
