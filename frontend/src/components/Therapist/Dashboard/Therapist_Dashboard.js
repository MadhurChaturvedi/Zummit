import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Therapist_SideBar from "../Therapist_SideBar";
import Shimmer from "./Shimmer";
import TherapistPop from "../TherapistPop/TherapistPop";

const Therapist_Dashboard = () => {
  const [toggleshimmer, setToggleshimmer] = useState(true)
  useEffect(()=>{
    setInterval(() => {
      setToggleshimmer(false)
    }, 2000); 
  },[])
  return (
    <div className="flex bg-[#F2FCFF]"> 
      <Therapist_SideBar />
      {toggleshimmer?<Shimmer/> : <Dashboard/>}
      {/* <TherapistPop/> */}
    </div>
  );
};

export default Therapist_Dashboard;
