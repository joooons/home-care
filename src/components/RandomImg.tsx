// import React from 'react';

const RandomImg = () => {
  return (
    <>
      <div className='rounded-full size-96 bg-blue-500 overflow-hidden'>
        <img
          className='object-cover w-full h-full'
          src='https://source.unsplash.com/random'
          alt='Random Unsplash Image'
        />
      </div>
    </>
  );
};

export default RandomImg;
