import { raleway } from "@/app/fonts/fonts"
import { data } from "@/appdata";
import { Typography } from "@/components";
import { TeamCard } from "./TeamCard";

export default function Team() {
    const { teams:{description,ourteam }  } = data||{}

    return (
        <section
            id="teams"
            className=" space-y-12 lg:max-w-screen-xl p-7 py-16 rounded-sm mx-auto "
        >
            <Typography as="h1" className={`mx-auto`}>Our Dedicated Team</Typography>
            <Typography as="h5" className={`${raleway.className} text-center mx-auto`}>{description?.paragraphOne}</Typography>
            <TeamCard team={ourteam}/>
        </section>

    )
}