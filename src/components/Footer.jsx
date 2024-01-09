import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className='bg-dark text-primary'>
      <div className='container mx-auto'>
        <div className='border-t border-gray-700 text-center  pt-3'>
          <p className='text-sm'>Developed with ❤️ by Arfah Ali</p>
          <p className='text-sm'>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
