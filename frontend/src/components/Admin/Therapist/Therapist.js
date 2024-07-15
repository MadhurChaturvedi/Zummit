import React, { useState, useEffect } from "react";
import axios from "axios";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import SearchBar from "../../images/SVG_files/SearchBar.svg";
import { BASE_ADMIN } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const Therapist = () => {
  const [therapistsDetails, setTherapistsDetails] = useState([]);
  useEffect(() => {
    const fetchTherapistsDetails = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        console.error("No token found");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.post(
          BASE_ADMIN + "/therapistsdetails",
          {
            input: "akib@gmail.com"
          },
          config
        );

        if (response.data.success) {
          setTherapistsDetails(response.data.therapists);
        } else {
          console.error("Failed to fetch therapists details");
        }
      } catch (error) {
        console.error("Error fetching therapists details:", error.response ? error.response.data : error.message);
      }
    };

    fetchTherapistsDetails();
  }, []);

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear("adminToken");
    navigate('/admin-login')

  }

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <div className="w-full m-10 ">
      <div className="flex justify-between w-[95%] gap-10 items-center">
        <div className="flex items-center bg-white w-[80%] border  pl-4 rounded-lg border-[#B4F0FF] ">
          <img src={SearchBar} alt="SearchBar" />

         <img src={SearchBar} alt="SearchBar"/>

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
      <div className="flex w-[95%] justify-between items-center">
        <h1 className="text-2xl  my-8">Therapists</h1>
        <button className="rounded-md py-2 px-4 cursor-pointer  text-lg bg-[#00677F] text-white">
          Add New
        </button>
      </div>
      <div className="w-[95%]  flex justify-end items-center mb-5">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 19.9997V25.333C4 26.7997 5.2 27.9997 6.66667 27.9997H25.3333C26.0406 27.9997 26.7189 27.7187 27.219 27.2186C27.719 26.7185 28 26.0403 28 25.333V19.9997M22.6667 11.9997L16 18.6663L9.33333 11.9997M16 17.0663V3.33301"
            stroke="#00677F"
            stroke-width="2.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="p-4 w-[95%] rounded-lg bg-white ">
        <div className="bg-[#DCDCDD] text-lg mb-4  rounded-lg w-full p-2 text-black flex gap-4 justify-between  items-center">
          <h1>Doctor Name</h1>
          <h1>Appointments</h1>
          <h1>Reviews</h1>
          <h1>Joining Date</h1>
        </div>
        {Array.isArray(therapistsDetails) && therapistsDetails.length > 0 ? (
          therapistsDetails.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 justify-between w-full p-2 text-lg rounded-lg items-center"
            >
              <h1>{item.doctorName}</h1>
              <div className="w-[60px] flex justify-end items-center">
                <h1>{item.appointments}</h1>
              </div>
              <h1>{item.reviews}</h1>
              <h1>{formatDate(item.joiningDate)}</h1>
            </div>
          ))
        ) : (
          <div className="text-lg text-gray-500">
            No therapist details available
          </div>
        )}
      </div>
    </div>
  );
};

export default Therapist;