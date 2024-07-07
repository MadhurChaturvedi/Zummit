import React, { useState, useEffect } from "react";
import axios from "axios";
import BellIcon from "../../images/SVG_files/BellIcon.svg";

const Client = () => {  
  const [clientList, setClientList] = useState([])
  useEffect(() => {
    axios
      .post("https://zummit-chandan.onrender.com/api/admin/clienlist", {
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
          <svg
            width="25"
            height="26"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
              stroke="#787579"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.0004 21.5004L16.6504 17.1504"
              stroke="#787579"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
