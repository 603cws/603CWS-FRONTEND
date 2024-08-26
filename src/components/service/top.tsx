import React from "react";
import Scramble from "../Landing/Scramble";
import Footer from "../Footer/footer";
import Explore from "./explore";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Navbar/navbar";
import explorer from "./explorer.json";

const Top: React.FC = () => {
  const refImage = useRef(null);
  const refText = useRef(null);
  const isInViewImage = useInView(refImage, { once: true });
  const isInViewText = useInView(refText, { once: true });

  return (
    <div className="min-h-screen w-full font-sans bg-gray-100">
      <Navbar />

      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-opacity-90"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/black-tone-office-desk-with-computer-black-minimalist-working-station_267300-211.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg text-center">
            <Scramble
              totype="Our Services"
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white"
              speed={0.2}
            />
          </h1>
          <p className="text-gray-300 font-semibold mt-4 text-lg sm:text-xl lg:text-2xl text-center">
            <Scramble
              totype="Everywhere your Business should be"
              className="text-gray-300 font-semibold mt-4 sm:text-xl lg:text-2xl"
              speed={0.5}
            />
          </p>
        </div>
      </div>

      <div className="min-h-[650px] flex flex-col sm:flex-row px-6 bg-gray-50 py-2">
        <div className="relative w-full flex justify-center items-center mb-6 sm:mb-0">
          <motion.img
            ref={refImage}
            src="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/for-now.png?fit=680%2C506&ssl=1"
            className="transition-transform duration-300 transform hover:scale-105 rounded-lg shadow-lg w-full sm:w-3/5 md:w-2/3 lg:w-1/2"
            alt="603 The Coworking Space"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInViewImage ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/30 backdrop-blur-md rounded-lg p-4"
            whileHover={{ opacity: 1 }}
          >
            <motion.h2
              className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-semibold text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={isInViewImage ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              603 The Coworking Space
            </motion.h2>
          </motion.div>
        </div>

        <motion.div
          ref={refText}
          className="w-full flex flex-col justify-center px-4 sm:px-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInViewText ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-center">
            Join thousands of professionals at 603 The Coworking Space.
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl font-Raleway text-center">
            At 603 The Coworking Space, we redefine the workspace by offering thoughtfully designed environments tailored for professionals, entrepreneurs, and freelancers. Experience collaboration and innovation in a dynamic setting that fosters growth and success.
          </p>
        </motion.div>
      </div>
      <div className="mt-10 bg-yellow-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 min-h-[600px] mx-6 p-6">
        <div className="text-center mb-8">
          <p className="text-base sm:text-lg md:text-2xl lg:text-4xl font-semibold font-sans">
            Explore our Services
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl w-full">
            {explorer.map((item: any, index: any) => (
              <div key={index} className="w-full">
                <Explore
                  title={item.title}
                  description={item.description}
                  imagesrc={item.imagesrc}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-10 px-6 shadow-lg mx-4">
        <div className="text-gray-800 text-center leading-relaxed w-full sm:w-[550px] md:w-[650px] lg:w-[70%]">
          <span className="font-semibold text-sm sm:text-lg md:text-lg mb-7">
            Flexible Workspaces in Mumbai & Thane
          </span>
          <p className="text-xs sm:text-sm md:text-sm lg:text-base">
            In the ever-evolving landscape of work, the demand for flexibility has become a defining characteristic for professionals and businesses alike. Mumbai and Thane, bustling metropolises known for their vibrant business communities, have witnessed a significant rise in the popularity of flexible workspaces for rent. Our adaptive environments cater to the diverse needs of a dynamic workforce, offering a range of benefits that redefine the traditional office experience.
            <br />
            <br />
            Our strategically positioned workspaces provide professionals with the freedom to choose locations that align with their preferences and minimize commute times. Whether in the heart of Mumbai’s financial hub or within Thane’s expanding landscape, our spaces ensure accessibility and convenience for all.
            <br />
            <br />
            The collaborative nature of our workspaces fosters innovation and networking, creating dynamic communities that encourage knowledge exchange and collaboration. With high-speed internet, meeting rooms, ergonomic furniture, and well-equipped kitchens, our spaces provide everything professionals need for a seamless work experience.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Top;
