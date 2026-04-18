import React from 'react'
import Hero from '../components/Hero'
import Solutions from '../components/Solutions'
import Contactless from '../components/Contactless'
import Terminals from '../components/Terminals'
import CTA from '../components/CTA'
import Benefits from '../components/Benefits'
import PriceMatch from '../components/PriceMatch'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import POS from '../components/POS'
import FooterCTA from '../components/FooterCTA'

const Home = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <Contactless />
      <Terminals />
      <CTA />
      <Benefits />
      <PriceMatch />
      <Testimonials />
      <Gallery />
      <POS />
      <FooterCTA />
    </>
  )
}

export default Home
