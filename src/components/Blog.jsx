import React from 'react'
import choosingPosImg from '../assets/images/choosing-pos.jpg'
import mobilePaymentsImg from '../assets/images/mobile-payments.jpg'
import creditCardSecurityImg from '../assets/images/credit-card-security.jpg'

const Blog = () => {
  const posts = [
    {
      image: choosingPosImg,
      title: 'Points to Consider When Choosing a POS System',
      excerpt: 'The POS system you choose for your business can have a major impact on customer experience and operational efficiency...',
      date: 'September 2023'
    },
    {
      image: mobilePaymentsImg,
      title: 'The Rise of Mobile Payments in Small Business',
      excerpt: 'Mobile payment solutions have transformed how small businesses accept payments from their customers...',
      date: 'September 2023'
    },
    {
      image: creditCardSecurityImg,
      title: 'Credit Card Security: Best Practices for Merchants',
      excerpt: 'Protecting your customers credit card information is essential for building trust and maintaining compliance...',
      date: 'September 2023'
    },
  ]

  return (
    <section className="blog-section" id="blog">
      <div className="blog-header">
        <h2 className="section-title">Latest from Our Blog</h2>
        <p className="section-subtitle">Stay updated with the latest in payment processing</p>
      </div>

      <div className="blog-grid">
        {posts.map((post, i) => (
          <div className="blog-card" key={i}>
            <div className="blog-card-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-card-content">
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
              <div className="blog-card-meta">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#888">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                </svg>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
