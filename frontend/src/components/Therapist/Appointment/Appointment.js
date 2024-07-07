import React, { useState, useEffect } from "react";
import axios from "axios";
import BellIcon from "../../images/SVG_files/BellIcon.svg";

const Appointment = () => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://zummit-chandan.onrender.com/api/therapist/gettherapistAppointmentLists"
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
  return (
    <div className="w-full m-10 ">
      {/* Search Bar */}
      <div className="flex w-[95%] justify-end gap-10 items-center">
        <div className="flex items-center bg-white w-[80%]   pl-4 rounded-lg -[#B4F0FF] ">
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
        <div className="p-2 cursor-pointer rounded-full ">
           <img src={BellIcon} alt=" BellIcon " />
        </div>
      </div>
      {/* heading */}
      <div className="w-[95%] flex justify-between items-center text-2xl my-8">
        <h1>Appointments</h1>
      </div>

      <div className="p-4 w-[95%] rounded-lg bg-white ">
        <div className="bg-[#DCDCDD] text-lg  rounded-lg w-full p-2 text-black flex gap-2 items-center">
          <h1 className="w-[10rem] ">Client Name</h1>
          <h1 className="w-[10rem]">Appointment Time</h1>
          <h1 className="w-[10rem] ">Therapy type</h1>
          <h1 className="w-[5rem]  text-end">Amount</h1>
          <h1 className="w-[7rem] ">Status</h1>
          <h1>Reason</h1>
        </div>

        <div className="h-[100vh] mt-2 overflow-y-scroll">
          {appointmentsList.map((item) => (
            <div className="flex gap-2 w-full p-2 text-lg rounded-lg ">
              <div className="w-[10rem] ">
                <h1>{item.clientName}</h1>
              </div>
              <div className="w-[10rem] ">
                <h1>{item.appointmentTime.date}</h1>
                <p className="text-[#1e3f47] text-sm font-light">
                  <span>{item.appointmentTime.time}</span>
                </p>
              </div>
              <h1 className="w-[10rem] ">{item.therapyType}</h1>
              <h1 style={getStyle(item.report)} className="w-[5rem] text-end ">
                {item.amount}
              </h1>
              <div className="w-[7rem]">
                <button
                  style={{ backgroundColor: getButtonBgColor(item.report) }}
                  className="py-1 rounded-md w-[6.5rem]"
                >
                  {item.report}
                </button>
              </div>
              <h1
                style={{ color: getReasonColor(item.report) }}
                className="w-[10rem] "
              >
                {item.reason}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
