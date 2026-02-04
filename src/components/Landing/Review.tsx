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
    text: `We are proud to be part of the 603 family.Our Company With a legacy of 36+ years, the flexible workspace, ample infrastructure, and excellent amenities have helped us scale effortlessly. Our association with 603 has been fortunate, coinciding with multiple national awards and recognitions, making it a truly valuable and cost-effective partnership.`,
  },
  {
    company: "Whoppls",
    author: "Mr Ramya Ramachandra",
    designation: "Founder",
    logo: "/ClientLogos/whoppl.jpeg",
    text: `As a content-to-commerce startup, transitioning back to office life was crucial, and 603 proved ideal. The freedom to design our workspace, seamless operations, and strong support system made our journey smooth. Expanding to a second office reflects our trust in 603, allowing us to focus entirely on growth.`,
  },
  {
    company: "SEED Global",
    author: "Mr. Sharang Dhaimade",
    designation: "",
    logo: "/ClientLogos/seed.jpeg",
    text: `Our experience at 603 for nearly a year has been excellent. The welcoming community, central location near Lower Parel, fair pricing, and supportive team stood out. The workspace offers privacy, well-maintained facilities, and a focused environment, enabling efficient and productive work daily.`,
  },
  {
    company: "Bhasha Advisors",
    author: "Mr. Shanil Jain",
    designation: "Co Founder",
    logo: "/ClientLogos/BhashaAdvisors.jpeg",
    text: `We have been with 603 for over three years and are proud to be among its first clients. The team consistently focuses on improving the workspace experience, and recent renovations have enhanced it further. Overall, 603 continues to be a reliable, evolving, and comfortable place to work.`,
  },
  {
    company: "Anritsu",
    author: "Mr. Rohit Sakpal",
    designation: "Senior Solution Architect",
    logo: "/ClientLogos/Anritsu.jpeg",
    text: `Working from 603 has been a highly positive experience. The thoughtfully designed workspace, reliable internet, and well-equipped meeting rooms support high-end technical work. The responsive and professional management creates a stress-free, productive, and comfortable environment for individuals and teams.`,
  },
  {
    company: "VIRA REALSPACE LLP",
    author: "Mr. Rahul Joshi",
    designation: "",
    logo: "/ClientLogos/viraRealspace.jpeg",
    text: `We have been associated with 603 for almost a year and are extremely satisfied with the services at the current facility. The team is proactive, responsive, and efficient in resolving concerns. Their professionalism and prompt support make working here seamless and reliable.`,
  },
  {
    company: "VALCREATE",
    author: "Mr. Rajesh Pherwani",
    designation: "",
    logo: "/ClientLogos/valcreate.jpeg",
    text: `I have been associated with 603 since 2019 and recently moved to this center for its convenience. The professional environment, privacy, and quiet atmosphere are ideal for investment-focused work. The staff is cordial, services are reliable, and I would strongly recommend 603.`,
  },
  {
    company: "MEDIVIGIL CLINICAL RESEARCH",
    author: "Ms. Divya Chandiramani",
    designation: "Founder",
    logo: "/ClientLogos/Medvigil.jpeg",
    text: `We have been at 603 for over a year, and the experience has been excellent. The team ensured our office setup met security and operational requirements. The environment supports both focused work and team interaction, making it comfortable, professional, and productive.`,
  },
  {
    company: "WEDKNOTT",
    author: "Ms. Jaya",
    designation: "Founder",
    logo: "/ClientLogos/wedknott.jpeg",
    text: `Our experience at 603 has been very positive. The workspace is professional, well-maintained, and thoughtfully designed for productivity. Clean common areas, equipped meeting rooms, and responsive staff make daily operations smooth, making it a reliable workspace we recommend.`,
  },
  {
    company: "RASADO GEMS",
    author: "Ms. Binal",
    designation: "Founder",
    logo: "/ClientLogos/RosadoGem.jpeg",
    text: `I’ve enjoyed being part of 603 Trade Link for the past year. The environment is positive, and the open terrace is a great place to recharge and work. While improved phone booth availability would help, it remains a pleasant and productive workspace.`,
  },
];

