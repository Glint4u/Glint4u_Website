'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ data array
const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of web development and design services, including custom website creation, e-commerce solutions, and mobile app development."
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a more complex application could take 2-3 months or more."
  },
  {
    question: "Do you provide ongoing support after the project is completed?",
    answer: "Yes, we offer various support and maintenance packages to ensure your digital product continues to perform optimally after launch."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on the specific requirements of each client. We provide detailed quotes after an initial consultation."
  }
];

// Individual FAQ item component
const FAQItem = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-5 px-3 text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="p-3 text-gray-400">{item.answer}</p>
      </div>
    </div>
  );
};

// Main FAQ component
const BlackThemedFAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((i) => i !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 pb-[100px] md:pb-[250px]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openItems.includes(index)}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlackThemedFAQ;
