'use client'
import React, { useState, memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';


const tabs = [
  {
    title: 'What is the level of hygiene?',
    description:
      'We use the best quality meat and ingredients to prepare our dishes. We maintain the highest level of hygiene and cleanliness in our kitchen. Our chefs are highly trained and experienced in preparing delicious and healthy dishes. We take great care to ensure that our food is safe and healthy for our customers.',
  },
  {
    title: 'Are all the meat used fresh?',
    description:
      'Yes, all the meat are fresh and sourced from the best suppliers. We take great care to ensure that our meat is of the highest quality and free from any harmful chemicals or preservatives. Our chefs are highly trained and experienced in handling and preparing meat to ensure that it is safe and healthy for our customers.',
  },
  {
    title: 'Where do you deliver?',
    description:
      'We currently deliver to Thimphu, Paro and Phuentsholing. We are working on expanding our delivery services to other parts of the country. Please stay tuned for updates on our delivery services.',
  },
];

const Faq = memo(() => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='border-orange-300 bg-slate-100 m-2 rounded-2xl lg:ml-64'>
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
