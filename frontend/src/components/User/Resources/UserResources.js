import React from "react";
import Side_Navbar from "../UserSidebar";
import ResourcesComponent from "./ResourcesComponent";

const UserResources = () => {
    return (
        <div className="flex bg-[#F2FCFF]">
            <Side_Navbar />
            <ResourcesComponent />
        </div>
    )
}

export default UserResources;