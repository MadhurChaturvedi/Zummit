import React from "react";
import Admin_SideBar from "../Admin_SideBar";
import NewAdmin from "./NewAdmin";

const Create_Another_Admin = () => {
  return (
    <div className="flex bg-[#F2FCFF]">
      <Admin_SideBar />
      <NewAdmin/>
    </div>
  );
};

export default Create_Another_Admin;
