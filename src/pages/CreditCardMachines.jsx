import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FooterCTA from '../components/FooterCTA'

// Retail images
import verifoneVx520 from '../assets/images/verifone-vx-520.png'
import paxS80 from '../assets/images/pax-s80.png'
import ingenicoIct220 from '../assets/images/ingenico-ict-220.png'

// Wireless images
import verifoneVx680 from '../assets/images/verifone-vx-680.png'
import paxS90 from '../assets/images/pax-s90.png'
import ingenicoIwl252 from '../assets/images/ingenico-iwl252.png'

// Mobile images
import rambler from '../assets/images/rambler-2.0.png'
import payMobileIdtech from '../assets/images/pay-mobile-idtech.png'

// POS images
import cloverMachine from '../assets/images/clover-credit-card-machine.png'
import aldeloMachine from '../assets/images/aldelo-credit-card-machine.png'
import tabletMachine from '../assets/images/tablet-credit-card-machine.png'

// E-Commerce images
import ecommerceSoftware from '../assets/images/ecommerce-web-payment-software.png'

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <linearGradient id="checkGrad" x1="0.5" x2="0.5" y2="1">
        <stop offset="0" stopColor="#9bc63c"/>
        <stop offset="1" stopColor="#349044"/>
      </linearGradient>
    </defs>
    <circle cx="8" cy="8" r="8" fill="url(#checkGrad)"/>
    <path d="M11.5 5.5L7 10.5L4.5 8" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const tabs = [
  { id: 'retail', label: 'Retail', path: '/our-services/retail' },
  { id: 'wireless', label: 'Wireless', path: '/our-services/wireless' },
  { id: 'mobile', label: 'Mobile', path: '/our-services/mobile' },
  { id: 'pos', label: 'POS System', path: '/our-services/pos-system' },
  { id: 'ecommerce', label: 'E-Commerce', path: '/our-services/e-commerce' },
]

