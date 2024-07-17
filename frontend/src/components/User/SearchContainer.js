import React from "react";
import Frame from '../images/Frame.png';
import Frame609 from '../images/Frame609.png';
import { useNavigate } from "react-router-dom";

const SearchContainer = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("userToken");
    localStorage.clear("userID");
    navigate('/login');
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[85%] flex justify-between items-center gap-5'>
        <div className='flex items-center relative'>
          <img className='w-[1.5rem] h-[1.5rem] absolute left-[0.93rem]' src={Frame} alt="searchIcon" />
          <input
            className='w-[46rem] p-2.5 border border-[#B4F0FF] rounded-lg outline-none pl-12'
            type="text"
            placeholder='Search'
          />
        </div>
        <img className='w-[2.5rem] h-[2.5rem]' src={Frame609} alt="notificationsIcon" />
        <div>
          <button onClick={logout} className="bg-[#0190B1] px-4 py-2 rounded-md text-white text-lg font-medium">Logout</button>
        </div>
      </div>
    </div>
  )
};

export default SearchContainer;