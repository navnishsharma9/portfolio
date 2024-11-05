import { raleway } from "@/app/fonts/fonts";
import { data } from "@/appdata";
import { Typography } from "@/components";
import { StoriesCard } from "./StoriesCard";

export default function HappyCustomer() {
    const { succesStories:{description, storiesData} } = data||{}

    return (
        <div className='bg-[#f5f9fc] my-10 py-7'>
            <section
                id="services"
                className=" space-y-12 lg:max-w-screen-xl p-7 py-16 rounded-sm mx-auto "
            >      
                <Typography as="h1" className={`text-[#070b34]`}>Our Success by the Numbers</Typography>
                <Typography as='h5' className={`${raleway.className} mx-auto`}> {description}</Typography>
                <StoriesCard stories={storiesData}/>
            </section>
        </div>
    )
}

