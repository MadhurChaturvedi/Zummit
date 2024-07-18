import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_THERAPIST } from "../../../utils/constants";
import SearchBar from "../Searchbar";

const Appointment = () => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    axios
      .get(BASE_THERAPIST + "/gettherapistAppointmentLists")
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
    <div className="w-full m-10">
      {/* heading */}
      <div className="w-[95%] flex justify-between items-center text-2xl my-8">
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
