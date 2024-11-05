import { MapList } from '@/components/MapList';
import { IoMdArrowDropright } from 'react-icons/io';

export default function index({services}){
    return(
        <div>
            <p className='font-semibold text-lg mb-4 '>Services</p>
            <ul className='space-y-3 text-sm'>
                <MapList
                    arrayItem={services}
                    renderer={(service, key)=>(
                    <li key={key} className={`flex gap-1 items-center`}>
                        <IoMdArrowDropright/>
                        {service}
                    </li>
                    )}
                />
            </ul>
          </div>
    )
}