import NavBar from "./components/NavBar"

import "./App.css"

import img_convo from "./assets/convo.jpg"
import img_hug from "./assets/hug.jpg"
import img_flower from "./assets/flower.jpg"
import img_chile from "./assets/chile.jpg"
import img_stare from "./assets/stare.jpg"
// import img_house from "./assets/house.jpg"
// import img_porch from "./assets/porch.jpg"
// import img_house_bw from "./assets/house-bw.jpg"
import img_line_wave from "./assets/line-wave.jpg"
// import img_line_minim from './assets/line-minim.jpg';
// import img_line_couch from './assets/line-couch.jpg';
import img_abstract from "./assets/abstract.jpg"
import Footer from "./components/Footer"

function App() {
  const handleClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <header>
        <NavBar></NavBar>

        {/* //  MM    MM  MMMMMMMM  MMMMMM      MMMM    
            //  MM    MM  MM        MM    MM  MM    MM  
            //  MMMMMMMM  MMMMMMMM  MMMMMM    MM    MM  
            //  MM    MM  MM        MM    MM  MM    MM  
            //  MM    MM  MM        MM    MM  MM    MM  
            //  MM    MM  MMMMMMMM  MM    MM    MMMM     */}

        <section className="relative h-svh w-full items-center justify-center ">
          {/* <img
            className="absolute inset-0 -z-10 h-5/6 w-full object-cover opacity-35 lg:h-full"
            src={img_porch}
            alt="image of a house"
          /> */}
          <div className="absolute flex h-3/4 flex-col items-start justify-center gap-6 px-16 lg:h-screen">
            <h1 className="text-left text-3xl font-bold text-dark [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] lg:text-6xl">
              We are <span className="text-purple-600">CARE</span> experts
            </h1>
            <p className="max-w-xl text-left text-xl text-dark lg:text-2xl">
              We provide personalized home care services, focusing on daily
              activities and companionship to support the independence and
              well-being of our clients in their homes.
            </p>
            <div className="flex justify-center">
              <button
                className="bg-wave text-light hover:bg-sky-600"
                onClick={() => handleClick("vision")}
              >
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="relative -z-10 flex h-full w-full flex-col justify-end">
            <svg
              id="visual"
              viewBox="0 0 900 200"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <path
                d="M0 166L21.5 154.7C43 143.3 86 120.7 128.8 109.7C171.7 98.7 214.3 99.3 257.2 112.2C300 125 343 150 385.8 149C428.7 148 471.3 121 514.2 106.3C557 91.7 600 89.3 642.8 101C685.7 112.7 728.3 138.3 771.2 139.2C814 140 857 116 878.5 104L900 92L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z"
                fill="#4992ff"
                stroke-linecap="round"
                stroke-linejoin="miter"
              ></path>
            </svg>
          </div>
        </section>
      </header>

      <main>
        {/* //  MM      MM  MMMMMM    MMMM    MMMMMM    MMMM    MM    MM  
            //  MM      MM    MM    MM    MM    MM    MM    MM  MMMM  MM  
            //  MM      MM    MM      MM        MM    MM    MM  MM  MMMM  
            //  MM      MM    MM        MM      MM    MM    MM  MM    MM  
            //    MM  MM      MM    MM    MM    MM    MM    MM  MM    MM  
            //      MM      MMMMMM    MMMM    MMMMMM    MMMM    MM    MM   */}

        <section
          id="vision"
          className="bg-wave grid grid-rows-2 items-center justify-center lg:grid-cols-2"
        >
          <div className="w-full overflow-hidden  p-4 md:w-auto">
            <img
              className="h-full w-full rounded-2xl object-cover shadow-lg"
              src={img_convo}
              alt="image of a conversation"
            />
          </div>

          <div className="flex w-full flex-col justify-center gap-6 px-16 md:w-auto">
            <h1 className="text-left text-3xl font-bold text-light md:text-4xl">
              VISION
            </h1>
            <div className="text-light">
              <p className="max-w-xl text-left text-light">We believe...</p>
              <p className="max-w-xl text-left text-light">We promise...</p>
              <p className="max-w-xl text-left text-light">We provide...</p>
            </div>
          </div>
        </section>

        {/* //  MM      MM  MM    MM    MMMM    MMMMMM  
            //  MM      MM  MM    MM  MM    MM    MM    
            //  MM      MM  MMMMMMMM  MMMMMMMM    MM    
            //  MM  MM  MM  MM    MM  MM    MM    MM    
            //  MM  MM  MM  MM    MM  MM    MM    MM    
            //    MM  MM    MM    MM  MM    MM    MM     */}

        <section
          id="what"
          className="relative h-screen items-center justify-center"
        >
          <img
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
            src={img_line_wave}
            alt="image of wave line art"
          />
          <div className="absolute -z-10 flex h-full w-full flex-col justify-end">
            <svg
              id="visual"
              viewBox="0 0 900 200"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <path
                d="M0 124L21.5 123.2C43 122.3 86 120.7 128.8 122.8C171.7 125 214.3 131 257.2 138C300 145 343 153 385.8 150.8C428.7 148.7 471.3 136.3 514.2 139.8C557 143.3 600 162.7 642.8 173.2C685.7 183.7 728.3 185.3 771.2 185.7C814 186 857 185 878.5 184.5L900 184L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z"
                fill="#9333EA"
                stroke-linecap="round"
                stroke-linejoin="miter"
              ></path>
            </svg>
          </div>

          <div className="relative grid grid-rows-2 items-center justify-center p-16 lg:grid-cols-2">
            <div className="w-full md:w-auto md:p-0 ">
              <div className="aspect-square overflow-hidden rounded-full bg-blue-500 shadow-lg lg:m-24">
                <img
                  className="h-full w-full object-cover"
                  src={img_stare}
                  alt="image of two people staring at each other"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-6 md:w-auto lg:order-first lg:pb-0 ">
              <h1 className="max-w-xl text-left text-3xl font-bold text-dark md:text-4xl">
                WHAT WE DO
              </h1>
              <p className="max-w-xl text-left text-dark">
                At HOME CARE, we believe that home care is everything. We will
                treat you like family, because at Home Care, you are family.
              </p>
              <p className="max-w-xl text-left text-dark">
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
          className="bg-purp flex flex-col justify-center gap-8 py-12 lg:bg-sky-300"
        >
          <h1 className="px-16 text-center text-3xl font-bold text-light md:text-4xl">
            TESTIMONIALS
          </h1>
          <div className="flex flex-col gap-8 px-16 lg:grid-cols-3 ">
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
          className="relative flex flex-row items-center justify-center py-12"
        >
          <img
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
            src={img_abstract}
            alt="image of abstract paper texture"
          />
          <div className="flex flex-col gap-4 p-16">
            <h1 className="text-purp max-w-xl text-center text-3xl font-bold md:text-4xl">
              CONTACT
            </h1>
            <p className="text-center text-2xl text-dark">800 123 4567</p>
            <p className="text-center text-2xl text-dark">
              1600 Pennsylvania Avenue NW <br></br>Washington, DC 20500
            </p>
            <p className="text-center text-2xl text-dark">
              not_a_real_email@gmial.com
            </p>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
