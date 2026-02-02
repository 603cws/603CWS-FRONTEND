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
import offers from "./offers.json";
import Offer from "./offer";

const Top: React.FC = () => {
  const refImage = useRef(null);
  const refText = useRef(null);
  const isInViewImage = useInView(refImage, { once: true });
  const isInViewText = useInView(refText, { once: true });

  return (
    <div className="min-h-screen w-full font-sans ">
      <Navbar />

      <div
        className="relative min-h-screen bg-fixed bg-cover bg-center bg-no-repeat bg-opacity-90 "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/black-tone-office-desk-with-computer-black-minimalist-working-station_267300-211.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-20">
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white drop-shadow-lg text-center">
            <Scramble
              totype="Our Services"
              className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white"
              speed={0.2}
            />
          </h1>
          <p className="text-gray-300 font-semibold mt-4 text-lg sm:text-xl lg:text-xl text-center">
            <Scramble
              totype="Everywhere your Business should be"
              className="text-gray-300 font-semibold mt-4 sm:text-xl lg:text-xl"
              speed={0.5}
            />
          </p>
        </div>
      </div>

      <div className="min-h-[650px] flex flex-col sm:flex-row px-6 bg-gray-50 py-6 sm:py-8 lg:py-10">
        <div className="relative w-full flex justify-center items-center mb-6 sm:mb-0">
          <motion.img
            ref={refImage}
            // src="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/for-now.png?fit=680%2C506&ssl=1"
            src="/services/Ourservice.jpg"
            className="transition-transform duration-300 transform hover:scale-105 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-5/6"
            alt="603 The Coworking Space"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInViewImage ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          />
        </div>

        <motion.div
          ref={refText}
          className="w-full flex flex-col justify-center px-4 sm:px-8 lg:px-12"
          initial={{ opacity: 0, x: -50 }}
          animate={isInViewText ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-800 text-justify mx-auto">
            Join a Network of Innovators at 603 The Coworking Space
          </h1>
          <p className="mt-6 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg leading-relaxed text-gray-600 text-justify mx-auto">
            At 603 The Coworking Space, we offer a thoughtfully designed
            workspace tailored for professionals, entrepreneurs, and
            freelancers. Discover a dynamic environment that fosters
            collaboration, creativity, and growth.
          </p>
        </motion.div>
      </div>

      <div className="p-5 max-w-full flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px]">
          {offers?.offers?.map((offer, index) => (
            <div key={index} className="p-4">
              <Offer
                title={offer.title}
                description={offer.description}
                imagesrc={offer.imagesrc}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 min-h-[600px] mx-4 p-6">
        <div className="text-center mb-8">
          <p className="text-base sm:text-lg md:text-2xl lg:text-4xl font-semibold font-sans text-gray-800">
            Explore our Services
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl w-full">
            {explorer?.map((item: any, index: any) => (
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
          <h2 className="font-semibold text-sm sm:text-lg md:text-lg lg:text-2xl xl:text-[26px] pb-7">
            Flexible Workspaces in Mumbai & Thane
          </h2>
          <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg leading-relaxed">
            In the ever-evolving landscape of work, the demand for flexibility
            has become a defining characteristic for professionals and
            businesses alike. Mumbai and Thane, bustling metropolises known for
            their vibrant business communities, have witnessed a significant
            rise in the popularity of flexible workspaces for rent. Our adaptive
            environments cater to the diverse needs of a dynamic workforce,
            offering a range of benefits that redefine the traditional office
            experience.
            <br />
            <br />
            Our strategically positioned workspaces provide professionals with
            the freedom to choose locations that align with their preferences
            and minimize commute times. Whether in the heart of Mumbai’s
            financial hub or within Thane’s expanding landscape, our spaces
            ensure accessibility and convenience for all.
            <br />
            <br />
            The collaborative nature of our workspaces fosters innovation and
            networking, creating dynamic communities that encourage knowledge
            exchange and collaboration. With high-speed internet, meeting rooms,
            ergonomic furniture, and well-equipped kitchens, our spaces provide
            everything professionals need for a seamless work experience.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Top;
