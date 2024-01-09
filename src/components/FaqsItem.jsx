import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">{question}</h3>
        <IoIosAddCircleOutline
          className={`text-purple-600 cursor-pointer ${isOpen && 'transform rotate-45'}`}
          size="1.5em"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>
  );
};
export default FAQItem;