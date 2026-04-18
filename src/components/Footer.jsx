import React from 'react'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="https://bestmerchantservices.com/wp-content/uploads/2023/10/bms-logo-nav.png"
            alt="Best Merchant Services"
          />
          <p className="footer-phone">
            <a href="tel:8003831553">(800) 383-1553</a>
          </p>
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#">Equipments</a></li>
            <li><a href="#our-solutions">Our Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#">Merchant Accounts</a></li>
            <li><a href="#">Credit Card Machines</a></li>
            <li><a href="#">Small Business Loans</a></li>
            <li><a href="#">High Risk Merchant Accounts</a></li>
            <li><a href="#">Bad Credit Merchant Account</a></li>
            <li><a href="#">Clover Station Duo POS</a></li>
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
        <p>© {new Date().getFullYear()} Best Merchant Services. All rights reserved. | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  )
}

export default Footer
