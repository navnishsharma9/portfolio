import dynamic from "next/dynamic";
import { data } from "@/appdata";
const TopBar = dynamic(()=>import('./TopBar'));
const BottomBar = dynamic(()=>import('./BottomBar'));

function Header() {
    const { menus } = data||{}

    return (
        <>
            <TopBar/>
            <BottomBar menus={menus}/>
        </>
    )
}

export default Header