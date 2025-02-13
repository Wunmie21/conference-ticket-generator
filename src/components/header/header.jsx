// import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className='header-con bg-[#05252c] text-white px-6 py-4 my-6 mx-auto'>
      <div className='max-w-[1200px] mx-auto flex items-center justify-between'>
        {/* Logo & Event Name */}
        <div className='flex items-center gap-3'>
          
          <img src='/logo.svg' alt='Event Logo' className='w-[6rem] h-[2rem]' />
          <h1 className='text-xl font-bold'></h1>
        </div>

        {/* Navigation Links */}
        <nav className='hidden md:flex gap-6 no-underline'>
          <a
            href='#events'
            className='!no-underline text-white  hover:text-gray-400 transition'
          >
            Events
          </a>
          <a
            href='#my-tickets'
            className='!no-underline text-white hover:text-gray-400 transition'
          >
            My Tickets
          </a>
          <a
            href='#about-project'
            className='text-white !no-underline hover:text-gray-400 transition'
          >
            About Project
          </a>
        </nav>

        <div className='hidden md:flex gap-4'>
          <button className='bg-white text-[#05252c] px-4 py-2 !rounded-xl font-semibold hover:bg-gray-300 transition'>
            MY TICKETS
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


//  br-24 vp-12 bh-16 bc-#197686