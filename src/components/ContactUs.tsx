// import img_abstract from "./assets/abstract.jpg"
import img_abstract from "../assets/abstract.jpg"

export default function ContactUs() {
  return (
    <>
      <section id="contact" className="relative p-12 md:p-24 lg:p-32">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          src={img_abstract}
          alt="image of abstract paper texture"
        />
        <div className="flex flex-col gap-4 lg:gap-8">
          <h1 className="max-w-xl text-left text-3xl font-bold text-purp [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] md:text-4xl lg:text-6xl">
            CONTACT US
          </h1>
          <div className="flex flex-col gap-4 text-left text-xl font-medium text-dark lg:gap-8 lg:text-3xl">
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
