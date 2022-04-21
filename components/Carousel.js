import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
// import data from '../src/data.json'
// import Image from 'next/image'

// const images = data.tours.map(tour => tour.image)

function DemoCarousel({ images }) {
  return (
    <Carousel infiniteLoop useKeyboardArrows>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={image} />
        </div>
      ))}
    </Carousel>
  )
}

export default DemoCarousel
