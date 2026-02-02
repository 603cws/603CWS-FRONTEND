import React from "react";

interface OfferProps {
  title: string;
  description: string;
  imagesrc: string;
}

const Offer: React.FC<OfferProps> = ({ title, description, imagesrc }) => {
  return (
    <div className="p-4 flex justify-center">
      <div className="card h-[410px] bg-base-100 w-full max-w-xs shadow-xl border-2 border-black transition-transform transform hover:scale-105">
        <figure className="px-4 pt-4">
          <img
            src={imagesrc}
            alt="Offer"
            className="rounded-xl w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
          />
        </figure>
        <div className="card-body p-4 text-center border-t-2 border-gray-200">
          <h2 className="text-lg lg:text-xl font-bold">{title}</h2>
          <p className="text-gray-500 mt-2 text-justify mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
