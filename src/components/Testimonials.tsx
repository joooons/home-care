import human_1 from "../assets/human-1.jpg"
import human_2 from "../assets/human-2.jpg"
import human_3 from "../assets/human-3.jpg"
import human_4 from "../assets/human-4.jpg"

const testimonials: any[] = [
  {
    image: human_1,
    name: "Annie A.",
    message: "I couldn't have done this without the nice people at Home Care.",
  },
  {
    image: human_2,
    name: "Brian B.",
    message:
      "I felt so reassured by the warmth and professionalism that each of the consultants possessed.",
  },
  {
    image: human_3,
    name: "Chris C.",
    message:
      "Their service really took a heavy weight off of our backs. My parents love spending more time with their grandchildren.",
  },
  {
    image: human_4,
    name: "Daisy D.",
    message:
      "It meant so much to me that I could visit my grandma at her house, where I used to play, instead of at a hospital!",
  },
]

export default function Testimonials() {
  return (
    <>
      <section
        id="testimony"
        className="flex flex-col justify-center gap-12 bg-second py-12 pb-24"
      >
        <div className="container mx-auto flex flex-col gap-8 px-6">
          <h1 className="text-center text-3xl font-bold text-light [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] md:text-4xl lg:text-6xl">
            TESTIMONIALS
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item) => {
              return (
                <>
                  <div className="group relative flex h-full flex-col gap-2 overflow-hidden">
                    <div className="h-full w-full overflow-hidden drop-shadow-xl md:w-auto">
                      <img
                        className="aspect-[4/3] object-cover md:aspect-[3/4]"
                        src={item.image}
                        alt={"image of " + item.image}
                      />
                      <div className="absolute inset-y-0 w-full bg-dark/30 font-newsreader transition duration-300 ease-in-out group-hover:bg-dark/70 ">
                        <div className="flex h-full w-full flex-col justify-end gap-3 px-8 pb-8 transition duration-300 ease-in-out group-hover:scale-105">
                          <p className="mx-auto text-left text-xl text-light">
                            "{item.message}"
                          </p>
                          <div className="text-xl text-light">{item.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
