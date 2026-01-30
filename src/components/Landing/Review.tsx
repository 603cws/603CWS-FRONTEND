import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./../../../node_modules/swiper/swiper-bundle.min.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
// import { logo } from "../../utils/Landing/Landing";
import { useEffect, useState } from "react";

// Install Swiper modules
SwiperCore.use([Autoplay]);

// const reviews = [
//   {
//     text: "603 The Coworking Space has been a game-changer for my freelancing career. The atmosphere is incredibly inspiring, and the amenities they offer are top-notch. From high-speed internet to well-equipped meeting rooms, it's a professional's dream. The community here is so supportive, and I've made valuable connections that have led to new opportunities. Highly recommend!",
//     author: "Vihang",
//   },
//   {
//     text: "As a startup founder, finding the right environment to grow my business was crucial. 603 The Coworking Space exceeded my expectations. The flexibility of their plans allowed me to scale up as my team grew, and the office infrastructure is designed with startups in mind. The events they organize are both educational and fun, fostering networking and learning. It's more than just a workspace; it's a launchpad for success.",
//     author: "Siddharth",
//   },
//   {
//     text: "Remote work can sometimes feel isolating, but thanks to 603 The Coworking Space, I've regained that sense of community. The open layout encourages collaboration, and the diverse range of professionals here sparks fresh ideas. The cozy lounges and well-stocked kitchenette make breaks enjoyable, and l've found it easier to strike a work-life balance. Joining this space was a fantastic decision for my productivity and well-being",
//     author: "Maira",
//   },
//   {
//     text: "603 The Coworking Space embodies professionalism and convenience. As a consultant, I often meet clients here, and the modern meeting rooms are impressive. The staff is attentive and always ready to assist with any needs. Plus, the location is central, making it easy for my clients to access. If you're looking for a polished and productive workspace, this is the place to be.",
//     author: "Rajiv",
//   },
//   {
//     text: "Creativity flows freely at 603 The Coworking Space. As a content creator, I find the ambiance truly inspiring. The natural light, comfortable workstations, and collaborative vibe have boosted my productivity. Being surrounded by fellow creatives has led to unexpected collaborations and projects. It's like working in a hub of innovation, and I couldn't be happier with my choice.",
//     author: "Tushar",
//   },
// ];

