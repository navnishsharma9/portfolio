import { MapList } from '@/components/MapList';
import { IoMdArrowDropright } from 'react-icons/io';
import Link from 'next/link';

export default function index({ link = [] }) {

    return (
        <div>
            <p className='font-semibold text-lg mb-4'>Usefull Links</p>
            <ul className='space-y-3 text-sm'>
                <MapList
                    arrayItem={link}
                    renderer={(item, key) => (
                        <li key={key} className={`flex gap-1 items-center`}>
                            <IoMdArrowDropright />
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    )}
                />
            </ul>
        </div>
    )
}