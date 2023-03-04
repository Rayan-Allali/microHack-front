import React from 'react'
import {AiOutlineEdit,AiFillDelete} from "react-icons/ai"
export default function Card({img,name,details}) {
  return (
    <div className='border-[1px] border-[#37373740] border-t-0 rounded-lg'>
        <div className='w-full rounded-lg'><img className='w-full h-[100px]' src={img.src} /></div>
        <div className='flex flex-col gap-1 items-start p-4'>
            <h1 className=''>{name}</h1>
            <p className='text-sm text-[#00000080]'>{details}</p>
        </div>

        <div className='flex justify-between items-center p-3'>
            <div className='text-[#37373740] border-[1px] border-[#37373740] rounded-md p-2'><AiOutlineEdit  className='text-xl'></AiOutlineEdit></div>
            <div className='text-[#37373740] border-[1px] border-[#37373740] rounded-md p-2'><AiFillDelete className='text-xl'></AiFillDelete></div>
        </div>

    </div>
  )
}