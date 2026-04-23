import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import partnerImg from '../assets/images/reliable-and-affordable-partner.jpg'
import openMerchantImg from '../assets/images/open-your-merchant-account-today.svg'
import retailPaymentsIcon from '../assets/images/retail-payments.svg'
import virtualTerminalIcon from '../assets/images/virtual-terminal-payments.svg'
import mobilePaymentsIcon from '../assets/images/mobile-payments.svg'
import ecommercePaymentsIcon from '../assets/images/ecommerce-payments.svg'

const ChevronDown = ({ isOpen }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <ChevronDown isOpen={isOpen} />
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

const BadCredit = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "Why do I need a merchant account?",
      answer: "You can think of a merchant account as a bank account for businesses. When a customer pays with a debit or credit card, your merchant account provider sends a payment request to the card issuer to verify the card, the identity of the shopper, and make sure funds are available. The card issuer can approve the transaction and transfer the funds to the payment processing vendor. The vendor will deposit the funds in your account after taking a small fee. Without a merchant account, you won't be able to process debit and credit card payments."
    },
    {
      question: "Am I 'high risk' for having a poor credit score?",
      answer: "Before opening new merchant accounts, vendors look at the credit scores of the merchants. They typically review your business credit score and history, but some vendors will also take your personal credit report into consideration. A strong credit score shows you have a low debt ratio and a long history of paying suppliers and lenders on time. However, new merchants and businesses with a high level of debt usually have a low credit score or a limited credit history. Some vendors will deny their application or offer merchant accounts with high fees since they consider a business with bad credit as a high risk merchant."
    },
    {
      question: "What is a bad credit merchant account?",
      answer: "Bad credit merchant accounts are merchant accounts with no credit checks or low credit requirements. These accounts exist to meet the needs of merchants with low credit scores and limited credit histories. A merchant account for bad credit should have a simple qualification process and reasonable payment processing fees. Some vendors offer additional features designed to help your business grow and develop a strong financial profile. Bad credit merchant accounts are one of the services we specialize in at Best Merchant Services."
    },
    {
      question: "Does a person need good credit to open a merchant account?",
      answer: "Some vendors look at your personal credit score because it helps them assess the level of risk they are taking by working with your business. Having a high credit score and strong financial profile will make things easier. You'll be able to shop around and qualify for a merchant account with every vendor. It's possible to open a merchant account with bad personal credit, but you won't have the same options. If you don't have a solid financial profile, your best option is to work with a merchant account provider who offers merchant accounts for bad credit."
    },
    {
      question: "How can I get a merchant account with bad credit?",
      answer: "Your best option is to go through a vendor like Best Merchant Services. We work with businesses with bad credit and offer cost-effective solutions as well as a fast approval process. You'll get a response within 24 hours and will avoid the high fees that most vendors charge customers with a high-risk profile."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bad-credit-hero">
        <div className="bad-credit-hero-inner">
          <div className="bad-credit-hero-text">
            <h1>
              We Offer Merchant<br/>
              Account for Bad<br/>
              <span className="hero-underline-wrap">Credit Within 24 Hours!
                <svg className="hero-green-underline" viewBox="0 0 400 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 15 Q100 -5 200 12 Q300 25 400 8" stroke="#349044" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p style={{ marginTop: '20px' }}>A merchant account is a must-have for any modern business. Whether you operate a store or accept payments online, a merchant account allows you to receive funds from debit and credit cards.</p>
          </div>
          <div className="bad-credit-hero-box-container">
            <div className="bad-credit-hero-quote-box">
              <h3>Get A Free Quote Today!</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="bad-credit-text-section">
        <div className="bad-credit-text-inner">
          <p>
            Before you can open a merchant account, a service provider will perform a few checks, including reviewing the financial health of your business. Depending on the vendor you select, they might check your business credit score, personal credit history, or a mix of both.
          </p>
          <p>
            Bad credit can be an obstacle. Some merchants can deny your request or offer a merchant account with high processing fees if you apply with poor credit.
          </p>
          <p>
            Another potential obstacle is the processing time. Pulling your credit score and reviewing the financial health of your business can take days and even weeks.
          </p>
          <p>
            At Best Merchant Services, we specialize in making merchant accounts and payment processing solutions affordable and accessible. We work with businesses with low credit scores and limited credit histories. We'll review your application and offer a cost-effective solution regardless of your credit score.
          </p>
          <p>
            The best part? We can process your application and give you an answer in 24 hours.
          </p>
          <p>
            Do you need an affordable merchant account from a vendor willing to work around your low credit score? Read on to learn more about opening a merchant account for bad credit.
          </p>
        </div>
      </section>

      {/* Reliable & Cost Effective */}
      <section className="bad-credit-reliable-section">
        <div className="bad-credit-reliable-intro" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', color: '#111', marginBottom: '20px' }}>Get a Reliable & Cost-Effective<br/>Bad Credit Merchant Account</h2>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
            It’s important to research different options to find a bad credit merchant account that addresses the specific needs of your business. We believe we offer a better service compared to other bad credit merchant account vendors because our solutions are reliable and affordable.
          </p>
        </div>

        <div className="bad-credit-reliable-grid">
          <img src={partnerImg} alt="Reliable and Affordable Partner" />
          <div>
            <h3 style={{ fontSize: '28px', color: '#1a1a2e', marginBottom: '20px', lineHeight: '1.3' }}>Choosing a Reliable and Affordable Partner</h3>
            <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '15px' }}>
              You need to choose a reliable service provider who will manage your account as your business grows, protect your funds, make the money easy to access, and handle payments in a safe and compliant manner.
            </p>
            <p style={{ color: '#555', lineHeight: '1.8' }}>
              You also need to work with a cost-effective vendor. Some payment processing companies charge a flat fee per payment while others charge a small percentage. With credit cards representing 38% of all POS purchases and debit cards not far behind at 28%, card processing fees can add up and reduce your bottom line.
            </p>
          </div>
        </div>

        <div className="bad-credit-lists-grid">
          <div className="bad-credit-list">
            <h3>What Makes Best Merchant Services Reliable?</h3>
            <ul className="blue-bullet-list">
              <li>Over 20 years of experience in the payment processing industry.</li>
              <li>You can contact us 24/7 for support.</li>
              <li>We offer free payment processing hardware and offer low-cost options.</li>
              <li>Safely accept in-person, online, and over-the-phone payments.</li>
              <li>We review applications within 24 hours.</li>
            </ul>
          </div>
          <div className="bad-credit-list">
            <h3>Why Is Best Merchant Services an Affordable Option for High-Risk Merchants?</h3>
            <ul className="blue-bullet-list">
              <li>Some merchants offer a complex tiered pricing model. We offer flat rates.</li>
              <li>We offer transparency. You’ll find all our fees outlined clearly in our agreements.</li>
              <li>We waive application and set-up fees.</li>
              <li>Your funds will be available locally with our free same-day funding feature.</li>
            </ul>
          </div>
        </div>

        <div className="bad-credit-blue-banner">
          <div>
            <h3>Discover Best Merchant Services Advantage</h3>
            <p>Our solutions allow you to accept all forms of payment, including EMV chip, magstripe cards, and digital wallets like Apple Pay.</p>
          </div>
          <Link to="/contact-us" className="btn-green" style={{ whiteSpace: 'nowrap', textDecoration: 'none', display: 'inline-block' }}>Get A Free Quote</Link>
        </div>
      </section>

      {/* Types of Merchant Accounts */}
      <section className="bad-credit-types-section">
        <div className="bad-credit-types-header">
          <h2>Types of Bad Credit<br/>Merchant Accounts</h2>
          <div style={{ color: '#555', fontSize: '16px', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '20px' }}>Digital transformation has accelerated over the past few years. With businesses adopting hybrid models or pivoting to address the needs of the 'at home' economy, a growing number of merchants are accepting digital payments.</p>
            <p style={{ marginBottom: '20px' }}>Offering different payment options is crucial for meeting the expectations of the modern customer. While many businesses can satisfy these expectations with a fast and secure credit card processing solution for in-store payments, we offer a wide range of services so you can build a customized POS solution adapted to the needs of your target audience if your customers prefer shopping online.</p>
            <p>Here are some of the services we offer to merchants.</p>
          </div>
        </div>

        <div className="bad-credit-types-grid">
          <div className="bad-credit-type-card">
            <div className="icon-wrapper">
              <img src={retailPaymentsIcon} alt="Retail Payments" style={{ width: '60px' }} />
            </div>
            <h3>Retail Payments</h3>
            <p>Traditional payments with a credit card processing machine remain at the heart of the in-store experience. Customers expect a quick and effective checkout experience, and we deliver the hardware you need to meet this expectation.</p>
            <p>We also offer POS options for modernizing this experience and adapting it to your unique business model. For instance, you can switch to handheld POS hardware to replace the usual checkout line with a model where employees collect payments where the customer is. It's a growing trend in the restaurant industry, and it opens up new possibilities such as pop-up retail experiences.</p>
          </div>
          <div className="bad-credit-type-card">
            <div className="icon-wrapper">
              <img src={virtualTerminalIcon} alt="Virtual Terminal Payments" style={{ width: '60px' }} />
            </div>
            <h3>Virtual Terminal Payments</h3>
            <p>A virtual terminal is a platform merchants can use to process payments when a card isn't physically present. For instance, customers can make a purchase over the phone or even mail in their payment information. Virtual terminal payments are a convenient option for merchants who offer subscriptions and payment plans where customers approve recurring monthly payments in advance.</p>
            <p>Accepting a payment when the card isn't physically present means you have to take additional steps to verify the identity of the shopper and deliver a safe experience. We can help by offering merchant accounts with an innovative virtual terminal payment designed to meet safety and compliance requirements.</p>
          </div>
          <div className="bad-credit-type-card">
            <div className="icon-wrapper">
              <img src={mobilePaymentsIcon} alt="Mobile Payments" style={{ width: '60px' }} />
            </div>
            <h3>Mobile Payments</h3>
            <p>Did you know that 40% of US adults have used a mobile payment method? Adoption is growing, and retailers and other businesses have to keep up with this trend. Mobile payments can speed up the checkout process and deliver a convenient contactless experience that is ideal for curbside pickup, drive-throughs, and similar business models.</p>
            <p>With solutions like Google Pay, Samsung Pay, Apple Pay, or PayPal, consumers have access to different mobile wallet apps. These mobile wallets are helpful tools for tracking spending or replacing cash and cards.</p>
            <p>In order to accept mobile payments in your store, you'll need to use hardware that communicates with an RFID chip in the user's smartphone. We can provide this hardware along with bad credit merchant accounts that can process mobile payments from different mobile wallet providers.</p>
          </div>
          <div className="bad-credit-type-card">
            <div className="icon-wrapper">
              <img src={ecommercePaymentsIcon} alt="eCommerce Payments" style={{ width: '60px' }} />
            </div>
            <h3>eCommerce Payments</h3>
            <p>With Q3 2022 sales exceeding $265 billion, it's safe to say that eCommerce is a lucrative market. Whether you're launching an online business or want to expand an existing business by adopting a hybrid model, a merchant account for bad credit that can process online payments is a plus.</p>
            <p>Being able to process eCommerce payments is a crucial element of a great checkout experience that will keep your customers coming back for repeat purchases.</p>
            <p>E-commerce merchant accounts also need to offer a safe and transparent experience your customers can trust. At Best Merchant Services, we think that being a high-risk merchant shouldn't be an obstacle to offering a great online checkout experience.</p>
            <p>It's why we offer affordable merchant accounts that can process online payments. Even if you're a high or medium risk merchant, you can count on us to provide you with the eCommerce payment processing tools you need to succeed.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bad-credit-faq-section">
        <div className="bad-credit-faq-intro">
          <h2>FAQs</h2>
          <p>Read on to learn more about merchant accounts and how merchants with bad credit can process payments.</p>
        </div>

        <div className="bad-credit-faq-accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h3>{faq.question}</h3>
                <div className={`faq-icon ${openFaq === index ? 'open' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                    <circle cx="13" cy="13" r="13" fill="#1b53e0"></circle>
                    <line x1="13" y1="8" x2="13" y2="18" stroke="#fff" strokeWidth="2" style={{ display: openFaq === index ? 'none' : 'block' }}></line>
                    <line x1="8" y1="13" x2="18" y2="13" stroke="#fff" strokeWidth="2"></line>
                  </svg>
                </div>
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Custom Bottom CTA */}
      <section className="bad-credit-cta-section">
        <div className="bad-credit-cta-grid">
          <img src={openMerchantImg} alt="Open Merchant Account" />
          <div className="bad-credit-cta-text">
            <h2>Open Your Merchant Account Today!</h2>
            <p>Are you looking for a merchant account for a new business or want to replace your current payment processing solution with a more affordable solution? Don't let your low credit score be an obstacle.</p>
            <p>Best Merchant Services offers cost-effective solutions for businesses like yours. With simple packages that include a credit card processing machine and low fees, you'll be able to accept debit and credit card payments in no time. Plus, we offer additional services and customizable packages if you want to process mobile payments, eCommerce payments, and more.</p>
            <p><strong>We'll review your application and give you an answer in 24 hours. The application process is fast and simple because we know business owners are busy.</strong></p>
            <Link to="/contact-us" className="btn-green" style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'none' }}>Get A Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BadCredit
