import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const StarIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e8652c">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const Testimonials = () => {
  const testimonials = [
    {
      text: "BMS streamlined our business with the perfect Point Of Sale system that does everything we need. They saved us a substantial amount of money and they're always there for us!",
      name: 'Erin Wade',
      position: 'Rock N Roll Sushi'
    },
    {
      text: "This company delivers!!! After trying out other credit card processors, I'm so glad we found Best Merchant Services. The savings is great and the service is second to none.",
      name: 'Sandra Jansen',
      position: 'Subway'
    },
    {
      text: "AMAZING EXPERIENCE! They handled everything from start to finish and got us up and running ASAP. It was a very simple and painless process. Give them a try, you won't regret it.",
      name: 'Ken Davies',
      position: 'Aire Serv Heating & AC'
    },
    {
      text: "Not only did BMS save me over $1500 per month but they also sent me a free wireless Clover Flex for trade shows.",
      name: 'Grace Hall',
      position: 'Designer'
    },
    {
      text: "BMS got us up and running in one business day and saved us about 30% off processing fees.",
      name: 'Tyler Westbrook',
      position: 'Tint World'
    },
    {
      text: "I would recommend Best Merchant Services to anyone that needs a complete Retail POS System for their franchise of stores.",
      name: 'Jill Sanders',
      position: 'Manager'
    },
  ]

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <h2 className="section-title">What Our Customers Are Saying</h2>
        <p className="section-subtitle">Check out some of our great reviews.</p>
      </div>

      <div className="testimonials-slider-wrapper">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-author">
                  <h5>{item.name}</h5>
                  <span>{item.position}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
