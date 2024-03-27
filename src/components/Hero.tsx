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
        <div className="-z-5 absolute flex h-full w-full flex-col justify-end">
          <svg
            id="visual"
            viewBox="0 0 900 200"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="fill-prime"
          >
            <path
              d="M0 166L21.5 154.7C43 143.3 86 120.7 128.8 109.7C171.7 98.7 214.3 99.3 257.2 112.2C300 125 343 150 385.8 149C428.7 148 471.3 121 514.2 106.3C557 91.7 600 89.3 642.8 101C685.7 112.7 728.3 138.3 771.2 139.2C814 140 857 116 878.5 104L900 92L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z"
              // fill="#4992ff"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></path>
          </svg>
        </div>
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
