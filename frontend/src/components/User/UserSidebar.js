import * as React from "react";
import { Link, useLocation } from "react-router-dom";

function UserSidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const smoothScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigationItems = [
    { path: "/user-dashboard", label: "Dashboard" },
    { path: "/user-appointments", label: "Appointments" },
    { path: "/bookingPage", label: "Therapists" },
    { path: "/user-groups", label: "Group" },
    { path: "/user-billings", label: "Billings" },
    { path: "/user-resources", label: "Resources" },
    { path: "/user-FAQs", label: "FAQ" },
    { path: "/user-profile", label: "Profile" },
    { path: "/", label: "Logout" },
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
                className={` pl-5 text-left py-2 ${
                  isActive(data.path)
                    ? "bg-[#FDFEF1]  text-black font-bold w-full  rounded-lg "
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
}

export default UserSidebar;
