import React from 'react'
import FooterCTA from '../components/FooterCTA'
import highRiskImg from '../assets/images/high-risk-merchants-updated.jpg'
import highRiskAccountImg from '../assets/images/high-risk-merchant-account-612x1024.jpg'

const HighRisk = () => {
  return (
    <>
      <section className="about-hero">
        <h1 className="about-hero-title">
          <span className="about-hero-highlight">High Risk Payment Processor</span>
        </h1>
      </section>

      <section className="about-section" style={{ paddingBottom: '0' }}>
        <div className="about-container" style={{ display: 'block', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '20px', color: '#555', lineHeight: '1.8' }}>
            With over 20 years’ of experience, we are dedicated to providing the best rates & best service in the industry. We can offer you a merchant account within 24 hours even if your business is considered high risk.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>What Is a High Risk Payment Processor?</h2>
            <p>Businesses all around the world need payment processors to ensure that all their customer’s payments go through. Cash is the one exception to this statement. Whether it’s through a credit or debit card, check, mobile payment, or other, having a merchant account with a payment processor is necessary.</p>
            <p>Payment processors divide businesses into two categories: high-risk and low-risk. High risk merchants are less likely to get approved for a merchant account with many processors. Low-risk businesses often don’t have any problems getting approved for a payment processor.</p>
            <p>That’s why working with a payment processor that understands the needs of high risk merchants is necessary. You can’t run a successful business without a trusted payment processor.</p>
            <p>When you’re considered a high risk merchant, you need a trusted high risk payment processor to help handle your transactions. Not everyone approves high risk merchants, but that’s where we’re different! If you need a payment processor, we accept high risk merchants and offer cost-effective solutions.</p>
          </div>
          <div className="about-image">
            <img src={highRiskImg} alt="High Risk Merchants" />
          </div>
        </div>
      </section>

      <section className="about-section about-section-alt">
        <div className="services-loyal-customers" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2>High Risk Merchants Are Welcome!</h2>
          <p>Best Merchant Services is prepared to help all merchants with their payment processing, especially high risk merchants! We don’t want any business to feel left out and think like they’ll never get to open a merchant account for secure payment processing. Many other payment processors don’t accept what they deem as high risk merchants for several reasons. Most payment processors don’t want to deal with businesses that are at a greater financial risk because it’s risky for them too. While it might not seem fair to you as a business owner, they’re doing their best to protect themselves. We believe every business deserves a cost-effective and safe solution to payment processing, no matter what industry you’re in.</p>
          <p>At Best Merchant Services, we offer merchant accounts to applicants, usually within 24 hours if you qualify. And yes, high risk merchants can be eligible, and most do when applying with us. One of the main reasons that companies are deemed high risk by other payment processors is that they’re susceptible to chargebacks. Chargebacks are fraudulent charges or even charges that customers will dispute with their bank or creditor. Even if your business is at a higher risk of chargebacks, we want to help you succeed. Another common reason that you’ll see other payment processors calling your business a high risk business is because of a significant transaction rate. Many companies that have an average of $500 or more per transaction can be deemed high risk. This excludes grocery stores and gas stations. Some might consider your business high risk if you have an online or eCommerce business and accept international transactions. Since many international transactions are considered high risk for fraud, many payment processors won’t touch companies that allow this.</p>
          <a href="/contact-us" className="btn-green" style={{ marginTop: '20px', display: 'inline-block' }}>Get Free Quote</a>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container about-container-reverse">
          <div className="about-text">
            <h2>Some of the Industries We Work With</h2>
            <p>Best Merchant Services is there for you, no matter what type of business you have. We don’t only work with low-risk companies. We pride ourselves in helping businesses of all kinds with secure and fast payment processing.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', color: '#555', marginBottom: '20px' }}>
              <div>• Adult</div>
              <div>• Bail Bonds</div>
              <div>• CBD Companies</div>
              <div>• Coaching & Seminars</div>
              <div>• Collection Agencies</div>
              <div>• Consultants</div>
              <div>• Credit Repair</div>
              <div>• Dating</div>
              <div>• Debt Consolidation</div>
              <div>• Electronics</div>
              <div>• Guns and Firearms</div>
              <div>• High Volume</div>
              <div>• Lenders</div>
              <div>• Multi-Level Marketing</div>
              <div>• Nutraceuticals</div>
              <div>• Property Management</div>
              <div>• SaaS Companies</div>
              <div>• SEO & SEM Services</div>
              <div>• Subscription & Continuity</div>
              <div>• Tech Support</div>
              <div>• Tobacco & Paraphernalia</div>
              <div>• Travel-Related Services</div>
              <div>• Vape & E-Cigarettes</div>
              <div>• Web Design Services</div>
            </div>
            <p>We work with companies within these industries every day. Whether it’s to help with one payment processing solution or multiple, you can count on Best Merchant Services to be there for you.</p>
            <p>The industries we work with aren’t limited to the list above. No matter what industry your business is in if you’re deemed a high risk business, get in touch with us! We’ll assess the situation and determine if partnering with us for your payment processing needs is a beneficial partnership.</p>
          </div>
          <div className="about-image" style={{ textAlign: 'center' }}>
            <img src={highRiskAccountImg} alt="High Risk Merchant Account" style={{ maxWidth: '400px', margin: '0 auto' }} />
          </div>
        </div>
      </section>

      <section className="about-section about-section-alt">
        <div className="services-loyal-customers" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2>Open Your High Risk Merchant Account Today!</h2>
          <p>If other payment processors have deemed your business high risk, all hope isn’t lost. There are payment processors out there that will work with your high risk business and ensure that you can efficiently and securely process payments from your customers.</p>
          <p>At Best Merchant Services, we’re eager to help you with your high risk payment processing services. No matter what type of business you run, we believe everyone deserves a payment processor they can trust. Applying is easy, and we’ll get back to you within 24 hours with our answer.</p>
          <a href="/contact-us" className="btn-green" style={{ marginTop: '20px', display: 'inline-block' }}>Get Free Quote</a>
        </div>
      </section>

      <FooterCTA />
    </>
  )
}

export default HighRisk
