import React from 'react'
import FooterCTA from '../components/FooterCTA'
import partnerImg from '../assets/images/reliable-and-affordable-partner.jpg'

const BadCredit = () => {
  return (
    <>
      <section className="about-hero">
        <h1 className="about-hero-title">
          <span className="about-hero-highlight">Merchant Account for Bad Credit</span>
        </h1>
      </section>

      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <p className="text-xl text-[#555] leading-relaxed mb-6">
              A merchant account is a must-have for any modern business. Whether you operate a store or accept payments online, a merchant account allows you to receive funds from debit and credit cards.
            </p>
            <p className="text-[#555] leading-relaxed mb-6">
              Before you can open a merchant account, a service provider will perform a few checks, including reviewing the financial health of your business. Depending on the vendor you select, they might check your business credit score, personal credit history, or a mix of both. Bad credit can be an obstacle. Some merchants can deny your request or offer a merchant account with high processing fees if you apply with poor credit.
            </p>
            <p className="text-[#555] leading-relaxed">
              At Best Merchant Services, we specialize in making merchant accounts and payment processing solutions affordable and accessible. We work with businesses with low credit scores and limited credit histories. We’ll review your application and offer a cost-effective solution regardless of your credit score. The best part? We can process your application and give you an answer in 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={partnerImg} alt="Reliable Partner" className="w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Choosing a Reliable and Affordable Partner</h2>
              <p className="text-[#555] mb-4 leading-relaxed">
                You need to choose a reliable service provider who will manage your account as your business grows, protect your funds, make the money easy to access, and handle payments in a safe and compliant manner.
              </p>
              <p className="text-[#555] mb-6 leading-relaxed">
                You also need to work with a cost-effective vendor. Some payment processing companies charge a flat fee per payment while others charge a small percentage. With credit cards representing 38% of all POS purchases and debit cards not far behind at 28%, card processing fees can add up and reduce your bottom line.
              </p>
              
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">What Makes Us Reliable?</h3>
              <ul className="list-disc pl-5 mb-6 text-[#555] space-y-2">
                <li>Over 20 years of experience in the payment processing industry.</li>
                <li>You can contact us 24/7 for support.</li>
                <li>We offer free payment processing hardware and offer low-cost options.</li>
                <li>Safely accept in-person, online, and over-the-phone payments.</li>
                <li>We review applications within 24 hours.</li>
              </ul>
              <a href="/contact-us" className="btn-green inline-block">Get Free Quote</a>
            </div>
          </div>

          <div className="bg-[#f7f9fc] rounded-2xl p-10 mb-20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6 text-center">Open Your Merchant Account Today!</h2>
            <div className="max-w-[800px] mx-auto text-[#555] space-y-4 text-center">
              <p>
                Are you looking for a merchant account for a new business or want to replace your current payment processing solution with a more affordable solution? Don’t let your low credit score be an obstacle.
              </p>
              <p>
                Best Merchant Services offers cost-effective solutions for businesses like yours. With simple packages that include a credit card processing machine and low fees, you’ll be able to accept debit and credit card payments in no time. Plus, we offer additional services and customizable packages if you want to process mobile payments, eCommerce payments, and more.
              </p>
              <p className="font-medium text-[#1a1a2e]">
                We’ll review your application and give you an answer in 24 hours. The application process is fast and simple because we know business owners are busy.
              </p>
              <div className="pt-6">
                <a href="/contact-us" className="btn-green inline-block">Get Free Quote</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <FooterCTA />
    </>
  )
}

export default BadCredit
