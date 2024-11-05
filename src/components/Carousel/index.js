"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";


function Carousel({
  spaceBetween = 0,
  navigation = false,
  loop = false,
  speed = 1000,
  effect,
  play = false,
  autoplay = { delay: 2000, disableOnInteraction: false },
  slides=[],
  slideComponent=()=>{}
}) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      navigation={{
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      }}
      loop={loop}
      pagination={{ type: "bullets", clickable: true }}
      autoplay={play && autoplay}
      speed={speed}
      effect={effect}
    >
      {slides.map((slide, key)=>(
        <SwiperSlide key={key}>
          {slideComponent(slide)}
        </SwiperSlide>
      ))}
      {navigation && (
        <>
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 p-1 bg-white rounded-full">
            <GrFormPreviousLink className="w-4 h-4" />
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 p-1 bg-white rounded-full">
            <GrFormNextLink className="w-4 h-4" />
          </button>
        </>
      )}
    </Swiper>
  );
}

export default Carousel;
