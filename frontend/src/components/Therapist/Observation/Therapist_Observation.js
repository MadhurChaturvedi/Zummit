import React, { useEffect, useState } from 'react'
import Therapist_SideBar from '../Therapist_SideBar'
import Observation from './Observation'
import Shimmer from './Shimmer'

const Therapist_Observation = () => {
  const [toggleshimmer, setToggleshimmer] = useState(true)
  useEffect(()=>{
    setInterval(() => {
      setToggleshimmer(false)
    }, 2000);
  },[])
  return (
    <div className='flex bg-[#F2FCFF]'>
      <Therapist_SideBar/>
      {toggleshimmer?<Shimmer/> : <Observation/>}

    </div>
  )
}

export default Therapist_Observation
