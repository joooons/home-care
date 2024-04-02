import Carousel from "./Carousel"

export default function HeroAlt() {
  const handleClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="relative h-screen w-full items-center justify-center bg-black/80">
        <Carousel></Carousel>
        <div className="container mx-auto flex h-full flex-col px-6 py-32 xl:pb-56">
          <div className="flex h-full flex-col items-center justify-center space-y-6 ">
            <h1 className="text-center text-3xl font-bold text-light md:text-4xl lg:text-6xl dark:text-light">
              We are <span className="text-light dark:text-light">CARE</span>{" "}
              experts
            </h1>
            <p className="max-w-xl text-center text-xl font-medium text-light/80 dark:text-light/60">
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
        </div>
      </section>
    </>
  )
}
