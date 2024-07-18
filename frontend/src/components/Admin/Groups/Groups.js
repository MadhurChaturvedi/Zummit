import React, { useState, useEffect } from "react";
import axios from "axios";
import FlowerImage from "../../images/flower-img.png";
import { BASE_ADMIN } from "../../../utils/constants";

import { Link } from "react-router-dom";
import AdminSearchBar from "../AdminSearchBar";
const Groups = () => {
  const [groupsDetails, setGroupsDetails] = useState([]);
  useEffect(() => {

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

    axios
      .get(BASE_ADMIN + "/groupsdetails",  config)
      .then((response) => {
        if (response.data.success) {
          setGroupsDetails(response.data.groups);
        } else {
          console.error("Failed to fetch appointments");
        }
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  return (
    <div>
      <AdminSearchBar/>
      <div className="flex w-[95%] justify-between items-center">
        <h1 className="text-2xl  my-8">Groups</h1>
        <Link to={"/admin/create-group-therapy"}>
          <button className="bg-[#00677F] py-2 px-4 text-white rounded-md text-lg font-medium">
            Create New
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap bg-white p-4 rounded-lg gap-5">
        {groupsDetails.map((item) => (
          <div className="group w-72 my-2 bg-[#FDFEF1] p-2 rounded-lg hover:shadow-lg cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <div className="relative group-hover:scale-[1.08] transition ease-in-out duration-700 overflow-hidden">
                <img src={FlowerImage} alt="" className="w-72 m-auto" />
              </div>
              <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[20px]">
                <p>Starts: 16 March</p>
              </div>
            </div>
            <p className="w-full font-medium  text-center text-[17px] text-[#121014] pb-2 group-hover:underline">
              {item.groupName}
            </p>
            <p className="leading-[20px]  text-sm pl-2 text-[#272529]">
              {item.purpose_Goals}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
