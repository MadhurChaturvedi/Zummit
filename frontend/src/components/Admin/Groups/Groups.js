import React, { useState, useEffect } from "react";
import axios from "axios";
import FlowerImage from "../../images/flower-img.png"; 
import BellIcon from "../../images/SVG_files/BellIcon.svg"; 
import SearchBar from "../../images/SVG_files/SearchBar.svg";
import { BASE_ADMIN} from "../../../utils/constants";
const Groups = () => { 
  const [groupsDetails, setGroupsDetails] = useState([])
  useEffect(() => {
    axios
      .post(BASE_ADMIN+"/groupsdetails", {
        input: "Dom@gmail.com",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWFiOGNjNDQ1MmIxM2Q1MGJmYTYzNCIsImlhdCI6MTcxNzIyMTU4MCwiZXhwIjoxNzE5ODEzNTgwfQ.ZKxsQmALrx7CpkOpNzA1i1Ub1exmI9ghmsdY9bQVzuI",
      })
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
    <div className="w-full m-10 ">
      <div className="flex justify-center gap-10 items-center">
        <div className="flex items-center bg-white w-[70%] border  pl-4 rounded-lg border-[#B4F0FF] ">
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
      </div>
      <div className="flex w-[90%] justify-between items-center">
        <h1 className="text-2xl  my-8">Groups</h1>
      </div>
      <div className="flex flex-wrap bg-white p-4 rounded-lg gap-5">
        {groupsDetails.map((item) => (
          <div className="group w-72 my-2 bg-[#FDFEF1] p-2 rounded-lg hover:shadow-lg cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <div className="relative group-hover:scale-[1.08] transition ease-in-out duration-700 overflow-hidden">
                <img
                  src={FlowerImage}
                  alt=""
                  className="w-72 m-auto"
                />
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
