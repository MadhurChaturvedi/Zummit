import React, { useEffect, useState } from "react";
import Admin_SideBar from "../Admin_SideBar";
import Proflie from "./Proflie";
import Shimmer from "./Shimmer";

const Admin_Profile = () => {
  const [toggleShimmer, setToggleShimmer] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setToggleShimmer(false);
    }, 2000);
  }, []);
  return (
    <div className="w-full">{toggleShimmer ? <Shimmer /> : <Proflie />}</div>
  );
};

export default Admin_Profile;
