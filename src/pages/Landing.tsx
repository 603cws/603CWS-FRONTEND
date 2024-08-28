import Scramble from "./../components/Landing/Scramble";
import Popuptext from "../components/Landing/Popuptext";
import {
  logo,
  office_pic,
  photo1,
  photo2,
  photo3,
  gallery3,
  gallery6
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
import { useEffect } from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import Locationdiv from "../components/Landing/Locationdiv";
import YellowBox from "../components/Landing/YellowBox";
import PhotoGallery from "../components/Landing/PhotoGallery";
import Review from "../components/Landing/Review";
import Random from "../components/Landing/Random";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import "../utils/Landing/custom.css";
import { useApp } from "../context/AuthContext";

function Landing() {
  const { setloading } = useApp();
  useEffect(() => {
    setloading(false); // Set loading to false after the component mounts
  }, [setloading]);
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-gradient-to-br from-#fffed8 via-gray-900 to-#ffffff">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div
        className="relative flex flex-col-reverse md:flex-row items-center justify-center py-20 px-6 md:px-20 font-sans z-10 bg-cover bg-no-repeat bg-fixed blur-animation min-h-screen w-full space-y-10 md:space-y-0 md:space-x-10"
        style={{ backgroundImage: `url('${gallery6}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

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
            <h2 className="text-2xl md:text-4xl font-light tracking-wide">
              Be surrounded by inspiration
            </h2>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="mt-8 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-sm button-animated"
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




      {/* Features Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start justify-between py-10 bg-white">
        <div className="md:w-[60%] px-8 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug text-center md:text-left">
            Tailored workspaces and solutions to meet your business needs.
          </h1>
          <p className="mt-6 text-lg text-gray-600 text-center md:text-left">
            Transform your professional journey with 603 The Coworking Space, where we provide more than just a place to work—we offer an environment designed to inspire and empower. Whether you’re searching for a creative sanctuary to ignite innovation, a polished setting to make a lasting impression on clients, or a vibrant community to foster collaboration and personal growth, our coworking spaces are crafted to meet your diverse needs.
          </p>
        </div>
        <div className="md:w-[40%] mt-10 md:mt-0 flex flex-col items-center space-y-10">
          <div className="flex items-center bg-yellow-400 p-4 rounded-lg shadow-lg w-[80%]">
            <div className="text-white text-4xl">
              <Twopeoplesitting />
            </div>
            <div className="text-white flex flex-col justify-center w-full">
              <h1 className="text-4xl font-bold flex justify-center">1,650</h1>
              <p className="text-lg text-black flex justify-center mt-2">Total seats available</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 text-xl text-gray-600">
            <div className="flex items-center">
              <FaWifi className="text-yellow-400 mr-7" /> High-speed internet
            </div>
            <div className="flex items-center">
              <FaPowerOff className="text-yellow-400 mr-7" /> Uninterrupted power supply
            </div>
            <div className="flex items-center">
              <FaFan className="text-yellow-400 mr-7" /> Fully air-conditioned rooms
            </div>
            <div className="flex items-center">
              <FaHome className="text-yellow-400 mr-7" /> Housekeeping & Facility Upkeep
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



      <div className="flex flex-col md:flex-row mt-1">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-center items-center py-3">
            <img src={office_pic} alt="" className="h-[80%] w-[80%] rounded-3xl opacity-85 contrast-less" />
          </div>
          <div className="ml-6 py-4">
            <h1 className="text-xl font-sans font-semibold mx-10">
              Space to make your greatest impact.
            </h1>
            <p className="text-lg font-medium text-slate-500 mx-10 font-sans mt-3 mr-3">
              If you need space today, you need a huge range of options that can
              be reserved simply and efficiently. If you need to offer flexible
              work benefits to all your team members, you need our simple
              solution for teams of any size.
            </p>
            <button onClick={() => navigate("/managed_space_solutions")} className="my-6 mx-10 p-3 md:p-4 bg-yellow-400 border-l-4 border-black text-black rounded-md shadow-md hover:bg-yellow-500 hover:border-l-4 hover:border-yellow-600 hover:shadow-lg hover:scale-105 transition transform duration-300 ease-in-out font-poppins">
              Explore Our Managed Office Solutions
            </button>

          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="ml-6 mr-4 mb-8">
            <h1 className="text-gray-950 text-3xl font-bold md:text-4xl">
              Our Locations
            </h1>
            <br />
            <p className="text-slate-500 text-lg mr-20">
              Experience the epitome of workspace excellence with 603, the
              leading coworking space. Our thoughtfully curated collection of
              premium locations provides a distinguished environment for
              professionals and businesses. Join us as we redefine productivity
              and elevate your work experience.
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full items-center mb-8 gap-2 ml-6 mr-4 ">
            <div className="flex w-[60%] mt-4">
              <div>
                <Flexiblepo />
              </div>
              <div className="flex w-full justify-center items-center font-semibold text-lg text-black">
                <div>Private Offices</div>
              </div>
            </div>
            <div className="flex w-[60%] mt-4">
              <div>
                <Flexiblepo />
              </div>
              <div className="flex w-full justify-center items-center font-semibold text-lg text-black">
                <div>Meeting Rooms</div>
              </div>
            </div>
          </div>
          <div className="ml-6 mr-4 my-6">
            <p className="text-slate-500 text-lg mr-20">
              Give your team access to thousands of workspace options over
              India, so they can meet, collaborate, and get their best work
              done.
            </p>
          </div>

          <div className="mt-11">
            <h1 className="ml-6 mr-4 text-4xl font-sans font-extrabold">
              Discover More Details
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-4 lg:mx-6">
              {/* Column 1 */}
              <div className="flex flex-col border-gray-200">
                <div className="flex flex-col py-4 px-4 space-y-4">
                  <Locationdiv
                    onClick={() => navigate("/locations/Amore-Centre")}
                    place="Khar Amore Center"
                    icon={<FaMapMarkerAlt className="text-yellow-500" />}
                  />
                  <Locationdiv
                    onClick={() => navigate("/locations/Makhija-Archade")}
                    place="Bandra Makhija Center"
                    icon={<FaMapMarkerAlt className="text-yellow-500" />}
                  />
                  <Locationdiv
                    onClick={() => navigate("/locations/Sun-Mill-Compound")}
                    place="Lower Parel Sunmill Compound"
                    icon={<FaMapMarkerAlt className="text-yellow-500" />}
                  />
                  <Locationdiv
                    onClick={() => navigate("/locations/Navratna-Corporate-Park")}
                    place="Ahmedabad"
                    icon={<FaMapMarkerAlt className="text-yellow-500" />}
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col border-gray-200">
                <div className="flex flex-col py-4 px-4 space-y-4">
                  <Locationdiv
                    onClick={() => navigate("/locations/Matulya-Centre")}
                    place="Lower Parel Matulya"
                    icon={<FaMapMarkerAlt className="text-yellow-500" />}
                  />
                  <Locationdiv
                    onClick={() => navigate("/locations/Diamond-District")}
                    place="Bangalore Diamond District"
                    icon={<FaMapMarkerAlt className="text-yellow-500" />}
                  />
                  <Locationdiv
                    onClick={() => navigate("/locations/MIDC")}
                    place="MIDC Andheri"
                    icon={<FaMapMarkerAlt className="text-yellow-500" />}
                  />
                  <Locationdiv
                    onClick={() => navigate("/locations/Millenium-Business-Park")}
                    place="Navi Mumbai Millennium"
                    icon={<FaMapMarkerAlt className="text-yellow-500" />}
                  />
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col border-gray-200">
                <div className="flex flex-col py-4 px-4 space-y-4">
                  <Locationdiv
                    onClick={() => navigate("/locations/Kamala-Mills")}
                    place="Lower Parel Kamala Mills"
                    icon={<FaMapMarkerAlt className="text-yellow-500" />}
                  />
                  <Locationdiv
                    onClick={() => navigate("/locations/Sunshine-Tower")}
                    place="Dadar West Sunshine Tower"
                    icon={<FaMapMarkerAlt className="text-yellow-500" />}
                  />
                  <Locationdiv
                    onClick={() => navigate("/locations/Marathon")}
                    place="Lower Parel Marathon"
                    icon={<FaMapMarkerAlt className="text-yellow-500" />}
                  />
                </div>
              </div>
            </div>




          </div>

        </div>
      </div>

      <div
        className="relative flex flex-col items-center justify-center text-center bg-cover bg-fixed bg-no-repeat blur-animation w-full min-h-[800px] py-20 px-6"
        style={{ backgroundImage: `url('${gallery3}')` }}>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        <div className="relative z-10 text-center">
          <div className="text-2xl leading-8 text-yellow-500 mb-4 font-sans">
            <span>Join the Coworking Movement</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl leading-tight text-white font-sans tracking-tight mb-8 px-4 sm:px-8">
            <span>
              Spaces that are occupied by Corporates and Startups, designed with your business&nbsp;in&nbsp;mind
            </span>
          </h2>

          <div className="flex justify-center">
            <button onClick={() => { navigate("/login") }} className="bg-yellow-500 text-white hover:bg-yellow-300 transition-colors duration-300 border border-yellow-400 hover:border-transparent py-3 px-6 text-lg sm:text-xl font-sans rounded-md shadow-lg">
              Book a Space
            </button>
          </div>
        </div>
      </div>



      <div className="w-full flex flex-col mt-12 xl:flex-row">
        <div className="w-full xl:w-1/2 flex justify-center items-center px-4 md:px-8 lg:px-16">
          <div className="max-w-xl">
            <h1 className="font-sans text-yellow-400 font-semibold text-2xl md:text-3xl lg:text-5xl mb-4">
              Did you know about this?
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-2xl text-gray-800 font-sans font-semibold mb-6">
              We now offer managed office solutions for all sizes!
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
              Explore our bespoke standalone workspaces, meticulously crafted to reflect and enhance your brand while meeting your unique requirements. Whether you're seeking private offices, versatile meeting rooms, or flexible co-working spaces, we have solutions tailored to fit the distinct needs of your team. Our offerings are available on a variety of terms – annually, monthly, daily, or even hourly – ensuring that you can choose the arrangement that best suits your operational demands and schedules. With a focus on both functionality and aesthetics, our spaces are designed to foster productivity and collaboration, providing the ideal environment for your business to thrive.


            </p>
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex flex-col mt-8 xl:mt-0 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row">
            <div className="m-3 bg-yellow-400 p-6 rounded-lg shadow-lg md:w-96 xl:w-80 flex flex-col">
              <h2 className="font-sans font-semibold text-white text-2xl md:text-3xl mb-4">
                Explore Our Standard Private Offices
              </h2>
              <button
                type="button"
                onClick={() => navigate("/allLocations")}
                className="bg-gray-800 hover:bg-gray-700 text-white text-lg md:text-xl px-4 py-2 rounded-lg border border-gray-700 transition-all"
              >
                More
              </button>
            </div>
            <div className="m-3 hidden md:block md:w-96 xl:w-80 rounded-lg overflow-hidden">
              <img src={photo1} className="w-full h-full object-cover" alt="Standard Private Offices" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-6">
            <div className="m-3 md:w-96 xl:w-80 rounded-lg overflow-hidden">
              <img src={photo2} className="w-full h-full object-cover" alt="Conference & Meeting Rooms" />
            </div>
            <div className="m-3 bg-gray-800 p-6 rounded-lg shadow-lg md:w-96 xl:w-80 flex flex-col">
              <h2 className="font-sans font-semibold text-white text-2xl md:text-3xl mb-4">
                Rent Conference & Meeting Rooms
              </h2>
              <button
                type="button"
                onClick={() => navigate("/allLocations")}
                className="bg-yellow-500 hover:bg-yellow-400 text-white text-lg md:text-xl px-4 py-2 rounded-lg border border-yellow-600 transition-all"
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row w-full mt-12">
        <div className="flex md:w-1/2 w-full">
          <div className="m-3 rounded-sm">
            <img className="m-3 rounded" src={photo3} />
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <YellowBox />
        </div>
      </div>
      <div className="mt-32">
        <h1 className="text-5xl text-yellow-500 font-sans font-bold text-center md:text-5xl">
          Our Photo Gallery
        </h1>
      </div>
      <div className="p-10">
        <PhotoGallery />
      </div>
      <div className="w-full">
        <Review />
      </div>
      <Random />
      <section className="p-6 pb-10  bg-gray-100 flex flex-col items-center">
        <h2 className="text-xl md:text-xl font-bold text-gray-900 mb-6 md:mb-8">
          The Rise of Coworking:
        </h2>
        <ul className="list-disc pl-6 space-y-4 md:space-y-6 text-gray-700 mx-auto text-sm">
          <li className="flex flex-col md:flex-row md:items-start">
            <span className="font-bold mr-2">Revolutionary Concept:</span>
            <p>Coworking spaces are gaining popularity over traditional offices due to flexibility, collaboration, and a dynamic work environment.</p>
          </li>
          <li className="flex flex-col md:flex-row md:items-start">
            <span className="font-bold mr-2">Diverse Clientele:</span>
            <p>Our coworking spaces cater to freelancers, startups, and established businesses, offering an ecosystem that fosters innovation and productivity.</p>
          </li>
          <li className="flex flex-col md:flex-row md:items-start">
            <span className="font-bold mr-2">Strategic Locations:</span>
            <p>Positioned in business districts of Mumbai and Thane, reducing commute times and increasing efficiency.</p>
          </li>
          <li className="flex flex-col md:flex-row md:items-start">
            <span className="font-bold mr-2">Collaborative Community:</span>
            <p>Spaces bring together professionals from various industries, encouraging knowledge exchange and collaboration through networking events and communal areas.</p>
          </li>
          <li className="flex flex-col md:flex-row md:items-start">
            <span className="font-bold mr-2">Flexible Plans:</span>
            <p>Options range from hot desking to private offices, allowing businesses to scale their workspace according to their needs.</p>
          </li>
          <li className="flex flex-col md:flex-row md:items-start">
            <span className="font-bold mr-2">Enhanced Amenities:</span>
            <p>High-speed internet, modern meeting rooms, game rooms, ergonomic furniture, and fully-equipped kitchens are standard offerings.</p>
          </li>
        </ul>
      </section>


      {/* Other sections (Gallery, etc.) go here */}

      <Footer />
    </div>
  );
}

export default Landing;
