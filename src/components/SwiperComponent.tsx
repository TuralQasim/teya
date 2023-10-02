import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface SwiperComponentProps {
  children: React.ReactNode;
  slidesPerView: number;
  spaceBetween: number;
  paginationClickable: boolean;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  children,
  slidesPerView,
  spaceBetween,
  paginationClickable,
}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      pagination={{
        clickable: paginationClickable,
      }}
    >
      {children}
    </Swiper>
  );
};

export default SwiperComponent;
