import React from "react";
import Side_Navbar from "../UserSidebar";
import Groups from "./Groups";

const UserGroups = () => {
    return (
        <div className="flex">
            <Side_Navbar />
            <Groups />
        </div>
    )
}

export default UserGroups;