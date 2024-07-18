import React, { useEffect, useState } from "react";
import Admin_SideBar from "../Admin_SideBar";
import Reviews from "./Reviews";
import Shimmer from "./Shimmer";

const Admin_Reviews = () => {
  const [toggleShimmer, setToggleShimmer] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setToggleShimmer(false);
    }, 2000);
  }, []);
  return (
    <div className="w-full">{toggleShimmer ? <Shimmer /> : <Reviews />}</div>
  );
};

export default Admin_Reviews;
