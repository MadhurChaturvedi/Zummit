import React from "react";
import FAQs from "./FAQs";
import Side_Navbar from "../UserSidebar";

const UserFAQ = () => {
    return(
        <div className="flex bg-[#F2FCFF] h-[60rem] overflow-hidden">
            <Side_Navbar />
            <FAQs />
        </div>
    )
}

export default UserFAQ;