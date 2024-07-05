import React from 'react';
import Footer from './Footer';
import HeaderHome from './HeaderHome';

function HomeLayout({ children }) {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <HeaderHome/>
      <div className='flex-grow'>{children}</div>
      <Footer/>
    </div>
  );
}

export default HomeLayout;
