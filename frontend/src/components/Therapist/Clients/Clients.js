import React, { useState } from "react";
import Existing_Client from "./Existing_Client";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import SearchBar from "../../images/SVG_files/SearchBar.svg";

const Clients = () => {
  const [feedbackToggler, setFeedbackToggler] = useState(true);
  const toggleHandler = () => {
    setFeedbackToggler(!feedbackToggler);
  };
  const data = [
    {
      id: "Dr.Jordan Patel",
      session: "10/25",
      Feedback: "Click Here",
      date: "02/08/2023",
    },
    {
      id: "Dr.Jordan Patel",
      session: "10/25",
      Feedback: "Click Here",
      date: "02/08/2023",
    },
    {
      id: "Dr.Jordan Patel",
      session: "10/25",
      Feedback: "Click Here",
      date: "02/08/2023",
    },
    {
      id: "Dr.Jordan Patel",
      session: "10/25",
      Feedback: "Click Here",
      date: "02/08/2023",
    },
    {
      id: "Dr.Jordan Patel",
      session: "10/25",
      Feedback: "Click Here",
      date: "02/08/2023",
    },
    {
      id: "Dr.Jordan Patel",
      session: "10/25",
      Feedback: "Click Here",
      date: "02/08/2023",
    },
    {
      id: "Dr.Jordan Patel",
      session: "10/25",
      Feedback: "Click Here",
      date: "02/08/2023",
    },
    {
      id: "Dr.Jordan Patel",
      session: "10/25",
      Feedback: "Click Here",
      date: "02/08/2023",
    },
    {
      id: "Dr.Jordan Patel",
      session: "10/25",
      Feedback: "Click Here",
      date: "02/08/2023",
    },
  ];
  return (
    <>
      {feedbackToggler ? (
        <div className="w-full my-5 mx-10 ">
          <div className="flex w-[90%] justify-between mb-10 items-center">
            <div className="flex w-full gap-5">
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
          <div className="flex  my-5 w-[95%] gap-5 text-lg items-center">
            <h1 className="cursor-pointer text-[#00677F] bg-white p-1 rounded-md rounded-b-none border-b-2 border-[#00677F]">
              All
            </h1>
            <h1 className="cursor-pointer">New Client</h1>
            <h1 className="cursor-pointer">Existing Client</h1>
          </div>
          <div className="p-4 shadow-lg w-[90%] rounded-lg bg-white ">
            <div className="bg-[#DCDCDD] text-lg mb-4 pr-20 rounded-lg w-full p-2 text-black flex gap-4 justify-between  items-center">
              <h1 className="w-[13rem]">Client ID</h1>
              <h1 className="w-[14rem]">Sessions</h1>
              <h1 className="w-[14rem]">Feedback</h1>
              <h1>Last Session</h1>
            </div>
            {data.map((item) => (
              <div className="flex gap-4 w-full p-2 pr-20 text-lg rounded-lgr">
                <h1 className="w-[13rem] cursor-pointer">{item.id}</h1>
                <h1 className="w-[14rem]">{item.session}</h1>
                <h1
                  onClick={toggleHandler}
                  className="w-[14rem] cursor-pointer"
                >
                  {item.Feedback}
                </h1>
                <h1>{item.date}</h1>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Existing_Client toggleHandler={toggleHandler} />
      )}
    </>
  );
};

export default Clients;
