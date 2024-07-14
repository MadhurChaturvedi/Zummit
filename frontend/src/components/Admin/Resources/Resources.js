import React, { useState, useEffect } from "react";
import axios from "axios";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import SearchBar from "../../images/SVG_files/SearchBar.svg"
import { BASE_ADMIN } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const Resources = () => {
  const [addedReview, setAddedReview] = useState([])

  useEffect(() => {
    axios
      .post(BASE_ADMIN + "/resources", {
        input: "Dom@gmail.com",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWFiOGNjNDQ1MmIxM2Q1MGJmYTYzNCIsImlhdCI6MTcxNzIyMTU4MCwiZXhwIjoxNzE5ODEzNTgwfQ.ZKxsQmALrx7CpkOpNzA1i1Ub1exmI9ghmsdY9bQVzuI",
      })
      .then((response) => {
        if (response.data.success) {
          setAddedReview(response.data.resource);
        } else {
          console.error("Failed to fetch appointments");
        }
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear("adminToken");
    navigate('/admin-login')

  }

  const pendingStyle = { color: "#FED365" };
  const publishedStyle = { color: "#02B04A" };

  const PendingIcon = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0001 28.3333C22.3639 28.3333 28.3334 22.3638 28.3334 15C28.3334 7.63616 22.3639 1.66663 15.0001 1.66663C7.63628 1.66663 1.66675 7.63616 1.66675 15C1.66675 22.3638 7.63628 28.3333 15.0001 28.3333Z"
        stroke="#FED365"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 7V15L20.3333 17.6667"
        stroke="#FED365"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const PublishedIcon = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.3334 13.44V14.6666C28.3318 17.5419 27.4008 20.3395 25.6792 22.6424C23.9576 24.9453 21.5378 26.63 18.7806 27.4452C16.0233 28.2604 13.0764 28.1625 10.3794 27.1661C7.68232 26.1697 5.37962 24.3281 3.8147 21.9161C2.24977 19.504 1.50647 16.6507 1.69565 13.7817C1.88483 10.9127 2.99636 8.18175 4.86445 5.99608C6.73255 3.81041 9.25713 2.28716 12.0617 1.65351C14.8662 1.01986 17.8004 1.30976 20.4268 2.47998"
        stroke="#02B04A"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.3333 4L15 17.3467L11 13.3467"
        stroke="#02B04A"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  return (
    <div className="w-full m-10 ">
      <div className="flex justify-between gap-10 items-center">
        <div className="flex items-center bg-white w-[80%] border  pl-4 rounded-lg border-[#B4F0FF] ">
          <img src={SearchBar} alt="SearchBar" />

         <img src={SearchBar} alt="SearchBar"/>

          <input
            type="text"
            placeholder="Search"
            className="h-12 ml-5 rounded-lg outline-none w-[100%]"
          />
        </div>
        <div className="p-2 rounded-full ">
          <img src={BellIcon} alt=" BellIcon " />
        </div>
        <button onClick={logout} className="bg-[#0190B1] px-4 py-2 rounded-md text-white">Logout</button>
      </div>
      <div className="flex w-[90%] justify-between items-center">
        <h1 className="text-2xl  my-8">Groups</h1>
        <button className="rounded-md py-2 px-4   text-lg bg-[#00677F] text-white">
          Add New
        </button>
      </div>
      <div className="w-[90%] pt-5 pl-5 bg-[#ffffff]">
        <div className="flex gap-10  mb-8 text-lg">
          <h1>Publised</h1>
          <h1>Pending</h1>
        </div>
        <div className="w-full flex gap-5 justify-center flex-wrap">
          {addedReview.map((item) => (
            <>
              <div className=" w-[40%] p-2 mb-2">
                <div className="flex gap-4 justify-between">
                  <img
                    className="w-24 h-24"
                    src={require("../../images/Main_Dashboard_img.png")}
                    alt=""
                  />
                  <div>
                    <h1 className="text-sm leading-[20px] w-[88%] font-medium mb-2">
                      {item.title}
                    </h1>
                    <p className="text-xs leading-[15px] w-[95%] font-light ">
                      {item.review}
                    </p>
                  </div>
                </div>
                <div className="flex text-xs mt-4 justify-between">
                  <h1>Added By: {item.author}</h1>
                  <h1
                    className="flex justify-center items-center gap-1"
                    style={
                      item.report === "Pending" ? pendingStyle : publishedStyle
                    }
                  >
                    {item.report}
                    {item.report === "Pending" ? PendingIcon : PublishedIcon}
                  </h1>

                  <h1 className="flex justify-center items-center text-[#0190b1] gap-2 cursor-pointer">
                    Edit
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 18.8801V26.0001C26 26.7073 25.719 27.3856 25.219 27.8857C24.7189 28.3858 24.0406 28.6667 23.3333 28.6667H4.66667C3.95942 28.6667 3.28115 28.3858 2.78105 27.8857C2.28095 27.3856 2 26.7073 2 26.0001V7.33341C2 6.62617 2.28095 5.94789 2.78105 5.4478C3.28115 4.9477 3.95942 4.66675 4.66667 4.66675H11.7867"
                        stroke="#0190B1"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23.3333 2L28.6667 7.33333L15.3333 20.6667H10V15.3333L23.3333 2Z"
                        stroke="#0190B1"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </h1>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
