import dynamic from "next/dynamic";
const AboutUs = dynamic(() => import("./AboutUs"));
const Services = dynamic(() => import("./Services"));
const Team = dynamic(() => import("./Team"));
const HappyCustomer = dynamic(() => import("./HappyCustomers"));
const Testimonials = dynamic(() => import('./Testimonials'));
import HeroSectionSlider from "./HeroSectionSlider";
const ContactUsForm = dynamic(() => import('./ContactUsForm'),{ssr:false})

export { Services, HappyCustomer, HeroSectionSlider, AboutUs, Team, Testimonials, ContactUsForm }