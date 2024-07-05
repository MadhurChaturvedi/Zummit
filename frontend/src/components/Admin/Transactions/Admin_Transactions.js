import React, { useEffect, useState } from 'react'
import Admin_SideBar from "../Admin_SideBar";
import Transactions from './Transactions';
import Shimmer from './Shimmer';

const Admin_Transactions = () => {
  const [toggleShimmer, setToggleShimmer] = useState(true)
  useEffect(()=>{
    setInterval(() => {
      setToggleShimmer(false)
    }, 2000);
  },[]) 
  return (
    <div className='flex bg-[#F2FCFF]'>
      <Admin_SideBar/>
      {toggleShimmer ? <Shimmer/>: <Transactions/>}
    </div>
  )
}

export default Admin_Transactions