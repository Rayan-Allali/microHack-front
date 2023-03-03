import React from 'react'
import Product from '../../Components/Product/index'

function advices() {
  return (
    <main className='p-16 w-full'>
      
      <div className='pb-12'>

        <h1 className=' text-5xl font-bold pb-4'>The Most Needed Products</h1>
        <p className=' text-s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam ullam.
          <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam.
        </p>
      
      </div>
      
      <div className='w-full h-10 bg-white flex justify-between items-center py-2 px-6 mb-4 border-solid border-2 border-gray-300'>

        <div className='w-20 text-center'>Product</div>
        <div className='w-20 text-center'>Wilaya</div>
        <div className='w-20 text-right'>Period</div>

      </div>

      <div className='flex flex-col justify-between'>
        <Product/>
        <Product/>
        <Product/>
      </div>
      
    </main>
  )
}

export default advices