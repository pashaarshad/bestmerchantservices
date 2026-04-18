import React from 'react'

const Gallery = () => {
  const images = [
    {
      src: 'https://bestmerchantservices.com/wp-content/uploads/2022/08/pax-device.jpg',
      alt: 'Pax Device'
    },
    {
      src: 'https://bestmerchantservices.com/wp-content/uploads/2022/08/poynt-device.jpg',
      alt: 'Poynt Device'
    },
    {
      src: 'https://bestmerchantservices.com/wp-content/uploads/2022/08/clover-device.jpg',
      alt: 'Clover Device'
    },
    {
      src: 'https://bestmerchantservices.com/wp-content/uploads/2022/08/clover-mini-device.jpg',
      alt: 'Clover Mini Device'
    },
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
