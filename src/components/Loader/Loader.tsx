import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader: React.FC = () => {
  const [size, setSize] = useState<number>(80); // Default size

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth < 800 ? 40 : 80); // Change size based on window width
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size based on current window width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <ThreeDots
        visible={true}
        height={size}
        width={size}
        color="#fbbf24"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
