import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { RiLinkedinFill } from "react-icons/ri";

function TopBar() {
  return (
    <section id="topbar" className=' border-b-2 p-2 hidden lg:block'>
            <div className="flex flex-col md:flex-row justify-between container max-w-screen-xl items-center mx-auto lg:px-12">
                <div className=" flex gap-5">
                    <div className='flex items-center gap-1'> 
                        <MdEmail /><a href="mailto:contact@example.com">contact@example.com</a>
                    </div>
                    <div className='flex items-center gap-1'>
                        <MdPhoneInTalk/> +1 5589 55488 55
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <a href="#" ><BsTwitterX className="w-3 h-3"/></a>
                    <a href="#" ><ImFacebook className="w-3 h-3"/></a>
                    <a href="#" ><BsInstagram className="w-3 h-3"/></a>
                    <a href="#" ><RiLinkedinFill className="w-4 h-4"/></a>
                </div>
            </div>
        </section>
  )
}

export default TopBar
