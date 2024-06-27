import React from "react";
import { Link, useLocation } from "react-router-dom";

const Therapist_SideBar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const navigationItems = [
    { path: "/therapist-dashboard", label: "Dashboard" },
    { path: "/therapist-appointments", label: "Appointments" },
    { path: "/therapist-schedules", label: "Schedules" },
    { path: "/therapist-clients", label: "Client" },
    { path: "/therapist-groups", label: "Groups" },
    { path: "/therapist-observation", label: "Observation" },
    { path: "/therapist-responses", label: "Responses" },
    { path: "/therapist-transactions", label: "Transactions" },
    { path: "/therapist-profile", label: "Profile" },
  ];
  return (
    <div className="leftCont flex ">
      <div className="sidebar w-[18vw] bg-[#00677F]">
        <Link to="/therapist-dashboard">
          <img
            src={require("../images/logo.png")}
            alt=""
            className="pl-[16px] pt-[32px] w-[196px]"
          />
        </Link>
        <div className="h-[850px] w-[227px]  flex flex-col  items-start  text-white text-[20px] gap-10 mt-8">
          {navigationItems.map((data) => (
            <button
              className={` pl-10  ${
                isActive(data.path)
                  ? "bg-[#FDFEF1]  text-black font-bold w-[227px] h-[49px] rounded-lg text-left"
                  : ""
              }`}
            >
              <Link to={data.path}>{data.label}</Link>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Therapist_SideBar;
