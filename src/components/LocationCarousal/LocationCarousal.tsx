import React, { useState } from 'react';

interface ImageCarouselProps {
  images: string[];
  altTextPrefix?: string;
  indicatorColor?: string;
  indicatorActiveColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  altTextPrefix = 'Slide',
  indicatorColor = 'bg-gray-400',
  indicatorActiveColor = 'bg-yellow-500',
  buttonColor = 'bg-gray-700',
  buttonHoverColor = 'bg-gray-900',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-xl shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${altTextPrefix} ${index + 1}`}
              className="w-full h-auto object-cover flex-shrink-0"
              style={{ minWidth: '100%', maxHeight: '500px' }} // Increase image height
            />
          ))}
        </div>
      </div>
      <button
        onClick={goToPrev}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 ${buttonColor} text-white p-3 rounded-full shadow-lg hover:${buttonHoverColor} transition-colors duration-300 ease-in-out opacity-70`}
        style={{ boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 ${buttonColor} text-white p-3 rounded-full shadow-lg hover:${buttonHoverColor} transition-colors duration-300 ease-in-out opacity-70`}
        style={{ boxShadow: '0 12px 12px rgba(0, 0, 0, 0.15)' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-2 h-2 rounded-full ${index === currentIndex ? indicatorActiveColor : indicatorColor}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
