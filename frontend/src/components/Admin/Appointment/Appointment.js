import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_ADMIN } from "../../../utils/constants";
import SortIcon from "../../images/SVG_files/Sort_Icon.svg";
import DownAngleIcon from "../../images/SVG_files/Down_Angle_White.svg";
import AdminSearchBar from "../AdminSearchBar";

const Appointment = () => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

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
      .get(BASE_ADMIN + "/appointmentslist", config)
      .then((response) => {
        if (response.data.success) {
          setAppointmentsList(response.data.adminAppointmentList);
          console.log(response.data.adminAppointmentList);
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
    <div>
      <AdminSearchBar/>
      <div className="w-[95%] flex justify-between items-center text-2xl my-8">
        <h1>Appointments</h1>
        <div className="relative text-white cursor-pointer bg-[#0190B1] w-[7rem] p-1 text-center  rounded-md text-base ">
          <div
            onClick={BtnHandler}
            className={`flex ${
              showSort && "border-b"
            } border-white justify-center items-center gap-2 py-1 text-center select-none`}
          >
            <h1>Sort</h1>
            {showSort ? (
              // sort icon
              <img src={DownAngleIcon} alt="" />
            ) : (
              // down arrow
              <img src={SortIcon} alt="" />
            )}
          </div>
          {showSort && (
            <div className="absolute left-0 rounded-b-md px-1 text-sm  w-full select-none  bg-[#0190b1]">
              <h1
                // onClick={handleSortClick("All")}
                className={`${
                  selectedSort === "All" ? "#F7F131" : ""
                } border-b rounde-md border-white text-center  py-2`}
              >
                All
              </h1>
              <h1
                // onClick={handleSortClick("Pending")}
                className={`${
                  selectedSort === "All" ? "#F7F131" : ""
                } border-b rounde-md border-white text-center p-2`}
              >
                Pending
              </h1>
              <h1
                // onClick={handleSortClick("Cancelled")}
                className={`${
                  selectedSort === "All" ? "#F7F131" : ""
                } border-b rounde-md border-white text-center p-2`}
              >
                Cancelled
              </h1>
              <h1
                // onClick={handleSortClick("Completed")}
                className={`${
                  selectedSort === "All" ? "#F7F131" : ""
                } rounde-md border-white text-center p-2`}
              >
                Completed
              </h1>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 w-[95%] shadow-lg rounded-lg bg-white ">
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
            <div className="flex gap-2 w-full p-2 text-lg rounded-lg items-center">
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
              <h1 style={{ color: getReasonColor(item.report) }} className="">
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
