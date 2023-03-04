import React from 'react'
import Logo from './../../../public/Assets/logo.jpg'
import Link from 'next/link'
import {BiLogIn} from 'react-icons/bi'
export default function SideBar({active}) {
  return (
    <div className='w-[180px] bg-white h-[100vh]'>
        <div className='w-full flex flex-col justify-between h-full'>
            <div className='w-full flex flex-col gap-10 pt-5'>
                <div className='w-full p-4'> <img className="w-full" src={Logo.src} alt="logo" /></div>
                <div className="py-4 mt-8 flex flex-col justify-between">
                    <ul className="flex flex-col gap-2">
                        <Link href='/buyer' ><li className={`${active === 0 && 'bg-[#4BA064] text-white'} text-lg p-2 px-6`}>General</li></Link>
                        <Link href='/buyer/products' ><li className={`${active === 1 && 'bg-[#4BA064] text-white'} text-lg p-2 px-6`}>Products</li></Link>
                        <Link href='/buyer/listoffarmers' ><li className={`${active === 2 && 'bg-[#4BA064] text-white'} text-lg p-2 px-6`}>List of Farmers</li></Link>
                        <Link href='/buyer/settings' ><li className={`${active === 3 && 'bg-[#4BA064] text-white'} text-lg p-2 px-6`}>Settings</li></Link>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <button className='p-4 text-[#00000080] flex gap-2 text-lg items-center'>Logout <BiLogIn></BiLogIn></button>
            </div>
        </div>
    </div>
  )
}
