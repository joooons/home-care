// import Section from './components/Section';
// import Segment from './components/Segment';
import RandomImg from './components/RandomImg';

import './App.css';

function App() {
  return (
    <>
      <div className='flex flex-row items-center justify-center bg-green-200 '>
        <div className='p-8'>
          <h1 className='bg-wh text-6xl  text-left font-bold text-green-800 m-3'>
            CARE AT HOME
          </h1>
          <p className='text-left max-w-xl text-xl m-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vel
            repellendus necessitatibus delectus facere nisi dolore harum
            voluptate blanditiis quos nam debitis, assumenda enim vero corrupti
            ut mollitia a temporibus hic! Unde possimus cumque architecto dolore
            eveniet perspiciatis sed laborum blanditiis sequi sunt repudiandae
            cum eligendi natus repellendus repellat, labore non ab, ducimus
            modi.
          </p>
          <div className='flex justify-start'>
            <button>DO SOMETHING</button>
          </div>
        </div>

        <div className='p-8'>
          <RandomImg></RandomImg>
        </div>
      </div>
    </>
  );
}

export default App;
