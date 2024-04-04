import img_hug from "../assets/hug.jpg"
import img_flower from "../assets/flower.jpg"
import img_chile from "../assets/chile.jpg"
import img_house from "../assets/house.jpg"

const testimonials: any[] = [
  {
    image: img_hug,
    name: "Anne A.",
    message: "I couldn't have done this without yall nice people.",
  },
  {
    image: img_flower,
    name: "Bob B.",
    message:
      "I felt so reassured by the warmth and professionalism that each of the consultants possessed.",
  },
  {
    image: img_chile,
    name: "Catherine C.",
    message:
      "Their service really took a heavy weight off of our backs. My parents love spending more time with their grandchildren.",
  },
  {
    image: img_house,
    name: "Debbie D.",
    message:
      "It meant so much to me that I could visit my grandma at her house, where I used to play, instead of at a hospital!",
  },
]

export default function TestimonialsAlt() {
  return (
    <>
      <section
        id="testimony"
        className="flex flex-col justify-center gap-12 bg-slate-200 py-12 pb-20"
      >
        <div className="container mx-auto flex flex-col gap-8 px-6">
          <h1 className="font-libre text-center text-3xl font-bold text-tan md:text-4xl lg:text-6xl">
            Testimonials
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
                      <div className="font-newsreader absolute inset-y-0 w-full bg-dark/20 transition duration-300 ease-in-out group-hover:bg-dark/60 ">
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
