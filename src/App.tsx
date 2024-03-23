import NavBar from './components/NavBar';

import './App.css';

import img_convo from './assets/convo.jpg';
// import img_hug from './assets/hug.jpg';
// import img_flower from './assets/flower.jpg';
import img_chile from './assets/chile.jpg';
import img_stare from './assets/stare.jpg';
import img_house from './assets/house.jpg';

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

      <section className='items-center justify-center'>
        <div className='overflow-hidden'>
          <img
            className='h-full object-cover absolute opacity-50 -z-10'
            src={img_house}
            alt='image of a house'
          />
        </div>

        <div className='flex flex-col items-center justify-center px-16 pt-24 pb-20'>
            <h1 className='max-w-xl text-3xl text-center font-bold font-alegreya text-dark m-3'>
              We'll take care of your loved ones
            </h1>
            <p className='text-center text-dark max-w-xl m-3'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vel
              repellendus necessitatibus delectus facere nisi dolore harum
              voluptate blanditiis quos nam debitis, assumenda enim vero
              corrupti ut mollitia a temporibus hic!
            </p>
            <div className='flex justify-center'>
              <button>LEARN MORE</button>
            </div>
          
          {/* Hero Image - temporarily disabled */}
          {/* <div className='hidden md:block md:w-auto p-8'>
            <div className='rounded-full size-96 bg-blue-500 overflow-hidden'>
              <img
                className='object-cover w-full h-full'
                src={img1}
                alt='Random Unsplash Image'
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* //  MM      MM  MMMMMM    MMMM    MMMMMM    MMMM    MM    MM  
          //  MM      MM    MM    MM    MM    MM    MM    MM  MMMM  MM  
          //  MM      MM    MM      MM        MM    MM    MM  MM  MMMM  
          //  MM      MM    MM        MM      MM    MM    MM  MM    MM  
          //    MM  MM      MM    MM    MM    MM    MM    MM  MM    MM  
          //      MM      MMMMMM    MMMM    MMMMMM    MMMM    MM    MM   */}

      <section className='flex flex-col md:flex-row items-center justify-center p-24 bg-sand'>
        <div className='w-full md:w-auto p-8'>
          <div className='rounded-full size-96 bg-blue-500 overflow-hidden'>
            <img
              className='object-cover w-full h-full'
              src={img_convo}
              alt='image of a conversation'
            />
          </div>
        </div>

        <div className='w-full md:w-auto p-8'>
          <h1 className='max-w-xl text-6xl text-left font-bold font-alegreya text-slate-700 m-3'>
            VISION
          </h1>
          <p className='max-w-xl text-left text-xl m-3'>
            At Home Care Concierge, we believe in the value of...
          </p>
          <p className='max-w-xl text-left text-xl m-3'>
            Every family member deserves to be taken care of. We promise to
            treat everyone like family.
          </p>
          <p></p>
          <div className='flex justify-start'>
            <button>DO SOMETHING</button>
          </div>
        </div>
      </section>

      {/* //  MM      MM  MM    MM    MMMM    MMMMMM  
          //  MM      MM  MM    MM  MM    MM    MM    
          //  MM      MM  MMMMMMMM  MMMMMMMM    MM    
          //  MM  MM  MM  MM    MM  MM    MM    MM    
          //  MM  MM  MM  MM    MM  MM    MM    MM    
          //    MM  MM    MM    MM  MM    MM    MM     */}

      <section className='flex flex-col md:flex-row items-center justify-center p-24 bg-white'>
        <div className='w-full md:w-auto p-8'>
          <h1 className='max-w-xl text-6xl text-left font-bold font-alegreya text-slate-700 m-3'>
            WHAT WE DO
          </h1>
          <p className='max-w-xl text-left text-xl m-3'>
            At HOME CARE, we believe that home care is everything. We will treat
            you like family, because at Home Care, you are family.
          </p>
          <p className='max-w-xl text-left text-xl m-3'>
            We serve homes in Whittier, La Mirada, and Fullerton.
          </p>
          <div className='flex justify-start'>
            <button>DO SOMETHING</button>
          </div>
        </div>
        <div className='w-full md:w-auto p-8'>
          <div className='rounded-full size-96 bg-blue-500 overflow-hidden'>
            <img
              className='object-cover w-full h-full'
              src={img_stare}
              alt='image of two people staring at each other'
            />
          </div>
        </div>
      </section>

      {/* //  MMMMMM  MMMMMMMM    MMMM    MMMMMM  MMMMMM  MM      MM  
          //    MM    MM        MM    MM    MM      MM    MMMM  MMMM  
          //    MM    MMMMMMMM    MM        MM      MM    MM  MM  MM  
          //    MM    MM            MM      MM      MM    MM      MM  
          //    MM    MM        MM    MM    MM      MM    MM      MM  
          //    MM    MMMMMMMM    MMMM      MM    MMMMMM  MM      MM   */}

      <section className='flex flex-col md:flex-row items-center justify-center p-24 bg-sand'>
        <div className='w-full md:w-auto p-8'>
          <div className='rounded-full size-96 bg-blue-500 overflow-hidden'>
            <img
              className='object-cover w-full h-full'
              src={img_chile}
              alt='image of man holding a chile'
            />
          </div>
        </div>
        <div className='w-full md:w-auto p-8'>
          <h1 className='text-6xl text-left font-bold font-alegreya text-slate-700 m-3'>
            TESTIMONIALS
          </h1>
          <p className='max-w-xl text-left text-xl m-3'>
            "This was the best thing that happened to me ever!"
          </p>
          <p className='max-w-xl text-right text-xl m-3'>- John Smith</p>
          <div className='flex justify-start'>
            <button>DO SOMETHING</button>
          </div>
        </div>
      </section>

      {/* //    MMMM      MMMM    MM    MM  MMMMMM    MMMM      MMMM    MMMMMM  
          //  MM    MM  MM    MM  MMMM  MM    MM    MM    MM  MM    MM    MM    
          //  MM        MM    MM  MM  MMMM    MM    MMMMMMMM  MM          MM    
          //  MM        MM    MM  MM    MM    MM    MM    MM  MM          MM    
          //  MM    MM  MM    MM  MM    MM    MM    MM    MM  MM    MM    MM    
          //    MMMM      MMMM    MM    MM    MM    MM    MM    MMMM      MM     */}

      <section className='flex flex-row items-center justify-center p-24 bg-white'>
        <div className='p-8'>
          <h1 className='max-w-xl text-6xl text-center font-bold font-alegreya text-slate-700 m-3'>
            CONTACT
          </h1>
          <p className='max-w-xl text-center text-xl m-3'>714 123 4566</p>
          <p className='max-w-xl text-center text-xl m-3'>
            1600 Pennsylvania Avenue NW, Washington, DC 20500
          </p>
          <div className='flex justify-center'>
            <button>DO SOMETHING</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
