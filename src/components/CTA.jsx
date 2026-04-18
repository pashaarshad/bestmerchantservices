import React from 'react'

const CTA = () => {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-container">
        <div className="cta-image">
          <img
            src="https://bestmerchantservices.com/wp-content/uploads/2022/08/compare-and-save.svg"
            alt="Compare And Save"
          />
        </div>
        <div className="cta-content">
          <h2 className="section-title">
            Join the BMS family and get all of the solutions you need. And none you don't.
          </h2>
          <a href="#contact" className="btn-green">Get free Quote</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
