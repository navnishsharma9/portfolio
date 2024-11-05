import dynamic from "next/dynamic";
import Carousel from "./Carousel";
const Model = dynamic(() => import("./Model/Model"), {ssr:false})
import { MapList } from "./MapList";
import { Typography } from "./Typography";

export { Carousel, Model, MapList, Typography }