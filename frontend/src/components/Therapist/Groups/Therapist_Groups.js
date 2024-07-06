import React, { useEffect, useState } from 'react'
import Therapist_SideBar from '../Therapist_SideBar'
import Groups from './Groups'
import Shimmer from './Shimmer'

const Therapist_Groups = () => {
  const [toggleshimmer, setToggleshimmer] = useState(true)
  useEffect(()=>{
    setInterval(() => {
      setToggleshimmer(false)
    }, 2000);
  },[])
  return (
    <div className='flex bg-[#F2FCFF]'>
      <Therapist_SideBar/>
      {toggleshimmer?<Shimmer/> : <Groups/>}

    </div>
  )
}

export default Therapist_Groups
