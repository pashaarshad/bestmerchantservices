import React from 'react'
import FooterCTA from '../components/FooterCTA'
import verifoneImg from '../assets/images/verifone-vx-520.png'
import paxImg from '../assets/images/pax-s80.png'
import ingenicoImg from '../assets/images/ingenico-ict-220.png'

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

const Retail = () => {
  return (
    <>
      <section className="about-hero">
        <h1 className="about-hero-title">
          <span className="about-hero-highlight">Credit Card Machines</span>
        </h1>
      </section>

      {/* Verifone */}
      <section className="about-section">
        <div className="about-container about-container-reverse">
          <div className="about-text">
            <h2>Verifone VX 520</h2>
            <p>The VeriFone VX520 has been a favorite among merchants since day one. This versatile terminal is extremely customer friendly, reliable and built to last. It handles encryption, decryption and processing at lightening speeds thanks to its powerful processor and expandable memory. Your customers enjoy faster transactions with zero hassle. Integrated NFC capabilities support alternative payments including value-added applications such as loyalty or gift card acceptance.</p>
            <p>The VX520 offers a full range of connectivity options, from dail-up and Ethernet to GPRS, with an optional battery that allows the terminal to go wherever you go. A unique communication port area underneath the device keeps countertops neat and free of clutter.</p>
            <p style={{ marginTop: '20px' }}><strong>Credit Cards are a Way of Life:</strong></p>
            <ul className="services-checklist">
              <li><CheckIcon /> Very easy to use</li>
              <li><CheckIcon /> Printer included</li>
              <li><CheckIcon /> Fastest processing</li>
              <li><CheckIcon /> Complete range of payment options</li>
              <li><CheckIcon /> Extremely reliable</li>
            </ul>
            <a href="/contact-us" className="btn-green">GET THIS FREE</a>
          </div>
          <div className="about-image">
            <img src={verifoneImg} alt="Verifone VX 520" />
          </div>
        </div>
      </section>

      {/* PAX */}
      <section className="about-section about-section-alt">
        <div className="about-container">
          <div className="about-image">
            <img src={paxImg} alt="Pax S80" />
          </div>
          <div className="about-text">
            <h2>Pax S80</h2>
            <p>PAX’s S80 is an advanced countertop POS terminal which combines innovation, durability and high performance to assure faster, more reliable transactions. The S80 comes with inbuilt contactless and powerful ARM11 processor, enabling support for multiple payment and value-added applications, making this countertop terminal one of the most reliable in the world.</p>
            <a href="/contact-us" className="btn-green">GET THIS FREE</a>
          </div>
        </div>
      </section>

      {/* Ingenico */}
      <section className="about-section">
        <div className="about-container about-container-reverse">
          <div className="about-text">
            <h2>Ingenico ICT 220</h2>
            <p>The Ingenico iCT220 brings you great flexibility, in a compact streamlined body. This standalone countertop device accommodates merchant service providers seeking a practical, economical solution without losing access to customers preferred payment methods.</p>
            <p>Lightweight, stylish and self-contained, the iCT220 will give your merchant customers the freedom to accept all types of electronic card payments without requiring a cash register or POS system interface. All iCT220 functions, from payment processing and receipt printing, to settlement reporting and brand enhancement; operate flawlessly from this single piece of equipment. This rugged, easy-to-use device is fully compliant with advanced security measures built in, making it a great choice for a small to medium size shop or vendor that needs to take cards, but can do without the cash register monitor.</p>
            <p style={{ marginTop: '20px' }}><strong>Product Highlights:</strong></p>
            <ul className="services-checklist">
              <li><CheckIcon /> No cash register or computer needed</li>
              <li><CheckIcon /> Perfect for small merchants or market vendors</li>
              <li><CheckIcon /> Extremely durable</li>
              <li><CheckIcon /> Accepts any form of electronic card payment</li>
            </ul>
            <a href="/contact-us" className="btn-green">GET THIS FREE</a>
          </div>
          <div className="about-image">
            <img src={ingenicoImg} alt="Ingenico ICT 220" />
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  )
}

export default Retail
