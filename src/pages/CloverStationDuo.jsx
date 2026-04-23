import React from 'react'
import FooterCTA from '../components/FooterCTA'
import cloverDuoImg from '../assets/images/clover-pos-updated.jpg'
import cloverWorksImg from '../assets/images/how-clover-station-works.jpg'

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
    <defs>
      <linearGradient id="checkGradient" x1="0.5" x2="0.5" y2="1">
        <stop offset="0" stopColor="#9bc63c" />
        <stop offset="1" stopColor="#349044" />
      </linearGradient>
    </defs>
    <circle cx="8" cy="8" r="8" fill="url(#checkGradient)" />
    <path d="M11.5 5.5L7 10.5L4.5 8" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FreeEquipmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="40" fill="#fff" />
    <rect x="22" y="22" width="36" height="28" rx="3" stroke="#1b53e0" strokeWidth="2" fill="#eceff8" />
    <rect x="28" y="28" width="12" height="12" rx="1" stroke="#1b53e0" strokeWidth="1.5" fill="#90d7a7" />
    <line x1="44" y1="30" x2="52" y2="30" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="44" y1="35" x2="52" y2="35" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="44" y1="40" x2="50" y2="40" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="20" y="50" width="40" height="8" rx="2" stroke="#1b53e0" strokeWidth="2" fill="#eceff8" />
    <circle cx="50" cy="54" r="2" fill="#e7e7e7" stroke="#1b53e0" strokeWidth="1" />
    <line x1="26" y1="54" x2="44" y2="54" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const ZeroFeesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="40" fill="#fff" />
    <circle cx="36" cy="34" r="12" stroke="#1b53e0" strokeWidth="2" fill="none" />
    <circle cx="36" cy="34" r="10" fill="#1b53e0" opacity="0.15" />
    <path d="M36 28v1.5m0 9v1.5" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M33 37c0-1.1.9-2 2-2h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M24 50l4-2c1-.5 2.2-.4 3.1.2l.5.3c1.5.8 3.3.7 4.7-.1l6-3.5c1.2-.7 2.7-.3 3.4.8l-12 8c-1.5 1-3.5 1.1-5.1.3l-8-4" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <rect x="18" y="46" width="6" height="12" rx="1" stroke="#1b53e0" strokeWidth="1.5" fill="#eceff8" />
  </svg>
)

const SameDayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="40" fill="#fff" />
    <rect x="24" y="20" width="24" height="32" rx="2" stroke="#1b53e0" strokeWidth="2" fill="#eceff8" />
    <path d="M40 20v8h8" stroke="#1b53e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="30" y1="32" x2="42" y2="32" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="36" x2="42" y2="36" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="40" x2="38" y2="40" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="44" x2="36" y2="44" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="48" cy="44" r="10" stroke="#1b53e0" strokeWidth="2" fill="none" />
    <circle cx="48" cy="44" r="8" fill="#1b53e0" opacity="0.15" />
    <path d="M44 44l3 3 6-6" stroke="#eceff8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const EasyToUseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="40" fill="#eceff8" />
    <rect x="18" y="20" width="34" height="26" rx="2" stroke="#1b53e0" strokeWidth="2" fill="#fff" />
    <rect x="22" y="24" width="26" height="18" rx="1" stroke="#1b53e0" strokeWidth="1.5" fill="#1b53e0" opacity="0.15" />
    <path d="M30 50h10" stroke="#1b53e0" strokeWidth="2" strokeLinecap="round" />
    <rect x="26" y="52" width="18" height="6" rx="1" stroke="#1b53e0" strokeWidth="1.5" fill="#eceff8" />
    <rect x="52" y="26" width="4" height="14" rx="1" stroke="#1b53e0" strokeWidth="1.5" fill="#eceff8" />
    <rect x="56" y="28" width="3" height="10" rx="1" stroke="#1b53e0" strokeWidth="1.5" fill="#eceff8" />
  </svg>
)

const AcceptPaymentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="40" fill="#eceff8" />
    <rect x="22" y="24" width="36" height="24" rx="3" stroke="#1b53e0" strokeWidth="2" fill="#fff" transform="rotate(-15 40 36)" />
    <rect x="22" y="24" width="36" height="24" rx="3" stroke="#1b53e0" strokeWidth="2" fill="#1b53e0" opacity="0.15" transform="rotate(-15 40 36)" />
    <circle cx="44" cy="34" r="4" stroke="#1b53e0" strokeWidth="1.5" fill="none" />
    <path d="M30 52l6-6c1-1 2.6-1 3.5 0l3 3c1 1 2.6 1 3.5 0l6-6" stroke="#1b53e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const WeGotYourBackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="40" fill="#eceff8" />
    <rect x="24" y="18" width="24" height="32" rx="2" stroke="#1b53e0" strokeWidth="2" fill="#fff" />
    <path d="M40 18v8h8" stroke="#1b53e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="30" y1="30" x2="42" y2="30" stroke="#1b53e0" strokeWidth="1" strokeLinecap="round" />
    <line x1="30" y1="33" x2="42" y2="33" stroke="#1b53e0" strokeWidth="1" strokeLinecap="round" />
    <line x1="30" y1="36" x2="42" y2="36" stroke="#1b53e0" strokeWidth="1" strokeLinecap="round" />
    <line x1="30" y1="39" x2="42" y2="39" stroke="#1b53e0" strokeWidth="1" strokeLinecap="round" />
    <line x1="30" y1="42" x2="40" y2="42" stroke="#1b53e0" strokeWidth="1" strokeLinecap="round" />
    <rect x="42" y="42" width="14" height="12" rx="2" stroke="#1b53e0" strokeWidth="1.5" fill="#1b53e0" opacity="0.15" />
    <path d="M45 42v-3a4 4 0 018 0v3" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="49" cy="48" r="1.5" stroke="#1b53e0" strokeWidth="1" fill="#eceff8" />
  </svg>
)

