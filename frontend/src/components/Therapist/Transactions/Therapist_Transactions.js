import React, { useEffect, useState } from 'react'
import Therapist_SideBar from '../Therapist_SideBar'
import Transactions from './Transactions '
import Shimmer from './Shimmer'


const Therapist_Transactions = () => {
  const [toggleshimmer, setToggleshimmer] = useState(true)
  useEffect(()=>{
    setInterval(() => {
      setToggleshimmer(false)
    }, 2000);
  },[])
  return (
    <div className='flex bg-[#F2FCFF]'>
        <Therapist_SideBar/>
        {toggleshimmer ? <Shimmer/> : <Transactions/>}
    </div>
  )
}

export default Therapist_Transactions
