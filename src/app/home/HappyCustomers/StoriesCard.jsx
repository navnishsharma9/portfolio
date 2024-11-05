'use client'

import { raleway } from "@/app/fonts/fonts";
import CountUp from "react-countup";
import { BsFolderSymlink } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiUsersThree } from "react-icons/pi";
import { Typography } from "@/components";

function StoriesCard({ stories=[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {stories?.map((client, key) => (
                <div key={key} className="p-12 text-center space-y-4 shadow-lg rounded-md">
                    <CountUp start={0} end={client?.approach} duration={1} delay={0}>
                        {
                            ({ countUpRef }) => (
                                <div className={`${raleway.className} text-center space-y-2`}>
                                    {successStoriesObj[client?.icon]}
                                    <Typography as='h1' ref={countUpRef} className={`${raleway.className} text-[#1c5c93] mx-auto`}>{0}</Typography>
                                    <Typography className={`${raleway.className}`}> {client?.text}</Typography>
                                </div>
                            )
                        }
                    </CountUp>
                </div>
            ))}
        </div>
    )
}

export { StoriesCard }

const successStoriesObj = {
    BsFolderSymlink: <BsFolderSymlink className='w-14 h-14 fill-purple-900 mx-auto' />,
    HiOutlineEmojiHappy: <HiOutlineEmojiHappy className='w-14 h-14 stroke-green-800 mx-auto' />,
    RiCustomerService2Line: <RiCustomerService2Line className='w-14 h-14 fill-blue-500 mx-auto' />,
    PiUsersThree: <PiUsersThree className='w-14 h-14 fill-orange-500 mx-auto' />,
}