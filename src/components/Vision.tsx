import img_convo from "../assets/convo.jpg"

export default function Vision() {
  return (
    <>
      <section
        id="vision"
        className="lg: grid grid-cols-2 grid-rows-2 items-center justify-center bg-prime lg:grid-rows-1"
      >
        <div className="w-full overflow-hidden p-4 md:w-auto">
          <img
            className="h-full w-full rounded-2xl object-cover shadow-lg"
            src={img_convo}
            alt="image of a conversation"
          />
        </div>

        <div className="flex w-full flex-col justify-center gap-6 px-16 md:w-auto">
          <h1 className="max-w-xl text-center text-3xl font-bold text-light [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] md:text-4xl lg:text-left lg:text-6xl">
            VISION
          </h1>
          <div className="text-left text-xl font-medium text-white/70 ">
            <p className="max-w-xl">We believe...</p>
            <p className="max-w-xl">We promise...</p>
            <p className="max-w-xl ">We provide...</p>
          </div>
        </div>
      </section>
    </>
  )
}
