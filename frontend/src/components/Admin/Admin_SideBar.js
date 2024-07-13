import React from "react";
import { Link, useLocation } from "react-router-dom";
const Admin_SideBar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const smoothScroll = ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  const navigationItems = [
    { path: "/admin-dashboard", label: "Dashboard" },
    { path: "/admin-appointments", label: "Appointments" },
    { path: "/admin-therapists", label: "Therapists" },
    { path: "/admin-groups", label: "Groups" },
    { path: "/admin-clients", label: "Client" },
    { path: "/admin-resources", label: "Resources" },
    { path: "/admin-reviews", label: "Reviews" },
    { path: "/admin-transactions", label: "Transactions" },
    { path: "/admin-create-therapist-credentail", label: "Created Therapist Credential" },
    { path: "/admin-create-another-admin", label: "Create Another Admin" },
    { path: "/admin-profile", label: "Profile" },
  ];
  return (
    <div className="leftCont flex ">
      <div className="sidebar w-[18vw] px-4 py-6 bg-[#00677F]">
        <Link to="/admin-dashboard">
          <img
            src={require("../images/logo.png")}
            alt=""
          />
        </Link>
        <div className="flex flex-col text-white text-[1.3rem] gap-8 mt-8">
          {navigationItems.map((data) => (
            <Link to={data.path}>
            <button
              onClick={smoothScroll}
              className={`pl-5 py-2 text-left ${
                isActive(data.path)
                  ? "bg-[#FDFEF1] text-black font-bold w-full rounded-lg "
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

export default Admin_SideBar;
