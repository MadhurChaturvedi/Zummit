import React, { useState } from "react";
import Existing_Client from "./Existing_Client";
import Searchbar from "../Searchbar";

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
