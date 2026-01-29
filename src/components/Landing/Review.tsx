import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./../../../node_modules/swiper/swiper-bundle.min.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { logo } from "../../utils/Landing/Landing";
import { useEffect, useState } from "react";

// Install Swiper modules
SwiperCore.use([Autoplay]);

const reviews = [
  {
    text: "603 The Coworking Space has been a game-changer for my freelancing career. The atmosphere is incredibly inspiring, and the amenities they offer are top-notch. From high-speed internet to well-equipped meeting rooms, it's a professional's dream. The community here is so supportive, and I've made valuable connections that have led to new opportunities. Highly recommend!",
    author: "Vihang",
  },
  {
    text: "As a startup founder, finding the right environment to grow my business was crucial. 603 The Coworking Space exceeded my expectations. The flexibility of their plans allowed me to scale up as my team grew, and the office infrastructure is designed with startups in mind. The events they organize are both educational and fun, fostering networking and learning. It's more than just a workspace; it's a launchpad for success.",
    author: "Siddharth",
  },
  {
    text: "Remote work can sometimes feel isolating, but thanks to 603 The Coworking Space, I've regained that sense of community. The open layout encourages collaboration, and the diverse range of professionals here sparks fresh ideas. The cozy lounges and well-stocked kitchenette make breaks enjoyable, and l've found it easier to strike a work-life balance. Joining this space was a fantastic decision for my productivity and well-being",
    author: "Maira",
  },
  {
    text: "603 The Coworking Space embodies professionalism and convenience. As a consultant, I often meet clients here, and the modern meeting rooms are impressive. The staff is attentive and always ready to assist with any needs. Plus, the location is central, making it easy for my clients to access. If you're looking for a polished and productive workspace, this is the place to be.",
    author: "Rajiv",
  },
  {
    text: "Creativity flows freely at 603 The Coworking Space. As a content creator, I find the ambiance truly inspiring. The natural light, comfortable workstations, and collaborative vibe have boosted my productivity. Being surrounded by fellow creatives has led to unexpected collaborations and projects. It's like working in a hub of innovation, and I couldn't be happier with my choice.",
    author: "Tushar",
  },
];

const Review: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gradient-to-r from-white to-yellow-100 py-12">
      <div className="container mx-auto text-center px-5 md:px-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-12">
          Our Valued Clients...
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white py-6 rounded-lg shadow-lg flex flex-col items-center"
                style={{
                  paddingLeft: windowWidth > 1277 ? "20px" : "15px",
                  paddingRight: windowWidth > 1277 ? "20px" : "15px",
                  height: windowWidth > 390 ? "400px" : "420px",
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="mb-4">
                  <img src={logo} alt="Company Logo" className="h-14 mb-4" />
                </div>

                <p className="text-gray-600 mb-8 text-sm leading-relaxed w-full max-w-xl mx-auto text-justify">
                  {review.text}
                </p>

                <div className="flex items-center mt-auto">
                  <div className="text-left">
                    <p className="text-gray-900 font-semibold">
                      {review.author}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
