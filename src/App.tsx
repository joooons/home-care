import NavBar from "./components/NavBar"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

import "./App.css"

// import img_convo from "./assets/convo.jpg"
import img_hug from "./assets/hug.jpg"
import img_flower from "./assets/flower.jpg"
import img_chile from "./assets/chile.jpg"
// import img_stare from "./assets/stare.jpg"
import img_house from "./assets/house.jpg"
// import img_porch from "./assets/porch.jpg"
// import img_house_bw from "./assets/house-bw.jpg"
// import img_line_wave from "./assets/line-wave.jpg"
import Hero from "./components/Hero"
import Vision from "./components/Vision"
import WhatWeDo from "./components/WhatWeDo"
// import img_line_minim from './assets/line-minim.jpg';
// import img_line_couch from './assets/line-couch.jpg';
// import img_abstract from "./assets/abstract.jpg"

// import SvgGardener from "./components/SvgGardener"

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>

      <main>
        <Hero></Hero>

        <Vision></Vision>

        <WhatWeDo></WhatWeDo>

        {/* //  MMMMMM  MMMMMMMM    MMMM    MMMMMM  MMMMMM  MM      MM  
            //    MM    MM        MM    MM    MM      MM    MMMM  MMMM  
            //    MM    MMMMMMMM    MM        MM      MM    MM  MM  MM  
            //    MM    MM            MM      MM      MM    MM      MM  
            //    MM    MM        MM    MM    MM      MM    MM      MM  
            //    MM    MMMMMMMM    MMMM      MM    MMMMMM  MM      MM   */}

        <section
          id="testimony"
          className="flex flex-col justify-center gap-12 bg-second py-12 "
        >
          <h1 className="text-center text-3xl font-bold text-light [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] md:text-4xl lg:text-6xl">
            TESTIMONIALS
          </h1>
          <div className="grid grid-cols-1 gap-8 px-16 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col gap-2">
              <div className="w-full overflow-hidden rounded-3xl bg-white drop-shadow-xl md:w-auto">
                <img
                  className="aspect-video h-full w-full object-cover"
                  src={img_hug}
                  alt="image of a hug"
                />
              </div>
              <h3 className="text-2xl text-light">
                "I couldn't have done this without yall nice people."
              </h3>
              <div className="text-xl text-light/50">Albert Ainstein</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full overflow-hidden rounded-3xl bg-white drop-shadow-xl md:w-auto">
                <img
                  className="aspect-video h-full w-full object-cover"
                  src={img_flower}
                  alt="image of a flower"
                />
              </div>
              <h3 className="text-2xl text-light">
                "I felt so reassured by the warmth and professionalism that each
                of the consultants possessed."
              </h3>
              <div className="text-xl text-light/50">Bob Boss</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full overflow-hidden rounded-3xl bg-white drop-shadow-xl md:w-auto">
                <img
                  className="aspect-video h-full w-full object-cover"
                  src={img_chile}
                  alt="image of a chile"
                />
              </div>
              <h3 className="text-2xl text-light">
                "Their service really took a heavy weight off of our backs. My
                parents love spending more time with their grandchildren."
              </h3>
              <div className="text-xl text-light/50">Charlie Chapstick</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full overflow-hidden rounded-3xl bg-white drop-shadow-xl md:w-auto">
                <img
                  className="aspect-video h-full w-full object-cover"
                  src={img_house}
                  alt="image of a house"
                />
              </div>
              <h3 className="text-2xl text-light">
                "It meant so much to me that I could visit my grandma at her
                house, where I used to play, instead of at a hospital!"
              </h3>
              <div className="text-xl text-light/50">Debbie Downer</div>
            </div>
          </div>
        </section>

        <ContactUs></ContactUs>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
