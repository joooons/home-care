import WaveDivider1 from "./WaveDivider1"

import SvgGardener from "./SvgGardener"

// import img_porch from "../assets/porch.jpg"

export default function Hero() {
  const handleClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="relative h-svh w-full items-center justify-center ">
        {/* <img
          className="absolute inset-0 -z-10 h-5/6 w-full object-cover opacity-35 lg:h-full"
          src={img_porch}
          alt="image of a house"
        /> */}

        <WaveDivider1></WaveDivider1>

        <div className="h-1/5"></div>
        <div className="grid h-3/4 grid-rows-2 md:grid-cols-2">
          <div className="relative flex flex-col items-start justify-start gap-6 px-16 xl:px-32">
            <h1 className="text-left text-3xl font-bold text-dark [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] lg:text-6xl">
              We are <span className="text-second">CARE</span> experts
            </h1>
            <p className="max-w-xl text-left text-xl font-medium text-dark/60 ">
              We provide personalized home care services, focusing on daily
              activities and companionship to support the independence and
              well-being of our clients in their homes.
            </p>
            <div className="flex justify-center">
              <button
                className="focus-visible cursor-pointer rounded-full bg-prime px-6 py-3 font-medium text-light transition hover:bg-second"
                onClick={() => handleClick("vision")}
              >
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="-z-10 flex flex-col justify-center">
            <SvgGardener></SvgGardener>
          </div>
        </div>
      </section>
    </>
  )
}
