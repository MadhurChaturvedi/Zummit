import React, { useState, useEffect } from "react";
import axios from "axios";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import SearchBar from "../../images/SVG_files/SearchBar.svg";
import { BASE_THERAPIST } from "../../../utils/constants";

const Appointment = () => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    axios
      .get(
        BASE_THERAPIST+"/gettherapistAppointmentLists"
      )
      .then((response) => {
        if (response.data.success) {
          setAppointmentsList(response.data.therapistAppointmentData);
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
  const upcomingStyle = { color: "#02B04A" };
  const getStyle = (report) => {
    switch (report) {
      case "Cancelled":
        return cancelledStyle;
      case "Completed":
        return completedStyle;
      case "Upcoming":
        return upcomingStyle;
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
  const getReasonColor = (report) => {
    switch (report) {
      case "Cancelled":
        return "#B00202";
      case "Upcoming":
        return "#02B04A";
      default:
        return "#001519";
    }
  };

  const BtnHandler = () => {
    setShowSort(!showSort);
  };
  const handleSortClick = (selected) => {
    setSelectedSort(selected);
  };

  const AppointmentDetails = () => {
    return(
      <div className="absolute w-[96%] top-52 left-5 bg-[#FDFEF1] rounded-md shadow-md p-2">
            <h1 className="text-center p-4 font-semibold text-2xl border-b-8 border-[#B4F0FF]">Appointment Details</h1>
          <div className="flex border-b-2 border-gray-400  justify-between px-20 font-medium text-lg py-5">
            <div className="flex  gap-5">
              <div className="flex flex-col gap-3">
                <h1>Therapy Type</h1>
                <h1>Doctor Name</h1>
                <h1>Appointment Time</h1>
                <h1>Appointment Date</h1>
              </div>
              <div className="flex flex-col gap-3">
                <h1>Individual</h1>
                <h1>Dr. Jordan Patel</h1>
                <h1>11:00 AM - 11:30 AM</h1>
                <h1>02/08/2023</h1>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-3 gap-10">
                <h1>Amount</h1>
                <h1>Status</h1>
              </div>
              <div className="flex  items-center gap-10">
                <h1 className="pl-4 text-[#02B04A]">₹1000</h1>
                <h1>Completed</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-end my-2 gap-5">
            <button className="px-5 p-1 bg-[#0190B1] rounded-md font-semibold">Join</button>
            <button className="px-5 p-1 bg-[#B00202] rounded-md  text-white">Cancel</button>
          </div>
      </div>
    )

  };

  return (
    <div className="relative w-full m-5 ">
      {/* Search Bar */}
      <div className="flex w-[95%] justify-end gap-10 items-center">
        <div className="flex items-center bg-white w-[80%]  pl-4 rounded-lg -[#B4F0FF] ">
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
      </div>
      {/* heading */}
      <div className="w-[95%] flex justify-between items-center text-2xl my-5">
        <h1>Appointments</h1>
      </div>

      <div className="p-4 shadow-lg rounded-lg bg-white ">
        <div className="bg-[#DCDCDD] text-lg  rounded-lg w-full p-2 text-black flex gap-2 items-center">
          <h1 className="w-[18%] ">Client Name</h1>
          <h1 className="w-[18%]">Appointment Time</h1>
          <h1 className="w-[18%] ">Therapy type</h1>
          <h1 className="w-[10%]  text-center">Amount</h1>
          <h1 className="w-[14%] text-center ">Status</h1>
          <h1>Reason</h1>
        </div>

        <div className="h-[100vh] mt-2 overflow-y-scroll">
          {appointmentsList.map((item) => (
            <div className="flex gap-2 w-full p-2 text-lg rounded-lg ">
              <div className="w-[18%] ">
                <h1>{item.clientName}</h1>
              </div>
              <div className="w-[18%] ">
                <h1>{item.appointmentTime}</h1>
                <p className="text-[#1e3f47] text-sm font-light">
                  <span>{item.appointmentTime.time}</span>
                </p>
              </div>
              <div className="w-[18%] ">
                <h1>{item.therapyType}</h1>
              </div>
              <div className="w-[10%] text-center">
                <h1 style={getStyle(item.report)}>{item.Amount}</h1>
              </div>
              <div className="w-[14%] flex justify-center h-fit">
                <button
                  style={{ backgroundColor: getButtonBgColor(item.report) }}
                  className="py-1 rounded-md w-[7rem] "
                >
                  {item.Status}
                </button>
              </div>
              <div>
                <h1
                  style={{ color: getReasonColor(item.report) }}
                  className="w-[10rem]  "
                >
                  {item.reason}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
