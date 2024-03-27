// import img_abstract from "./assets/abstract.jpg"
import img_abstract from "../assets/abstract.jpg"

export default function ContactUs() {
  return (
    <>
      <section id="contact" className="relative ">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          src={img_abstract}
          alt="image of abstract paper texture"
        />
        <div className="container mx-auto flex flex-col gap-8 px-6 py-24 md:py-32 lg:gap-16 lg:py-40">
          <h1 className="max-w-xl text-left text-3xl font-bold text-purp [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] md:text-4xl lg:text-6xl">
            CONTACT US
          </h1>
          <div className="font-base flex flex-col space-y-3 text-left text-xl text-dark md:text-2xl lg:space-y-6 lg:text-3xl">
            <p>(800) 123-4567</p>
            <p>
              1600 Pennsylvania Avenue NW <br></br>Washington, DC 20500
            </p>
            <p>notarealemail@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  )
}
