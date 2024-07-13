import React from "react";
import { Link, useLocation } from "react-router-dom";

const Therapist_SideBar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const smoothScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <div>
      <div className="px-4 py-6 h-full w-[18vw] bg-[#00677F]">
        <Link to="/therapist-dashboard">
          <img src={require("../images/logo.png")} alt="" />
        </Link>
        <div className="flex flex-col  text-white text-[1.3rem] gap-10 mt-8">
          {navigationItems.map((data) => (
            <Link to={data.path}>
              <button
                onClick={smoothScroll}
                className={` pl-5 w-full text-left py-2 ${
                  isActive(data.path)
                    ? "bg-[#FDFEF1]  text-black font-bold  rounded-lg "
                    : "font-medium hover:text-black"
                }`}
              >
                {data.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Therapist_SideBar;
