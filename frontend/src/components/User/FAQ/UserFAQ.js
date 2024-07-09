import React from "react";
import FAQs from "./FAQs";
import Side_Navbar from "../UserSidebar";
import SearchContainer from "../SearchContainer";

const UserFAQ = () => {
    return(
        <div className="flex">
            <Side_Navbar />
            <div className="w-full flex flex-col items-center bg-[#F2FCFF] pb-5">
                <SearchContainer />
                <FAQs />
            </div>
        </div>
    )
}

export default UserFAQ;