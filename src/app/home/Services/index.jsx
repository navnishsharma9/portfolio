import React from 'react'
import { raleway } from "@/app/fonts/fonts";
import dynamic from 'next/dynamic';
import { data } from "@/appdata";
import { Typography } from "@/components";

const ServiceCard = dynamic(() => import('./ServiceCard'))

function Services() {
  const { ourservices:{description, services}  } = data||{}

  return (
    <div className='bg-[#f5f9fc] my-10 py-7'>
      <section
        id="services"
        className=" space-y-12 lg:max-w-screen-xl p-7 py-16 rounded-sm mx-auto "
      >
        <Typography as="h1">Services</Typography>
        <Typography as='h5' className={`${raleway.className} mx-auto`}> {description}</Typography>
        <ServiceCard services={services} />
      </section>
    </div>
  );

}

export default Services
