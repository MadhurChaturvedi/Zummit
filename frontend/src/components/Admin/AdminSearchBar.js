import React from 'react';
import BellIcon from "../images/SVG_files/BellIcon.svg";
import SearchBarIcon from "../images/SVG_files/SearchBar.svg";
import { useNavigate } from 'react-router-dom';

const AdminSearchBar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear("adminToken");
        navigate('/admin-login')
    }
    return (
        <div className="flex w-[95%] mb-5 justify-between gap-10 items-center">
            <div className="flex items-center bg-white w-[80%]   pl-4 rounded-lg -[#B4F0FF] ">
                <img src={SearchBarIcon} alt="SearchBar" />
                <input
                    type="text"
                    placeholder="Search"
                    className="h-12 ml-5 rounded-lg outline-none w-[100%]"
                />
            </div>
            <div className="p-2 cursor-pointer rounded-full ">
                <img src={BellIcon} alt=" BellIcon " />
            </div>
            <button onClick={logout} className="bg-[#0190B1] px-4 py-2 rounded-md text-white">Logout</button>
        </div>
    )
}

export default AdminSearchBar