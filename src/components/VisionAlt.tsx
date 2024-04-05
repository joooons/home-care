// import img_convo from "../assets/convo.jpg"
// import SvgPattern from "./SvgPattern"
import svg_pattern from "../svg/pattern.svg"

export default function VisionAlt() {
  return (
    <>
      <section
        id="vision"
        className="relative h-full w-full bg-top bg-repeat"
        style={{
          backgroundImage: `url(${svg_pattern})`,
          backgroundSize: "200px",
        }}
      >
        <div className="container mx-auto flex flex-col gap-6 px-16 py-16">
          {/* <div className="overflow-hidden md:w-1/2 xl:mx-10">
            <img
              className="h-full w-full object-cover shadow-lg"
              src={img_convo}
              alt="image of a conversation"
            />
          </div> */}

          <div className="mx-auto flex flex-col justify-center space-y-6 whitespace-nowrap bg-white p-16">
            <h1 className="text-center font-libre text-3xl font-bold text-tan sm:text-4xl md:text-6xl lg:text-6xl">
              Vision
            </h1>
            <div className="flex flex-col gap-4 text-center font-newsreader text-xl font-medium text-dark/60 sm:text-center">
              <p className="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita voluptatum earum animi non nesciunt.
              </p>
              <p className="whitespace-normal">
                Est reiciendis aut eius unde doloribus necessitatibus
                consectetur atque aspernatur autem, debitis neque facere
                suscipit laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
