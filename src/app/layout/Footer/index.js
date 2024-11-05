import React from 'react'
import Logo from '../../../components/Logo'
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { RiLinkedinFill } from "react-icons/ri";
import Image from "next/image";
import { data } from "@/appdata";
import dynamic from 'next/dynamic';
const UseFullLinks = dynamic(()=>import('./UseFullLinks'));
const Services = dynamic(()=>import('./Services'));

function Footer() {
  const {contact, email, footer:{userfull_links, services}} = data||{}

  return (  
    <footer className='relative h-full md:h-2/3 lg:h-80 text-white'>
      <Image
        src={`/images/bg.jpeg`}
        alt={'footer background image'}
        fill
        className="absolute inset-0 object-cover"
      />
      <div className='absolute inset-0 bg-[#070b34] bg-opacity-75 p-12 '>
        <div className='container max-w-screen-xl space-y-12 md:space-y-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            <Logo className={`text-2xl mb-4 text-white`}/>
            <div className='space-y-3 text-sm'>
              <p>{contact}</p>
              <p>{email}</p>
              <div className="flex gap-4 items-center">
                      <a href="#" className='bg-white rounded-full p-1.5'><BsTwitterX className="fill-[#070b34] w-3 h-3"/></a>
                      <a href="#" className='bg-white rounded-full p-1.5'><ImFacebook className="fill-[#070b34] w-3 h-3"/></a>
                      <a href="#" className='bg-white rounded-full p-1.5'><BsInstagram className="fill-[#070b34] w-3 h-3"/></a>
                      <a href="#" className='bg-white rounded-full p-1.5'><RiLinkedinFill className="fill-[#070b34] w-3 h-3"/></a>
              </div>
            </div>
          </div>
          <UseFullLinks link={userfull_links}/>
          <Services services={services}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer