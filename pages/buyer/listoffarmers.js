import React from 'react'
import HeaderRow from '../../Components/HeaderRow'
import Row from '../../Components/Row/index'
import SideBar from '../../Components/Landing/layout/sideBar'

function listOfFarmers() {
  return (
    <div className='flex w-full'>
        <div><SideBar active={2}/></div>
        <main className='p-16 w-full overflow-auto h-[100vh]'>
      
      <div className='pb-12 mb-16'>

        <h1 className=' text-5xl font-bold pb-4'>List of farmers</h1>      
      
      </div>

      <HeaderRow title1="Farmer Name" title2="Wilaya" title3="Nunber of products" />

      <div className='flex flex-col justify-between'>
      
        <Row imageSrc="/Assets/farmer.png" rounded={true} width={72} height={52} info1="Karim" info2="OuedSouf" info3={10} />
        <Row imageSrc="/Assets/farmer.png" rounded={true} width={72} height={52} info1="Dehman" info2="OuedSmar" info3={20} />
        <Row imageSrc="/Assets/farmer.png" rounded={true} width={72} height={52} info1="Karim" info2="OuedSouf" info3={10} />
        <Row imageSrc="/Assets/farmer.png" rounded={true} width={72} height={52} info1="Dehman" info2="OuedSmar" info3={20} />
        <Row imageSrc="/Assets/farmer.png" rounded={true} width={72} height={52} info1="Karim" info2="OuedSouf" info3={10} />
        <Row imageSrc="/Assets/farmer.png" rounded={true} width={72} height={52} info1="Dehman" info2="OuedSmar" info3={20} />
        <Row imageSrc="/Assets/farmer.png" rounded={true} width={72} height={52} info1="Karim" info2="OuedSouf" info3={10} />
        <Row imageSrc="/Assets/farmer.png" rounded={true} width={72} height={52} info1="Dehman" info2="OuedSmar" info3={20} />
      
      </div>
      
    </main>
    </div>
  )
}

export default listOfFarmers