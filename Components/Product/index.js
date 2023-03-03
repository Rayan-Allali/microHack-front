import React from 'react'
import Image from "next/image";

function Product() {
  return (
    <div className='flex justify-between items-center px-6 py-6'>

      <div className='flex items-center w-20'>
        
        <Image src={"/Assets/potato.png"} width={72} height={52}
        className="pr-4" ></Image> 
        Potatos
      </div>

      <div className='w-20 text-center'>Alger</div>

      <div className='w-20 text-right'>Fevrier</div>

    </div>
  )
}

export default Product