const StepIcon = ({ number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#fff" />
    <rect x="24" y="22" width="34" height="46" rx="2" stroke="#1b53e0" strokeWidth="2" fill="#fff" />
    <line x1="30" y1="34" x2="50" y2="34" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="40" x2="46" y2="40" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="46" x2="48" y2="46" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="52" x2="44" y2="52" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="58" x2="42" y2="58" stroke="#1b53e0" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="56" y="28" width="6" height="30" rx="1" fill="#d1dcf9" transform="rotate(30 59 43)" />
    <circle cx="68" cy="30" r="4" fill="#d1dcf9" />
    <text x="50" y="82" textAnchor="middle" fill="#1b53e0" fontSize="16" fontWeight="bold">{number}</text>
  </svg>
)

const CloverStationDuo = () => {
  return (
    <>
      {/* Custom Hero Section */}
      <section style={{ backgroundColor: '#ECEFF8', padding: '100px 20px', position: 'relative', overflow: 'hidden' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side: Image */}
          <div className="relative flex justify-center items-center py-10">
            <div
              className="absolute bg-white rounded-full"
              style={{ width: '450px', height: '450px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}
            ></div>
            <img src={cloverDuoImg} alt="Clover Station Duo" className="relative z-10 w-full max-w-[550px]" />
          </div>

          {/* Right Side: Text & CTA */}
          <div className="pr-4">
            <h1 className="text-[46px] font-bold leading-[1.2] mb-6">
              <span style={{ color: '#1b53e0' }}>Get Clover Station Duo FREE</span><br />
              <span style={{ color: '#1a1a2e' }}>by signing up for our services</span>
            </h1>

            <div className="flex items-end gap-3 mb-8">
              <span className="line-through font-bold" style={{ fontSize: '24px', color: '#999' }}>$1,299.00</span>
              <span className="font-bold" style={{ fontSize: '36px', color: '#1b53e0', lineHeight: 1 }}>$0.00</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3 text-[18px] text-[#555]">
                <CheckIcon /> All-in-one, feature-rich POS System
              </li>
              <li className="flex items-center gap-3 text-[18px] text-[#555]">
                <CheckIcon /> Over 200 apps in Clover App Market
              </li>
              <li className="flex items-center gap-3 text-[18px] text-[#555]">
                <CheckIcon /> Includes cash drawer, printer, scanner
              </li>
            </ul>

            <div className="border-t border-dashed border-gray-400 my-8 opacity-50"></div>

            <a href="/contact-us" className="btn-green" style={{ display: 'inline-block', fontSize: '16px', padding: '16px 35px', borderRadius: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
              GET THIS FREE!
            </a>

            <p className="mt-4 text-[16px] italic text-[#666]">
              <span style={{ color: '#1b53e0', fontStyle: 'normal' }}>*</span> Custom To Your Business
            </p>
          </div>
        </div>
      </section>

      {/* Blue Features Banner */}
      <section style={{ backgroundColor: '#1b53e0', padding: '50px 0' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
          <div className="flex items-center justify-center gap-4 text-white">
            <FreeEquipmentIcon />
            <h4 className="text-xl font-bold m-0 text-white">FREE Equipment</h4>
          </div>
          <div className="flex items-center justify-center gap-4 text-white border-l border-r border-[#3a6bed] border-opacity-50">
            <ZeroFeesIcon />
            <h4 className="text-xl font-bold m-0 text-white">Zero Set-Up Fees</h4>
          </div>
          <div className="flex items-center justify-center gap-4 text-white">
            <SameDayIcon />
            <h4 className="text-xl font-bold m-0 text-white">Same Day Approval</h4>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5">

          {/* Demo Section */}
          <div className="mb-20">
            <h2 className="text-[28px] font-bold text-[#1a1a2e] mb-4">Clover Station Duo Demo</h2>
            <div className="h-[1px] bg-gray-200 mb-8 w-full"></div>
            <div className="bg-black w-full aspect-video flex items-center justify-center rounded-sm">
              <div className="w-[80px] h-[80px] bg-[#1b53e0] rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-20">
            <h2 className="text-[28px] font-bold text-[#1a1a2e] mb-4">Specifications</h2>
            <div className="h-[1px] bg-gray-200 mb-8 w-full"></div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Payments:</strong> Accepts chip, swipe, and contactless payments including Apple Pay®, Google Pay® and Samsung Pay®</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Screen:</strong> 14″ high-definition merchant-facing touch screen and 7″ customer-facing touch screen</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Receipt printer:</strong> High-speed thermal dot receipt printer</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Security:</strong> Clover Security end-to-end encryption</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Camera &amp; Scanner:</strong> Dual 5 mega-pixel cameras with scanning software</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Connectivity:</strong> WiFi and ethernet connectivity</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Cash drawer:</strong> Includes a bill tray, coin tray, two keys, and a security cable.</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>PIN Pad:</strong> Virtual keypad for PIN entry</span>
              </li>
            </ul>
          </div>

          {/* Key Features & Benefits */}
          <div className="mb-20">
            <h2 className="text-[28px] font-bold text-[#1a1a2e] mb-4">Key Features &amp; Benefits</h2>
            <div className="h-[1px] bg-gray-200 mb-8 w-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-100 rounded-lg p-10 shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  <EasyToUseIcon />
                </div>
                <h4 className="text-[20px] font-bold text-[#1a1a2e] mb-4">Easy to Use and Ready to Go</h4>
                <p className="text-[#666] leading-relaxed">Station Duo is ready for work right out of the box, and with intuitive software built in, training your staff is minimal.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-lg p-10 shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  <AcceptPaymentIcon />
                </div>
                <h4 className="text-[20px] font-bold text-[#1a1a2e] mb-4">Accept Every Type of Payment</h4>
                <p className="text-[#666] leading-relaxed">Let customers pay however they want. Credit or debit. Swipe, dip, or contactless payments like Apple Pay®, Google Pay™, and next generation payments like PayPal/Venmo® QR codes.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-lg p-10 shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  <WeGotYourBackIcon />
                </div>
                <h4 className="text-[20px] font-bold text-[#1a1a2e] mb-4">We've Got Your Back</h4>
                <p className="text-[#666] leading-relaxed">Protect your business and customer information with end-to-end encryption, integrated chip sensors, and optional fingerprint login.</p>
              </div>
            </div>
          </div>

          {/* Device Variants */}
          <div className="mb-20">
            <h2 className="text-[28px] font-bold text-[#1a1a2e] mb-4">Device Variants Available</h2>
            <div className="h-[1px] bg-gray-200 mb-8 w-full"></div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span>Clover Station Duo Bundle with CD (Tablet, Printer, Terminal, Kit, Cash Drawer)</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span>Clover Duo Bundle</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span>Clover Station Duo Starter Kit</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span>Clover Station Duo Display</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span>Clover Station Duo Terminal</span>
              </li>
            </ul>
          </div>

          {/* 3 Step Process */}
          <div className="mb-20">
            <h2 className="text-[32px] font-bold text-[#1a1a2e] text-center mb-16">Our Simple 3 Step Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <StepIcon number="1" />
                </div>
                <h4 className="text-[22px] font-bold text-[#1a1a2e] mb-3">Get in Touch</h4>
                <p className="text-[#666]">Get in touch by filling up our contact form.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <StepIcon number="2" />
                </div>
                <h4 className="text-[22px] font-bold text-[#1a1a2e] mb-3">Get an Instant Quote</h4>
                <p className="text-[#666]">We prepare a quote custom tailored for your business needs.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <StepIcon number="3" />
                </div>
                <h4 className="text-[22px] font-bold text-[#1a1a2e] mb-3">Start Processing</h4>
                <p className="text-[#666]">Start processing payments online and in person and growing your business.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/contact-us" className="btn-green inline-block">Request a Quote</a>
            </div>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="about-section" style={{ backgroundColor: '#ECEFF8' }}>
        <div className="about-container about-container-reverse">
          <div className="about-text">
            <h2>How Clover Station Duo Works</h2>
            <p className="mb-4">One of the best merchant processing devices is the Clover Station Duo, an all-in-one POS that can increase productivity. This point of sales system is ideal for retailers, restaurants, and most service businesses.</p>
            <p className="mb-4">Essentially, anywhere that customers may stand in line to check out! One of the best features of the Clover Duo is the two screens, which help keep lines moving along and make it easy for workers to complete transactions.</p>
            <p className="mb-4">The Clover Station has a 14-inch HD display for workers and a seven-inch touchscreen for guests to confirm the transaction, leave a tip, accept rewards, or request a receipt. The POS is also compact and sleek, so you can keep your business organized and attractive without using clunky systems.</p>
            <p className="mb-4">The Clover Duo also has excellent customizability, so you can adjust the system to meet your business needs. Set up handheld devices with electronic accessories like scanners and printers. Tie together multiple devices, from tablets to countertop computers.</p>
            <p className="mb-4">The flexibility of this system makes it easy to scale the POS with your business as it grows! The Clover Station is a secure and intuitive system that is easy to learn and will protect your and your customer's data.</p>
            <p className="mb-6">The possibilities with this system are endless, as you can create loyalty programs, customize transactions, and more, putting all the POS power in your hands.</p>
            <a href="/contact-us" className="btn-green inline-block">Get This Free!</a>
          </div>
          <div className="about-image">
            <img src={cloverWorksImg} alt="How Clover Station Works" />
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  )
}

export default CloverStationDuo
