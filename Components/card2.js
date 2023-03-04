import React from 'react'
export default function Card({img,name}) {
  return (
    <div className='p-10 flex items-center justify-center rounded-lg' style={{ 
        backgroundImage: `url(${img.src})` 
      }}>
        <div className='flex flex-col gap-1 items-start p-4'>
            <h1 className='text-white text-xl text-bold'>{name}</h1>
        </div>
    </div>
  )
}