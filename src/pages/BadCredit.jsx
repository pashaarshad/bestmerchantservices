import React from 'react'
import FooterCTA from '../components/FooterCTA'
import partnerImg from '../assets/images/reliable-and-affordable-partner.jpg'

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

const BadCredit = () => {
  return (
    <>
      <section className="about-hero">
        <h1 className="about-hero-title">
          <span className="about-hero-highlight">Merchant Account for Bad Credit</span>
        </h1>
      </section>

      <section className="about-section" style={{ paddingBottom: '0' }}>
        <div className="about-container" style={{ display: 'block', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '20px', color: '#555', lineHeight: '1.8' }}>
            A merchant account is a must-have for any modern business. Whether you operate a store or accept payments online, a merchant account allows you to receive funds from debit and credit cards.
          </p>
          <p style={{ color: '#555', lineHeight: '1.8', marginTop: '20px' }}>
            Before you can open a merchant account, a service provider will perform a few checks, including reviewing the financial health of your business. Depending on the vendor you select, they might check your business credit score, personal credit history, or a mix of both. Bad credit can be an obstacle. Some merchants can deny your request or offer a merchant account with high processing fees if you apply with poor credit.
          </p>
          <p style={{ color: '#555', lineHeight: '1.8', marginTop: '20px' }}>
            At Best Merchant Services, we specialize in making merchant accounts and payment processing solutions affordable and accessible. We work with businesses with low credit scores and limited credit histories. We’ll review your application and offer a cost-effective solution regardless of your credit score. The best part? We can process your application and give you an answer in 24 hours.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={partnerImg} alt="Reliable Partner" />
          </div>
          <div className="about-text">
            <h2>Choosing a Reliable and Affordable Partner</h2>
            <p>You need to choose a reliable service provider who will manage your account as your business grows, protect your funds, make the money easy to access, and handle payments in a safe and compliant manner.</p>
            <p>You also need to work with a cost-effective vendor. Some payment processing companies charge a flat fee per payment while others charge a small percentage. With credit cards representing 38% of all POS purchases and debit cards not far behind at 28%, card processing fees can add up and reduce your bottom line.</p>
            <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>What Makes Us Reliable?</h3>
            <ul className="services-checklist">
              <li><CheckIcon /> Over 20 years of experience in the payment processing industry.</li>
              <li><CheckIcon /> You can contact us 24/7 for support.</li>
              <li><CheckIcon /> We offer free payment processing hardware and offer low-cost options.</li>
              <li><CheckIcon /> Safely accept in-person, online, and over-the-phone payments.</li>
              <li><CheckIcon /> We review applications within 24 hours.</li>
            </ul>
            <a href="/contact-us" className="btn-green">Get Free Quote</a>
          </div>
        </div>
      </section>

      <section className="about-section about-section-alt">
        <div className="services-loyal-customers" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2>Open Your Merchant Account Today!</h2>
          <p>Are you looking for a merchant account for a new business or want to replace your current payment processing solution with a more affordable solution? Don’t let your low credit score be an obstacle.</p>
          <p>Best Merchant Services offers cost-effective solutions for businesses like yours. With simple packages that include a credit card processing machine and low fees, you’ll be able to accept debit and credit card payments in no time. Plus, we offer additional services and customizable packages if you want to process mobile payments, eCommerce payments, and more.</p>
          <p><strong>We’ll review your application and give you an answer in 24 hours. The application process is fast and simple because we know business owners are busy.</strong></p>
          <a href="/contact-us" className="btn-green" style={{ marginTop: '20px', display: 'inline-block' }}>Get Free Quote</a>
        </div>
      </section>

      <FooterCTA />
    </>
  )
}

export default BadCredit
