import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaCloudsmith,
  FaGrin,
  FaGrinTears,
  FaShirtsinbulk,
  FaStopwatch,
} from 'react-icons/fa';
import {
  Si1Password,
  SiAdobeaudition,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featureIcons = [
    {
      icon: FaStopwatch,
      label: 'Save Time',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: '#f44336',
    },
    {
      icon: FaGrin,
      label: 'Quality Work',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: '#4caf50',
    },
    {
      icon: SiAdobeaudition,
      label: 'Convenient ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: '#131314',
    },

    {
      icon: FaShirtsinbulk,
      label: 'Affordable',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: '#131314',
    },
  ];

  return (
    <div className='text-black py-10 bg-slate-100'>
      <div className='container mx-auto text-center'>
        <div ref={ref}>
          {/* <h2 className='text-4xl font-bold mb-6'>
            Features
            <div
              className={`h-1 bg-primary transition-width duration-700 mx-auto mt-2 ${
                inView ? 'w-[3em]' : 'w-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            />
          </h2> */}
        </div>
        <div className='flex flex-wrap justify-center gap-[10rem] mt-16'>
          {featureIcons.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center w-72 h-auto md:w-72 lg:w-56 cursor-pointer transition-opacity duration-700 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <feature.icon
                className='text-5xl md:text-6xl lg:text-7xl hover:brightness-125 duration-500 hover:scale-110'
                style={{ color: feature.color }}
              />
              <span className='mt-2 text-sm md:text-base font-bold text-black'>
                {feature.label}
              </span>
              <span className='text-sm md:text-base text-gray-600'>
                {feature.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
