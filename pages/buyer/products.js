import React from 'react'
import Tomato from './../../public/Assets/Tomato.png'
import Card2 from '../../Components/card2'
import SideBar from '../../Components/Landing/layout/sideBar'
import Title from '../../Components/titleSection'
import Filtrage from '../../Components/filtrage'
export default function Product() {
  return (
        <div className='flex w-full'>
        <div className='max-h-[100vh]'><SideBar active={1}/> </div>
        <div className='w-full overflow-auto h-[100vh]'>
            <div>
            <Title title='Products' subTitle='' />
            <Filtrage />
            <div className='grid grid-cols-4 gap-3 p-10'>
            {[1,2,3,4,5].map(ele=>{
                return <Card2  key={ele} img={Tomato} name={'Tomato'} />
            })}
            </div>
            </div>
        </div>

        </div>
  )
}