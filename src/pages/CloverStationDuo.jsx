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

const apps = [
  { img: mainStreetImg, title: 'Main Street Insights', desc: 'Main Street Insights also called Clover Insights is a phenomenal tool that helps you better understand your business competition. With this app, you can see how profitable businesses in your area are and how many clients they have.' },
  { img: timeClockImg, title: 'Time Clock', desc: 'Time Clock is a handy app that makes managing your staff and their shifts convenient and simple. You can track employee hours, create schedules, send shift reminders, and even post job openings.' },
  { img: quickbooksImg, title: 'Quickbooks by Commerce Sync', desc: 'Data and analytics are essential for growing a business. This app can deliver insightful analytics and keep your business information organized, acting like a digital bookkeeper.' },
  { img: orderOutImg, title: 'Order Out', desc: 'With Order Out, you can sync your third-party food delivery orders with your Clover system. Orders from apps like Uber or Doordash can be directly printed in your kitchen to save time and effort.' },
  { img: davoImg, title: 'DAVO Sales Tax', desc: "Using DAVO Sales Tax you can automatically set aside your sales tax for the day and pay taxes online in full. It's an excellent application for monitoring tax requirements and storing sensitive tax documents." },
  { img: checkAccImg, title: 'Check Acceptance', desc: "The Check Acceptance app allows you to digitally accept checks with lower processing fees. Receive checks quickly with no monthly minimum and benefit from the security of TeleCheck's warranty protection." },
]