const clientTestimonials = [
  {
    company: "Finman Capital Service",
    author: "Mr. Dipesh Sheth",
    designation: "",
    logo: "/ClientLogos/finmanCapital.jpeg",
    text: `We are delighted to be a part of the 603 family. Our company has a legacy of over 36 years, and being here has given us the flexibility to scale effortlessly, thanks to the ample space and well-planned infrastructure. The availability of multiple meeting rooms, lunch facilities, and excellent staff amenities adds immense value to our day-to-day operations. All these benefits come at a very attractive and cost-effective proposition.
Being associated with 603 has truly been fortunate for us. During this journey, we were honored with three national awards. We received recognition from The Economic Times as the largest player in real estate and logistics, from Zee Business as the largest player in real estate and the fastest-growing financial services and insurance company of the year, and from Edelweiss Securities as one of the leading insurance players in India.`,
  },
  {
    company: "Whoppls",
    author: "Mr Ramya Ramachandra",
    designation: "Founder",
    logo: "/ClientLogos/whoppl.jpeg",
    text: `I’m Ramya Ramachandra, Founder of Whoppls. We are a content-to-commerce company and have been in business for four and a half years. As a company that started during the pandemic, transitioning back to an office environment was a significant step for us, and 603 proved to be the most viable choice.
Working with Kunal has been a wonderful experience—he is not only a brilliant entrepreneur but also a genuinely great human being. He gave us complete freedom to design our office space in line with our vision.
We began with one office and have now expanded to another, which speaks volumes about our journey with 603. The experience has been seamless, from team bonding activities to resources and day-to-day operations. It gives me immense comfort as an entrepreneur knowing that all the essential details are in good hands, allowing us to focus entirely on growth.`,
  },
  {
    company: "SEED Global",
    author: "Mr. Sharang Dhaimade",
    designation: "",
    logo: "/ClientLogos/seed.jpeg",
    text: `We have been a part of 603 Co-Working Space for nearly a year, and the experience has been excellent.
The strong community and welcoming people were key reasons we chose 603. Its proximity to Lower Parel, Mumbai’s central business district, made it an ideal location.
The pricing is fair, the team is supportive, and the facilities are well maintained. Most importantly, the workspace offers privacy and a focused environment, allowing us to work efficiently.`,
  },
  {
    company: "Bhasha Advisors",
    author: "Mr. Shanil Jain",
    designation: "Co Founder",
    logo: "/ClientLogos/BhashaAdvisors.jpeg",
    text: `My name is Shanil Jain  and I’m the co-founder of Bhasha Advisors. We have been using the workspace at 603 for the past three years and are proud to be among the first clients at this center. Our experience with 603 has been consistently positive, with the team focusing on continuous improvements across various aspects of the workspace. Most recently, the renovation of the center has further enhanced the overall experience, making it an even better place to work.`,
  },
  {
    company: "Anritsu",
    author: "Mr. Rohit Sakpal",
    designation: "Senior Solution Architect",
    logo: "/ClientLogos/Anritsu.jpeg",
    text: `I have had a very positive experience working from 603 Co-Working Spaces. The workspace is thoughtfully designed, well-maintained, and offers a comfortable environment that truly supports productivity. The internet connectivity is reliable, meeting the demands of high-end technical work, and the meeting rooms are well equipped for client and internal discussions.
What stands out the most is the supportive management and staff—they are responsive, professional, and always willing to help, which makes day-to-day operations smooth and stress-free. The overall ambience strikes a great balance between professionalism and comfort, making it an ideal workspace for individuals as well as teams.
I would highly recommend 603 Co-Working Spaces to professionals and organizations looking for a dependable, well-managed, and growth-oriented work environment.`,
  },
  {
    company: "VIRA REALSPACE LLP",
    author: "Mr. RAHUL JOSHI",
    designation: "",
    logo: "/ClientLogos/viraRealspace.jpeg",
    text: `We are a construction-focused real estate development company, and we have been associated with 603 for almost a year now. Prior to this, we were operating out of their Sunshine Towers facility.
Speaking specifically about our experience at the current facility, we are extremely satisfied with the overall service. The team is highly responsive and prompt in addressing any queries or concerns we may have. What stands out the most is their proactive approaches issues are acknowledged immediately and resolved efficiently.
Overall, it has been a very positive and seamless experience working from this facility. We truly appreciate the support and professionalism of the team at 603 specially Community Manager and look forward to continuing our association.`,
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
    <div className="bg-gradient-to-r from-white to-yellow-100 md:py-12">
      <div className="container mx-auto text-center px-5 md:px-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6 lg:mb-12">
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
          {clientTestimonials?.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white my-4 py-6 rounded-lg shadow-lg flex flex-col items-center"
                style={{
                  paddingLeft: windowWidth > 1277 ? "20px" : "15px",
                  paddingRight: windowWidth > 1277 ? "20px" : "15px",
                  height: windowWidth > 390 ? "550px" : "650px",
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="mb-4">
                  <img
                    src={review?.logo}
                    alt="Company Logo"
                    // height="56px"
                    // width="135px"
                    className="h-14 mb-4"
                    // className="h-14  w-18 mb-4"
                  />
                  {/* <img src={logo} alt="Company Logo" className="h-14 mb-4" /> */}
                </div>

                <p className="text-gray-600 mb-8 text-xs sm:text-sm leading-relaxed w-full max-w-xl mx-auto text-justify">
                  {review.text}
                </p>

                <div className="flex items-center mt-auto">
                  <div className="text-left">
                    <p className="text-gray-900 font-semibold text-center">
                      {review.author}
                    </p>
                    {review?.designation && (
                      <p className="text-gray-900 font-semibold text-center">
                        {review?.designation}
                      </p>
                    )}
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
