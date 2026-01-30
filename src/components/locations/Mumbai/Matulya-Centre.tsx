import background from "/officeimg/Matulya/Matulya.jpg";
import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import {
  FaWifi,
  FaBolt,
  FaSnowflake,
  FaBroom,
  FaDoorOpen,
  FaPrint,
  FaCouch,
  FaCoffee,
  FaRupeeSign,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageGrid from "../../LocationCarousal/ImageGrid";

const Webpage = () => {
  const [source] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4738712785665!2d72.82505347472069!3d18.99882948218989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8d495475cf%3A0x60b2ec04a00313c8!2sMatulya%20Centre!5e0!3m2!1sen!2sin!4v1721254522143!5m2!1sen!2sin",
  );
  const images = [
    "/officeimg/Matulya/Matulya.jpg",
    "/officeimg/Matulya/Matulya2.jpg",
    "/officeimg/Matulya/Matulya3.JPG",
    "/officeimg/Matulya/Matulya4.JPG",
    "/officeimg/Matulya/Matulya5.JPG",
    "/officeimg/Matulya/Matulya.jpg",
  ];

  const navigate = useNavigate();

  const name = "Lower Parel - Matulya Centre";
  return (
    <div className="font-sans">
      {/* Navbar Section */}
      <header className="bg-white shadow-lg z-50 relative">
        <Navbar />
      </header>

      {/* Hero Section */}
      <div className="">
        <section
          className="relative h-screen flex items-center text-center justify-center bg-cover bg-center bg-no-repeat bg-gray-100"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              Matulya Lower Parel
            </h1>
            <p className="text-lg text-gray-200 mt-4">
              603 The Co Working Space, Matulya Center
            </p>
            <div className="pt-6">
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
                onClick={() => navigate(`/booknow/${name.replace(/\s/g, "_")}`)}
                // onClick={() => navigate("/")}
              >
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* Workspace Packages Section */}
        <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 px-8 2xl:px-32 grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] items-stretch py-16 lg:gap-10">
          <ImageGrid images={images} />
          <div className="flex flex-col justify-between">
            <div className="p-4 lg:p-6 bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-2xl mt-8 lg:mt-0 shadow-md flex flex-col">
              <div className="flex items-start mb-6">
                <div className="ml-4">
                  <h3 className="text-xl font-black mb-2 text-gray-600">
                    Workspace Packages
                  </h3>
                  <p className="text-base font-semibold text-gray-500 mt-6">
                    Choose the best package for your workspace needs, offering
                    flexible solutions for all.
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500 flex">
                    Day Pass
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 799
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Hot Desk
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 7,999 Onwards
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Dedicated Desk
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 10,999 Onwards
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Cabin Space
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 11,999 Onwards
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Custom Cabin
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 11,999 Onwards
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Meeting Rooms
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 599 / Hourly
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Conference Rooms
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 1099 / Hourly
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-5">
              <button
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
                onClick={() => navigate(`/booknow/${name.replace(/\s/g, "_")}`)}
                // onClick={() => navigate("/")}
              >
                Book Now
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-yellow-100 to-gray-100 flex flex-col lg:flex-row justify-between items-start px-8 lg:px-32">
          <div className="lg:w-3/5">
            <h2 className="text-4xl font-semibold mb-8 text-gray-800">
              Overview
            </h2>
            <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
              Matulya Centre is based in Lower Parel, famous for being an
              entertainment and commercial hub. Lower Parel seamlessly brings
              together this city’s commercial and entertainment aspects. Our
              centre is situated on the main road, making it easy to travel by
              rail and bus. Lower Parel and Currey Road station is just a
              5-minute walk away.
            </p>
            <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
              For those who are sociable, you’ll find several restaurants, food
              joints, and gaming zones in proximity. Palladium Mall is 5 minutes
              away, featuring a multiplex, 5-star restaurants, and four levels
              of exclusive shopping. Kamala Mills Compound, another highlight,
              is a commercial complex and party spot located just 5 minutes from
              Matulya Centre. Enjoy multi-level Sky-Karting, Bowling, cricket,
              and virtual reality games at Smaaash.
            </p>
            <p className="leading-relaxed text-gray-700">
              603 The Coworking Space (Matulya Center) is a well-designed office
              space offering different options tailored to your needs.
            </p>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0 lg:ml-12">
            <h2 className="text-4xl font-semibold mb-8 text-gray-800">
              Amenities
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <FaWifi className="text-yellow-500 mr-2" /> High speed internet
              </li>
              <li className="flex items-center">
                <FaBolt className="text-yellow-500 mr-2" /> Uninterruptible
                power supply
              </li>
              <li className="flex items-center">
                <FaSnowflake className="text-yellow-500 mr-2" /> Fully
                Airconditioned rooms
              </li>
              <li className="flex items-center">
                <FaBroom className="text-yellow-500 mr-2" /> Housekeeping &
                Facility Upkeep
              </li>
              <li className="flex items-center">
                <FaDoorOpen className="text-yellow-500 mr-2" /> Conference Rooms
              </li>
              <li className="flex items-center">
                <FaPrint className="text-yellow-500 mr-2" /> Free Printing
              </li>
              <li className="flex items-center">
                <FaCouch className="text-yellow-500 mr-2" /> Relax,
                entertainment room
              </li>
              <li className="flex items-center">
                <FaCoffee className="text-yellow-500 mr-2" /> Tea & Coffee
              </li>
            </ul>
          </div>
        </section>
        <div className="py-16 bg-gradient-to-r from-gray-100 to-yellow-100">
          <iframe
            src={source}
            className="w-full h-80 rounded-lg shadow-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Webpage;
// type ImageGridProps = {
//   images: string[];
// };
// function ImageGrid({ images }: ImageGridProps) {
//   return (
//     <div className="grid grid-cols-[1.5fr,1fr] gap-1 lg:gap-3 h-full">
//       <div className="grid grid-rows-[2fr,1fr] gap-1 lg:gap-3 h-full">
//         <img
//           src={images[0]}
//           alt=""
//           className="w-full h-full object-cover rounded-xl"
//         />

//         <div className="grid grid-cols-2 gap-1 lg:gap-3">
//           <img
//             src={images[1]}
//             alt=""
//             className="w-full h-full object-cover rounded-xl"
//           />
//           <img
//             src={images[2]}
//             alt=""
//             className="w-full h-full object-cover rounded-xl"
//           />
//         </div>
//       </div>

//       <div className="grid grid-rows-3 gap-1 lg:gap-3 h-full">
//         <img
//           src={images[3]}
//           alt=""
//           className="w-full h-full object-cover rounded-xl"
//         />
//         <img
//           src={images[4]}
//           alt=""
//           className="w-full h-full object-cover rounded-xl"
//         />
//         <img
//           src={images[4]}
//           alt=""
//           className="w-full h-full object-cover rounded-xl"
//         />
//       </div>
//     </div>
//   );
// }
