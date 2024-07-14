import React, { useState, useEffect } from "react";
import axios from "axios";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import SearchBar from "../../images/SVG_files/SearchBar.svg";
import { BASE_ADMIN } from "../../../utils/constants";
import { useNavigate } from 'react-router-dom'

const Appointment = () => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    axios
      .post(BASE_ADMIN + "/appointmentslist", {
        input: "akib@gmail.com",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWEwNGRiMTk3Mzk4MTgwNzAwZDZjNCIsImlhdCI6MTcxNzE3NTUxNiwiZXhwIjoxNzE5NzY3NTE2fQ.nT9mK7G3tCQlHfhpFBC-iefz4XkGdBIP8BUNN9tOoUQ",
      })
      .then((response) => {
        if (response.data.success) {
          setAppointmentsList(response.data.adminAppointmentList);
        } else {
          console.error("Failed to fetch appointments");
        }
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear("adminToken");
    navigate('/admin-login')

  }

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
      <div className="flex w-[95%] justify-between gap-10 items-center">
        <div className="flex items-center bg-white w-[80%]   pl-4 rounded-lg -[#B4F0FF] ">
          <img src={SearchBar} alt="SearchBar" />

          <img src={SearchBar} alt="SearchBar" />

          <input
            type="text"
            placeholder="Search"
            className="h-12 ml-5 rounded-lg outline-none w-[100%]"
          />
        </div>
        <div className="p-2 cursor-pointer rounded-full ">
          <img src={BellIcon} alt=" BellIcon " />
        </div>
        <button onClick={logout} className="bg-[#0190B1] px-4 py-2 rounded-md text-white">Logout</button>
      </div>
      {/* heading */}
      <div className="w-[95%] flex justify-between items-center text-2xl my-8">
        <h1>Appointments</h1>
        <div className="relative text-white cursor-pointer bg-[#0190B1] w-[7rem] p-1 text-center  rounded-md text-base ">
          <div
            className={`flex ${showSort && "border-b"
              } border-white justify-center items-center gap-2 py-1 text-center`}
          >
            <h1>Sort</h1>
            {showSort ? (
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                onClick={BtnHandler}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75 8.625L11.5 14.375L17.25 8.625"
                  stroke="#FDFEF1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                onClick={BtnHandler}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.43945 16.4996V10.2773"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.43945 6.72222V0.5"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.94141 16.5V8.5"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.94141 4.94444V0.5"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4434 16.4991V12.0547"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4434 8.5V0.5"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 10.2773H5.87722"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.50195 4.94434H12.3792"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0059 12.0547H18.8831"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
          {showSort && (
            <div className="absolute left-0 rounded-b-md px-1 text-sm  w-full  bg-[#0190b1]">
              <h1
                onClick={handleSortClick("All")}
                className={`${selectedSort === "All" ? "#F7F131" : ""
                  } border-b rounde-md border-white text-center  py-1`}
              >
                All
              </h1>
              <h1
                onClick={handleSortClick("Pending")}
                className={`${selectedSort === "All" ? "#F7F131" : ""
                  } border-b rounde-md border-white text-center p-1`}
              >
                Pending
              </h1>
              <h1
                onClick={handleSortClick("Cancelled")}
                className={`${selectedSort === "All" ? "#F7F131" : ""
                  } border-b rounde-md border-white text-center p-1`}
              >
                Cancelled
              </h1>
              <h1
                onClick={handleSortClick("Completed")}
                className={`${selectedSort === "All" ? "#F7F131" : ""
                  } rounde-md border-white text-center p-1`}
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
