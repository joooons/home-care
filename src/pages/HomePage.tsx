import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Vision from "../components/Vision"
import WhatWeDo from "../components/WhatWeDo"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import MiniOptions from "../components/MiniOptions"

export default function HomePage() {
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
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <MiniOptions></MiniOptions>
    </>
  )
}
