import NavBar from "./components/NavBar"

import "./App.css"

import img_convo from "./assets/convo.jpg"
import img_hug from "./assets/hug.jpg"
import img_flower from "./assets/flower.jpg"
import img_chile from "./assets/chile.jpg"
import img_stare from "./assets/stare.jpg"
import img_house from "./assets/house.jpg"
import img_line_wave from "./assets/line-wave.jpg"
// import img_line_minim from './assets/line-minim.jpg';
// import img_line_couch from './assets/line-couch.jpg';
import img_abstract from "./assets/abstract.jpg"

function App() {
  const handleClick = (section: string) => {
    console.log("sup")
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <NavBar></NavBar>

      {/* //  MM    MM  MMMMMMMM  MMMMMM      MMMM    
          //  MM    MM  MM        MM    MM  MM    MM  
          //  MMMMMMMM  MMMMMMMM  MMMMMM    MM    MM  
          //  MM    MM  MM        MM    MM  MM    MM  
          //  MM    MM  MM        MM    MM  MM    MM  
          //  MM    MM  MMMMMMMM  MM    MM    MMMM     */}

      <section className="relative items-center justify-center">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
          src={img_house}
          alt="image of a house"
        />
        <div className="flex h-screen flex-col items-center justify-center px-16 pb-20 pt-24">
          <h1 className="m-3 max-w-xl text-center font-alegreya text-2xl font-bold text-dark lg:text-4xl">
            We'll take care of your loved ones
          </h1>
          <p className="m-3 max-w-xl text-center text-dark">
            As a compassionate home care concierge service, we offer
            personalized care in the comfort of our clients' homes, focusing on
            daily activities, medication management, and companionship to
            support their independence and well-being.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-sky-500 text-light hover:bg-sky-600"
              onClick={() => handleClick("vision")}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* //  MM      MM  MMMMMM    MMMM    MMMMMM    MMMM    MM    MM  
          //  MM      MM    MM    MM    MM    MM    MM    MM  MMMM  MM  
          //  MM      MM    MM      MM        MM    MM    MM  MM  MMMM  
          //  MM      MM    MM        MM      MM    MM    MM  MM    MM  
          //    MM  MM      MM    MM    MM    MM    MM    MM  MM    MM  
          //      MM      MMMMMM    MMMM    MMMMMM    MMMM    MM    MM   */}

      <section
        id="vision"
        className="grid grid-cols-1 items-center justify-center bg-gradient-to-r from-sky-400 from-5% via-sky-300 via-50% to-sky-200 to-95% lg:grid-cols-2"
      >
        <div className="w-full overflow-hidden bg-white md:w-auto">
          <img
            className="h-full w-full object-cover"
            src={img_convo}
            alt="image of a conversation"
          />
        </div>

        <div className="w-full p-8 md:w-auto">
          <h1 className="m-3 max-w-xl text-left font-alegreya text-3xl font-bold text-dark md:text-4xl">
            VISION
          </h1>
          <p className="m-3 max-w-xl text-left text-dark">
            At Home Care Concierge, we believe in the value of...
          </p>
          <p className="m-3 max-w-xl text-left text-dark">
            Every family member deserves to be taken care of. We promise to
            treat everyone like family.
          </p>
          <p className="m-3 max-w-xl text-left text-dark">
            That's what we're all about.
          </p>
        </div>
      </section>

      {/* //  MM      MM  MM    MM    MMMM    MMMMMM  
          //  MM      MM  MM    MM  MM    MM    MM    
          //  MM      MM  MMMMMMMM  MMMMMMMM    MM    
          //  MM  MM  MM  MM    MM  MM    MM    MM    
          //  MM  MM  MM  MM    MM  MM    MM    MM    
          //    MM  MM    MM    MM  MM    MM    MM     */}

      <section id="what" className="relative items-center justify-center">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
          src={img_line_wave}
          alt="image of a house"
        />
        <div className="relative grid grid-cols-1 items-center justify-center lg:grid-cols-2">
          <div className="w-full p-10 md:w-auto md:p-0 ">
            <div className="m-12 aspect-square overflow-hidden rounded-full bg-blue-500 lg:m-24">
              <img
                className="h-full w-full object-cover"
                src={img_stare}
                alt="image of two people staring at each other"
              />
            </div>
          </div>
          <div className="w-full px-24 pb-12 md:w-auto lg:order-first lg:pb-0 ">
            <h1 className="m-3 max-w-xl text-left font-alegreya text-3xl font-bold text-dark md:text-4xl">
              WHAT WE DO
            </h1>
            <p className="m-3 max-w-xl text-left text-dark">
              At HOME CARE, we believe that home care is everything. We will
              treat you like family, because at Home Care, you are family.
            </p>
            <p className="m-3 max-w-xl text-left text-dark">
              We serve homes in Whittier, La Mirada, and Fullerton.
            </p>
          </div>
        </div>
      </section>

      {/* //  MMMMMM  MMMMMMMM    MMMM    MMMMMM  MMMMMM  MM      MM  
          //    MM    MM        MM    MM    MM      MM    MMMM  MMMM  
          //    MM    MMMMMMMM    MM        MM      MM    MM  MM  MM  
          //    MM    MM            MM      MM      MM    MM      MM  
          //    MM    MM        MM    MM    MM      MM    MM      MM  
          //    MM    MMMMMMMM    MMMM      MM    MMMMMM  MM      MM   */}

      <section
        id="testimony"
        className="flex flex-col justify-center bg-sky-300 p-12"
      >
        <h1 className="mb-12 text-center font-alegreya text-3xl font-bold text-dark md:text-4xl">
          TESTIMONIALS
        </h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          <div className="pb-12">
            <div className="w-full overflow-hidden rounded-3xl bg-white md:w-auto">
              <img
                className="aspect-video h-full w-full object-cover"
                src={img_hug}
                alt="image of a conversation"
              />
            </div>
            <h3 className="p-4 text-xl">
              "I couldn't have done this without yall nice people."
            </h3>
            <div className="text-xl">Albert</div>
          </div>
          <div className="pb-12">
            <div className="w-full overflow-hidden rounded-3xl bg-white md:w-auto">
              <img
                className="aspect-video h-full w-full object-cover"
                src={img_flower}
                alt="image of a conversation"
              />
            </div>
            <h3 className="p-4 text-xl">
              "I felt so reassured by the warmth and professionalism that each
              of the consultants possessed."
            </h3>
            <div className="text-xl">Barbara</div>
          </div>
          <div className="pb-12">
            <div className="w-full overflow-hidden rounded-3xl bg-white md:w-auto">
              <img
                className="aspect-video h-full w-full object-cover"
                src={img_chile}
                alt="image of a conversation"
              />
            </div>
            <h3 className="p-4 text-xl">
              "Their service really took a heavy weight off of our backs. My
              parents love spending more time with their grandchildren."
            </h3>
            <div className="text-xl">Charlie</div>
          </div>
        </div>
      </section>

      {/* //    MMMM      MMMM    MM    MM  MMMMMM    MMMM      MMMM    MMMMMM  
          //  MM    MM  MM    MM  MMMM  MM    MM    MM    MM  MM    MM    MM    
          //  MM        MM    MM  MM  MMMM    MM    MMMMMMMM  MM          MM    
          //  MM        MM    MM  MM    MM    MM    MM    MM  MM          MM    
          //  MM    MM  MM    MM  MM    MM    MM    MM    MM  MM    MM    MM    
          //    MMMM      MMMM    MM    MM    MM    MM    MM    MMMM      MM     */}

      <section
        id="contact"
        className="relative flex flex-row items-center justify-center pb-48 pt-12"
      >
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          src={img_abstract}
          alt="image of a house"
        />
        <div className="p-8">
          <h1 className="m-3 max-w-xl text-center font-alegreya text-3xl font-bold text-dark md:text-4xl">
            CONTACT
          </h1>
          <p className="m-3 max-w-xl text-center text-dark">714 123 4566</p>
          <p className="m-3 max-w-xl text-center text-dark">
            1600 Pennsylvania Avenue NW, Washington, DC 20500
          </p>
          <p className="m-3 max-w-xl text-center text-dark">
            not_a_real_email@gmial.com
          </p>
        </div>
      </section>
    </>
  )
}

export default App
