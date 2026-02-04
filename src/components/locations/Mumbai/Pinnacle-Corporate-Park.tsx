import { gallery1 } from "../../../utils/Landing/Landing";
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.212792818998!2d72.86728357472062!3d19.059727882190618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf1f1c71f0a1%3A0x9abf2f1f4a7f7a8b!2sPinnacle%20Corporate%20Park%2C%20BKC!5e0!3m2!1sen!2sin!4v1721352465026!5m2!1sen!2sin",
  );
  const images = [
    "/officeimg/Pinnacle/Pinnacle.jpg",
    "/officeimg/Pinnacle/Pinnacle2.jpg",
    "/officeimg/Pinnacle/Pinnacle3.jpg",
    "/officeimg/Pinnacle/Pinnacle4.jpg",
    "/officeimg/Pinnacle/Pinnacle5.jpg",
    "/officeimg/Pinnacle/Pinnacle6.jpg",
    "/officeimg/Pinnacle/Pinnacle7.jpg",
    "/officeimg/Pinnacle/Pinnacle8.jpg",
  ];

  const name = "Pinnacle Corporate Park, BKC";
  const navigate = useNavigate();
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
          style={{ backgroundImage: `url(${gallery1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              Pinnacle Corporate Park, BKC
            </h1>
            <p className="text-lg text-gray-200 mt-4">
              603 The Co Working Space, Pinnacle Corporate Park
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
        <section className=" px-8 2xl:px-32 grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] items-stretch py-16 lg:gap-10">
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
                  <span className="text-sm font-semibold text-gray-500">
                    Day Pass
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 999
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Hot Desk
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 12,999 Onwards
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Dedicated Desk
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 15,999 Onwards
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Cabin Space
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 17,999 Onwards
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Custom Cabin
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 17,999 Onwards
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Meeting Rooms
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 899 / Hourly
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Conference Rooms
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 1,499 / Hourly
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
              603 The Coworking Space is excited to announce the opening of our
              newest office space Bandra Kurla Complex, often referred to as
              BKC, a prominent business district located in the heart of Mumbai.
              One of the key attractions of BKC is its strategic location. It is
              centrally located, with easy access to both the eastern and
              western suburbs of Mumbai.
            </p>
            <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
              BKC offers a wide range of facilities to cater to the needs of its
              residents, employees, and visitors. The complex boasts of modern
              office spaces, commercial buildings, hotels, restaurants, and
              shopping centers. The presence of multinational corporations,
              financial institutions, and government offices in BKC has further
              enhanced its reputation as a prime business destination.
              Additionally, BKC is known for its green spaces and
              well-maintained infrastructure. Moreover, BKC is home to a mix of
              luxury hotels, upscale restaurants, and retail outlets, offering a
              perfect blend of work and leisure options.
            </p>
            <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
              Overall, Bandra Kurla Complex stands out as a dynamic and vibrant
              urban center that offers a seamless blend of business, lifestyle,
              and recreational amenities, making it a coveted destination in
              Mumbai's commercial landscape.
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
