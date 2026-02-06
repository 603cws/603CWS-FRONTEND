import { gallery2 } from "../../../utils/Landing/Landing";
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

const Webpage = () => {
  const [source] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7386179269965!2d72.86902197472399!3d19.119119382094336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94a766fb321%3A0x15bd80ce48eb013!2s27%20MIDC!5e0!3m2!1sen!2sin!4v1721255215891!5m2!1sen!2sin",
  );
  return (
    <div className="font-sans">
      {/* Navbar Section */}
      <header className="bg-white shadow-lg z-50 relative">
        <Navbar />
      </header>

      {/* Hero Section */}
      <div className="pt-16">
        <section
          className="relative h-screen lg:h-[600px] flex items-center text-center justify-center bg-cover bg-center bg-no-repeat bg-gray-100"
          style={{ backgroundImage: `url(${gallery2})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              27MIDC, Andheri East
            </h1>
            <p className="text-lg text-gray-200 mt-4">
              603 The CoWorking Space, Andheri East MIDC
            </p>
          </div>
        </section>

        {/* Workspace Packages Section */}
        <section className="py-16 flex flex-col 2xl:flex-row justify-between items-center px-8 2xl:px-32 ">
          <div className="lg:w-3/5">
            <img
              src={gallery2}
              alt="Workspace"
              className="w-full rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105 hover:rotate-1"
            />
          </div>
          <div className="2xl:w-1/3 p-6 border border-[#ccc] rounded-2xl mt-8 2xl:mt-0 lg:ml-8 shadow-md flex flex-col">
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
                  <FaRupeeSign /> 599.00
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
                  <FaRupeeSign /> 11,999 Onwards
                </span>
              </li>
              <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm font-semibold text-gray-500">
                  Cabin Space
                </span>
                <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                  <FaRupeeSign /> 12,999 Onwards
                </span>
              </li>
              <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm font-semibold text-gray-500">
                  Custom Cabin
                </span>
                <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                  <FaRupeeSign /> 12,999 Onwards
                </span>
              </li>
              <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm font-semibold text-gray-500">
                  Meeting Rooms
                </span>
                <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                  <FaRupeeSign /> 499 / Hourly
                </span>
              </li>
              <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm font-semibold text-gray-500">
                  Conference Rooms
                </span>
                <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                  <FaRupeeSign /> 999 / Hourly
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16  flex flex-col lg:flex-row justify-between items-start px-8 lg:px-32">
          <div className="lg:w-3/5">
            <h2 className="text-4xl font-semibold mb-8 text-gray-800">
              Overview
            </h2>
            <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
              Andheri East MIDC has almost become the city’s next big business
              hub! With its proximity to the International airport, railway
              station, and metro junctions. Andheri east has now become the
              favourite destination for corporate houses and IT companies due to
              its centralisation and ease of commute from all across the city.
              <br />
              And we “603 The Coworking Space” have grabbed this opportunity to
              open a branch in Andheri East MIDC, Mumbai.
            </p>
            <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
              The center is just 10 minutes away from J B Nagar metro station
              and 15 minutes away from Andheri Station (E), which is an
              advantage for all the people traveling from the Western and
              Central railway lines. (Stations) We have a 7-storey glass facade
              building with a great view and the right amount of sunlight coming
              your way.
            </p>
            <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
              The building has a great breakout area and a terrace where you can
              take a quick glance at an entire MIDC area while having a cup of
              tea or enjoy playing games and taking a break from the office
              mundane to rejuvenate back at work efficiently.
              <br />
              The center is located in a prime location which is surrounded by
              many 5-star properties like The Leela, Radisson Mumbai, and food
              joints like China gate restaurant, bora-bora, CCD, etc.
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
        <div className="py-16 ">
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
