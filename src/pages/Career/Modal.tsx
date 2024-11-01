// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedPosition: any;  // Include this if it's required
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selectedPosition }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-10">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg max-h-screen overflow-y-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{selectedPosition.title}</h2>
                <p className="text-gray-600 mb-4">{selectedPosition.description}</p>
                <h4 className="font-medium text-gray-700 mb-2">Selected Position: {selectedPosition.name}</h4> {/* Display selectedPosition */}
                <h4 className="font-medium text-gray-700 mb-2">Requirements:</h4>
                <ul className="text-gray-600 list-disc pl-5 mb-6 space-y-2">
                    {selectedPosition.requirements.map((req:any, index:any) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
                <button
                    className="mt-4 w-full py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-300"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
