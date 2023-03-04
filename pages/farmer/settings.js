import React from 'react'
import { useState } from 'react'
import Image from "next/image";
import SideBar from '../../Components/Landing/layout/sideBar'
export default function settings() {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [wilaya, setWilaya] = useState('');

  const editImage = e => {
    // a code to prompt the user to upload a new image
  }



  const submit = e => {
    console.log('submitting data...');
    console.log({
      phoneNumber,
      email,
      password,
      role,
      wilaya
    })
  }

  return (
    <div className="flex">
        <div><SideBar active={3}/></div>
        <div className='overflow-auto w-full h-[100vh]'>
        <main className='w-full pt-16 flex justify-center'>

<div className='w-[50%] flex flex-col justify-between items-center'>

  <div className='relative mb-6'>
    <Image src={"/Assets/farmer.png"} width={120} height={120} className="rounded-full">
    </Image>
    <img src="/Assets/edit-icon.png" alt="edit icon" width="32px" className='absolute top-[80%] right-[5%]' onClick={editImage}/>
  </div>

  <div className='pb-2 pl-4 mb-6 border-b-2 border-black text-3xl font-bold'>
    Karim <img src="/Assets/edit-icon2.png" alt="edit icon" width="18px" height="18px"
    className='inline ml-2'/>

  </div>

  <input type="text" placeholder='+213 792955534' onChange={e => setPhoneNumber(current => e.target.value) }
  className='block h-12 w-[60%] my-3 pl-4 border-solid border-[1.07px] border-[#033323] rounded-lg bg-transparent font-poppins text-[#033323] text-md'/>

  <input type="text" placeholder='la_bengherbia@esi.dz' onChange={e => setEmail(current => e.target.value) }
  className='block h-12 w-[60%] my-3 pl-4 border-solid border-[1.07px] border-[#033323] rounded-lg bg-transparent font-poppins text-[#033323] text-md'/>

  <input type="password" placeholder='***********' onChange={e => setPassword(current => e.target.value) }
  className='block h-12 w-[60%] my-3 pl-4 border-solid border-[1.07px] border-[#033323] rounded-lg bg-transparent font-poppins text-[#033323] text-md'/>

  <input type="text" placeholder='Farmer' onChange={e => setRole(current => e.target.value) }
  className='block h-12 w-[60%] my-3 pl-4 border-solid border-[1.07px] border-[#033323] rounded-lg bg-transparent font-poppins text-[#033323] text-md'/>

  <input type="text" placeholder='+OuedSouf' onChange={e => setWilaya(current => e.target.value) }
  className='block h-12 w-[60%] my-3 pl-4 border-solid border-[1.07px] border-[#033323] rounded-lg bg-transparent font-poppins text-[#033323] text-md'/>

  <button type="submit" onClick={submit}
  className='w-40 h-12 mt-10 rounded-lg font-medium bg-[#033323] text-2xl text-white'>Edit</button>

</div>

</main>
        </div>
        
    </div>
  )
}



  