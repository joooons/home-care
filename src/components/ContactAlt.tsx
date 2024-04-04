// import SvgBlob from "./SvgBlob"

export default function ContactAlt() {
  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden bg-slate-200/50"
      >
        {/* <div className="absolute inset-5 -z-10 flex h-full w-full flex-col justify-end object-cover">
          <SvgBlob></SvgBlob>
        </div> */}
        <div className="container relative mx-auto flex flex-col gap-8 px-6 py-24 md:py-32 lg:gap-16 lg:py-40 xl:py-52">
          <h1 className="font-libre  max-w-xl text-left text-3xl font-bold text-tan md:text-4xl lg:text-6xl dark:text-light">
            Contact
          </h1>
          <div className="font-newsreader flex flex-col space-y-3 text-left text-xl font-medium text-dark/60 md:text-2xl lg:space-y-6 lg:text-3xl dark:text-light/60">
            <p>(xxx) xxx-xxxx</p>
            <p>
              1234 Fictional Avenue<br></br>Springfield, NA 12345
            </p>
            <p>notarealemail@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  )
}
