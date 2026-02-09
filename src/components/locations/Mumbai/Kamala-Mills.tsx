import { gallery6 } from "../../../utils/Landing/Landing";
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
  const images = [
    "/officeimg/Kamala/kamala11.jpeg",
    "/officeimg/Kamala/kamala8.jpeg",
    "/officeimg/Kamala/kamala9.jpeg",
    "/officeimg/Kamala/kamala4.jpg",
    "/officeimg/Kamala/kamala10.jpeg",
    "/officeimg/Kamala/kamala6.jpg",
  ];
  const [source] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14343.29170826237!2d72.82001179742787!3d18.998461965040526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9336955555%3A0xbe3ae1b3d45ad1f3!2sTrade%20world!5e1!3m2!1sen!2sin!4v1770616953559!5m2!1sen!2sin",
  );

  const name = "Lower Parel - Kamala Mills";

  const navigate = useNavigate();
  return (
    <div className="font-sans">
      {/* Navbar Section */}
      <header className="bg-white shadow-lg z-50 relative">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center text-center justify-center bg-cover bg-center bg-no-repeat bg-gray-100"
        style={{ backgroundImage: `url(${gallery6})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Kamala Mills, Lower Parel
          </h1>
          <p className="text-lg text-gray-200 mt-4">
            603 The CoWorking Space, Kamala Mills
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

      <section className=" px-8 2xl:px-32 grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] items-stretch py-16 lg:gap-10">
        <ImageGrid images={images} />

        <div className="flex flex-col justify-between">
          <div className="p-4 lg:p-6 border border-[#ccc] rounded-2xl mt-8 lg:mt-0 shadow-md flex flex-col">
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
                <span className="text-sm font-semibold text-gray-500">
                  Day Pass
                </span>
                <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                  <FaRupeeSign /> 1199
                </span>
              </li>
              <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm font-semibold text-gray-500">
                  Hot Desk
                </span>
                <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                  <FaRupeeSign /> 9,999 Onwards
                </span>
              </li>
              <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm font-semibold text-gray-500">
                  Dedicated Desk
                </span>
                <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                  <FaRupeeSign /> 12,999 Onwards
                </span>
              </li>
              <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm font-semibold text-gray-500">
                  Cabin Space
                </span>
                <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                  <FaRupeeSign /> 14,999 Onwards
                </span>
              </li>
              <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm font-semibold text-gray-500">
                  Custom Cabin
                </span>
                <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                  <FaRupeeSign /> 14,999 Onwards
                </span>
              </li>
              <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm font-semibold text-gray-500">
                  Meeting Rooms
                </span>
                <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                  <FaRupeeSign /> 799 / Hourly
                </span>
              </li>
              <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm font-semibold text-gray-500">
                  Conference Rooms
                </span>
                <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                  <FaRupeeSign /> 1499 / Hourly
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

      <section className="py-16 flex flex-col lg:flex-row justify-between items-start px-8 lg:px-32">
        <div className="lg:w-3/5">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">
            Overview
          </h2>
          <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
            Our new location at Kamala Mills Compound is based in Lower Parel
            which is famous for being an entertainment and commercial hub. Lower
            Parel is one neighbourhood that seamlessly brings together this
            city’s commercial and entertainment aspects together. Our centre is
            situated in Kamala Mills Compound one of the most Prime Commercial
            location in Lower Parel with easy connectivity to rail and bus.
            Lower Parel and Currey Road station is at 10 minutes walking
            distance.
          </p>
          <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
            If you are sociable, you can find several restaurants, food joints
            and gaming zone in the vicinity itself. Palladium mall is at 7
            minutes distance which has a multiplex, 5-star restaurants, four
            levels of exclusive shopping area. Another highlight is Kamala Mills
            Compound itself where the office building is located. It is a
            commercial complex and a party spot for your corporate events or get
            together. You can find many renowned restaurants there. You can also
            enjoy a game of multi-level Sky-Karting, Bowling, playing cricket
            against the likes of Malinga, Shane Warne & more and experience
            virtual reality & arcade games at Mumbai’s number 1 arena Smaaash.
          </p>
          <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
            603 The Coworking Space (Kamala Mills Compound) is a well-designed
            office space. Here we offer you with different options to select a
            desired office space as per your requirement.
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
              <FaBolt className="text-yellow-500 mr-2" /> Uninterruptible power
              supply
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
              <FaCouch className="text-yellow-500 mr-2" /> Relax, entertainment
              room
            </li>
            <li className="flex items-center">
              <FaCoffee className="text-yellow-500 mr-2" /> Tea & Coffee
            </li>
          </ul>
        </div>
      </section>
      <div className="py-16 ">
        <iframe
          src={source}
          className="w-full h-80 rounded-lg shadow-lg"
          loading="lazy"
        ></iframe>
      </div>
      <div />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Webpage;
