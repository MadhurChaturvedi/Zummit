import React, { useState, useEffect } from "react";
import axios from "axios";
import Add_Observation from "./Add_Observation";
import { BASE_BACKEND } from "../../../utils/constants";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import SearchBar from "../../images/SVG_files/SearchBar.svg";

const Observation = () => {
  const [addNew, setAddNew] = useState(true);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_BACKEND + "/getTherapistObservationLists")
      .then((response) => {
        setData(response.data.therapistObservationData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const selectedGroup = (index) => {
    setSelectedGroupIndex(index);
  };

  const toggleHandler = () => {
    setAddNew(!addNew);
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <>
      {addNew ? (
        <>
          <div className="w-[90%] m-5">
            <div className="flex w-[90%] mx-5 justify-between mb-10 items-center">
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
            <div className="flex justify-between items-center w-[90%] m-5  font-medium">
              <h1 className="text-xl">Observation</h1>
              <button
                onClick={toggleHandler}
                className="rounded-md text-white bg-[#00677F] py-2 px-4"
              >
                Add New
              </button>
            </div>
            <div className="w-[90%]   m-5">
              <div className="flex font-medium text-lg rounded-md justify-between items-center px-4 py-2 bg-[#989A9B]">
                <h1>Name</h1>
                <h1>Date Modified</h1>
              </div>
              <div>
                {data.map((item, index) => (
                  <div
                    onClick={() => selectedGroup(index)}
                    key={index}
                    className={`flex rounded-md shadow-md my-2 justify-between items-center px-4 py-2 ${
                      selectedGroupIndex === index
                        ? "bg-[#FDFEE6]"
                        : "bg-[#EFF7FF]"
                    }`}
                  >
                    <div className="flex gap-2 items-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 21.1 4.9 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                          stroke="#3D3B3E"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 3V8H19M16 13H8M16 17H8M10 9H8"
                          stroke="#3D3B3E"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <h1>{item.title}</h1>
                    </div>
                    <h1>{formatDate(item.dateModified)}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Add_Observation toggleHandler={toggleHandler} />
      )}
    </>
  );
};

export default Observation;
