import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl md:text-2xl text-gray-600 mb-6">{question}</h3>
        <IoIosAddCircleOutline
          className={`text-[#883d53] cursor-pointer ${isOpen ? 'transform rotate-45' : ''}`}
          size="1.5em"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && <p className="text-gray-600 mt-2 text-lg">{answer}</p>}
    </div>
  );
};

export default FAQItem;
