import React, { useState, useEffect } from "react";
import axios from "axios";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import SearchBar from "../../images/SVG_files/SearchBar.svg" 
import { BASE_ADMIN } from "../../../utils/constants";
const Client = () => {  
  const [clientList, setClientList] = useState([])
  useEffect(() => {
    axios
      .post(BASE_ADMIN+"/clienlist", {
        input: "akib@gmail.com",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWEwNGRiMTk3Mzk4MTgwNzAwZDZjNCIsImlhdCI6MTcxNzE3NTUxNiwiZXhwIjoxNzE5NzY3NTE2fQ.nT9mK7G3tCQlHfhpFBC-iefz4XkGdBIP8BUNN9tOoUQ",
      })
      .then((response) => {
        if (response.data.success) {
          setClientList(response.data.clients);
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
        <h1 className="text-2xl  my-8">Clients</h1>
      </div>
      <div className="p-4 w-[90%] rounded-lg bg-white ">
        <div className="bg-[#DCDCDD] text-lg mb-4  rounded-lg w-full p-2 text-black flex gap-4 justify-between  items-center">
          <h1>Client ID</h1>
          <h1>Client Name</h1>
          <h1>Therapist</h1>
          <h1>Last Session</h1>
        </div>

        {clientList.map((item) => (
          <div className="flex gap-4  justify-between w-full p-2 text-lg rounded-lg items-center">
            <h1>{item.clientId}</h1>
            <h1>{item.clientName}</h1>
            <h1>{item.therapistName}</h1>
            <h1>{item.lastSession}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
