import NavBar from "../components/NavBarAlt"
import Hero from "../components/HeroAlt"
import Vision from "../components/VisionAlt"
import WhatWeDo from "../components/WhatWeDoAlt"
import Testimonials from "../components/TestimonialsAlt"
import ContactUs from "../components/ContactAlt"
import Footer from "../components/FooterAlt"

export default function AltPage() {
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
