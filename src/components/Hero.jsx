import React from 'react';
import { FaGooglePlay, FaApple, FaGithubAlt, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-gray-100 px-4 py-16 sm:px-6 lg:px-8'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between'>
        {/* Left side - Device Mockup with Text */}
        <div className='md:flex-1 text-center md:text-left mb-10 md:mb-0'>
          <h1 className='text-5xl md:text-7xl font-bold text-[#883d53] mb-10'>
            Clean Clothes
          </h1>
          <p className='text-2xl md:text-4xl text-gray-600 mb-6'>
            Download our app and get your laundry done with a tap of a button.
          </p>
          <p className='mb-10 text-xl text-gray-500 '>
            Clean Clothes is a laundry service app that allows you to order a
            laundry pickup and delivery service with a few taps on your phone.
          </p>
          {/* Buttons with Icons */}
          <div className='flex justify-center md:justify-start space-x-4'>
            <a
              href='https://play.google.com/store/apps/details?id=your.app.id' // Replace with your Play Store link
              className='flex items-center bg-[#123] text-white px-5 py-3 rounded-lg hover:bg-gray-900 transition duration-300'
            >
              <FaGooglePlay className='text-xl md:text-3xl text-green-400 mr-2' />
              <span className='font-[600] text-[1.2rem]'>Google Play</span>
            </a>
            <a
              href='https://apps.apple.com/app/idyourappid' // Replace with your App Store link
              className='flex items-center bg-[#123] text-white px-9 py-3 rounded-lg hover:bg-gray-900 transition duration-300'
            >
              <FaGithub className='text-2xl md:text-3xl text-white mr-2' />
              <span className='font-[600] text-[1.2rem]'>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right side - Image Placeholder */}
        <div className='md:flex-1 flex justify-center md:justify-end'>
          <div className='relative w-full max-w-md mx-auto md:mx-0'>
            {/* Mockup phone image */}
            <img
              className='w-64 md:w-[20rem] h-auto relative z-10'
              src='/App.png' // Replace with your mockup phone image path
              alt='Phone Mockup'
            />
            {/* Colored circle behind the phone */}
            {/* <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <div className='w-64 md:w-[25rem] h-64 md:h-[25rem] bg-purple-500 rounded-full -z-10'></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
