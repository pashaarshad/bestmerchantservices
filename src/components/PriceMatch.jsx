import React from 'react'

const PriceMatch = () => {
  return (
    <section className="price-match-section" id="price-match">
      <div className="price-match-container">
        <div className="price-match-content">
          <h4>If We Can′t Save You Money,</h4>
          <h2 className="section-title">We′ll Pay You $500</h2>
          <p>
            Email or fax us your statements and we will get back to you within one business day. If we cannot beat your current rates, we will give you $500.
          </p>
          <a href="#contact" className="btn-white-green">Get free Quote</a>
        </div>

        <div className="price-match-image">
          <img
            src="https://bestmerchantservices.com/wp-content/uploads/2022/08/we-will-pay-you.svg"
            alt="We Will Pay You $500"
          />
        </div>
      </div>
    </section>
  )
}

export default PriceMatch
