// import WaveDivider2 from "./WaveDivider2"

import {
  HeartIcon,
  HomeIcon,
  // LightBulbIcon,
  // SparklesIcon,
  // StarIcon,
  // SunIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline"

import img_stare from "../assets/stare.jpg"
import img_line_wave from "../assets/line-wave.jpg"

export default function WhatWeDoAlt() {
  return (
    <>
      <section
        id="what"
        className="relative items-center justify-center bg-slate-200/50"
      >
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
          src={img_line_wave}
          alt="image of wave line art"
        />

        {/* <WaveDivider2></WaveDivider2> */}

        <div className="container relative mx-auto flex flex-col items-center justify-center gap-8 p-16 px-6 pb-20 md:flex-row lg:gap-0">
          <div className="w-full sm:px-16 xl:mx-10">
            <div className="aspect-square overflow-hidden rounded-full shadow-lg ">
              <img
                className="h-full w-full object-cover"
                src={img_stare}
                alt="image of two people staring at each other"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 md:order-first xl:mx-10">
            <h1 className="font-libre max-w-xl text-left text-3xl font-bold text-tan lg:text-6xl dark:text-light">
              What We Do
            </h1>
            <div className="font-newsreader flex flex-col gap-4 text-left text-xl font-medium text-dark/60 lg:text-xl dark:text-light/60">
              <p>
                <span className="flex justify-center">
                  <HeartIcon className="h-8 w-8 stroke-2" aria-hidden="true" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita voluptatum earum animi non nesciunt. Est reiciendis aut
                eius unde doloribus necessitatibus consectetur atque aspernatur
                autem, debitis neque facere suscipit laborum.
              </p>

              <p>
                <span className="flex justify-center">
                  <HomeIcon className="h-8 w-8 stroke-2" aria-hidden="true" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita voluptatum earum animi non nesciunt. Est reiciendis aut
                eius unde doloribus necessitatibus consectetur atque aspernatur
                autem, debitis neque facere suscipit laborum.
              </p>

              <p>
                <span className="flex justify-center">
                  <TrophyIcon className="h-8 w-8 stroke-2" aria-hidden="true" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita voluptatum earum animi non nesciunt. Est reiciendis aut
                eius unde doloribus necessitatibus consectetur atque aspernatur
                autem, debitis neque facere suscipit laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
