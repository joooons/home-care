import NavBar from './components/NavBar';

import './App.css';

import img1 from './assets/pexels-andrea-piacquadio-3768131.jpg';
import img2 from './assets/pexels-andrea-piacquadio-3823497.jpg';
import img3 from './assets/pexels-charlotte-may-5825576.jpg';
import img4 from './assets/pexels-juliane-sanchez-20191410.jpg';
import img5 from './assets/pexels-vlada-karpovich-5790837.jpg';
import img6 from './assets/pexels-pixabay-259588.jpg';

function App() {
  return (
    <>
      <NavBar></NavBar>

      {/* TOP */}
      <section>
        <div className='w-full overflow-hidden'>
          <img
            className='w-screen object-cover absolute opacity-25 -z-10'
            src={img6}
            alt='Img6'
          />
        </div>

        <div className='flex flex-row items-center justify-center p-24 '>
          <div className='p-8'>
            <h1 className='max-w-xl text-6xl text-left font-bold font-alegreya text-green-800 m-3'>
              We'll take care of your loved ones
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
                src={img1}
                alt='Random Unsplash Image'
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className='flex flex-row items-center justify-center p-24 bg-sand'>
        <div className='p-8'>
          <div className='rounded-full size-96 bg-blue-500 overflow-hidden'>
            <img
              className='object-cover w-full h-full'
              src={img2}
              alt='Random Unsplash Image'
            />
          </div>
        </div>
        <div className='p-8'>
          <h1 className='max-w-xl text-6xl text-left font-bold font-alegreya text-green-800 m-3'>
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

      {/* WHAT WE DO */}
      <section className='flex flex-row items-center justify-center p-24 bg-beige'>
        <div className='p-8'>
          <h1 className='max-w-xl text-6xl text-left font-bold font-alegreya text-green-800 m-3'>
            WHAT WE DO
          </h1>
          <p className='max-w-xl text-left text-xl m-3'>
            At HOME CARE, we believe that home care is everything. We will treat
            you like family, because at Home Care, you are family.
          </p>
          <div className='flex justify-start'>
            <button>DO SOMETHING</button>
          </div>
        </div>
        <div className='p-8'>
          <div className='rounded-full size-96 bg-blue-500 overflow-hidden'>
            <img
              className='object-cover w-full h-full'
              src={img3}
              alt='Random Unsplash Image'
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className='flex flex-row items-center justify-center p-24 bg-sand'>
        <div className='p-8'>
          <div className='rounded-full size-96 bg-blue-500 overflow-hidden'>
            <img
              className='object-cover w-full h-full'
              src={img4}
              alt='Random Unsplash Image'
            />
          </div>
        </div>
        <div className='p-8'>
          <h1 className='text-6xl text-left font-bold font-alegreya text-green-800 m-3'>
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

      {/* LOCATIONS */}
      <section className='flex flex-row items-center justify-center p-24 bg-beige'>
        <div className='p-8'>
          <h1 className='max-w-xl text-6xl text-left font-bold font-alegreya text-green-800 m-3'>
            LOCATIONS
          </h1>
          <p className='max-w-xl text-left text-xl m-3'>
            We serve homes in Whittier, La Mirada, and Fullerton.
          </p>
          <div className='flex justify-start'>
            <button>DO SOMETHING</button>
          </div>
        </div>
        <div className='p-8'>
          <div className='rounded-full size-96 bg-blue-500 overflow-hidden'>
            <img
              className='object-cover w-full h-full'
              src={img5}
              alt='Random Unsplash Image'
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className='flex flex-row items-center justify-center p-24 bg-white'>
        <div className='p-8'>
          <h1 className='max-w-xl text-6xl text-center font-bold font-alegreya text-green-800 m-3'>
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
