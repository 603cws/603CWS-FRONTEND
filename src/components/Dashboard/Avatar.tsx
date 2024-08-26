import React from 'react';

interface AvatarProps {
  name: string;
  onClick?: () => void; // Optional onClick prop
}

const Avatar: React.FC<AvatarProps> = ({ name, onClick }) => {
  return (
    <div
      className="relative border-gray-500 border inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full cursor-pointer"
      onClick={onClick}
    >
      <span className="font-medium text-yellow-400 text-lg m-2">{name[0]}</span>
    </div>
  );
};

export default Avatar;
