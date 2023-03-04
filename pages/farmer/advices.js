import React from 'react'
import SideBar2 from '../../Components/Landing/layout/sideBar2'
import HeaderRow from '../../Components/HeaderRow'
import Row from '../../Components/Row/index'
function Profil() {
  return (
    <div className='flex w-full'>
        <div><SideBar2 active={2}/></div>
        <main className='p-16 w-full  overflow-auto h-[100vh]'>
      
<div className='pb-12 mb-4]'>
<h1 className=' text-5xl font-bold pb-4'>The Most Needed Products</h1>
<p className=' text-s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam ullam.
  <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam.
</p>

</div>

<HeaderRow title1="Product" title2="Wilaya" title3="Period" />
<div className='flex flex-col justify-between'>
<Row imageSrc="/Assets/potato.png" rounded={false} width={72} height={52} info1="Potatos" info2="Alger" info3="Fevrier" />
<Row imageSrc="/Assets/potato.png" rounded={false} width={72} height={52} info1="Potatos" info2="Alger" info3="Fevrier" />
<Row imageSrc="/Assets/potato.png" rounded={false} width={72} height={52} info1="Potatos" info2="Alger" info3="Fevrier" />
<Row imageSrc="/Assets/potato.png" rounded={false} width={72} height={52} info1="Potatos" info2="Alger" info3="Fevrier" />
<Row imageSrc="/Assets/potato.png" rounded={false} width={72} height={52} info1="Potatos" info2="Alger" info3="Fevrier" />
<Row imageSrc="/Assets/potato.png" rounded={false} width={72} height={52} info1="Potatos" info2="Alger" info3="Fevrier" />
<Row imageSrc="/Assets/potato.png" rounded={false} width={72} height={52} info1="Potatos" info2="Alger" info3="Fevrier" />
</div>
 </main>  
        
    </div>
  )
}

export default Profil