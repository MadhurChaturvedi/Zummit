import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Shimmer from "./Shimmer";

const AdminDashboard = () => {
  const [toggleShimmer, setToggleShimmer] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setToggleShimmer(false);
    }, 2000);
  }, []);
  return (
    <div className="w-full">
      {toggleShimmer ? <Shimmer /> : <Dashboard />}
    </div>
  );
};

export default AdminDashboard;
