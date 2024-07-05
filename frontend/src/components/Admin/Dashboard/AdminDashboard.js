import React, { useEffect, useState } from "react";
import Admin_SideBar from "../Admin_SideBar";
import Main_Dashboard from "./Main_Dashboard";
import Author from "./Author";
import Shimmer from "./Shimmer";

const AdminDashboard = () => {
  const [toggleShimmer, setToggleShimmer] = useState(true)
  useEffect(()=>{
    setInterval(() => { 
      setToggleShimmer(false)
    }, 2000);
  },[])
  return (
    <div className="flex w-[100%]">
      <div className="w-[18.5%]">
        <Admin_SideBar />
      </div>
      <div className="w-[81.5%]  bg-[#F2FCFF]">
        {toggleShimmer ? <Shimmer/> : <Main_Dashboard />}
      </div>
    </div>
  );
};

export default AdminDashboard;
