import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchContainer from "../SearchContainer";
import { BASE_THERAPIST } from "../../../utils/constants";

const Billings = () => {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    axios.get(BASE_THERAPIST+'/gettherapistTransactionLists')
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
    <div className="w-[90%] p-10">
      <SearchContainer />
      <div className="flex w-[90%] justify-between items-center">
        <h1 className="font-medium text-3xl leading-10 my-6">Billings</h1>
      </div>
      <div className="p-4 w-[90%] rounded-lg bg-white text-xl leading-6 font-medium text-black shadow-lg">
        <tr className="w-full bg-[#DCDCDD] mb-4 rounded-lg p-2 flex gap-2 items-center">
          <td className="w-[23%]">Invoice Number</td>
          <td className="w-[23%]">Doctor Name</td>
          <td className="w-[20%]">Appointment Type</td>
          <td className="w-[16%]">Amount</td>
          <td className="text-center w-[10%]">Status</td>
        </tr>

        {transactions.map((item) => (
          <tr className="flex gap-2 w-full rounded-lg items-center p-2">
            <td className="w-[23%]">{item.invoiceNumber}</td>
            <td className="w-[23%]">{item.doctorName}</td>
            <td className="w-[20%]">Individual</td>
            <td className="w-[16%] text-[#02B04A]">Rs {item.Amount}</td>
            <td className="w-[10%] bg-[#0190B1] text-black text-center rounded p-1">{item.Status}</td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default Billings;
