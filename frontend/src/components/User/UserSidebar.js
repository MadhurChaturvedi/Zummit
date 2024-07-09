import * as React from "react";
import { Link, useLocation } from 'react-router-dom';
import sidebarLogo from "../images/logo.png";

function UserSidebar() {
  const location = useLocation();

  // Function to check if the given path matches the current location
  const isActive = (path) => {
      return location.pathname === path;
  };
    return (<>
        <div className="leftCont flex ">
        <div className="sidebar w-[18vw] bg-[#00677F]">
          <Link to="/userdashboard">
          <img
            src={sidebarLogo}
            alt=""
            className="pl-[16px] pt-[32px] w-[196px]"
          />
          </Link>
          <div className="h-[697px] w-[227px] m-auto flex flex-col items-start text-white text-[22px] justify-evenly">
          <button className={` pl-4  ${isActive('/userdashboard') ? 'bg-[#FDFEF1] pl-4 text-black font-bold w-[227px] h-[49px] rounded-lg text-left' : ''}`}>
                        <Link to="/userdashboard">Dashboard</Link>
          </button>
          <button className={`pl-4 ${isActive('/user-appointments') ? 'bg-[#FDFEF1] pl-4 text-black font-bold w-[227px] h-[49px] rounded-lg text-left' : ''}`}>
                        <Link to="/user-appointments">Appointments</Link>
          </button>
          <button className={`pl-4 ${(isActive('/bookingPage' || isActive('/TherapistDetailsPage'))) ? 'bg-[#FDFEF1] pl-4 text-black font-bold w-[227px] h-[49px] rounded-lg text-left' : ''}`}>
                        <Link to="/bookingPage">Therapists</Link>
          </button>
          <button className={`pl-4 ${(isActive('/userdashboard-groups')) ? 'bg-[#FDFEF1] pl-4 text-black font-bold w-[227px] h-[49px] rounded-lg text-left' : ''}`}>
              <Link to="/userdashboard-groups" >Groups</Link>
          </button>
            <button className={`pl-4 ${isActive('/user-billings') ? 'bg-[#FDFEF1] pl-4 text-black font-bold w-[227px] h-[49px] rounded-lg text-left' : ''}`}>
              <Link to="/user-billings">Billings</Link>
            </button>
            <button className={`pl-4 ${isActive('/userdashboard-resources') ? 'bg-[#FDFEF1] pl-4 text-black font-bold w-[227px] h-[49px] rounded-lg text-left' : ''}`}>
              <Link to="/userdashboard-resources" >Resources</Link>
            </button>
            <button className={`pl-4 ${isActive('/userdashboard-FAQs') ? 'bg-[#FDFEF1] pl-4 text-black font-bold w-[227px] h-[49px] rounded-lg text-left' : ''}`}>
              <Link to="/userdashboard-FAQs" >FAQ</Link>
            </button>
            <button className={`pl-4 ${isActive('/user-profile') ? 'bg-[#FDFEF1] pl-4 text-black font-bold w-[227px] h-[49px] rounded-lg text-left' : ''}`}>
              <Link to="/user-profile" >Profile</Link>
            </button>
            <button className={`pl-4 ${isActive('/') ? 'bg-[#FDFEF1] pl-4 text-black font-bold w-[227px] h-[49px] rounded-lg text-left' : ''}`}>
              Logout
            </button>
          </div>
        </div>
        </div>
    </>)
}

export default UserSidebar;