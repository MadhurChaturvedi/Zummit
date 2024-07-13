import React, { useEffect, useState } from "react";
import Therapist_SideBar from "../Therapist_SideBar";
import Appointment from "./Appointment";
import Shimmer from "./Shimmer";

const Therapist_Appointment = () => {
  const [toggleshimmer, setToggleshimmer] = useState(true)
  useEffect(()=>{
    setInterval(() => {
      setToggleshimmer(false)
    }, 2000);
  },[])
  return (
    <div className="flex bg-[#F2FCFF]">
      <Therapist_SideBar />
      {toggleshimmer ? <Shimmer/> : <Appointment />}
    </div>
  );
};

export default Therapist_Appointment;
