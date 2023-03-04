import { useState } from 'react'
export default function Filtrage() {
    const [active,setActive]=useState(0)
  return (
    <div className='px-10'>
        <ul className='flex gap-2'>
            <li className={`'text-[#000000CC] p-2 cursor-pointer ' ${active === 0 && 'font-[600] text-[#4BA064] border-b-[1px] border-b-[#4BA064] duration-300' } `} onClick={()=>{setActive(0);}}>All</li>
            <li className={`'text-[#000000CC] p-2 cursor-pointer ' ${active === 1 && 'font-[600] text-[#4BA064] border-b-[1px] border-b-[#4BA064] duration-300' } `} onClick={()=>{setActive(1);}}>Vegtables</li>
            <li className={`'text-[#000000CC] p-2 cursor-pointer ' ${active === 2 && ' font-[600] text-[#4BA064] border-b-[1px] border-b-[#4BA064] duration-300' } `} onClick={()=>{setActive(2);}}>Fruits</li>
        </ul>
    </div>
  )
}