/* ─── Product card component ─── */
const ProductCard = ({ product, reverse }) => (
  <section className={`ccm-product-section ${reverse ? 'ccm-reverse' : ''}`}>
    <div className="ccm-product-inner">
      <div className="ccm-product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="ccm-product-text">
        <h3>{product.name}</h3>
        {product.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {product.highlightsTitle && (
          <h5 className="ccm-highlights-title">{product.highlightsTitle}</h5>
        )}
        {product.highlights && (
          <ul className="ccm-checklist">
            {product.highlights.map((item, i) => (
              <li key={i}><CheckIcon /> {item}</li>
            ))}
          </ul>
        )}
        <Link to="/contact-us" className="btn-green">GET THIS FREE</Link>
      </div>
    </div>
  </section>
)

/* ─── Tab content data ─── */
const tabContent = {
  retail: [
    {
      name: 'Verifone VX 520',
      image: verifoneVx520,
      description: [
        'The VeriFone VX520 has been a favorite among merchants since day one. This versatile terminal is extremely customer friendly, reliable and built to last. It handles encryption, decryption and processing at lightening speeds thanks to its powerful processor and expandable memory. Your customers enjoy faster transactions with zero hassle. Integrated NFC capabilities support alternative payments including value-added applications such as loyalty or gift card acceptance.',
        'The VX520 offers a full range of connectivity options, from dail-up and Ethernet to GPRS, with an optional battery that allows the terminal to go wherever you go. A unique communication port area underneath the device keeps countertops neat and free of clutter.'
      ],
      highlightsTitle: 'Credit Cards are a Way of Life:',
      highlights: [
        'Very easy to use',
        'Printer included',
        'Fastest processing',
        'Complete range of payment options',
        'Extremely reliable'
      ]
    },
    {
      name: 'Pax S80',
      image: paxS80,
      description: [
        "PAX's S80 is an advanced countertop POS terminal which combines innovation, durability and high performance to assure faster, more reliable transactions. The S80 comes with inbuilt contactless and powerful ARM11 processor, enabling support for multiple payment and value-added applications, making this countertop terminal one of the most reliable in the world."
      ],
      highlightsTitle: null,
      highlights: null
    },
    {
      name: 'Ingenico ICT 220',
      image: ingenicoIct220,
      description: [
        'The Ingenico iCT220 brings you great flexibility, in a compact streamlined body. This standalone countertop device accommodates merchant service providers seeking a practical, economical solution without losing access to customers preferred payment methods.',
        'Lightweight, stylish and self-contained, the iCT220 will give your merchant customers the freedom to accept all types of electronic card payments without requiring a cash register or POS system interface. All iCT220 functions, from payment processing and receipt printing, to settlement reporting and brand enhancement; operate flawlessly from this single piece of equipment. This rugged, easy-to-use device is fully compliant with advanced security measures built in, making it a great choice for a small to medium size shop or vendor that needs to take cards, but can do without the cash register monitor.'
      ],
      highlightsTitle: 'Product Highlights:',
      highlights: [
        'No cash register or computer needed',
        'Perfect for small merchants or market vendors',
        'Extremely durable',
        'Accepts any form of electronic card payment'
      ]
    }
  ],
  wireless: [
    {
      name: 'Verifone VX 680',
      image: verifoneVx680,
      description: [
        'Carry brilliance and complete transactions in a small, portable, handheld device. Merchants on the move, from delivery services and stadium vendors to restaurant pay-at-the-table service providers can process on-the-spot transactions with minimal consumer waiting time'
      ],
      highlightsTitle: null,
      highlights: null
    },
    {
      name: 'Pax S90',
      image: paxS90,
      description: [
        'The PAX S90 mobile credit card terminal is designed to offer superior wireless performance. It goes with you wherever you go. Extremely durable and stylish, this unit is one of our most popular terminals for merchants today. Options included for single SIM or dual SIM functionality, and with high capacity lithium-ion rechargeable battery.',
        'The S90 is equipped with the ARM9 processor assuring super fast transactions anywhere, and every time. Top-of-the line security features ensure this unit will be secure and compliant with any future PCI/EMV processing requirements.'
      ],
      highlightsTitle: 'Product Highlights:',
      highlights: [
        'Thermal high-speed printer included',
        'High capacity battery',
        'Excellent wireless performance',
        'Fast transactions'
      ]
    },
    {
      name: 'Ingenico IWL 252',
      image: ingenicoIwl252,
      description: [
        "Ingenico's iWL252 solutions use commercial grade Bluetooth connectivity, enabling merchants to accept all forms of electronic payment quickly, easily and securely. They can accept electronic payments anywhere — in-store, curbside or at the table. The iWL252 device allows customers the convenience to pay at the location services are received. Ingenico's iWL series products are small, lightweight and convenient."
      ],
      highlightsTitle: null,
      highlights: null
    }
  ],
  mobile: [
    {
      name: 'Anywhere RAMBLER 2.0',
      image: rambler,
      description: [
        'Rambler features an affordable magnetic-stripe reader than can be attached to a smartphone to enable credit card-swiping and instant authorization. Merchants using Rambler realize lower cost transactions by taking advantage of card-present credit card processing rates, with the option of multi-user application'
      ],
      highlightsTitle: null,
      highlights: null
    },
    {
      name: '1st Pay Mobile Idtech',
      image: payMobileIdtech,
      description: [
        'Affordable magnetic-stripe reader than can be attached to a smartphone to enable credit card-swiping and instant authorization. Merchants using Rambler realize lower cost transactions by taking advantage of card-present credit card processing rates while linking with your gateway. It also has multi-user application capability.'
      ],
      highlightsTitle: null,
      highlights: null
    }
  ],
  pos: [
    {
      name: 'Clover',
      image: cloverMachine,
      description: [
        'Clover replaces your cash register, payment terminal, receipt printer, and barcode scanner with an integrated suite of products including a mini Clover, and Clover Mobile. Accept credit cards, EMV, and Apple Pay with a stylish looking POS. Get to know your business and your customers better with reports you can run at work or from home and applications that streamline your workload.'
      ],
      highlightsTitle: null,
      highlights: null
    },
    {
      name: 'Aldelo',
      image: aldeloMachine,
      description: [
        'Increase Efficiency, and Reduce Complexity- Aldelo POS Pro point of sale and management solution empowers restauranteurs to increase efficiency and reduce complexity. It is a super simple to use, feature rich and cost effective solution without the need for prior computer experience.'
      ],
      highlightsTitle: null,
      highlights: null
    },
    {
      name: 'Tablet Based',
      image: tabletMachine,
      description: [
        'There are many different operating systems to integrate with the tablets that you already have- All the benefits without all the costs. Pick a solution that is right for you, or let BMS assist you.'
      ],
      highlightsTitle: null,
      highlights: null
    }
  ],
  ecommerce: [
    {
      name: 'E-Commerce Payment Solutions',
      image: ecommerceSoftware,
      description: [
        'An Authorize.Net Payment Gateway account allows you to accept credit cards and electronic checks from websites and Internet auction sites. These solutions are designed specifically for small-to-medium-sized merchants and provide them with all the tools needed to accept payments online.',
        'Whether you need a simple Buy Now button or a fully integrated shopping cart, we have a solution for you. Our e-commerce solutions are secure, reliable, and easy to set up.'
      ],
      highlightsTitle: null,
      highlights: null
    }
  ]
}

const CreditCardMachines = ({ initialTab = 'retail' }) => {
  const [activeTab, setActiveTab] = useState(initialTab)
  const navigate = useNavigate()

  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  const products = tabContent[activeTab] || []

  return (
    <>
      {/* Hero */}
      <section className="ccm-hero">
        <div className="ccm-hero-inner">
          <h1>
            <span className="hero-underline-wrap">
              Credit Card Machines
              <svg className="hero-green-underline" viewBox="0 0 400 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15 Q100 -5 200 12 Q300 25 400 8" stroke="#349044" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="ccm-tabs-section">
        <div className="ccm-tabs-inner">
          <nav className="ccm-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`ccm-tab ${activeTab === tab.id ? 'ccm-tab-active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id)
                  navigate(tab.path)
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Products */}
      <section className="ccm-products-section">
        <div className="ccm-products-inner">
          {products.map((product, index) => (
            <ProductCard
              key={`${activeTab}-${index}`}
              product={product}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      <FooterCTA />
    </>
  )
}

export default CreditCardMachines
