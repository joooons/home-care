import NavBarAlt from "../components/NavBarAlt"
import HeroAlt from "../components/HeroAlt"
import VisionAlt from "../components/VisionAlt"
import WhatWeDoAlt from "../components/WhatWeDoAlt"
import TestimonialsAlt from "../components/TestimonialsAlt"
import ContactAlt from "../components/ContactAlt"
import Footer from "../components/FooterAlt"
// import MiniOptions from "../components/MiniOptions"

export default function AltPage() {
  return (
    <>
      <header>
        <NavBarAlt></NavBarAlt>
      </header>

      <main>
        <HeroAlt></HeroAlt>
        <VisionAlt></VisionAlt>
        <WhatWeDoAlt></WhatWeDoAlt>
        <TestimonialsAlt></TestimonialsAlt>
        <ContactAlt></ContactAlt>
        {/* <MiniOptions text="HOME" link="/"></MiniOptions> */}
      </main>

      <Footer></Footer>
    </>
  )
}
