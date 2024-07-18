import React, { useEffect, useState } from 'react'
import Admin_SideBar from "../Admin_SideBar";
import Client from './Client';
import Shimmer from './Shimmer';
const Admin_Clients = () => {
  const [toggleShimmer, setToggleShimmer] = useState(true)
  useEffect(()=>{
    setInterval(() => {
      setToggleShimmer(false)
    }, 2000);
  },[])
  return (
    <div className='w-full'>
    {toggleShimmer ?<Shimmer/> : <Client/>}
  </div>
  )
}

export default Admin_Clients