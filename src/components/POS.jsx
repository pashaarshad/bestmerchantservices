import React from 'react'
import cloverStationImg from '../assets/images/clover-station.jpg'
import cloverFlexImg from '../assets/images/clover-flex.jpg'
import cloverMiniImg from '../assets/images/clover-mini.jpg'

const POS = () => {
  const posDevices = [
    { image: cloverStationImg, title: 'Clover Station', alt: 'Clover Station' },
    { image: cloverFlexImg, title: 'Clover Flex', alt: 'Clover Flex' },
    { image: cloverMiniImg, title: 'Clover Mini', alt: 'Clover Mini' },
  ]

  return (
    <section className="pos-section" id="our-pos-terminals">
      <div className="pos-header">
        <h2 className="section-title">Point of Sale</h2>
        <p className="section-subtitle">
          Terminals, including wireless units, may support credit cards, pin debit, ebt and gift & loyalty
        </p>
      </div>

      <div className="pos-grid">
        {posDevices.map((item, i) => (
          <div className="pos-card" key={i}>
            <div className="pos-card-image">
              <img src={item.image} alt={item.alt} />
            </div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default POS
