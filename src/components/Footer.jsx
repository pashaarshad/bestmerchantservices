import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/images/bms-logo-nav.png'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/">
            <img
              src={logoImg}
              alt="Best Merchant Services"
            />
          </Link>
          <p className="footer-phone">
            <a href="tel:8003831553">(800) 383-1553</a>
          </p>
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/our-services/retail">Equipments</Link></li>
            <li><Link to="/our-services">Our Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>
          <ul>
            <li><Link to="/our-services">Merchant Accounts</Link></li>
            <li><Link to="/our-services/retail">Credit Card Machines</Link></li>
            <li><Link to="/our-services#small-business-loans">Small Business Loans</Link></li>
            <li><Link to="/high-risk-merchant-accounts">High Risk Merchant Accounts</Link></li>
            <li><Link to="/merchant-account-for-bad-credit">Bad Credit Merchant Account</Link></li>
            <li><Link to="/clover-station-duo">Clover Station Duo POS</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Recent Blogposts</h4>
          <ul className="footer-blog-list">
            <li>
              <a href="#">How to Choose the Best Credit Card Machine for Your Small Business</a>
            </li>
            <li>
              <a href="#">5 Benefits of Accepting Contactless Payments</a>
            </li>
            <li>
              <a href="#">Understanding Merchant Account Fees: A Complete Guide</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Best Merchant Services. All rights reserved. | <Link to="/privacy-policy">Privacy Policy</Link></p>
      </div>
    </footer>
  )
}

export default Footer
