// import Section from './components/Section';
// import Segment from './components/Segment';
import RandomImg from './components/RandomImg';

import './App.css';

function App() {
  return (
    <>
      {/* TOP */}
      <section className='bg-white'>
        <div className='flex flex-row items-center justify-center p-24 '>
          <div className='p-8'>
            <h1 className='bg-wh text-6xl text-left font-bold text-green-800 m-3'>
              CARE AT HOME
            </h1>
            <p className='text-left max-w-xl text-xl m-3'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vel
              repellendus necessitatibus delectus facere nisi dolore harum
              voluptate blanditiis quos nam debitis, assumenda enim vero
              corrupti ut mollitia a temporibus hic! Unde possimus cumque
              architecto dolore eveniet perspiciatis sed laborum blanditiis
              sequi sunt repudiandae cum eligendi natus repellendus repellat,
              labore non ab, ducimus modi.
            </p>
            <div className='flex justify-start'>
              <button>DO SOMETHING</button>
            </div>
          </div>
          <div className='p-8'>
            <div className='rounded-full size-96 bg-blue-500 overflow-hidden'>
              <img
                className='object-cover w-full h-full'
                src='./src/assets/pexels-andrea-piacquadio-3768131.jpg'
                alt='Random Unsplash Image'
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className='flex flex-row items-center justify-center p-24 bg-sky-300 '>
        <div className='p-8'>
          <RandomImg></RandomImg>
        </div>
        <div className='p-8'>
          <h1 className='text-6xl text-left font-bold text-green-800 m-3'>
            VISION
          </h1>
          <div>
            At HOME CARE, we believe that home care is everything. We will treat
            you like family, because at Home Care, you are family.
          </div>
          <h1 className='text-6xl text-left font-bold text-green-800 m-3'>
            MISSION STATEMENT
          </h1>
          <div>
            At HOME CARE, we believe that home care is everything. We will treat
            you like family, because at Home Care, you are family.
          </div>
          <p></p>
          <div className='flex justify-start'>
            <button>DO SOMETHING</button>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className='flex flex-row items-center justify-center p-24 bg-sky-300 '>
        <div className='p-8'>
          <RandomImg></RandomImg>
        </div>
        <div className='p-8'>
          <h1 className='text-6xl text-left font-bold text-green-800 m-3'>
            WHAT WE DO
          </h1>
          <p>We do this and that</p>
          <p>We do this and that</p>
          <p>We do this and that</p>
          <div className='flex justify-start'>
            <button>DO SOMETHING</button>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className='flex flex-row items-center justify-center p-24 bg-white'>
        <div className='p-8'>
          <h1 className='bg-wh text-6xl  text-left font-bold text-green-800 m-3'>
            TESTIMONIALS
          </h1>
          <div>John Q.</div>
          <p>This was the best ever!</p>
          <div className='flex justify-start'>
            <button>DO SOMETHING</button>
          </div>
        </div>
        <div className='p-8'>
          <RandomImg></RandomImg>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className='flex flex-row items-center justify-center p-24 bg-sky-300'>
        <div className='p-8'>
          <RandomImg></RandomImg>
        </div>
        <div className='p-8'>
          <h1 className='bg-wh text-6xl  text-left font-bold text-green-800 m-3'>
            LOCATIONS
          </h1>
          <div>La Mirada</div>
          <div>Whittier</div>
          <div>Fullerton</div>
          <div className='flex justify-start'>
            <button>DO SOMETHING</button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className='flex flex-row items-center justify-center p-24 bg-white'>
        <div className='p-8'>
          <h1 className='bg-wh text-6xl  text-left font-bold text-green-800 m-3'>
            CONTACT
          </h1>
          <div>Home Care</div>
          <div>1600 Pennsylvania Avenue NW, Washington, DC 20500</div>
          <div className='flex justify-start'>
            <button>DO SOMETHING</button>
          </div>
        </div>
        <div className='p-8'>
          <RandomImg></RandomImg>
        </div>
      </section>
    </>
  );
}

export default App;
