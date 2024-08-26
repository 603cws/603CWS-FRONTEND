import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: 'white',
          padding: windowWidth > 375 ? '30px' : "15px",
          borderRadius: '8px',
          width: '80%',
          maxWidth: '500px',
          position: 'relative',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            border: 'none',
            background: 'transparent',
            fontSize: '24px',
            cursor: 'pointer',
            fontFamily: 'Arial, sans-serif',
          }}
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body // Render the modal into the body
  );
};

export default Modal;
