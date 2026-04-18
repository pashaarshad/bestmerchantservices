import React from 'react'

const POS = () => {
  const posDevices = [
    {
      image: 'https://bestmerchantservices.com/wp-content/uploads/2022/08/clover-station.jpg',
      title: 'Clover Station',
      alt: 'Clover Station'
    },
    {
      image: 'https://bestmerchantservices.com/wp-content/uploads/2022/08/clover-flex.jpg',
      title: 'Clover Flex',
      alt: 'Clover Flex'
    },
    {
      image: 'https://bestmerchantservices.com/wp-content/uploads/2022/08/clover-mini.jpg',
      title: 'Clover Mini',
      alt: 'Clover Mini'
    },
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
