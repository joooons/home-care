import img_convo from "../assets/convo.jpg"

export default function VisionAlt() {
  return (
    <>
      <section id="vision" className="bg-dark/5 py-12 md:py-16 xl:pb-24">
        <div className="container mx-auto flex flex-col gap-6 px-6 pb-20 md:flex-row ">
          <div className="overflow-hidden md:w-1/2 xl:mx-10">
            <img
              className="h-full w-full rounded-2xl object-cover shadow-lg"
              src={img_convo}
              alt="image of a conversation"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6 whitespace-nowrap md:w-1/2 xl:mx-10">
            <h1 className="font-libre text-left text-3xl font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] sm:text-center sm:text-4xl md:text-6xl lg:text-6xl">
              Vision
            </h1>
            <div className="font-newsreader flex flex-col gap-4 text-left text-xl font-medium text-dark/60 sm:text-center">
              <p className="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita voluptatum earum animi non nesciunt. Est reiciendis aut
                eius unde doloribus necessitatibus consectetur atque aspernatur
                autem, debitis neque facere suscipit laborum.
              </p>
              <p className="whitespace-normal">
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
