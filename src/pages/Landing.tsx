import Scramble from "./../components/Landing/Scramble";
import Popuptext from "../components/Landing/Popuptext";
import {
  logo,
  photo1,
  photo2,
  photo3,
  gallery6,
} from "../utils/Landing/Landing";
import { Twopeoplesitting, Flexiblepo } from "../utils/Landing/Svg";
import {
  FaWifi,
  FaPowerOff,
  FaFan,
  FaHome,
  FaPrint,
  FaCar,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Popupform from "./popup/Popupform";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import YellowBox from "../components/Landing/YellowBox";
import PhotoGallery from "../components/Landing/PhotoGallery";
import Review from "../components/Landing/Review";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import "../utils/Landing/custom.css";
import { useApp } from "../context/AuthContext";
// import OurServices from "./../components/AboutUs/OurServices";
import OurPopularity from "../components/AboutUs/OurPopularity";
import Modal from "../components/DashBoardNavbar/Modal";
// import axios from "axios";
import toast from "react-hot-toast";
import axiosInstance from "../utils/axiosInstance";
import CoworkingMap from "../components/CoworkingMap";

const tickerItems = [
  {
    title: "Revolutionary Concept",
    text: "Coworking spaces are gaining popularity over traditional offices due to flexibility, collaboration, and a dynamic work environment.",
  },
  {
    title: "Diverse Clientele",
    text: "Our coworking spaces cater to freelancers, startups, and established businesses, offering an ecosystem that fosters innovation and productivity.",
  },
  {
    title: "Strategic Locations",
    text: "Positioned in business districts of Mumbai and Thane, reducing commute times and increasing efficiency.",
  },
  {
    title: "Collaborative Community",
    text: "Spaces bring together professionals from various industries, encouraging knowledge exchange and collaboration through networking events and communal areas.",
  },
  {
    title: "Flexible Plans",
    text: "Options range from hot desking to private offices, allowing businesses to scale their workspace according to their needs.",
  },
  {
    title: "Enhanced Amenities",
    text: "High-speed internet, modern meeting rooms, game rooms, ergonomic furniture, and fully-equipped kitchens are standard offerings.",
  },
];

function Landing() {
  const [popup, setpopup] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [requestTour, setRequestTour] = useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // const PORT = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    intrestedIn: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { setloading } = useApp();

  useEffect(() => {
    setloading(false); // Set loading to false after the component mounts
  }, [setloading]);

  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await axiosInstance.post(`/api/v1/users/requestTour`, formData);

      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        intrestedIn: "",
      });
      toast.success(
        "Your Request has been Received,we will shortly contact you",
      );
      setRequestTour(() => false);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-gradient-to-br from-#fffed8 via-gray-900 to-#ffffff">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <Popupform val={popup} setpopup={setpopup} />
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center py-20 px-6 md:px-20 font-sans z-10 bg-cover bg-no-repeat bg-fixed blur-animation min-h-screen w-full space-y-10 md:space-y-0 md:space-x-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('${gallery6}')`,
            filter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // dark overlay effect
            backgroundBlendMode: "darken", // blends the overlay with the image
          }}
        ></div>

        <div className="relative z-10 md:w-full">
          <div className="text-white">
            <h1 className="border-l-4 border-yellow-500 pl-4 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} className="h-10 flex items-center" alt="Logo" />
                <Popuptext />
              </div>
              <div>
                <Scramble totype="Work" />
              </div>
              <div>
                <Scramble totype="better," />
              </div>
              <div>
                <Scramble totype="together" />
              </div>
            </h1>
            <h2 className="text-lg  md:text-2xl lg:text-2xl font-light tracking-wide">
              Be surrounded by inspiration
            </h2>
            <button
              onClick={() => navigate("/booknow")}
              className="text-base md:text-xl lg:text-lg mt-8 bg-gradient-to-r from-yellow-300 to-yellow-500 hover:bg-yellow-800 transition-all duration-300 text-gray-900 font-bold lg:px-4 py-2 px-3 rounded-lg shadow-2xl button-animated"
            >
              Book a Space
            </button>
          </div>
        </div>

        <div className="relative z-10 flex justify-end items-center">
          <div className="space-y-10 text-yellow-400 flex-col gap-9 hidden md:flex">
            <a
              href="https://www.instagram.com/603thecoworkingspace/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl font-semibold hover:text-yellow-300 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/603thecoworkingspace/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl font-semibold hover:text-yellow-300 transition-colors duration-300" />
            </a>
            <a
              href="https://www.facebook.com/603coworking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl font-semibold hover:text-yellow-300 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="fixed z-10 right-0 rotate-90 book-tour-btn ">
        <button
          onClick={() => setRequestTour(true)}
          className="text-base text-md  bg-gradient-to-r from-yellow-300 to-yellow-500 hover:bg-yellow-800 transition-all duration-300 text-gray-900 px-2 lg:px-4 py-2  rounded-lg shadow-2xl button-animated"
        >
          Request A Tour
        </button>
      </div>

      <Modal isOpen={requestTour} onClose={() => setRequestTour(false)}>
        <h1 className="text-lg font-bold">Schedule your visit today</h1>
        <p className="text-sm">
          Fill out the form below and a member of our team will get in touch
        </p>
        <form className=" capitalize grid grid-cols-2 gap-8 m-4">
          <div className="col-span-2 ">
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 mt-1"
              type="text"
              placeholder="Full Name*"
              required
            />
          </div>
          <div>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 mt-1"
              type="email"
              placeholder="Email*"
              required
            />
          </div>
          <div>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 mt-1"
              type="tel"
              placeholder="Phone Number*"
              required
            />
          </div>
          <div>
            {/* <label>Location*</label> */}
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="capitalize w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value=" ">Location/Center</option>
              <option value="Amore">Amore khar(w)</option>
              <option value="Bandra">Makija Archade Bandra </option>
              <option value="Sunshine">Sunshine Tower Dadar </option>
              <option value="Matulya">Matulya lower parel</option>
              <option value="Kamala Mills">Kamala Mills lower parel</option>
              <option value="Millennium">
                Milleinum Business park Navi Mumbai
              </option>
              <option value="Sun mill">Sun mill lower Parel</option>
              <option value="Technocity">Technocity Navi Mumbai</option>
              <option value="Navratna Ahmedabad">Navratna Ahmedabad</option>
            </select>
          </div>
          <div>
            <select
              id="intrestedIn"
              name="intrestedIn"
              value={formData.intrestedIn}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="">Intrested In</option>
              <option value="Hot Desk">Hot Desk</option>
              <option value="Dedicated Desk">Dedicated Desk</option>
              <option value="Cabin">Cabin</option>
              <option value="Meeting Room">Meeting Room</option>
            </select>
          </div>
          <button
            // type="submit"
            onClick={handleFormSubmit}
            disabled={isSubmitting}
            className="col-span-2 text-center button text-base text-md  bg-gradient-to-r from-yellow-300 to-yellow-500 hover:bg-yellow-800 transition-all duration-300 text-gray-900  lg:px-4 py-2  rounded-lg shadow-2xl button-animated"
          >
            {isSubmitting ? (
              <div className="spinner">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V12H4z"
                  ></path>
                </svg>
              </div>
            ) : (
              "Get In Touch"
            )}
          </button>
        </form>
      </Modal>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start justify-between pb-12 pt-10 md:pt-20 bg-gradient-to-r from-blue-200 to-yellow-100">
        <div className="w-full md:w-1/2 px-8 lg:px-20 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-lg  md:text-2xl lg:text-2xl font-semibold text-gray-800 w-full text-justify">
            Tailored workspaces and solutions to meet your business needs.
          </h1>
          <p className="mt-6 text-gray-600 bg-text-base md:text-sm lg:text-lg leading-relaxed w-full max-w-xl text-justify">
            Transform your professional journey with 603 The Coworking Space,
            where we provide more than just a place to work—we offer an
            environment designed to inspire and empower. Whether you’re
            searching for a creative sanctuary to ignite innovation, a polished
            setting to make a lasting impression on clients, or a vibrant
            community to foster collaboration and personal growth, our coworking
            spaces are crafted to meet your diverse needs.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center">
          <div className="flex items-center bg-gradient-to-r from-yellow-300 to-yellow-400 px-4 py-3 rounded-lg shadow-lg w-[80%]">
            <div>
              <Twopeoplesitting />
            </div>
            <div className="text-white flex flex-col justify-center w-full">
              <h1 className="text-lg  md:text-xl lg:text-2xl font-semibold flex justify-center">
                1,650
              </h1>
              <p className="bg-text-base md:text-lg lg:text-lg  text-gray-700 flex justify-center">
                Total seats available
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-3 mt-6 text-gray-700 bg-text-base md:text-lg lg:text-lg">
            <div className="flex items-center">
              <FaWifi className="text-yellow-400 mr-7" /> High-speed internet
            </div>
            <div className="flex items-center">
              <FaPowerOff className="text-yellow-400 mr-7" /> Uninterrupted
              power supply
            </div>
            <div className="flex items-center">
              <FaFan className="text-yellow-400 mr-7" /> Fully air-conditioned
              rooms
            </div>
            <div className="flex items-center">
              <FaHome className="text-yellow-400 mr-7" /> Housekeeping &
              Facility Upkeep
            </div>
            <div className="flex items-center">
              <RiTeamFill className="text-yellow-400 mr-7" /> Conference Rooms
            </div>
            <div className="flex items-center">
              <FaPrint className="text-yellow-400 mr-7" /> Free Printing
            </div>
            <div className="flex items-center">
              <FaCar className="text-yellow-400 mr-7" /> Valet Parking
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row pt-12 pb-12 bg-gradient-to-r from-blue-200 to-yellow-100">
        <div className="w-full md:w-1/2 px-8 lg:px-20">
          <div className="flex flex-col justify-center items-center py-3">
            <CoworkingMap />
          </div>
          <div className="py-4">
            <h1 className="text-lg pb-3 md:text-2xl lg:text-2xl font-semibold text-gray-800 leading-relaxed w-full max-w-xl mx-auto text-justify">
              Space to make your greatest impact.
            </h1>
            <p className="text-gray-700 bg-text-base md:text-lg lg:text-lg  leading-relaxed w-full max-w-xl mx-auto text-justify ">
              If you need space today, you need a huge range of options that can
              be reserved simply and efficiently. If you need to offer flexible
              work benefits to all your team members, you need our simple
              solution for teams of any size.
            </p>
            <button
              onClick={() => navigate("/managed_space_solutions")}
              className="my-6 mx-10 p-3 md:p-4 bg-gradient-to-r from-yellow-400 to-yellow-200 border-l-4 border-black text-black rounded-md shadow-md hover:bg-yellow-500 hover:border-l-4 hover:border-yellow-600 hover:shadow-lg hover:scale-105 transition transform duration-300 ease-in-out font-poppins"
            >
              Explore Our Managed Office Solutions
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-5 flex flex-col items-center">
          <div className=" md:mb-8 md:flex md: flex-col justify-center">
            <h1 className="font-semibold text-gray-800 text-lg md:text-2xl lg:text-2xl  ">
              Our Locations
            </h1>
            <br />
            <p className="text-gray-700 bg-text-base md:text-lg lg:text-lg  leading-relaxed w-full max-w-xl text-justify ">
              Experience the epitome of workspace excellence with 603, the
              leading coworking space. Our thoughtfully curated collection of
              premium locations provides a distinguished environment for
              professionals and businesses. Join us as we redefine productivity
              and elevate your work experience.
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full items-center md:justify-center mb-8 md:gap-4 gap-2 ">
            <div className="flex w-[30%] mt-4">
              <Flexiblepo />
              <div className="flex w-full justify-center items-center font-semibold text-sm md:text-lg lg:text-lg text-gray-700">
                <div>Private Offices</div>
              </div>
            </div>
            <div className="flex w-[30%] mt-4">
              <Flexiblepo />
              <div className="flex w-full justify-center items-center font-semibold text-sm md:text-lg lg:text-lg text-gray-700">
                <div>Meeting Rooms</div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-700 text-lg leading-relaxed w-full max-w-xl text-justify">
              Give your team access to thousands of workspace options over
              India, so they can meet, collaborate, and get their best work
              done.
            </p>
          </div>
          <button
            onClick={() => navigate("/allLocations")}
            className=" flex items-center gap-5 my-6 mx-10 p-3 md:p-4 bg-gradient-to-r from-yellow-400 to-yellow-200 border-l-4 border-black text-black rounded-md shadow-md hover:bg-yellow-500 hover:border-l-4 hover:border-yellow-600 hover:shadow-lg hover:scale-105 transition transform duration-300 ease-in-out font-poppins"
          >
            <span className="text-gray-800 text-2xl">
              <FaMapMarkerAlt />
            </span>{" "}
            Explore Our Locations
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col pt-12 md:pb-12 md:pt-[65px] xl:flex-row bg-gradient-to-r from-blue-100 to-yellow-100">
        <div className="w-full xl:w-1/2 flex justify-center md:px-8 lg:px-20">
          <div className="max-w-xl px-5 md:px-0">
            <h1 className="font-sans text-yellow-500 font-extrabold text-lg md:text-2xl lg:text-2xl mb-4">
              Did you know about this?
            </h1>
            <h2 className=" text-gray-800 text-lg md:text-2xl lg:text-2xl  font-sans font-semibold mb-6">
              Managed office solutions for any size!
            </h2>
            <p className="text-slate-600 bg-text-base md:text-lg lg:text-lg md:text-lgmb-8 leading-relaxed w-full max-w-xl mx-auto text-justify">
              Explore our bespoke standalone workspaces, meticulously crafted to
              reflect and enhance your brand while meeting your unique
              requirements. Whether you're seeking private offices, versatile
              meeting rooms, or flexible co-working spaces, we have solutions
              tailored to fit the distinct needs of your team. Our offerings are
              available on a variety of terms – annually, monthly, daily, or
              even hourly – ensuring that you can choose the arrangement that
              best suits your operational demands and schedules. With a focus on
              both functionality and aesthetics, our spaces are designed to
              foster productivity and collaboration, providing the ideal
              environment for your business to thrive.
            </p>
          </div>
        </div>

        {windowWidth > 1276 && (
          <div className="w-full xl:w-1/2 flex flex-col mt-12 xl:mt-0 px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-center">
              <div className="mx-3 mb-3 bg-gradient-to-r from-gray-700 to-yellow-400 hover:bg-yellow-400 p-6 rounded-lg shadow-lg md:w-96 xl:w-80 flex flex-col items-center justify-around">
                <h2 className="font-sans font-semibold text-white text-lg md:text-2xl lg:text-2xl  mb-4">
                  Explore Our Standard Private Offices
                </h2>
                <button
                  type="button"
                  onClick={() => navigate("/allLocations")}
                  className="bg-gray-800 shadow-md hover:bg-gray-700 bg-text-base md:text-lg lg:text-lg text-white px-4 py-2 rounded-lg transition-all"
                >
                  More
                </button>
              </div>
              <div className="mx-3 mb-3 md:block md:w-96 xl:w-80 rounded-lg overflow-hidden">
                <img
                  src={photo1}
                  className="w-full h-full object-cover"
                  alt="Standard Private Offices"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center mt-6">
              <div className="mx-3 mb-3 md:w-96 xl:w-80 rounded-lg overflow-hidden">
                <img
                  src={photo2}
                  className="w-full h-full object-cover"
                  alt="Conference & Meeting Rooms"
                />
              </div>
              <div className="mx-3 mb-3 bg-gradient-to-r from-yellow-400 to-gray-700  p-6 rounded-lg shadow-lg md:w-96 xl:w-80 flex flex-col items-center justify-around">
                <h2 className="font-sans font-semibold text-white mb-4 text-lg md:text-2xl lg:text-2xl ">
                  Rent Conference & Meeting Rooms
                </h2>
                <button
                  type="button"
                  onClick={() => navigate("/allLocations")}
                  className="bg-yellow-500 shadow-md hover:bg-yellow-400 text-white px-4 py-2 rounded-lg transition-all bg-text-base md:text-lg lg:text-lg"
                >
                  More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex-col md:flex-row gap-7 md:gap-14 md:pt-[70px] pt-12 md:px-20 bg-gradient-to-r from-blue-100 flex justify-center to-yellow-100 md:pb-12">
        {windowWidth > 1276 && (
          <div className="flex md:w-1/2 w-full">
            <div className="rounded-sm">
              <img className="rounded" src={photo3} />
            </div>
          </div>
        )}
        {windowWidth > 1276 ? (
          <div className="md:w-1/2 w-full">
            <YellowBox />
          </div>
        ) : (
          <div className="px-6">
            <YellowBox />
          </div>
        )}
      </div>

      <section className="px-6 py-10  bg-gray-100 flex flex-col items-center  bg-gradient-to-r from-blue-100  to-yellow-100">
        <OurPopularity />
      </section>

      <div className=" lg:pt-20 bg-gradient-to-r from-blue-100 to-yellow-100">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-yellow-500 font-sans font-semibold text-center">
          Our Photo Gallery
        </h1>

        {windowWidth > 1100 ? (
          <div className="pb-5 px-20 bg-gradient-to-r from-blue-100 to-yellow-100">
            <PhotoGallery />
          </div>
        ) : (
          <div className="pb-5 px-5 bg-gradient-to-r from-blue-100 to-yellow-100">
            <PhotoGallery />
          </div>
        )}

        {/* our clients  */}
        {/* <OurServices /> */}
        <div className="w-full bg-gradient-to-r from-blue-100 to-yellow-100">
          <Review />
        </div>
      </div>

      {/*<Random />*/}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-200 to-yellow-100 py-10">
        <h2 className="text-center text-lg font-bold text-gray-900 mb-6">
          The Rise of Coworking
        </h2>

        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
            {/* Render twice for seamless ticker */}
            {[0, 1].map((_, duplicateIndex) => (
              <div
                key={duplicateIndex}
                className="flex gap-16 px-8 whitespace-nowrap"
              >
                {tickerItems.map((item, index) => (
                  <div
                    key={`${duplicateIndex}-${index}`}
                    className="flex items-center gap-2 text-sm text-gray-800"
                  >
                    <span className="font-bold">{item.title}:</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
