'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ data array
const faqData = [
  {
    question: "What services does glint provide?",
    answer: "We offer UI/UX design, website development, API development, DevOps, SEO, IT consulting, and web hosting."
  },
  {
    question: "How do I start a project with glint?",
    answer: "Contact us via our form or email, and we'll discuss your requirements in detail."
  },
  {
    question: "Do you work with startups or enterprises?",
    answer: "We cater to both startups and enterprises, tailoring solutions to fit their unique needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on the project scope. We'll provide a timeline after the initial consultation."
  },
  {
    question: "What is the cost of your services?",
    answer: "Pricing varies by project; we'll give you a customized quote after understanding your needs."
  },
  {
    question: "Can I track the progress of my project?",
    answer: "Yes, we provide regular updates and involve you in key milestones."
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Absolutely! We offer maintenance and support to ensure long-term success."
  },
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
          <ChevronUp className="min-w-5 min-h-5 text-gray-400" />
        ) : (
          <ChevronDown className="min-w-5 min-h-5 text-gray-400" />
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
    <section className="m-auto bg-black text-white py-12 px-4 sm:px-6 lg:px-8 pb-[50px] md:pb-[100px]">
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
