import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { removeUser } from "../utils/Slices/userSlice";
//import axios from "axios";
//axios.defaults.headers.post["Content-Type"] = "application/json";
//axios.defaults.headers.patch["Content-Type"] = "application/json";

function NavigationLink({ children, href = "#" }) {
  return (
    <a href={href} className="grow cursor-pointer" tabIndex="0">
      {children}
    </a>
  );
}

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Our Therapists", to: "/therapist" },
    { name: "Resources", to: "/resources" },
    { name: "FAQ", to: "/FAQs" },
  ];
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const logout = async () => {
    //data hatane ka ninja technique
    localStorage.removeItem("token");

    // const response = await axios.get("https://zummit-kefo.onrender.com/api/users/logout", {credentials: 'include',  withCredentials: true});
    await fetch("https://zummit-kefo.onrender.com/api/users/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

      credentials: "include", // Changed from 'true' to 'include' for clarity
      withCredentials: true,
    });

    dispatch(removeUser());
  };

  return (
    <header className="flex flex-col justify-center px-16 py-6 text-xl  font-light text-white whitespace-nowrap bg-cyan-600 max-md:px-5">
      <nav className="flex gap-8 justify-between items-center mr-4 ml-5 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <a
          href="/"
          className="self-start max-w-full aspect-[5.88] w-[218px] transition ease-in-out duration-500 hover:scale-105"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb58034307f07517c9e0c497e461fc4e31eb7bf01576cfcb2c328b28bd1eb1d?apiKey=cf8fdc45d1bf4d769195b26a1a492d1c&"
            alt="Company Logo"
          />
        </a>
        <div className="flex gap-8 justify-between items-center  max-md:flex-wrap max-md:max-w-full">
          {navLinks.map((link) => (
            <Link
              to={link.to}
              key={link.name}
              className={`transition ease-in-out duration-700 hover:scale-90 ${
                location.pathname === link.to ? "activeNav" : ""
              }`}
            >
              <h1 className="text-[22px] font-semibold">{link.name}</h1>
            </Link>
          ))}
          {user.data._id == undefined && (
              <div className="group inline-block">
                <button
                  aria-haspopup="true"
                  aria-controls="menu"
                  className="outline-none focus:outline-none px-3 py-1 bg-yellow text-black rounded-md flex items-center min-w-24"
                >
                  <span className="pr-1 font-semibold flex-1">Login</span>
                  <span>
                    <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  id="menu"
                  aria-hidden="true"
                  className="  pt-6 font-bold text-base rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-24  "
                >
                  <li className="bg-cyan-600">
                  <Link to={"/admin-login"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-yellow hover:text-black">
                    Admin
                  </li>
                  </Link>
                  <Link to={"/login"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-yellow hover:text-black">
                    Client
                  </li>
                  </Link>
                  <Link to={"/therapist-login"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-yellow hover:text-black">
                    Therapist
                  </li>
                  </Link>
                  </li>
                </ul>
              </div>
          )}
          {user.data._id != undefined && (
            <button
              onClick={async () => {
                await logout();
              }}
              className="justify-center self-stretch px-4 py-2 text-[18px] text-black font-bold bg-yellow rounded-lg transition ease-in-out duration-500 hover:scale-105"
              tabIndex="0"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
