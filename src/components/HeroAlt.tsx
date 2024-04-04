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
            <h1 className="text-center font-libre text-3xl font-bold text-tan md:text-4xl lg:text-6xl dark:text-light">
              We <span className="text-prime ">care</span> for your loved ones
            </h1>
            <p className="max-w-xl text-center font-newsreader text-xl font-medium text-light/80 dark:text-light/60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis mollitia vero vel quo cupiditate sint quis laborum
              accusantium velit eos, pariatur necessitatibus, provident amet
              voluptatibus odio, consequuntur eaque non tenetur!
            </p>

            <div className="flex justify-center">
              <button
                className="focus-visible cursor-pointer border-2 border-tan bg-transparent px-6 py-3 font-medium text-light transition hover:border-prime"
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
