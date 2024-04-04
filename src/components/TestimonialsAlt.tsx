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
        className="flex flex-col justify-center gap-12 bg-dark/5 py-12 pb-20"
      >
        <div className="container mx-auto flex flex-col gap-8 px-6">
          {/* <h1 className="font-libre text-center text-3xl font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] md:text-4xl lg:text-6xl">
            Testimonials
          </h1> */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item) => {
              return (
                <>
                  <div className="relative flex h-full flex-col gap-2 overflow-hidden rounded-xl">
                    <div className="h-full w-full overflow-hidden drop-shadow-xl md:w-auto">
                      <img
                        className="aspect-square object-cover"
                        src={item.image}
                        alt={"image of " + item.image}
                      />
                      <div className="font-newsreader absolute inset-y-0 flex w-full flex-col justify-end gap-3 bg-gradient-to-b from-white/0 via-second/60 to-second/70 px-6 pb-6">
                        <p className="mx-auto text-left text-xl text-light/70">
                          "{item.message}"
                        </p>
                        <div className="text-xl text-light">{item.name}</div>
                      </div>
                    </div>
                    {/* <div className="font-newsreader absolute inset-y-0 flex flex-col justify-end gap-3 bg-gradient-to-b from-white/0 via-second/60 to-second/70 px-6 pb-6">
                      <p className="text-left text-xl text-light/70">
                        "{item.message}"
                      </p>
                      <div className="text-xl text-light">{item.name}</div>
                    </div> */}
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
