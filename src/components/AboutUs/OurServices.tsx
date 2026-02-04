import {
  finmanCapital,
  whoppl,
  seed,
  BhashaAdvisors,
  Anritsu,
  valcreate,
  wedknott,
  RosadoGem,
  eureka,
  gswlogo,
  svaryu,
  MomLogo,
  RNC,
  neo,
  adani,
  NSDLlogo,
  IIDELogo,
} from "./../../utils/AboutUs/AboutUs";
import { Swiper, SwiperSlide } from "swiper/react";
import "./../../../node_modules/swiper/swiper-bundle.min.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);

function OurServices() {
  const comparr: Array<string> = [
    finmanCapital,
    whoppl,
    seed,
    BhashaAdvisors,
    Anritsu,
    valcreate,
    wedknott,
    RosadoGem,
    eureka,
    gswlogo,
    svaryu,
    MomLogo,
    RNC,
    neo,
    adani,
    NSDLlogo,
    IIDELogo,
  ];
  return (
    <div className="w-full  md:pt-10 pb-5 px-20 ">
      <h1 className="text-2xl md:text-3xl text-gray-800 font-sans font-semibold text-center">
        Clients we have worked with
      </h1>
      <div className="w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1700,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {comparr.map((photo, index) => (
            <SwiperSlide
              key={index}
              className="h-[280px] flex justify-center items-center"
            >
              <img
                src={photo}
                alt="company logo"
                height="100px"
                width="135px"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OurServices;
