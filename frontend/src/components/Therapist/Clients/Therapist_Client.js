import React, { useEffect, useState } from 'react'
import Therapist_SideBar from '../Therapist_SideBar'
import Clients from './Clients'
import Existing_Client from './Existing_Client'
import Substance_Recovery from './Substance_Recovery'
import Shimmer from './Shimmer'

const Therapist_Client = () => {
  const [toggleshimmer, setToggleshimmer] = useState(true)
  useEffect(()=>{
    setInterval(() => {
      setToggleshimmer(false)
    }, 2000);
  },[])
  return (
    <div className='flex bg-[#F2FCFF]'>
      <Therapist_SideBar/>  
      {toggleshimmer?<Shimmer/> : <Clients/>}
      {/* <Existing_Client/> */}
      {/* <Substance_Recovery/> */}
    
    </div>
  )
}

export default Therapist_Client
