import React, { useEffect, useState } from "react";
import Admin_SideBar from "../Admin_SideBar";
import Therapist from "./Therapist";
import AddTherapist from "./AddTherapist";
import Shimmer from "./Shimmer";
const Admin_Therapists = () => {
  const [toggleShimmer, setToggleShimmer] = useState(true)
  useEffect(()=>{
    setInterval(() => {
      setToggleShimmer(false)
    }, 2000); 
  },[]) 
  return (
    <div className="flex bg-[#F2FCFF]">
      <Admin_SideBar />
      {toggleShimmer ? <Shimmer/> : <Therapist/>}
    </div>
  );
};

export default Admin_Therapists;
