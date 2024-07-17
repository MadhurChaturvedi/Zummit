import React from 'react';
import BellIcon from "../images/SVG_files/BellIcon.svg";
import SearchBarIcon from "../images/SVG_files/SearchBar.svg";

const SearchBar = () => {
    return (
        <div className="flex w-[95%] justify-end gap-10 items-center">
            {/* search bar */}
            <div className="flex w-full justify-between items-center">
                <div className="flex w-full gap-5">
                    <div className="flex items-center bg-white w-[80%] pl-4 rounded-lg border border-[#B4F0FF] ">
                        <img src={SearchBarIcon} alt="SearchBar" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="h-12 ml-5 rounded-lg outline-none w-[100%]"
                        />
                    </div>
                    <div className="cursor-pointer rounded-full ">
                        <img src={BellIcon} alt=" BellIcon " />
                    </div>
                </div>
                <div>
                    <button className="px-4 font-medium text-lg py-2 rounded-md text-white bg-[#0190b1]">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;