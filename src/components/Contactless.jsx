import React from 'react'

const ContactlessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 60 60">
    <circle cx="30" cy="30" r="30" fill="#eceff8"/>
    <path d="M22 20l2 5v5l1 3 1 2 2 2 3 0 3-2 2-1 0-3 0-6 1-4-1-2-2-2-1 0-1 2v4l-1 1-1 1-1-1-1-3-2-2-2-1z" fill="#1b53e0" opacity="0.3" transform="translate(5,5)"/>
    <path d="M30 25a5 5 0 0 1 4 2" fill="none" stroke="#1b53e0" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 22a8 8 0 0 1 7 3" fill="none" stroke="#1b53e0" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 38c0-3 2-5 5-5h10c3 0 5 2 5 5v3H20z" fill="#1b53e0" opacity="0.2"/>
    <rect x="22" y="25" width="16" height="22" rx="2" fill="none" stroke="#1b53e0" strokeWidth="2"/>
    <line x1="22" y1="42" x2="38" y2="42" stroke="#1b53e0" strokeWidth="2"/>
    <circle cx="30" cy="45" r="1.5" fill="#1b53e0"/>
  </svg>
)

const Contactless = () => {
  return (
    <section className="contactless-section" id="contactless-payment">
      <div className="contactless-container">
        <div className="contactless-image">
          <img
            src="https://bestmerchantservices.com/wp-content/uploads/2022/08/contactless-payment.jpg"
            alt="Contactless Payment"
          />
        </div>

        <div className="contactless-right">
          <h2 className="section-title" style={{ fontStyle: 'italic' }}>
            Are you ready for Contact Less Payment
          </h2>

          <div className="contactless-item">
            <div className="contactless-icon">
              <ContactlessIcon />
            </div>
            <div className="contactless-content">
              <h4>Contactless Payments</h4>
              <p>
                Customers are now prepared to pay you with their wireless device. Don't lose sales due to outdated equipment. Ask your BMS representative about our contactless payment systems.
              </p>
            </div>
          </div>

          <div className="contactless-divider"></div>

          <div className="contactless-item">
            <div className="contactless-icon">
              <ContactlessIcon />
            </div>
            <div className="contactless-content">
              <h4>Apple Pay and Google Wallet</h4>
              <p>
                Our systems are compatible with all wireless devices and are seamless and often FREE with activation of a new BMS account. Accept payments from your customers phone with our state of the art devices.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn-green">Get free Quote</a>
        </div>
      </div>
    </section>
  )
}

export default Contactless