const CloverStationDuo = () => {
  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#ECEFF8', padding: '100px 20px', position: 'relative', overflow: 'hidden' }}>
        <div className="clover-hero-grid">
          <div className="clover-hero-image">
            <div className="circle-bg"></div>
            <img src={cloverDuoImg} alt="Clover Station Duo" />
          </div>
          <div className="clover-hero-text">
            <h1>
              <span className="highlight">Get Clover Station Duo FREE</span><br />
              <span className="dark">by signing up for our services</span>
            </h1>
            <div className="clover-pricing">
              <span className="old-price">$1,299.00</span>
              <span className="new-price">$0.00</span>
            </div>
            <ul className="clover-features-list">
              <li><CheckIcon /> All-in-one, feature-rich POS System</li>
              <li><CheckIcon /> Over 200 apps in Clover App Market</li>
              <li><CheckIcon /> Includes cash drawer, printer, scanner</li>
            </ul>
            <div style={{ borderTop: '1px dashed #bbb', margin: '32px 0', opacity: 0.5 }}></div>
            <a href="/contact-us" className="btn-green" style={{ display: 'inline-block', fontSize: '16px', padding: '16px 35px', borderRadius: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
              GET THIS FREE!
            </a>
            <p style={{ marginTop: '16px', fontSize: '16px', fontStyle: 'italic', color: '#666' }}>
              <span style={{ color: '#1b53e0', fontStyle: 'normal' }}>*</span> Custom To Your Business
            </p>
          </div>
        </div>
      </section>

      {/* Blue Features Banner */}
      <section className="clover-blue-banner">
        <div className="clover-blue-banner-inner">
          <div className="clover-blue-banner-item">
            <FreeEquipmentIcon />
            <h4>FREE Equipment</h4>
          </div>
          <div className="clover-blue-banner-item">
            <ZeroFeesIcon />
            <h4>Zero Set-Up Fees</h4>
          </div>
          <div className="clover-blue-banner-item">
            <SameDayIcon />
            <h4>Same Day Approval</h4>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="clover-content-wrapper">

          {/* Demo */}
          <div style={{ marginBottom: '80px' }}>
            <h2 className="clover-section-heading">Clover Station Duo Demo</h2>
            <div className="clover-divider"></div>
            <div style={{ backgroundColor: '#000', width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: '#1b53e0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M5 3L19 12L5 21V3Z" fill="white" /></svg>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div style={{ marginBottom: '80px' }}>
            <h2 className="clover-section-heading">Specifications</h2>
            <div className="clover-divider"></div>
            <ul className="clover-spec-list">
              <li><span className="icon-wrap"><CheckIcon /></span><span><strong>Payments:</strong> Accepts chip, swipe, and contactless payments including Apple Pay®, Google Pay® and Samsung Pay®</span></li>
              <li><span className="icon-wrap"><CheckIcon /></span><span><strong>Screen:</strong> 14″ high-definition merchant-facing touch screen and 7″ customer-facing touch screen</span></li>
              <li><span className="icon-wrap"><CheckIcon /></span><span><strong>Receipt printer:</strong> High-speed thermal dot receipt printer</span></li>
              <li><span className="icon-wrap"><CheckIcon /></span><span><strong>Security:</strong> Clover Security end-to-end encryption</span></li>
              <li><span className="icon-wrap"><CheckIcon /></span><span><strong>Camera &amp; Scanner:</strong> Dual 5 mega-pixel cameras with scanning software</span></li>
              <li><span className="icon-wrap"><CheckIcon /></span><span><strong>Connectivity:</strong> WiFi and ethernet connectivity</span></li>
              <li><span className="icon-wrap"><CheckIcon /></span><span><strong>Cash drawer:</strong> Includes a bill tray, coin tray, two keys, and a security cable.</span></li>
              <li><span className="icon-wrap"><CheckIcon /></span><span><strong>PIN Pad:</strong> Virtual keypad for PIN entry</span></li>
            </ul>
          </div>

          {/* Key Features & Benefits */}
          <div style={{ marginBottom: '80px' }}>
            <h2 className="clover-section-heading">Key Features &amp; Benefits</h2>
            <div className="clover-divider"></div>
            <div className="clover-features-cards">
              <div className="clover-feature-card">
                <div className="icon-wrap"><EasyToUseIcon /></div>
                <h4>Easy to Use and Ready to Go</h4>
                <p>Station Duo is ready for work right out of the box, and with intuitive software built in, training your staff is minimal.</p>
              </div>
              <div className="clover-feature-card">
                <div className="icon-wrap"><AcceptPaymentIcon /></div>
                <h4>Accept Every Type of Payment</h4>
                <p>Let customers pay however they want. Credit or debit. Swipe, dip, or contactless payments like Apple Pay®, Google Pay™, and next generation payments like PayPal/Venmo® QR codes.</p>
              </div>
              <div className="clover-feature-card">
                <div className="icon-wrap"><WeGotYourBackIcon /></div>
                <h4>We've Got Your Back</h4>
                <p>Protect your business and customer information with end-to-end encryption, integrated chip sensors, and optional fingerprint login.</p>
              </div>
            </div>
          </div>

          {/* Device Variants */}
          <div style={{ marginBottom: '80px' }}>
            <h2 className="clover-section-heading">Device Variants Available</h2>
            <div className="clover-divider"></div>
            <ul className="clover-spec-list">
              <li><span className="icon-wrap"><CheckIcon /></span><span>Clover Station Duo Bundle with CD (Tablet, Printer, Terminal, Kit, Cash Drawer)</span></li>
              <li><span className="icon-wrap"><CheckIcon /></span><span>Clover Duo Bundle</span></li>
              <li><span className="icon-wrap"><CheckIcon /></span><span>Clover Station Duo Starter Kit</span></li>
              <li><span className="icon-wrap"><CheckIcon /></span><span>Clover Station Duo Display</span></li>
              <li><span className="icon-wrap"><CheckIcon /></span><span>Clover Station Duo Terminal</span></li>
            </ul>
          </div>

          {/* 3 Step Process */}
          <div className="clover-steps-section" style={{ marginBottom: '80px' }}>
            <h2 className="clover-steps-title">Our Simple 3 Step Process</h2>
            <div className="clover-steps-grid">
              <div className="clover-step-item">
                <div className="icon-wrap"><StepIcon number="1" /></div>
                <h4>Get in Touch</h4>
                <p>Get in touch by filling up our contact form.</p>
              </div>
              <div className="clover-step-item">
                <div className="icon-wrap"><StepIcon number="2" /></div>
                <h4>Get an Instant Quote</h4>
                <p>We prepare a quote custom tailored for your business needs.</p>
              </div>
              <div className="clover-step-item">
                <div className="icon-wrap"><StepIcon number="3" /></div>
                <h4>Start Processing</h4>
                <p>Start processing payments online and in person and growing your business.</p>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <a href="/contact-us" className="btn-green" style={{ display: 'inline-block' }}>Request a Quote</a>
            </div>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="clover-how-it-works-section">
        <div className="clover-how-it-works-grid">
          <div className="clover-how-it-works-text">
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a2e', marginBottom: '20px' }}>How Clover Station Duo Works</h2>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '15px' }}>One of the best merchant processing devices is the Clover Station Duo, an all-in-one POS that can increase productivity. This point of sales system is ideal for retailers, restaurants, and most service businesses.</p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '15px' }}>Essentially, anywhere that customers may stand in line to check out! One of the best features of the Clover Duo is the two screens, which help keep lines moving along and make it easy for workers to complete transactions.</p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '15px' }}>The Clover Station has a 14-inch HD display for workers and a seven-inch touchscreen for guests to confirm the transaction, leave a tip, accept rewards, or request a receipt. The POS is also compact and sleek, so you can keep your business organized and attractive without using clunky systems.</p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '15px' }}>The Clover Duo also has excellent customizability, so you can adjust the system to meet your business needs. Set up handheld devices with electronic accessories like scanners and printers. Tie together multiple devices, from tablets to countertop computers.</p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '15px' }}>The flexibility of this system makes it easy to scale the POS with your business as it grows! The Clover Station is a secure and intuitive system that is easy to learn and will protect your and your customer's data.</p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '25px' }}>The possibilities with this system are endless, as you can create loyalty programs, customize transactions, and more, putting all the POS power in your hands.</p>
            <a href="/contact-us" className="btn-green" style={{ display: 'inline-block' }}>Get This Free!</a>
          </div>
          <div className="clover-how-it-works-image">
            <img src={cloverWorksImg} alt="How Clover Station Works" />
          </div>
        </div>
      </section>

      {/* Power Your Business With Apps */}
      <section className="section-padding" style={{ backgroundColor: '#ECEFF8' }}>
        <div className="clover-content-wrapper">
          <h2 className="clover-apps-heading">Power Your Business With Apps From Clover.</h2>
          <p className="clover-apps-desc">Clover merchant processing devices can sync with helpful applications! Below are some of the top merchant processing apps to consider using to enhance your business.</p>
          
          <div className="clover-apps-grid">
            {apps.map((app, i) => (
              <div key={i} className="clover-app-card">
                <img src={app.img} alt={app.title} />
                <h4>{app.title}</h4>
                <p>{app.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="/contact-us" className="btn-green" style={{ display: 'inline-block' }}>Get Free Quote</a>
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  )
}

export default CloverStationDuo
