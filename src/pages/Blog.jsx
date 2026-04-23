import React from 'react'
import FooterCTA from '../components/FooterCTA'

const Blog = () => {
  return (
    <>
      <section className="about-hero">
        <h1 className="about-hero-title">
          <span className="about-hero-highlight">Blog</span>
        </h1>
      </section>

      <section className="section-padding min-h-[40vh] flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Coming Soon</h2>
          <p className="text-xl text-[#555] mb-8">
            We are working on bringing you the latest news and insights in the merchant services industry. Check back soon!
          </p>
          <a href="/contact-us" className="btn-green inline-block">Contact Us in the meantime</a>
        </div>
      </section>

      <FooterCTA />
    </>
  )
}

export default Blog
