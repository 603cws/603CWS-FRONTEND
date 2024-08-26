import { useState } from "react";
interface LocaProps {
  title: string;
  description: string;
  src?: string; // optional prop for image URL
}

const Loca: React.FC<LocaProps> = ({ title, description, src }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`flex min-h-28 max-w-[400px] ${
        hover ? "text-red-500" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {src && (
        <img
          src={src}
          alt={title}
          className="w-14 h-14 rounded-full mr-4"
        />
      )}
      <div className="flex flex-col">
        <p className={`font-bold text-amber-950 text-lg`}>{title}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
export default Loca;