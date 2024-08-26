import React from 'react';

// Define the types for the Popup component props
interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-60">
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto border border-gray-300">
      <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">{message}</h3>
      <p className="text-center text-gray-600 mb-6">
        We have received your request. We will contact you within 2-3 days.
      </p>
      <div className="text-center">
        <button
          className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default Popup;
