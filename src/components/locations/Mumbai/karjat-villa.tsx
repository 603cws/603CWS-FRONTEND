import background from "/villaimg/villa_photo_9.webp";
import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import {
  FaWifi,
  FaBolt,
  FaSnowflake,
  FaBroom,
  FaCouch,
  FaCoffee,
} from "react-icons/fa";
import ImageCarousel from "../../LocationCarousal/LocationCarousal";
import { useState } from "react";

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5435.959280715239!2d73.31827823930506!3d18.909171595176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb76ff72fb6b%3A0x2711a3c5836a79e4!2sKarjat%20Junction!5e0!3m2!1sen!2sin!4v1734351856143!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

const Webpage = () => {
  const [source] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5435.959280715239!2d73.31827823930506!3d18.909171595176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb76ff72fb6b%3A0x2711a3c5836a79e4!2sKarjat%20Junction!5e0!3m2!1sen!2sin!4v1734351856143!5m2!1sen!2sin"
  );
  const images = [
    "/villaimg/villa_photo_1.webp",
    "/villaimg/villa_photo_2.webp",
    "/villaimg/villa_photo_3.webp",
    "/villaimg/villa_photo_4.webp",
    "/villaimg/villa_photo_5.webp",
    "/villaimg/villa_photo_6.webp",
    "/villaimg/villa_photo_7.webp",
    "/villaimg/villa_photo_8.webp",
    "/villaimg/villa_photo_9.webp",
    "/villaimg/villa_photo_10.webp",
  ];

  // reloadPage();
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
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h1 className="uppercase text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              Sattigo Villa ,Karjat
            </h1>
            {/* <p className="text-lg text-gray-200 mt-4">by 603</p> */}
          </div>
        </section>
        {/* Workspace Packages Section */}
        <section className="py-16 flex flex-col 2xl:flex-row justify-between items-center px-8 2xl:px-32 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <div className="w-full">
            <ImageCarousel
              images={images}
              altTextPrefix="My Image"
              indicatorColor="bg-gray-300"
              indicatorActiveColor="bg-yellow-600"
              buttonColor="bg-yellow-600"
              buttonHoverColor="bg-blue-900"
            />
          </div>
          {/* <div className="2xl:w-1/3 p-6 bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-2xl mt-8 2xl:mt-0 lg:ml-8 shadow-md flex flex-col">
                        <div className="flex items-start mb-6">
                            <div className="ml-4">
                                <h3 className="text-xl font-black mb-2 text-gray-600">Workspace Packages</h3>
                                <p className="text-base font-semibold text-gray-500 mt-6">Choose the best package for your workspace needs, offering flexible solutions for all.</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Day Pass</span>
                                <span className="text-sm font-bold text-gray-500">₹ 799</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Hot Desk</span>
                                <span className="text-sm font-bold text-gray-500">₹ 7,999 Onwards</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Dedicated Desk</span>
                                <span className="text-sm font-bold text-gray-500">₹ 10,999 Onwards</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Cabin Space</span>
                                <span className="text-sm font-bold text-gray-500">₹ 11,999 Onwards</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Custom Cabin</span>
                                <span className="text-sm font-bold text-gray-500">₹ 11,999 Onwards</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Meeting Rooms</span>
                                <span className="text-sm font-bold text-gray-500">₹ 599 / Hourly</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Conference Rooms</span>
                                <span className="text-sm font-bold text-gray-500">₹ 1099 / Hourly</span>
                            </li>
                        </ul>

                    </div> */}
        </section>
        <section className="py-16 bg-gradient-to-r from-yellow-100 to-gray-100 flex flex-col lg:flex-row justify-between items-start px-8 lg:px-32">
          <div className="lg:w-3/5">
            <h2 className="uppercase text-4xl font-semibold mb-8 text-gray-800">
              Sattigo Villa – Karjat Overview
            </h2>
            <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
              Our Sattigo Villa is nestled in the heart of Karjat, a serene and
              picturesque destination perfect for both work and relaxation.
              Known for its lush green surroundings, scenic landscapes, and calm
              environment, Karjat offers the ideal blend of productivity and
              tranquility. Located just a short drive from Mumbai and Pune, the
              villa is easily accessible by road and rail. Karjat Railway
              Station is just 10 minutes away, ensuring seamless connectivity.
            </p>
            <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
              For those looking to unwind and socialize, Karjat has plenty to
              offer. Explore nearby attractions such as nature trails,
              waterfalls, and scenic viewpoints. Enjoy farm-to-table dining
              experiences at local restaurants or indulge in adventure
              activities like trekking, cycling, and river rafting.
            </p>
            <p className="leading-relaxed text-gray-700">
              The villa itself is thoughtfully designed to offer a peaceful yet
              productive workspace. Whether you’re working solo, collaborating
              with a team, or simply taking a break, our Karjat villa is
              tailored to your needs, providing a unique work-and-play
              experience surrounded by nature.
            </p>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0 lg:ml-12">
            <h2 className="uppercase text-4xl font-semibold mb-8 text-gray-800">
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