import { RiComputerLine, RiListSettingsLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { PiImages } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { BiCustomize } from "react-icons/bi";
import { MapList } from "@/components/MapList";
import { Typography } from "@/components";

export default function ServiceCard({ services = [] }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-0'>
            <MapList arrayItem={services} renderer={(service, key) => (
                <div key={key} className=' shadow-sm p-12 text-center space-y-4 odd:shadow-lg'>
                    <div className="relative z-10 w-fit mx-auto p-2 rounded-full bg-[#0c146fa2] tw-after">{serviceObj[service?.icon]}</div>
                    <Typography as='h5' className={`mb-1 font-bold mx-auto border-b-4 border-b-[#070b34]`}> {service?.title}</Typography>
                    <Typography>{service?.desc}</Typography>
                </div>
            )} />
        </div>
    )
}

const serviceObj = {
    RiComputerLine: <RiComputerLine className='w-11 h-11 fill-white ' />,
    CiMobile3: <CiMobile3 className='w-11 h-11 fill-white' />,
    PiImages: <PiImages className='w-11 h-11 fill-white' />,
    RiListSettingsLine: <RiListSettingsLine className='w-11 h-11 fill-white' />,
    TbTruckDelivery: <TbTruckDelivery className='w-11 h-11 fill-white' />,
    BiCustomize: <BiCustomize className='w-11 h-11 fill-white' />,
}