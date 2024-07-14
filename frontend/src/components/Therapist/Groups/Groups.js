import React, { useState, useEffect } from "react";
import axios from "axios";
import Client_Feedback from "./Client_Feedback";
import { BASE_THERAPIST } from "../../../utils/constants";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import SearchBar from "../../images/SVG_files/SearchBar.svg";

const Groups = () => {
  const [feedbackToggler, setFeedbackToggler] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_THERAPIST + "/gettherapistGroupLists")
      .then((response) => {
        setData(response.data.therapistGroupData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  const toggleHandler = () => {
    setFeedbackToggler(!feedbackToggler);
  };

  return (
    <>
      {feedbackToggler ? (
        <div className="w-[80%] p-5 ">
          <div className="flex w-full justify-between mb-5 items-center">
            <div className="flex w-full gap-5">
              <div className="flex items-center bg-white w-[75%] pl-4 rounded-lg border border-[#B4F0FF] ">
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
          <div className="p-4 shadow-lg mt-10 rounded-lg bg-white ">
            <div className="bg-[#DCDCDD] text-lg mb-4 rounded-lg w-full p-2 text-black flex gap-4">
              <h1 className="w-[20%]">Group Name</h1>
              <h1 className="w-[15%]">Member</h1>
              <h1 className="w-[15%]">Sessions</h1>
              <h1 className="w-[25%]">Feedback</h1>
              <h1 className="w-[20%]">Last Session</h1>
            </div>
            {data.map((item) => (
              <div className="flex gap-4 w-full p-2 text-lg rounded-lg">
                <h1 className="w-[20%]">{item.GroupName}</h1>
                <h1 className="w-[15%]">{item.Members}</h1>
                <h1 className="w-[15%]">{item.Sessions}</h1>
                <h1 className="w-[25%]">{item.Feedback}</h1>
                <h1 className="w-[20%]">{item.lastSession}</h1>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Client_Feedback toggleHandler={toggleHandler} />
      )}
    </>
  );
};

export default Groups;
