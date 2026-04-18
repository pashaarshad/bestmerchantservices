import React from 'react'
import paxImg from '../assets/images/pax-device.jpg'
import poyntImg from '../assets/images/poynt-device.jpg'
import cloverImg from '../assets/images/clover-device.jpg'
import cloverMiniImg from '../assets/images/clover-mini-device.jpg'

const Gallery = () => {
  const images = [
    { src: paxImg, alt: 'Pax Device' },
    { src: poyntImg, alt: 'Poynt Device' },
    { src: cloverImg, alt: 'Clover Device' },
    { src: cloverMiniImg, alt: 'Clover Mini Device' },
  ]

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
