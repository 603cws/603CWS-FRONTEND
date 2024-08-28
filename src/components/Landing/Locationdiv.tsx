import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";

function Locationdiv({ place, icon = <FaMapMarkerAlt />, onClick }: { place: string; icon?: JSX.Element; onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer space-x-4 w-40 h-28 mx-auto border-l-4 border-yellow-950"
    >
      <span className="text-white text-2xl">{icon}</span>
      <span className="text-gray-700 text-base flex-1 text-center">
        {place}
      </span>
    </div>
  );
}

export default Locationdiv;
