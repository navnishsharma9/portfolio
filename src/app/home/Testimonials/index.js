
import Marquee from "@/components/ui/marquee";
import { data } from "@/appdata";
import { Typography } from "@/components";
import { raleway } from "@/app/fonts/fonts";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { MapList } from "@/components";

function Testimonials() {
    const { testimonials: { title, description, testimonials=[] } } = data || {}

    return (
        <div className='my-10 py-7'>
            <section
                id="services"
                className=" space-y-12 lg:max-w-screen-xl p-7 py-16 rounded-sm mx-auto "
            >
                <Typography as="h1" className={`text-[#070b34]`}>{title}</Typography>
                <Typography as='h5' className={`${raleway.className} mx-auto`}> {description}</Typography>
            </section>
                <div className="relative flex w-full overflow-hidden">
                    <Marquee pauseOnHover className={`[--duration:45s] ${raleway.className}`}>
                        <MapList arrayItem={testimonials} renderer={(testimonial, key) => (
                            <div key={key} className='space-y-3 p-6 max-w-sm md:max-w-md lg:max-w-screen-sm border rounded-md shadow'>
                                <Typography as="h4" className={`text-[#070b34] font-extrabold`}>{testimonial?.thead}</Typography>
                                <Typography><RiDoubleQuotesL /><span className="indent-8">{testimonial?.desc}</span><RiDoubleQuotesR /></Typography>
                                <Typography className={'font-semibold '}>{testimonial?.givenBy}</Typography>
                            </div>
                        )}/>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white dark:from-background"></div>
                </div>
        </div>

    )
}

export default Testimonials;
