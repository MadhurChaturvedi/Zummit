import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_ADMIN } from "../../../utils/constants";

import DownloadIcon from "../../images/SVG_files/Download_Icon.svg";
import { Link } from "react-router-dom";
import AdminSearchBar from "../AdminSearchBar";

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
        const response = await axios.get(BASE_ADMIN + "/therapistsdetails",config);

        if (response.data.success) {
          setTherapistsDetails(response.data.therapists);
        } else {
          console.error("Failed to fetch therapists details");
        }
      } catch (error) {
        console.error(
          "Error fetching therapists details:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchTherapistsDetails();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <div>
      <AdminSearchBar/>
      <div className="flex w-[95%] justify-between items-center">
        <h1 className="text-2xl  my-8">Therapists</h1>
        <Link to={"/admin/create-therapist-account"}>
          <button className="rounded-md py-2 px-4 cursor-pointer  text-lg bg-[#00677F] text-white">
            Add New
          </button>
        </Link>
      </div>
      <div className="w-[95%]  flex justify-end items-center mb-5">
        {/* Downlaod Icon */}
        <img src={DownloadIcon} alt="" />
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
