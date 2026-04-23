import React from 'react'
import FooterCTA from '../components/FooterCTA'
import verifoneImg from '../assets/images/verifone-vx-520.png'
import paxImg from '../assets/images/pax-s80.png'
import ingenicoImg from '../assets/images/ingenico-ict-220.png'

const Retail = () => {
  return (
    <>
      <section className="about-hero">
        <h1 className="about-hero-title">
          <span className="about-hero-highlight">Credit Card Machines</span>
        </h1>
      </section>

      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Verifone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-5">Verifone VX 520</h2>
              <p className="text-[#555] mb-5 leading-relaxed">
                The VeriFone VX520 has been a favorite among merchants since day one. This versatile terminal is extremely customer friendly, reliable and built to last. It handles encryption, decryption and processing at lightening speeds thanks to its powerful processor and expandable memory. Your customers enjoy faster transactions with zero hassle. Integrated NFC capabilities support alternative payments including value-added applications such as loyalty or gift card acceptance.
              </p>
              <p className="text-[#555] mb-5 leading-relaxed">
                The VX520 offers a full range of connectivity options, from dail-up and Ethernet to GPRS, with an optional battery that allows the terminal to go wherever you go. A unique communication port area underneath the device keeps countertops neat and free of clutter.
              </p>
              <h3 className="font-bold text-xl mb-4">Credit Cards are a Way of Life:</h3>
              <ul className="list-disc pl-5 mb-6 text-[#555] space-y-2">
                <li>Very easy to use</li>
                <li>Printer included</li>
                <li>Fastest processing</li>
                <li>Complete range of payment options</li>
                <li>Extremely reliable</li>
              </ul>
              <a href="/contact-us" className="btn-green inline-block">GET THIS FREE</a>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img src={verifoneImg} alt="Verifone VX 520" className="max-w-[80%]" />
            </div>
          </div>

          {/* PAX */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div className="flex justify-center">
              <img src={paxImg} alt="Pax S80" className="max-w-[80%]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-5">Pax S80</h2>
              <p className="text-[#555] mb-6 leading-relaxed">
                PAX’s S80 is an advanced countertop POS terminal which combines innovation, durability and high performance to assure faster, more reliable transactions. The S80 comes with inbuilt contactless and powerful ARM11 processor, enabling support for multiple payment and value-added applications, making this countertop terminal one of the most reliable in the world.
              </p>
              <a href="/contact-us" className="btn-green inline-block">GET THIS FREE</a>
            </div>
          </div>

          {/* Ingenico */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-5">Ingenico ICT 220</h2>
              <p className="text-[#555] mb-5 leading-relaxed">
                The Ingenico iCT220 brings you great flexibility, in a compact streamlined body. This standalone countertop device accommodates merchant service providers seeking a practical, economical solution without losing access to customers preferred payment methods.
              </p>
              <p className="text-[#555] mb-5 leading-relaxed">
                Lightweight, stylish and self-contained, the iCT220 will give your merchant customers the freedom to accept all types of electronic card payments without requiring a cash register or POS system interface. All iCT220 functions, from payment processing and receipt printing, to settlement reporting and brand enhancement; operate flawlessly from this single piece of equipment. This rugged, easy-to-use device is fully compliant with advanced security measures built in, making it a great choice for a small to medium size shop or vendor that needs to take cards, but can do without the cash register monitor.
              </p>
              <h3 className="font-bold text-xl mb-4">Product Highlights:</h3>
              <ul className="list-disc pl-5 mb-6 text-[#555] space-y-2">
                <li>No cash register or computer needed</li>
                <li>Perfect for small merchants or market vendors</li>
                <li>Extremely durable</li>
                <li>Accepts any form of electronic card payment</li>
              </ul>
              <a href="/contact-us" className="btn-green inline-block">GET THIS FREE</a>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img src={ingenicoImg} alt="Ingenico ICT 220" className="max-w-[80%]" />
            </div>
          </div>

        </div>
      </section>

      <FooterCTA />
    </>
  )
}

export default Retail
