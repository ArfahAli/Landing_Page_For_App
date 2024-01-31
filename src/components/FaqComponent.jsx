import React from 'react';
import FAQItem from './FaqsItem';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What services does the app offer??',
      answer: 'Our app provides a range of laundry services including washing, dry cleaning, ironing, and express delivery options.'
    },
    {
      question: 'How do I schedule a laundry pickup?',
      answer: 'ISimply select your preferred pickup time and location in the app, and team will take care of the rest.'
    },
    {
      question: 'Is there a minimum order value for using the app?',
      answer: 'No, there is no minimum order value, but orders above a certain amount qualify for free delivery.'
    },
    {
      question: 'How can I track my laundry order?',
      answer: ' Once your laundry is picked up, you can track its status in real-time through the app until delivery.'
    }
  ];

  return (
    <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-600 mb-6">
      <div className="text-lg sm:text-xl md:text-2xl lg:font-extrabold text-gray-800 mb-5">FAQs</div>
      <div className="w-16 h-1 sm:w-24 sm:h-2 md:w-32 md:h-2 bg-[#883d53] mb-12 mx-auto"></div>
      
      <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
