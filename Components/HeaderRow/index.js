import React from 'react'
import Image from "next/image";

function RowHeader({title1, title2, title3}) {
  return (
    <div className='w-full h-10 bg-white flex justify-between items-center py-2 px-6 mb-4 border-solid border-2 border-gray-300'>

        <div className='w-40 text-center'>{title1}</div>
        <div className='w-40 text-center'>{title2}</div>
        <div className='w-40 text-center'>{title3}</div>

    </div>
  )
}

export default RowHeader