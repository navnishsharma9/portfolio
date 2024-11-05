'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '../../../components/Logo'
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/navigation';
import Model from '@/components/Model/Model'
function BottomBar({ menus }) {
    const [open, setOpen] = useState(false);
    const {pathname} = useRouter();

    const handleCloseModel = () => (
        setOpen(!open)
    )

    return (
        <>
            <Model isOpen={open} handleClose={() => setOpen(!open)}>
                <nav className='w-72 bg-[#1f3548] h-full text-white shadow  text-base'>
                    <div className='grid grid-cols-1'>
                    <Logo />
                    {menus?.map((menu, key) => (
                        <Link key={key} className={` ${pathname === menu.link ? 'text-[#070b34]': 'text-white'} p-3 `} href={menu.link} onClick={handleCloseModel}>{menu.name.toUpperCase()}</Link>
                    ))}
                    </div>
                </nav>
            </Model>

            <header className=' border-b-2 p-2'>
                <div className='flex justify-between items-center container max-w-screen-xl mx-auto lg:px-12'>
                    <Logo />
                    <RxHamburgerMenu className='md:hidden cursor-pointer' onClick={() => setOpen(!open)} />
                    <nav className='hidden md:flex md:gap-6'>
                        {menus?.map((menu, key) => (
                            <Link key={key} href={menu.link}>{menu.name.toUpperCase()}</Link>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    )
}

export default BottomBar
