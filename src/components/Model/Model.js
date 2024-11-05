'use client'

import { MdClose } from "react-icons/md";

export default function Model({ children, isOpen, handleClose = () => { } }) {

    return (
        <div
            role="dialog"
            aria-hidden={!isOpen}
            className={`transform transition-transform duration-400 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden fixed z-40 inset-0 flex flex-row-reverse justify-between bg-[#1f3548b3]`}
        >
            <MdClose onClick={handleClose} className="w-9 h-9 p-2 bg-white rounded-full fill-black" aria-label="Close modal" />
            {children}
        </div>
    )
}
