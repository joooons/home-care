import WaveDivider2 from "./WaveDivider2"

import img_stare from "../assets/stare.jpg"
import img_line_wave from "../assets/line-wave.jpg"

export default function WhatWeDoAlt() {
  return (
    <>
      <section id="what" className="relative items-center justify-center ">
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
          src={img_line_wave}
          alt="image of wave line art"
        />

        <WaveDivider2></WaveDivider2>

        <div className="container relative mx-auto flex flex-col items-center justify-center gap-8 p-16 px-6 pb-40 md:flex-row lg:gap-0">
          <div className="w-full sm:px-16 xl:mx-10">
            <div className="aspect-square overflow-hidden rounded-full bg-blue-500 shadow-lg ">
              <img
                className="h-full w-full object-cover"
                src={img_stare}
                alt="image of two people staring at each other"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 md:order-first xl:mx-10">
            <h1 className="max-w-xl text-left text-3xl font-bold text-dark [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] lg:text-6xl dark:text-light">
              WHAT WE DO
            </h1>
            <div className="flex flex-col gap-4 text-left text-xl font-medium text-dark/60 lg:text-xl dark:text-light/60">
              <p>We will treat you like family, because you are family.</p>
              <p>We serve homes in Whittier, La Mirada, and Fullerton.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
