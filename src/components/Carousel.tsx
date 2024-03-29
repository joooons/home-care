import { useState, useEffect } from "react"
import { Transition } from "@headlessui/react"

import img_porch from "../assets/porch.jpg"
import img_flower from "../assets/flower.jpg"
import img_chile from "../assets/chile.jpg"

const images = [img_porch, img_flower, img_chile]

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="absolute -z-10 h-full w-full">
      {images.map((image, index) => (
        <Transition
          key={index}
          show={index === currentSlide}
          as="div"
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-200"
          leave="transition-opacity duration-1000"
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
