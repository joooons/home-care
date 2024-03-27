import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Vision from "./components/Vision"
import WhatWeDo from "./components/WhatWeDo"
import Testimonials from "./components/Testimonials"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

import "./App.css"

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
        <Testimonials></Testimonials>
        <ContactUs></ContactUs>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
