// import React from 'react';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <div className='container flex flex-row justify-center'>{children}</div>
  );
};

export default Section;