// const clientTestimonials = [
//   {
//     company: "Finman Capital Service",
//     author: "Mr. Dipesh Sheth",
//     designation: "",
//     logo: "/ClientLogos/finmanCapital.jpeg",
//     text: `We are delighted to be a part of the 603 family. Our company has a legacy of over 36 years, and being here has given us the flexibility to scale effortlessly, thanks to the ample space and well-planned infrastructure. The availability of multiple meeting rooms, lunch facilities, and excellent staff amenities adds immense value to our day-to-day operations. All these benefits come at a very attractive and cost-effective proposition.
// Being associated with 603 has truly been fortunate for us. During this journey, we were honored with three national awards. We received recognition from The Economic Times as the largest player in real estate and logistics, from Zee Business as the largest player in real estate and the fastest-growing financial services and insurance company of the year, and from Edelweiss Securities as one of the leading insurance players in India.`,
//   },
//   {
//     company: "Whoppls",
//     author: "Mr Ramya Ramachandra",
//     designation: "Founder",
//     logo: "/ClientLogos/whoppl.jpeg",
//     text: `I’m Ramya Ramachandra, Founder of Whoppls. We are a content-to-commerce company and have been in business for four and a half years. As a company that started during the pandemic, transitioning back to an office environment was a significant step for us, and 603 proved to be the most viable choice.
// Working with Kunal has been a wonderful experience—he is not only a brilliant entrepreneur but also a genuinely great human being. He gave us complete freedom to design our office space in line with our vision.
// We began with one office and have now expanded to another, which speaks volumes about our journey with 603. The experience has been seamless, from team bonding activities to resources and day-to-day operations. It gives me immense comfort as an entrepreneur knowing that all the essential details are in good hands, allowing us to focus entirely on growth.`,
//   },
//   {
//     company: "SEED Global",
//     author: "Mr. Sharang Dhaimade",
//     designation: "",
//     logo: "/ClientLogos/seed.jpeg",
//     text: `We have been a part of 603 Co-Working Space for nearly a year, and the experience has been excellent.
// The strong community and welcoming people were key reasons we chose 603. Its proximity to Lower Parel, Mumbai’s central business district, made it an ideal location.
// The pricing is fair, the team is supportive, and the facilities are well maintained. Most importantly, the workspace offers privacy and a focused environment, allowing us to work efficiently.`,
//   },
//   {
//     company: "Bhasha Advisors",
//     author: "Mr. Shanil Jain",
//     designation: "Co Founder",
//     logo: "/ClientLogos/BhashaAdvisors.jpeg",
//     text: `My name is Shanil Jain  and I’m the co-founder of Bhasha Advisors. We have been using the workspace at 603 for the past three years and are proud to be among the first clients at this center. Our experience with 603 has been consistently positive, with the team focusing on continuous improvements across various aspects of the workspace. Most recently, the renovation of the center has further enhanced the overall experience, making it an even better place to work.`,
//   },
//   {
//     company: "Anritsu",
//     author: "Mr. Rohit Sakpal",
//     designation: "Senior Solution Architect",
//     logo: "/ClientLogos/Anritsu.jpeg",
//     text: `I have had a very positive experience working from 603 Co-Working Spaces. The workspace is thoughtfully designed, well-maintained, and offers a comfortable environment that truly supports productivity. The internet connectivity is reliable, meeting the demands of high-end technical work, and the meeting rooms are well equipped for client and internal discussions.
// What stands out the most is the supportive management and staff—they are responsive, professional, and always willing to help, which makes day-to-day operations smooth and stress-free. The overall ambience strikes a great balance between professionalism and comfort, making it an ideal workspace for individuals as well as teams.
// I would highly recommend 603 Co-Working Spaces to professionals and organizations looking for a dependable, well-managed, and growth-oriented work environment.`,
//   },
//   {
//     company: "VIRA REALSPACE LLP",
//     author: "Mr. RAHUL JOSHI",
//     designation: "",
//     logo: "/ClientLogos/viraRealspace.jpeg",
//     text: `We are a construction-focused real estate development company, and we have been associated with 603 for almost a year now. Prior to this, we were operating out of their Sunshine Towers facility.
// Speaking specifically about our experience at the current facility, we are extremely satisfied with the overall service. The team is highly responsive and prompt in addressing any queries or concerns we may have. What stands out the most is their proactive approaches issues are acknowledged immediately and resolved efficiently.
// Overall, it has been a very positive and seamless experience working from this facility. We truly appreciate the support and professionalism of the team at 603 specially Community Manager and look forward to continuing our association.`,
//   },
//   {
//     company: "VALCREATE",
//     author: "Mr. Rajesh Pherwani",
//     designation: "",
//     logo: "/ClientLogos/valcreate.jpeg",
//     text: `We are a portfolio management firm and our business is into investing in stocks and creating portfolios for our clients. The objective is to be at wealth for our clients. I have been associated with 603 The  Co-working since 2019. Recently, I moved to this new center. It is quite convenient for me given that I stay about 5 mins  away from this place. The people out here are pretty professional. The environment is quite conducive for what they do because in investment, we need privacy as well as a little bit of, you know, quietness around. So if we see the people out here, I think they are pretty well behaved and the even the the working staff over here is quite cordial and the service is pretty up to the mark. I think I'm pretty happy with what I see at 603  and I would definitely recommend whoever is looking to set up their shop here.`,
//   },
//   {
//     company: "MEDIVIGIL CLINICAL RESEARCH",
//     author: "Ms. Divya Chandiramani",
//     designation: "Founder",
//     logo: "/ClientLogos/Medvigil.jpeg",
//     text: `Hi everybody, This is Divya Chandiramani I am a CEO, a founder of Medvigil Clinical Research. We are a clinical research organization and we have been at 603 since a year now. Kunal and Joy were extremely helpful when we had to set up office over here. They did everything according to our specifications and our security audit rules. And our team is are extremely comfortable. They have been very professional. We have an environment where people really need to focus on their tasks, but at the same time, we have space to even interact with each other. And it was important for team building. So Thank you to 603. It's been Great.`,
//   },
//   {
//     company: "WEDKNOTT",
//     author: "Ms. Jaya",
//     designation: "Founder",
//     logo: "/ClientLogos/wedknott.jpeg",
//     text: `I would like to share my feedback on our experience at 603 Co-Working Spaces.
// The overall environment is very professional, well-maintained, and conducive to productivity. The workspace layout is thoughtfully designed, offering a good balance of comfort and functionality. The common areas and meeting rooms are clean, organized, and well-equipped, which makes day-to-day operations smooth and efficient.
// The support staff has been extremely cooperative and responsive, always ready to assist with any requirements. The location and amenities provided add great value, making it a convenient and pleasant place to work.
// It has been a positive experience working from 603 Co-Working Spaces, and I would definitely recommend it to other professionals and organizations looking for a reliable and professional workspace.`,
//   },
//   {
//     company: "RASADO GEMS",
//     author: "Ms. Binal",
//     designation: "Founder",
//     logo: "/ClientLogos/RosadoGem.jpeg",
//     text: `I’ve really enjoyed being part of 603 Trade Link at Kamala mills over the past year. The overall vibe is incredibly positive, and the open terrace area is easily my favorite feature—it’s a fantastic spot to recharge and work as well.
// I'd love to see more focus on phone booth availability, as making calls gets difficult and there are disturbances at times from the other members. Additionally, a bit more proactive cooperation from the management team regarding member needs would make the experience even better. Thanks for maintaining such a great environment!`,
//   },
// ];

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
    <div className=" md:py-8">
      <div className="container mx-auto text-center px-5 md:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 lg:mb-12">
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
                className="bg-white my-4 py-6 rounded-lg shadow-lg flex flex-col items-center border border-[#ccc]"
                style={{
                  paddingLeft: windowWidth > 1277 ? "20px" : "15px",
                  paddingRight: windowWidth > 1277 ? "20px" : "15px",
                  height: windowWidth > 390 ? "370px" : "440px",
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

                <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed w-full max-w-xl mx-auto text-justify">
                  {review?.text}
                </p>

                <div className="flex items-center mt-auto">
                  <div className="text-left">
                    <p className="text-gray-900 font-semibold text-center">
                      {review?.author}
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
