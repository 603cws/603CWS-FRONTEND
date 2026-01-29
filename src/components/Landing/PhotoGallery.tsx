import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./../../../node_modules/swiper/swiper-bundle.min.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import {
  // gallery1,
  // gallery3,
  // gallery4,
  // gallery5,
  // gallery6,
  // gallery7,
  // gallery8,
  // gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
} from "../../utils/Landing/Landing";

SwiperCore.use([Autoplay]);

const photos = [
  // { src: `${gallery1}`, alt: 'Photo 1' },
  { src: `${gallery10}`, alt: "Photo 10" },
  // { src: `${gallery3}`, alt: "Photo 3" },
  // { src: `${gallery4}`, alt: "Photo 4" },
  // { src: `${gallery5}`, alt: "Photo 5" },
  // { src: `${gallery6}`, alt: "Photo 6" },
  // { src: `${gallery7}`, alt: "Photo 7" },
  // { src: `${gallery8}`, alt: "Photo 8" },
  // { src: `${gallery9}`, alt: "Photo 9" },
  { src: `${gallery11}`, alt: "Photo 11" },
  { src: `${gallery12}`, alt: "Photo 12" },
  { src: `${gallery13}`, alt: "Photo 13" },
  { src: `${gallery14}`, alt: "Photo 14" },
  { src: `${gallery15}`, alt: "Photo 15" },
  { src: `${gallery16}`, alt: "Photo 16" },
  { src: `${gallery17}`, alt: "Photo 17" },
  { src: `${gallery18}`, alt: "Photo 18" },
];

const PhotoGallery: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-yellow-100 py-8 z-0">
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
                className="w-full h-[250px] sm:h-[300px] md:h-[400px]  rounded-2xl object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoGallery;
