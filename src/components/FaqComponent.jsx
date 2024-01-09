import React from 'react';
import FAQItem from './FaqsItem';
const FAQSection = () => {
  const faqs = [
    {
      question: 'How do I start a business?',
      answer: 'Starting a business involves planning, making key financial decisions, and completing a series of legal activities.'
    },
    {
      question: 'How can I improve my business cash flow?',
      answer: 'Improving cash flow can be achieved by managing your inventory more efficiently, reducing expenses, and improving accounts receivable.'
    },
    {
      question: 'What are the key components of a business plan?',
      answer: 'A business plan should include an executive summary, company description, market analysis, organization and management structure, sales strategies, funding requests, and financial projections.'
    },
    {
      question: 'How can I market my business online?',
      answer: 'Marketing your business online can be done through various channels like social media, search engine optimization, email marketing, and more.'
    }
  ];

  return (
    <div className="text-2xl md:text-4xl text-gray-600 mb-6">
      <div className="text-2xl font-extrabold text-gray-800 mb-5">FAQs</div>
      <div className="w-32 h-2 bg-[#883d53] mb-12 mx-auto"></div>
      
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
