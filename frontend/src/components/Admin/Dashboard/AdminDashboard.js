import React, { useEffect, useState } from "react";
import Admin_SideBar from "../Admin_SideBar";
import Main_Dashboard from "./Main_Dashboard";
import Shimmer from "./Shimmer";

const AdminDashboard = () => {
  const [toggleShimmer, setToggleShimmer] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setToggleShimmer(false);
    }, 2000);
  }, []);
  return (
    <div className="flex bg-[#F2FCFF]">
      <Admin_SideBar />
      {toggleShimmer ? <Shimmer /> : <Main_Dashboard />}
    </div>
  );
};

export default AdminDashboard;
