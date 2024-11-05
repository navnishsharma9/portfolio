'use client'

import Carousel from "../../../components/Carousel";
import Image from "next/image";
import { data } from "@/appdata";


function HeroSectionSlider() {
  const { heroSectionSlide } = data||{}

  function component(slide) {
    return (
      <div className="relative h-[45rem] w-full">
        <Image
          src={`/images/${slide?.img}`}
          alt={slide?.alt}
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex items-center bg-[#000] bg-opacity-50">
          <div className={` mx-auto text-white space-y-4`}>
            <h1 className="text-6xl font-extrabold">{slide?.heading}</h1>
            <h3 className="text-xl  font-normal mx-auto w-fit">{slide?.subheading}</h3>
          </div>
        </div>

      </div>
    )
  }
  return (
    <Carousel navigation={true} loop={true} effect={'fade'} play={true} slides={heroSectionSlide} slideComponent={component} />
  )
}

export default HeroSectionSlider
