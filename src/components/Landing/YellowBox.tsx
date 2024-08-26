import React, { useState } from 'react';

const YellowBox: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-10 rounded-2xl shadow-xl h-full">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-white">
        Benefits of Our Coworking Spaces
      </h2>
      <div className="space-y-6">
        {[
          {
            title: 'Solopreneurs',
            content: 'No lock-ins, minimal deposit, 60 seconds to sign up. Enjoy maximum flexibility and ease.'
          },
          {
            title: 'Teams',
            content: 'Customizable spaces for small businesses or teams of any size. Designed to boost productivity with tailored solutions.'
          },
          {
            title: 'Large Businesses',
            content: 'Accommodating multiple teams with varying needs. Explore our customized solutions or exclusive managed offices.'
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full p-5 text-left bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-xl font-semibold text-gray-800">{item.title}</span>
              <span className="text-2xl text-gray-600">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-5 bg-gray-50">
                <p className='text-gray-700'>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YellowBox;
