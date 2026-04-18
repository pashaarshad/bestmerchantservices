import React from 'react'

const Terminals = () => {
  const terminals = [
    {
      image: 'https://bestmerchantservices.com/wp-content/uploads/2022/08/dejavoo.jpg',
      title: 'DEJAVOO Z11',
      alt: 'Dejavoo Z11'
    },
    {
      image: 'https://bestmerchantservices.com/wp-content/uploads/2022/08/m006-device.jpg',
      title: 'M006',
      alt: 'M006 Device'
    },
    {
      image: 'https://bestmerchantservices.com/wp-content/uploads/2022/08/verifone.jpg',
      title: 'VERIFONE VX 680',
      alt: 'Verifone VX 680'
    },
  ]

  return (
    <section className="terminals-section" id="our-terminals">
      <div className="terminals-header">
        <h2 className="section-title">Terminals</h2>
        <p className="section-subtitle">
          Terminals, including wireless units, support all credit cards, pin debit, ebt and gift & loyalty cards.
        </p>
      </div>

      <div className="terminals-grid">
        {terminals.map((item, i) => (
          <div className="terminal-card" key={i}>
            <div className="terminal-card-image">
              <img src={item.image} alt={item.alt} />
            </div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Terminals
