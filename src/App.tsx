import NavBar from './components/NavBar';

import './App.css';

import img_convo from './assets/convo.jpg';
// import img_hug from './assets/hug.jpg';
// import img_flower from './assets/flower.jpg';
import img_chile from './assets/chile.jpg';
import img_stare from './assets/stare.jpg';
import img_house from './assets/house.jpg';

import img_line_wave from './assets/line-wave.jpg';
// import img_line_minim from './assets/line-minim.jpg';
// import img_line_couch from './assets/line-couch.jpg';
import img_abstract from './assets/abstract.jpg';

function App() {
  return (
    <>
      <NavBar></NavBar>

      {/* //  MM    MM  MMMMMMMM  MMMMMM      MMMM    
          //  MM    MM  MM        MM    MM  MM    MM  
          //  MMMMMMMM  MMMMMMMM  MMMMMM    MM    MM  
          //  MM    MM  MM        MM    MM  MM    MM  
          //  MM    MM  MM        MM    MM  MM    MM  
          //  MM    MM  MMMMMMMM  MM    MM    MMMM     */}

      <section className='relative items-center justify-center -z-10'>
        <img
          className='absolute inset-0 object-cover h-full w-full opacity-25 -z-10'
          src={img_house}
          alt='image of a house'
        />
        <div className='flex flex-col items-center justify-center h-screen px-16 pt-24 pb-20'>
          <h1 className='max-w-xl text-2xl lg:text-4xl text-center font-bold font-alegreya text-dark m-3'>
            We'll take care of your loved ones
          </h1>
          <p className='text-center text-dark max-w-xl m-3'>
          As a compassionate home care concierge service, we offer personalized care in the comfort of our clients' homes, focusing on daily activities, medication management, and companionship to support their independence and well-being.
          </p>
          <div className='flex justify-center'>
            <button className='bg-beige'>LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* //  MM      MM  MMMMMM    MMMM    MMMMMM    MMMM    MM    MM  
          //  MM      MM    MM    MM    MM    MM    MM    MM  MMMM  MM  
          //  MM      MM    MM      MM        MM    MM    MM  MM  MMMM  
          //  MM      MM    MM        MM      MM    MM    MM  MM    MM  
          //    MM  MM      MM    MM    MM    MM    MM    MM  MM    MM  
          //      MM      MMMMMM    MMMM    MMMMMM    MMMM    MM    MM   */}

      <section className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center bg-gradient-to-r from-sky-200 from-5% via-sky-300 via-50% to-sky-400 to-95%'>
        <div className='w-full md:w-auto overflow-hidden bg-white'>
            <img
              className='object-cover w-full h-full'
              src={img_convo}
              alt='image of a conversation'
            />
        </div>

        <div className='w-full md:w-auto p-8'>
          <h1 className='max-w-xl text-3xl md:text-4xl text-left font-bold font-alegreya text-dark m-3'>
            VISION
          </h1>
          <p className='max-w-xl text-left text-dark m-3'>
            At Home Care Concierge, we believe in the value of...
          </p>
          <p className='max-w-xl text-left text-dark m-3'>
            Every family member deserves to be taken care of. We promise to
            treat everyone like family.
          </p>
          <p className='max-w-xl text-left text-dark m-3'>
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

      <section className='relative items-center justify-center p-12'>
        <img
          className='absolute inset-0 object-cover h-full w-full opacity-20 -z-10'
          src={img_line_wave}
          alt='image of a house'
        />
        <div className='relative grid grid-cols-1 lg:grid-cols-2 items-center justify-center'>
        <div className='p-10 md:p-0 w-full md:w-auto '>
          <div className='rounded-full aspect-square bg-blue-500 overflow-hidden'>
            <img
              className='object-cover w-full h-full'
              src={img_stare}
              alt='image of two people staring at each other'
            />
          </div>
        </div>
        <div className='w-full lg:order-first md:w-auto p-8 '>
          <h1 className='max-w-xl text-3xl md:text-4xl text-left font-bold font-alegreya text-dark m-3'>
            WHAT WE DO
          </h1>
          <p className='max-w-xl text-left text-dark m-3'>
            At HOME CARE, we believe that home care is everything. We will treat
            you like family, because at Home Care, you are family.
          </p>
          <p className='max-w-xl text-left text-dark m-3'>
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

      <section className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center p-12 bg-gradient-to-r from-sky-400 from-5% via-sky-300 via-50% to-sky-200 to-95%'>
        <div className='p-10 md:p-0 w-full md:w-auto'>
          <div className='rounded-full aspect-square bg-blue-500 overflow-hidden'>
            <img
              className='object-cover w-full h-full'
              src={img_chile}
              alt='image of man holding a chile'
            />
          </div>
        </div>
        <div className='w-full md:w-auto p-8'>
          <h1 className='text-3xl md:text-4xl text-left font-bold font-alegreya text-dark m-3'>
            TESTIMONIALS
          </h1>
          <p className='max-w-xl text-left text-dark m-3'>
            "This was the best thing that happened to me ever!"
          </p>
          <p className='max-w-xl text-right text-dark m-3'>- John Smith</p>
        </div>
      </section>

      {/* //    MMMM      MMMM    MM    MM  MMMMMM    MMMM      MMMM    MMMMMM  
          //  MM    MM  MM    MM  MMMM  MM    MM    MM    MM  MM    MM    MM    
          //  MM        MM    MM  MM  MMMM    MM    MMMMMMMM  MM          MM    
          //  MM        MM    MM  MM    MM    MM    MM    MM  MM          MM    
          //  MM    MM  MM    MM  MM    MM    MM    MM    MM  MM    MM    MM    
          //    MMMM      MMMM    MM    MM    MM    MM    MM    MMMM      MM     */}

      <section className='relative flex flex-row items-center justify-center p-24'>
        <img
          className='absolute inset-0 object-cover h-full w-full opacity-50 -z-10'
          src={img_abstract}
          alt='image of a house'
        />
        <div className='p-8'>
          <h1 className='max-w-xl text-3xl md:text-4xl text-center font-bold font-alegreya text-dark m-3'>
            CONTACT
          </h1>
          <p className='max-w-xl text-center text-dark m-3'>714 123 4566</p>
          <p className='max-w-xl text-center text-dark m-3'>
            1600 Pennsylvania Avenue NW, Washington, DC 20500
          </p>
          <p className='max-w-xl text-center text-dark m-3'>
            not_a_real_email@gmial.com
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
