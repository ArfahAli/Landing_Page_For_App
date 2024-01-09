import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from './Logo';

const Navbar = ({ onProjectsClick, onCertificationsClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='flex justify-between items-centerd relative bg-[] py-2 '>
      <Logo font='font-logoArfah' text='Arfah' />
      <div className='md:hidden'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='outline-none focus:outline-none'
        >
          {/* {isMenuOpen ? (
            <XIcon className='h-8 w-8 text-white transition duration-200 ease-in-out transform hover:rotate-180' />
          ) : (
            <MenuIcon className='h-8 w-8 text-white transition duration-200 ease-in-out transform hover:rotate-180' />
          )} */}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col md:flex-row md:flex items-center gap-10 mr-5 absolute md:relative w-full md:w-auto transition-all duration-300 ease-in ${
          isMenuOpen ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'
        } md:opacity-100 md:top-0`}
      >
        <button
          onClick={onProjectsClick}
          className='text-black px-5 py-2 text-[1.15em] hover:text-white hover:shadow-xs hover:-translate-y-[0.09em]'
        >
          App
        </button>
        <button
          onClick={onCertificationsClick}
          className='text-black px-5 py-2 text-[1.15em] hover:text-white hover:shadow-xs hover:-translate-y-[0.09em]'
        >
          Features
        </button>
        {/* <button
          onClick={onCertificationsClick}
          className='text-black px-5 py-2 text-[1.15em] hover:text-gray-300 hover:shadow-xs hover:-translate-y-[0.09em]'
        >
          Pricing
        </button> */}

        <button className='bg-[#883d53] text-white font-bold px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:bg-white hover:text-gray-900 hover:shadow-xl hover:-translate-y-1'>
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
