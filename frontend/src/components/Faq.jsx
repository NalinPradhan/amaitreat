'use client'
import React, { useState, memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';


const tabs = [
  {
    title: 'What is the level of hygience?',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
  },
  {
    title: 'Are all the meat used fresh?',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
  },
  {
    title: 'Where do you deliver?',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
  },
];

const Faq = memo(() => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='border-orange-300 bg-slate-100 m-2 rounded-2xl '>
      {tabs.map((tab, index) => (
        <div key={index} className={` ${index !== tabs.length - 1 ? 'border-b' : ''}`}>
          <button
            className="p-3 px-2   w-full cursor-pointer items-center transition-all font-semibold  text-black flex gap-2"
            onClick={() => handleClick(index)}
          >
            <Plus
              className={`${activeIndex === index ? 'rotate-45' : 'rotate-0'
                } transition-transform ease-in-out w-5 h-5  text-gray-600`}
            />
            {tab.title}
          </button>
          <AnimatePresence mode="sync">
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <p className='p-3'>{tab.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

    </div>
  );
});

export default Faq;
