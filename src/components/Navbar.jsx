import React, { useState } from 'react';
import Logo from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ onProjectsClick, onCertificationsClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='flex justify-between items-centerd relative bg-[] py-2 '>
      <Logo font='font-logoArfah' text='Arfah' />
      <div className='md:hidden pt-5 pr-2'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='outline-none focus:outline-none'
        >
          {isMenuOpen ? (
            <FaTimes
              className='text-3xl text-primary
                cursor-pointer
                hover:text-[#883ddd]
            
                
            '
            />
          ) : (
            <FaBars
              className='text-3xl text-[#883d53]
                hover:text-[#883ddd]
            '
            />
          )}
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
          className='text-black px-5 py-2 text-[1.15em] hover:text-primary hover:shadow-xs transition duration-300 ease-in-out transform  
          '
        >
          App
        </button>
        <button
          onClick={onCertificationsClick}
          className='text-black px-5 py-2 text-[1.15em] hover:text-primary hover:shadow-xs transition duration-300 ease-in-out transform 
          '
        >
          Features
        </button>
        <button
          onClick={onCertificationsClick}
          className='text-black px-5 py-2 text-[1.15em] hover:text-primary hover:shadow-xs transition duration-300 ease-in-out transform
          '
        >
          Pricing
        </button>

        <button className='bg-primary text-white font-bold px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:bg-white hover:text-gray-900 hover:shadow-xl hover:-translate-y-1'>
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
