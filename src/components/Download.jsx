import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const DownloadCTA = () => {
  return (
    <div
      className=' 
    bg-gradient-to-r from-purpleLighter to-primary
    text-white py-8 px-6 shadow-lg flex flex-col md:flex-col items-center justify-between'
    >
      <div className='flex-1 text-center md:text-left'>
        <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold my-12 text-center'>
          Download our app and get your laundry done with a tap of a button.
        </h3>
        {/* <p className='mb-6 text-center text-xl'>
          Download the app and enjoy a vast collection of recipes at your
          fingertips.
        </p> */}
      </div>
      <div
        className='flex flex-col md:flex-row items-center justify-center gap-4

      '
      >
        <a
          href='https://play.google.com/store/apps/details?id=your.app.id'
          className='flex items-center justify-center  rounded-lg transition duration-300'
        >
          <img
            src='/google-play-badge.png'
            alt='Google Play Store'
            className='h-32'
          />
        </a>
        <a
          href='https://www.apple.com/app-store/'
          className='flex items-center justify-center ml-4 rounded-lg transition duration-300'
        >
          <img src='/apple-cta.svg' alt='App Store' className='w-64' />
        </a>
      </div>
    </div>
  );
};

export default DownloadCTA;
