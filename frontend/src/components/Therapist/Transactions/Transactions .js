import React, { useState, useEffect } from "react";
import axios from "axios";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import SearchBar from "../../images/SVG_files/SearchBar.svg";
import { BASE_THERAPIST } from "../../../utils/constants";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_THERAPIST + "/gettherapistTransactionLists")
      .then((response) => {
        if (response.data.success) {
          setTransactions(response.data.therapistTransaction);
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
  console.log(transactions);

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
    <div className="w-full my-5 mx-10">
      {/* Search Bar */}
      <div className="flex w-full justify-between my-5 items-center">
        <div className="flex w-[90%] gap-5">
          <div className="flex items-center bg-white w-[70%] pl-4 rounded-lg border border-[#B4F0FF] ">
            <img src={SearchBar} alt="SearchBar" />
            <input
              type="text"
              placeholder="Search"
              className="h-12 ml-5 rounded-lg outline-none w-[100%]"
            />
          </div>
          <img src={BellIcon} alt=" BellIcon " />
        </div>
        <div>
          <button className="px-4 font-medium text-lg py-2 rounded-md text-white bg-[#0190b1]">
            Logout
          </button>
        </div>
      </div>
      <div className="flex w-[90%] justify-between items-center">
        <h1 className="text-2xl  my-8">Transactions</h1>
      </div>
      <div className="p-4 shadow-lg  rounded-lg bg-white ">
        <tr className="bg-[#DCDCDD] text-lg mb-2  rounded-lg w-full p-2 text-black flex gap-2 items-center">
          <td className="w-[18%]">Invoice Number</td>
          <td className="w-[18%]">Session Date</td>
          <td className="w-[18%]">Client Name</td>
          <td className="w-[18%]">Doctor Name</td>
          <td className="w-[10%] ">Amount</td>
          <td className="w-[14%] text-center">Status</td>
        </tr>

        {transactions.map((item) => (
          <tr className="flex gap-2 text-lg p-2 rounded-lg items-center">
            <td className="w-[18%]">{item.invoiceNumber}</td>
            <td className="w-[18%]">{item.sessionDate}</td>
            <td className="w-[18%]">{item.clientName}</td>
            <td className="w-[18%]">{item.doctorName}</td>
            <td style={getStyle(item.report)} className="w-[10%]  text-end">
              {item.Amount}
            </td>
            <td className="flex w-[14%] justify-end">
              <h1
                style={{ backgroundColor: getButtonBgColor(item.report) }}
                className="rounded-md   px-1 cursor-pointer w-[6.3rem] text-center "
              >
                {item.Status}
              </h1>
            </td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
