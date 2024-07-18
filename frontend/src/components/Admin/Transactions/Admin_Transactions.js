import React, { useEffect, useState } from "react";
import Transactions from "./Transactions";
import Shimmer from "./Shimmer";

const Admin_Transactions = () => {
  const [toggleShimmer, setToggleShimmer] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setToggleShimmer(false);
    }, 2000);
  }, []);
  return (
    <div className="w-full">
      {toggleShimmer ? <Shimmer /> : <Transactions />}
    </div>
  );
};

export default Admin_Transactions;
