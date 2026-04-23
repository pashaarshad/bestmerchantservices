import React from 'react'
import FooterCTA from '../components/FooterCTA'
import cloverDuoImg from '../assets/images/clover-pos-updated.jpg'
import cloverWorksImg from '../assets/images/how-clover-station-works.jpg'
import mainStreetImg from '../assets/images/main-street-insights.png'
import timeClockImg from '../assets/images/time-clock.png'
import quickbooksImg from '../assets/images/quickbooks-bycommerce-sync.png'
import orderOutImg from '../assets/images/order-out.png'
import davoImg from '../assets/images/DAVO-sales-tax.png'
import checkAccImg from '../assets/images/check-acceptance.png'

const CloverStationDuo = () => {
  return (
    <>
      <section className="about-hero">
        <h1 className="about-hero-title">
          <span className="about-hero-highlight">Clover Station Duo POS</span>
        </h1>
      </section>

      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">Clover Station Duo POS</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="line-through text-gray-400 text-xl">$1,299.00</span>
                <span className="text-3xl font-bold text-[#4caf50]">$0.00</span>
              </div>
              <ul className="list-disc pl-5 mb-8 text-[#555] space-y-3 text-lg">
                <li>All-in-one, feature-rich POS System</li>
                <li>Over 200 apps in Clover App Market</li>
                <li>Includes cash drawer, printer, scanner</li>
              </ul>
              <a href="/contact-us" className="btn-green inline-block text-lg px-8 py-4">Get This Free!</a>
            </div>
            <div className="flex justify-center">
              <img src={cloverDuoImg} alt="Clover Station Duo" className="max-w-full" />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8 text-center">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#555]">
              <div className="bg-[#f7f9fc] p-6 rounded-xl">
                <strong className="text-[#1a1a2e] block mb-2">Payments</strong>
                Accepts chip, swipe, and contactless payments including Apple Pay®, Google Pay® and Samsung Pay®
              </div>
              <div className="bg-[#f7f9fc] p-6 rounded-xl">
                <strong className="text-[#1a1a2e] block mb-2">Screen</strong>
                14″ high-definition merchant-facing touch screen and 7″ customer-facing touch screen
              </div>
              <div className="bg-[#f7f9fc] p-6 rounded-xl">
                <strong className="text-[#1a1a2e] block mb-2">Receipt printer</strong>
                High-speed thermal dot receipt printer
              </div>
              <div className="bg-[#f7f9fc] p-6 rounded-xl">
                <strong className="text-[#1a1a2e] block mb-2">Security</strong>
                Clover Security end-to-end encryption
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img src={cloverWorksImg} alt="How Clover Station Works" className="w-full rounded-xl shadow-lg" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">How Clover Station Duo Works</h2>
              <p className="text-[#555] mb-4 leading-relaxed">
                One of the best merchant processing devices is the Clover Station Duo, an all-in-one POS that can increase productivity. This point of sales system is ideal for retailers, restaurants, and most service businesses.
              </p>
              <p className="text-[#555] mb-4 leading-relaxed">
                Essentially, anywhere that customers may stand in line to check out! One of the best features of the Clover Duo is the two screens, which help keep lines moving along and make it easy for workers to complete transactions.
              </p>
              <p className="text-[#555] mb-6 leading-relaxed">
                The Clover Station has a 14-inch HD display for workers and a seven-inch touchscreen for guests to confirm the transaction, leave a tip, accept rewards, or request a receipt. The POS is also compact and sleek, so you can keep your business organized and attractive without using clunky systems.
              </p>
              <a href="/contact-us" className="btn-green inline-block">Get This Free!</a>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4 text-center">Power Your Business With Apps From Clover.</h2>
            <p className="text-center text-[#555] max-w-[800px] mx-auto mb-12">
              Clover merchant processing devices can sync with helpful applications! Below are some of the top merchant processing apps to consider using to enhance your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img src={mainStreetImg} alt="Main Street Insights" className="h-20 mx-auto mb-4" />
                <h4 className="font-bold text-[#1a1a2e] mb-2">Main Street Insights</h4>
                <p className="text-sm text-[#555]">Helps you better understand your business competition and see how profitable businesses in your area are.</p>
              </div>
              <div className="text-center">
                <img src={timeClockImg} alt="Time Clock" className="h-20 mx-auto mb-4" />
                <h4 className="font-bold text-[#1a1a2e] mb-2">Time Clock</h4>
                <p className="text-sm text-[#555]">A handy app that makes managing your staff and their shifts convenient and simple.</p>
              </div>
              <div className="text-center">
                <img src={quickbooksImg} alt="Quickbooks Sync" className="h-20 mx-auto mb-4" />
                <h4 className="font-bold text-[#1a1a2e] mb-2">Data & Analytics</h4>
                <p className="text-sm text-[#555]">Deliver insightful analytics and keep your business information organized, acting like a digital bookkeeper.</p>
              </div>
              <div className="text-center">
                <img src={orderOutImg} alt="Order Out" className="h-20 mx-auto mb-4" />
                <h4 className="font-bold text-[#1a1a2e] mb-2">Order Out</h4>
                <p className="text-sm text-[#555]">Sync your third-party food delivery orders with your Clover system.</p>
              </div>
              <div className="text-center">
                <img src={davoImg} alt="DAVO Sales Tax" className="h-20 mx-auto mb-4" />
                <h4 className="font-bold text-[#1a1a2e] mb-2">DAVO Sales Tax</h4>
                <p className="text-sm text-[#555]">Automatically set aside your sales tax for the day and pay taxes online in full.</p>
              </div>
              <div className="text-center">
                <img src={checkAccImg} alt="Check Acceptance" className="h-20 mx-auto mb-4" />
                <h4 className="font-bold text-[#1a1a2e] mb-2">Check Acceptance</h4>
                <p className="text-sm text-[#555]">Digitally accept checks with lower processing fees and security protection.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/contact-us" className="btn-green inline-block">Get Free Quote</a>
            </div>
          </div>

        </div>
      </section>

      <FooterCTA />
    </>
  )
}

export default CloverStationDuo
