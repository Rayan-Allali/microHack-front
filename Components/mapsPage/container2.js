import React from 'react'
import SideBar from '../../Components/Landing/layout/sideBar'
import Map from './../../public/Assets/map.png'
export default function Container({title,subTitle}) {
  return (
    <div className='flex w-full'>
        <div className='max-h-[100vh]'><SideBar active={0} /></div>
        <div className='p-10 flex justify-between w-full overflow-auto h-[100vh]'>
            <div className="">
                <h1 className='text-[24px] font-bold pb-2'>{title}</h1>
                <p className='text-[#333333B8]'>{subTitle}</p>
                <div className='p-5 w-full flex items-center justify-center'><img src={Map.src} alt='map'/></div>
            </div>
           <input className='search h-8 bg-white text-[#333333B8] rounded-md py-2 px-4 flex items-center w-[200px] outline-none' placeholder='search' />
        </div>
        
    </div>
  )
}