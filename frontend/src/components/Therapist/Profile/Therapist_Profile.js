import React, { useEffect, useState } from 'react'
import Therapist_SideBar from '../Therapist_SideBar'
import Proflie from './Proflie'
import Shimmer from './Shimmer'


const Therapist_Profile = () => {
  const [toggleshimmer, setToggleshimmer] = useState(true)
  useEffect(()=>{
    setInterval(() => {
      setToggleshimmer(false)
    }, 2000);
  },[])
  return (
    <div className='flex bg-[#F2FCFF]'>
      <Therapist_SideBar/>  
      {toggleshimmer?<Shimmer/> : <Proflie/> }
    </div>
  )
}

export default Therapist_Profile
