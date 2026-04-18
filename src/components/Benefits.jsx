import React from 'react'
import equipmentImg from '../assets/images/credit-card-processing-equipment.jpg'
import machinesImg from '../assets/images/credit-card-processing-machines.jpg'
import onlineImg from '../assets/images/credit-card-processing-online.jpg'

const Benefits = () => {
  const rows = [
    {
      reverse: true,
      title: 'Your Business Needs Credit Card Processing Equipment',
      paragraphs: [
        'For many consumers, cash is becoming an outdated payment method. With everything from car parks to window cleaners now in a position to accept credit card payments, if you\'re only offering customers cash options, you\'re probably losing business.',
        'No enterprise wants customers to go elsewhere simply because of credit card payment processing, which is why our cheap credit card processing solutions are such a popular choice. If you\'re looking for affordable, effective and user-friendly credit card merchant services, we\'re here to help.'
      ],
      image: equipmentImg,
      alt: 'Credit Card Processing Equipment'
    },
    {
      reverse: false,
      title: 'Customized, Cost-Effective Credit Card Processing Machines',
      paragraphs: [
        'Our aim is always to provide clients with a low cost credit card processing product that meets their needs. In many cases merchant credit card services can be obtained from us for a surprisingly small amount. Many businesses only need simple merchant credit card services, which we are happy to provide.',
        'We will work with you to identify exactly what you need your small business credit card processing facility to achieve and then provide products that match your specification. We will never sell you merchant credit card payment equipment you don\'t need and will pro-actively advise against options we feel to be unnecessary.'
      ],
      image: machinesImg,
      alt: 'Credit Card Processing Machines'
    },
    {
      reverse: true,
      title: 'We Can Help With Credit Card Processing Online',
      paragraphs: [
        'Ecommerce credit card processing is now a vital part of trading for many businesses. Consumer concerns around the security of online transactions as well as the need to minimize fraud means that specialist advice is always helpful when it comes to selecting the right credit card payment gateway. As experienced providers of merchant credit card services, we\'re always pleased to assist.',
        'Whether you need a sophisticated internet credit card processing system or need basic help with how to accept credit cards, we have the information and equipment you need.'
      ],
      image: onlineImg,
      alt: 'Credit Card Processing Online'
    },
  ]

  return (
    <section className="benefits-section" id="our-benefits">
      {rows.map((row, i) => (
        <div className={`benefit-row ${row.reverse ? 'reverse' : ''}`} key={i}>
          <div className="benefit-content">
            <h2 className="section-title">{row.title}</h2>
            {row.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
          <div className="benefit-image">
            <img src={row.image} alt={row.alt} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Benefits
