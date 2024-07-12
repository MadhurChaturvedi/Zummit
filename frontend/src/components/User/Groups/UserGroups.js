import React from "react";
import Side_Navbar from "../UserSidebar";
import Groups from "./Groups";

const UserGroups = () => {
    return (
        <div className="flex bg-[#F2FCFF]">
            <Side_Navbar />
            <Groups />
        </div>
    )
}

export default UserGroups;