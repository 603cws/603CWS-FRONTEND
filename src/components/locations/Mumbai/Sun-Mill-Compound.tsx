import background from "/officeimg/SunMill/Sunmill.jpeg";
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15089.895512569543!2d72.8173286431614!3d18.99882917941545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf4397856501%3A0x482f3f34e960ca79!2sSun%20Mill%20Compound!5e0!3m2!1sen!2sin!4v1721254812039!5m2!1sen!2sin",
  );
  const images = [
    "/officeimg/SunMill/Sunmill.jpeg",
    "/officeimg/SunMill/Sunmill2.jpeg",
    "/officeimg/SunMill/Sunmill3.jpeg",
    "/officeimg/SunMill/Sunmill4.jpeg",
    "/officeimg/SunMill/Sunmill.jpeg",
    "/officeimg/SunMill/Sunmill.jpeg",
  ];
  const name = "Lower Parel - Sun Mill Compound";

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
          className="relative h-screen  flex items-center text-center justify-center bg-cover bg-center bg-no-repeat bg-gray-100"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              Sun Mill Lower Parel
            </h1>
            <p className="text-lg text-gray-200 mt-4">
              603 The Co Working Space, Sun Mill Compound
            </p>
          </div>
        </section>

        {/* Workspace Packages Section */}
        <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 px-8 2xl:px-32 grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] items-stretch py-16 lg:gap-10">
          <ImageGrid images={images} />
          <div>
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
                    <FaRupeeSign /> 599
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Hot Desk
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 6,999 Onwards
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Dedicated Desk
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 8,999 Onwards
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Cabin Space
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 9,999 Onwards
                  </span>
                </li>
                <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-gray-500">
                    Custom Cabin
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
                    <FaRupeeSign /> 9,999 Onwards
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
            <div className="pt-5">
              <button
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
                onClick={() => navigate(`/booknow/${name.replace(/\s/g, "_")}`)}
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
              Sun Mill Compound is based in Lower Parel which is famous for
              being an entertainment and commercial hub. Lower Parel is one
              neighbourhood that seamlessly brings together this city’s
              commercial and entertainment aspects together. Our centre is
              situated on the main-road which helps the commuter to travel
              easily by rail and bus. Lower Parel and Currey Road station is at
              5 minutes walking distance. If you are sociable, you can find
              several restaurants, food joints and gaming zone in the proximity.
              Palladium mall is at 5 minutes distance which has a multiplex,
              5-star restaurants, four levels of exclusive shopping area.
            </p>
            <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
              Another highlighted spot to visit is Kamala Mills Compound. It is
              a commercial complex and a party spot located at 5 minutes walking
              distance from Sun Mill Compound. You can find many renowned
              restaurants there. You can also enjoy a game of multi-level
              Sky-Karting, Bowling, playing cricket against the likes of
              Malinga, Shane Warne & more and experience virtual reality &
              arcade games at Mumbai’s number 1 arena Smaaash.
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
