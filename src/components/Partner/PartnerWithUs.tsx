import "./custom.css";
import ContactUs from "./Form";

function PartnerWithUs() {
  return (
    <div>
      <div
        className="relative flex flex-col md:flex-row items-center justify-center  bg-hero-partner bg-cover bg-center h-[500px] md:h-[600px] px-6 md:px-20"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/40 opacity-80"></div>
        <div className="relative flex flex-col justify-center w-full md:w-1/2 py-10 md:py-0 z-10">
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:leading-snug animate-fadeInUp">
            Interested in becoming a Property Partner?
          </h2>
        </div>

        {/* Hide the video below 930px */}
        <div className="hidden md:flex justify-center items-center w-full md:w-1/2 mt-8 md:mt-0 z-10">
          <iframe
            className="w-full md:w-[570px] h-[250px] md:h-[329px] rounded-lg shadow-lg animate-fadeInUp delay-400"
            src="https://www.youtube.com/embed/c5CNPHuvwck?si=FApWC0PEnjGHtz9h"
            title="What is coworking and how to get started today"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>


      <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-12 bg-gray-100">
        <div className="relative flex items-center justify-center mb-6 md:mb-0 w-full md:w-1/2">
          <img
            className="rounded-lg shadow-lg w-full h-auto transition-opacity duration-300"
            src="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2017/05/matulya2.jpg"
            alt="matulya2"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/30 backdrop-blur-md rounded-lg p-4">
            <p className="text-lg text-gray-800 font-semibold text-center">
              603 The Coworking Space
            </p>
          </div>
        </div>
        <p className="hidden md:block text-lg md:text-xl text-gray-600 font-medium leading-relaxed md:text-left md:ml-8 w-full md:w-1/2 text-justify">
          Coworking is an opportunity to transform your usual office premises
          into a community of Entrepreneurs/Startups with a huge potential of
          earning and to be a proud partner of a coworking space with 603 The
          Coworking Space.
        </p>
      </div>
      <div className="pt-14 pb-12 bg-gradient-to-r from-gray-50 to-yellow-100">

        <ContactUs />
      </div>
      {/* 
      <div className="pt-8">
        <div className="bg-yellow-300 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:pl-10">
            <p className="text-gray-800 font-bold text-lg mb-4 md:mb-0">
              Be notified about new locations
            </p>
          </div>

          <form className="w-full md:w-auto flex flex-col md:flex-row items-center md:pr-10">
            <input
              type="email"
              placeholder="Enter E-Mail Address"
              className="border border-gray-300 rounded px-4 py-2 mb-4 md:mb-0 md:mr-4 w-full md:w-64"
              required
            />
            <button className="bg-red-500 text-white rounded-lg px-4 py-2 w-full md:w-auto hover:bg-red-600 transition duration-300">
              Subscribe
            </button>
          </form>
          
        </div>
        
      </div>
      */}

    </div>

  );
}
export default PartnerWithUs;