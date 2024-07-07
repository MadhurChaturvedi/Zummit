import React, { useState, useEffect } from "react";
import Admin_SideBar from "../Admin_SideBar";
import axios from "axios";
import BellIcon from "../../images/SVG_files/BellIcon.svg"

const Transactions = () => {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    axios
      .post("https://zummit-chandan.onrender.com/api/admin/transactions", {
        input: "Dom@gmail.com",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWFiOGNjNDQ1MmIxM2Q1MGJmYTYzNCIsImlhdCI6MTcxNzIyMTU4MCwiZXhwIjoxNzE5ODEzNTgwfQ.ZKxsQmALrx7CpkOpNzA1i1Ub1exmI9ghmsdY9bQVzuI",
      })
      .then((response) => {
        if (response.data.success) {
          setTransactions(response.data.transaction);
        } else {
          console.error("Failed to fetch appointments");
        }
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);
  const cancelledStyle = { color: "#B00202" };
  const completedStyle = { color: "#02B04A" };

  const getStyle = (report) => {
    switch (report) {
      case "Cancelled":
        return cancelledStyle;
      case "Completed":
        return completedStyle;
      default:
        return {};
    }
  };

  const getButtonBgColor = (report) => {
    switch (report) {
      case "Cancelled":
        return "#B00202";
      case "Completed":
        return "#0190B1";
      case "Upcoming":
        return "#FED365";
      default:
        return "#0190B1";
    }
  };
  return (
    <div className="w-full m-10 ">
      {/* Search Bar */}
      <div className="flex justify-center gap-10 items-center">
        <div className="flex items-center bg-white w-[70%]  pl-4 rounded-lg-[#B4F0FF] ">
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
        <h1 className="text-2xl  my-8">Transactions</h1>
      </div>
      <div className="p-4 w-[90%] rounded-lg bg-white ">
        <tr className="bg-[#DCDCDD] text-lg mb-4  rounded-lg w-full p-2 text-black flex gap-2 items-center">
          <td className="w-[10rem]  ">Invoice Number</td>
          <td className="w-[7rem]  ">Client ID</td>
          <td className="w-[10rem]  ">Client Name</td>
          <td className="w-[10rem]  ">Doctor Name</td>
          <td className="w-[5rem]  ">Amount</td>
          <td className="w-[6rem]  text-center">Status</td>
        </tr>

        {transactions.map((item) => (
          <tr className="flex gap-2 w-full p-2 text-lg rounded-lg items-center">
            <td className="w-[10rem] ">{item.invoiceNumber}</td>
            <td className="w-[7rem] ">{item.clientId}</td>
            <td className="w-[10rem] ">{item.clientName}</td>
            <td className="w-[10rem] ">{item.doctorName}</td>
            <td
              style={getStyle(item.report)}
              className="w-[4rem]  text-end "
            >
              {item.amount}
            </td>
            <td className="flex w-[7rem] justify-end">
              <h1
                style={{ backgroundColor: getButtonBgColor(item.report) }}
                className="rounded-md   px-1 cursor-pointer w-[6.3rem] text-center "
              >
                {item.report}
              </h1>
            </td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
