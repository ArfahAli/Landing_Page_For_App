import React from 'react';

const Logo = ({ font, text }) => {
  return (
    <a
      href='/'
      className={`text-[2.5em] text-[#123] font-[900] tracking-wider ${font}`}
    >
      <span
        className='
      text-purple text-5xl'
      >
        By{' '}
      </span>
      {text}
      <span className='text-purple font-sans text-[2.8rem]'>.</span>
    </a>
  );
};

export default Logo;
