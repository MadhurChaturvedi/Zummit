import React, { useState } from "react";
import ClientImg from "../../images/Therapist-Client-img.png";
import SearchBar from "../../images/SVG_files/SearchBar.svg";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Dashboard = () => {
  const [groupToggle, setGroupToggle] = useState(true);
  const [individualToggle, setIndividualToggle] = useState(false);
  const [selectedGroupIndex, setSelectedGrupIndex] = useState(0);

  const selectedGroup = (index) => {
    setSelectedGrupIndex(index);
  };

  const groupToggleHandler = () => {
    setGroupToggle(true);
    setIndividualToggle(false);
  };
  const individualToggleHandler = () => {
    setIndividualToggle(true);
    setGroupToggle(false);
  };

  const GroupData = [
    {
      name: "ADHD",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "ADHD",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "ADHD",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "ADHD",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "ADHD",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "ADHD",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "ADHD",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
  ];

  const ClientData = [
    {
      name: "Ragini verma",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "Ragini verma",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "Ragini verma",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "Ragini verma",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "Ragini verma",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "Ragini verma",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
    {
      name: "Ragini verma",
      date: "02/08/2023",
      time: "11:00 AM - 11:30 AM",
    },
  ];
  return (
    <div className="w-full m-5 ">
      {/* Search Bar */}
      <div className="w-[90%] ml-5 mt-2 justify-center gap-10 items-center ">
        <div className="flex justify-between mb-10 items-center">
          <div className="flex items-center bg-white w-[70%] pl-4 rounded-lg shadow-sm border border-[#B4F0FF] ">
            <img src={SearchBar} alt="SearchBar" />
            <input
              type="text"
              placeholder="Search"
              className="h-12 ml-5 rounded-lg outline-none w-[100%]"
            />
          </div>
          <div>
            <button className="px-4 py-2 rounded-md text-white bg-[#0190b1]">
              Logout
            </button>
          </div>
        </div>

        {/* section-1 */}

        <div className="flex justify-between my-5">
          <div className="w-[20rem] font-semibold p-2 flex flex-col gap-4 justify-center ">
            <h1 className="text-2xl">Hello Jordan Patel</h1>
            <p className="text-lg">
              Welcome to building a Supportive Mental Community.
            </p>
          </div>
          <div className="w-[22.5rem] shadow-md  p-5 rounded-md bg-[#FDFEF1]">
            <div className="flex mb-5 justify-between">
              <h1 className="font-bold text-xl">Notifications</h1>
              <svg
                width="27"
                height="31"
                viewBox="0 0 27 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6625 28.5549C15.4427 28.9944 15.1273 29.3593 14.7478 29.6129C14.3683 29.8665 13.938 30 13.5 30C13.062 30 12.6317 29.8665 12.2522 29.6129C11.8727 29.3593 11.5573 28.9944 11.3375 28.5549M26 22.7539H1C1.99456 22.7539 2.94839 22.2955 3.65165 21.4795C4.35491 20.6636 4.75 19.557 4.75 18.4031V11.1518C4.75 8.45937 5.67187 5.87722 7.31282 3.97339C8.95376 2.06956 11.1794 1 13.5 1C15.8206 1 18.0462 2.06956 19.6872 3.97339C21.3281 5.87722 22.25 8.45937 22.25 11.1518V18.4031C22.25 19.557 22.6451 20.6636 23.3483 21.4795C24.0516 22.2955 25.0054 22.7539 26 22.7539Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="21" cy="6" r="5" fill="#B00202" />
              </svg>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Felis at mauris dui non
              purus. Euismod vitae lacus facilisi proin ut sit non. Netus
              tincidunt non et mi.
            </p>
          </div>
        </div>

        {/* section-2 */}

        <div className="flex gap-5">
          {/* Left Side */}
          <div className="w-[62%] bg-white shadow-md  rounded-md p-4">
            {/* Heading */}
            <div className="flex gap-5 p-2 text-lg font-medium">
              <h1
                onClick={groupToggleHandler}
                className={`px-14 p-2 shadow-sm font-semibold text-lg ${
                  groupToggle ? "bg-[#0190B1]" : "bg-[#FDFEE6]"
                } rounded-md cursor-pointer`}
              >
                Group
              </h1>
              <h1
                onClick={individualToggleHandler}
                className={`px-14 p-2 shadow-sm font-semibold text-lg ${
                  individualToggle ? "bg-[#0190b1]" : "bg-[#FDFEE6]"
                } rounded-md cursor-pointer`}
              >
                Individual
              </h1>
            </div>
            {/* Info */}
            <div>
              <div className="flex bg-[#FDFEE6] shadow-sm rounded-md mt-4 mb-6 p-2 text-xl font-medium justify-between">
                <h1>
                  {groupToggle ? "Group Name" : ""}
                  {individualToggle ? "Client Name" : ""}
                </h1>
                <h1>Appointment Time</h1>
              </div>
              {groupToggle ? (
                <>
                  {GroupData.map((item, index) => (
                    <div
                      onClick={() => selectedGroup(index)}
                      key={index}
                      className={`flex justify-between rounded-md p-2 pr-10 font-medium text-lg ${
                        selectedGroupIndex === index
                          ? "bg-[#B4F0FF]"
                          : "bg-white"
                      }`}
                    >
                      <h1>{item.name}</h1>
                      <div>
                        <h1>{item.date}</h1>
                        <p className="text-[#00677F]">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <></>
              )}
              {individualToggle ? (
                <>
                  {ClientData.map((item, index) => (
                    <div
                      onClick={() => selectedGroup(index)}
                      key={index}
                      className={`flex justify-between rounded-md p-2 pr-10 font-medium text-lg ${
                        selectedGroupIndex === index
                          ? "bg-[#B4F0FF]"
                          : "bg-white"
                      }`}
                    >
                      <h1>{item.name}</h1>
                      <div>
                        <h1>{item.date}</h1>
                        <p className="text-[#00677F]">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          {/* Right Side */}
          <div className="w-[38%]">
            {/* Sessions details */}
            <div className="mb-5 shadow-md">
              <div className="bg-[#B4F0FF] rounded-t-md p-2">
                <div className="flex justify-between mb-5 ">
                  <h1 className="font-bold text-xl">Session Details</h1>
                  <h1 className="font-medium">30 December</h1>
                </div>
                <p className="leading-tight">
                  Lorem ipsum dolor sit amet consectetur. Felis at mauris dui
                  non purus. Euismod vitae lacus facilisi proin ut sit non.
                  Netus tincidunt non et mi. Elit mattis phasellus auctor
                  pellentesque eget morbi mattis mauris varius. Morbi egestas
                  ultrices lorem in. Id mattis urna sollicitudin facilisis
                  vivamus donec eget.{" "}
                </p>
              </div>
              <div className="flex p-2 rounded-b-md  items-center bg-white justify-between">
                <p>Session:06/10</p>
                <div className="flex gap-5">
                  <button className="rounded-md bg-[#0190B1] px-4 py-2">
                    Join
                  </button>
                  <button className="rounded-md border border-[#0190B1] px-4 py-2 text-[#0190B1]">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            {/* Calender */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                className="bg-white shadow-md rounded-md"
                // defaultValue={dayjs("2024-01-8")}
                views={["year", "month", "day"]}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
