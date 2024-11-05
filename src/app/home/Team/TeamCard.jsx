import { MapList } from "@/components/MapList";
import { RiLinkedinFill } from "react-icons/ri"
import Image from "next/image"
import { Typography } from "@/components";

function TeamCard({team=[]}){
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 pb-12">
                <MapList
                    arrayItem={team.slice(0,4)}
                    renderer={(team, key) => <div key={key} className="relative aspect-square h-fit group ">
                        <div className="rounded-md absolute inset-0 overflow-hidden">
                            <Image
                                src={team?.image}
                                alt={`${team?.name} profile picture.`}
                                fill
                                className={` group-hover:scale-105 transition duration-500`}
                            />
                        </div>
                        <div className="space-y-3 absolute shadow-transparent -bottom-1/4  bg-[#161e78dd] rounded-md left-0 right-0 py-7 text-center w-11/12 mx-auto">
                            <Typography className={`font-semibold pb-3 text-white after:mx-auto tracking-wider relative after:absolute after:w-1/2  after:h-[1px] after:left-0 after:right-0 after:bg-white after:bottom-0 `}>{team?.name}</Typography>
                            <Typography as="i" className={`text-white`}>{team?.role}</Typography>
                            <a href={team?.socialLinks?.linkedin} target="_blank" className="block p-1.5 mx-auto rounded-full bg-white w-fit">
                                <RiLinkedinFill className=" fill-[#070b34] w-4 h-4"/>
                            </a>
                        </div>
                    </div>}
                />


            </div>
    )
}

export {TeamCard}