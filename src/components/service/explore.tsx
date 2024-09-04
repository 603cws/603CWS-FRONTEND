import React from "react";
import { useNavigate } from "react-router-dom";

interface OfferProps {
  title: string;
  description: string;
  imagesrc: string;
  price: string;
}

const Explore: React.FC<OfferProps> = ({
  title,
  description,
  imagesrc,
  price,
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-md p-4 transition-transform duration-300 transform hover:scale-105">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200">
        <figure className="relative">
          <img
            src={imagesrc}
            alt={title}
            className="w-full h-48 object-cover sm:h-56 md:h-60 lg:h-60"
          />
        </figure>
        <div className="p-4 bg-grey-50">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">{title}</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-5">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-lg sm:text-lg  text-gray-500">
              Starting from <b>₹{price}</b>
            </p>
            <button onClick={() => { navigate("/allLocations") }} className="mt-3 sm:mt-0 bg-yellow-500 text-white hover:bg-yellow-600 py-2 px-3 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
