import img_stare from "../assets/stare.jpg"
import img_line_wave from "../assets/line-wave.jpg"

export default function WhatWeDo() {
  return (
    <>
      <section
        id="what"
        className="relative h-screen items-center justify-center "
      >
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
          src={img_line_wave}
          alt="image of wave line art"
        />
        <div className="absolute -z-10 flex h-full w-full flex-col justify-end">
          <svg
            id="visual"
            viewBox="0 0 900 200"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="fill-second"
          >
            <path
              d="M0 124L21.5 123.2C43 122.3 86 120.7 128.8 122.8C171.7 125 214.3 131 257.2 138C300 145 343 153 385.8 150.8C428.7 148.7 471.3 136.3 514.2 139.8C557 143.3 600 162.7 642.8 173.2C685.7 183.7 728.3 185.3 771.2 185.7C814 186 857 185 878.5 184.5L900 184L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z"
              strokeLinecap="round"
              strokeLinejoin="miter"
            ></path>
          </svg>
        </div>

        <div className="relative grid grid-rows-2 items-center justify-center gap-16 p-16 lg:grid-cols-2 lg:grid-rows-1 lg:gap-0">
          <div className="w-full px-0 sm:px-16 md:px-32">
            <div className="aspect-square overflow-hidden rounded-full bg-blue-500 shadow-lg ">
              <img
                className="h-full w-full object-cover"
                src={img_stare}
                alt="image of two people staring at each other"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 md:w-auto lg:order-first">
            <h1 className="max-w-xl text-left text-3xl font-bold text-dark [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] lg:text-6xl">
              WHAT WE DO
            </h1>
            <div className="flex flex-col gap-4 text-left text-xl font-medium text-dark/60 lg:text-xl">
              <p>We will treat you like family, because you are family.</p>
              <p>We serve homes in Whittier, La Mirada, and Fullerton.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
