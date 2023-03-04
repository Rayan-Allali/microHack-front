import React from 'react'
import Image from "next/image";

function Row({imageSrc, rounded, width, height, info1, info2, info3}) {
  return (
    <div className='flex justify-between items-center px-6 py-6'>

      <div className='flex items-center w-40'>
        
        <Image src={imageSrc} width={width} height={height}
        className={`pr-4 ${rounded && 'rounded-full'}`}></Image> 
        {info1}
      </div>

      <div className='w-40 text-center'>{info2}</div>

      <div className='w-40 text-center'>{info3}</div>

    </div>
  )
}

export default Row