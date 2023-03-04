import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
export default function Title({title,subTitle}){
    return(
        <div className='w-full px-10 py-5 flex justify-between '>
            <div>
            <h1 className='text-[24px] font-bold pb-2'>{title}</h1>
            {subTitle && <p className='text-[#333333B8]'>{subTitle}</p>}
            </div>
            <div className='flex gap-1 items-center p-2 h-8 bg-white text-[#333333B8] rounded-md py-2 px-4 w-[200px] outline-none'>
                <AiOutlineSearch></AiOutlineSearch>
                <input className='search outline-none' placeholder='search' /></div>
        </div>
        )
}