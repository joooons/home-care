import { useState, useEffect } from "react"
import { Transition } from "@headlessui/react"

// import img_porch from "../assets/porch.jpg"
// import img_flower from "../assets/flower.jpg"
// import img_chile from "../assets/chile.jpg"

import hero_1 from "../assets/hero-1.jpg"
import hero_2 from "../assets/hero-2.jpg"
import hero_3 from "../assets/hero-3.jpg"
import hero_4 from "../assets/hero-4.jpg"
import hero_5 from "../assets/hero-5.jpg"

const images = [hero_1, hero_2, hero_3, hero_4, hero_5]

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="absolute -z-10 h-full w-full">
      {images.map((image, index) => (
        <Transition
          key={index}
          show={index === currentSlide}
          as="div"
          enter="transition-opacity duration-[3000ms]"
          enterFrom="opacity-0"
          enterTo="opacity-200"
          leave="transition-opacity duration-[3000ms]"
          leaveFrom="opacity-200"
          leaveTo="opacity-0"
          className="absolute h-full w-full"
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </Transition>
      ))}
    </div>
  )
}

export default Carousel
