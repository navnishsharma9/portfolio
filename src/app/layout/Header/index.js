import dynamic from "next/dynamic";
const TopBar = dynamic(()=>import('./TopBar'));
const BottomBar = dynamic(()=>import('./BottomBar'));

function Header() {

    return (
        <>
            <TopBar/>
            <BottomBar/>
        </>
    )
}

export default Header