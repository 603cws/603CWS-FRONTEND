import React from 'react';
import { vid } from '../../utils/Landing/Landing';
import { background2 } from '../../utils/Landing/Landing';

const Random: React.FC = () => {
  return (
    <div className="font-Poppins bg-yellow-50" style={{ backgroundImage: `url(${background2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto py-16 px-6">
        <div className="text-center md:text-left md:flex md:flex-col md:items-center md:justify-between mb-12">
          <h1 className="text-3xl md:text-3xl font-semibold text-gray-900 mb-6 md:mb-0 leading-snug">
            603 is redefining how individuals and organizations operate.
          </h1>
          <div className="w-full md:w-2/3 lg:w-1/2 mt-8 md:mt-24">
            <div className="relative">
              <iframe
                className="w-full md:h-96 rounded-lg shadow-lg"
                src={vid}
                title="Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      {/* 
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-800 text-xl mb-6 md:mb-0">
            Be notified about new locations
          </p>
          <form className="w-full md:w-auto flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter E-Mail Address"
              className="border border-gray-300 rounded px-4 py-3 mb-4 md:mb-0 md:mr-4 w-full md:w-72"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white rounded px-6 py-3 w-full md:w-auto transition duration-300">
              Subscribe
            </button>
          </form>
        </div>*/}
      </div>
    </div>
  );
};

export default Random;
