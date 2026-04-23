import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurServices from './pages/OurServices'
import Partners from './pages/Partners'
import ContactUs from './pages/ContactUs'
import Retail from './pages/Retail'
import HighRisk from './pages/HighRisk'
import BadCredit from './pages/BadCredit'
import CloverStationDuo from './pages/CloverStationDuo'
import Blog from './pages/Blog'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/our-services/retail" element={<Retail />} />
        <Route path="/high-risk-merchant-accounts" element={<HighRisk />} />
        <Route path="/merchant-account-for-bad-credit" element={<BadCredit />} />
        <Route path="/clover-station-duo" element={<CloverStationDuo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
