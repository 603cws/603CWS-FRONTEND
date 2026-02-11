import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./../../../node_modules/swiper/swiper-bundle.min.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import {
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
} from "../../utils/Landing/Landing";

SwiperCore.use([Autoplay]);

const photos = [
  { src: `${gallery10}`, alt: "Photo 10" },
  { src: `${gallery11}`, alt: "Photo 11" },
  { src: `${gallery12}`, alt: "Photo 12" },
  { src: `${gallery13}`, alt: "Photo 13" },
  { src: `${gallery14}`, alt: "Photo 14" },
  { src: `${gallery15}`, alt: "Photo 15" },
  { src: `${gallery16}`, alt: "Photo 16" },
  { src: `${gallery17}`, alt: "Photo 17" },
  { src: `${gallery18}`, alt: "Photo 18" },
  { src: `${gallery19}`, alt: "Photo 19" },
  { src: `${gallery20}`, alt: "Photo 20" },
  { src: `${gallery21}`, alt: "Photo 21" },
];

const PhotoGallery: React.FC = () => {
  return (
    <div className=" py-8 z-0">
      <div className="px-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1700,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
          }}
          className="mySwiper"
        >
          {photos?.map((photo, index) => (
            <SwiperSlide key={index}>
              <img
                src={photo?.src}
                alt={photo?.alt}
                className="w-full h-[250px] sm:h-[300px] md:h-[400px]  rounded-2xl object-cover cursor-grab"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoGallery;
