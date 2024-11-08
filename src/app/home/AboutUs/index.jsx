import React from "react";
import { raleway } from "@/app/fonts/fonts";
import { MapList } from "@/components";
import { data } from "@/appdata";
import { Typography } from "@/components";

function AboutUs() {
  const { aboutus: { paragraphOne, paragraphTwo, paragraphThree, keypoints } } = data || {}

  return (
    <section
      id="aboutus"
      className=" shadow-lg shadow-slate-100  lg:max-w-screen-xl p-7 py-16 rounded-sm mx-auto "
    >
      <Typography as="h1">About Us</Typography>
      <div className=" py-10 flex flex-col lg:flex-row gap-6 text-justify">
        <div className={`space-y-6 flex-[2] lg:pr-7 lg:border-r ${raleway.className}`}> 
          <Typography as='h5'>{paragraphOne}</Typography>
          <Typography as='h5'>{paragraphTwo}</Typography>
          <Typography as='h5'>{paragraphThree}</Typography>
        </div>

        <div className={`space-y-6 flex-1 ${raleway.className}`}>
          <MapList arrayItem={keypoints} renderer={(keypoint, key) => (
            <div key={key}>
              <Typography as="h5" className={`font-bold border-b-4 w-fit border-b-[#070b34] mb-1`}>{keypoint?.title}</Typography>
              <Typography>{keypoint?.shortDesc}</Typography>
            </div>
          )} />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
