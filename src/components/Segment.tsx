// import React from 'react';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Segment = ({ children }: Props) => {
  return <div className='p-8'>{children}</div>;
};

export default Segment;
