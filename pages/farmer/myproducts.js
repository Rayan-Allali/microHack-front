import React from 'react'
import SideBar from '../../Components/Landing/layout/sideBar'
import Card from '../../Components/card'
import Title from '../../Components/titleSection'
import Potato from '../../public/Assets/potato.png'

export default function myproducts() {
  return (
    <div className='flex w-full'>
        <div className='max-h-[100vh]'><SideBar active={1} type={true}/> </div>
        <div className='w-full overflow-auto h-[100vh] p-10 flex justify-between '>
            <div>
            <Title title='My Products' subTitle='Vous pouvez contrôler les publications ici !' />
            <div className='grid grid-cols-3 gap-3 p-10'>
              
            <div className='flex flex-col border-[1px] border-[#37373740] rounded-lg p-10'>
            <div className='pb-3 mb-2'>
              <div className='p-2 border-[1px] border-[#37373740] rounded-xl w-[40px] text-center'>+</div>
              <div className='p-2 text-lg'>New Product</div>
              <div className='p-2 text-sm'>Create a new product!</div>
            </div>
            
            <button className='p-2 border-[1px] border-[#37373740] rounded-xl w-[50%] text-center' onClick={()=>{console.log("fetching")}}>Add</button>
            </div>

              {[1,2,3,4,5].map(ele=>{
                return <Card key={ele} img={Potato} name={'potato'} details={'its the best product in the year it can be use with everything and with anything'} />
              })}
            </div>
            </div>
        </div>

    </div>
  )
}
