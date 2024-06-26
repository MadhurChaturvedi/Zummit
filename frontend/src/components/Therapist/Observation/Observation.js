import React, { useState, useEffect } from "react";
import axios from "axios";
import Add_Observation from "./Add_Observation";

const Observation = () => {
  const [addNew, setAddNew] = useState(true);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://zummit-chandan.onrender.com/api/therapist/getTherapistObservationLists')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const selectedGroup = (index) => {
    setSelectedGroupIndex(index);
  };

  const toggleHandler = () => {
    setAddNew(!addNew);
  };

  return (
    <>
      {addNew ? (
        <>
          <div className="w-[90%] m-5">
            <div className="flex  justify-end w-[90%] gap-10 items-center">
              <div className="flex items-center bg-white w-[80%] border  pl-4 rounded-lg border-[#B4F0FF] ">
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
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="white" />
                  <path
                    d="M26.306 36.0003C26.0716 36.4044 25.7351 36.7399 25.3303 36.973C24.9255 37.2062 24.4665 37.3289 23.9993 37.3289C23.5322 37.3289 23.0732 37.2062 22.6684 36.973C22.2636 36.7399 21.9271 36.4044 21.6927 36.0003M37.3327 30.667H10.666C11.7269 30.667 12.7443 30.2456 13.4944 29.4954C14.2446 28.7453 14.666 27.7279 14.666 26.667V20.0003C14.666 17.525 15.6493 15.151 17.3997 13.4007C19.15 11.6503 21.524 10.667 23.9993 10.667C26.4747 10.667 28.8487 11.6503 30.599 13.4007C32.3494 15.151 33.3327 17.525 33.3327 20.0003V26.667C33.3327 27.7279 33.7541 28.7453 34.5043 29.4954C35.2544 30.2456 36.2718 30.667 37.3327 30.667Z"
                    stroke="#0190B1"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="29"
                    y="8"
                    width="8"
                    height="8"
                    rx="4"
                    fill="#B00202"
                  />
                </svg>
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
            <div className="w-[90%] m-5">
              <div className="flex font-medium text-lg rounded-md justify-between items-center px-4 py-2 bg-[#989A9B]">
                <h1>Name</h1>
                <h1>Date Modified</h1>
              </div>
              <div>
                {data.map((item, index) => (
                  <div
                    onClick={() => selectedGroup(index)}
                    key={index}
                    className={`flex rounded-md my-2 justify-between items-center px-4 py-2 ${
                      selectedGroupIndex === index ? "bg-[#FDFEE6]" : "bg-[#EFF7FF]"
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

                      <h1>{item.name}</h1>
                    </div>
                    <h1>{item.date}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Add_Observation toggleHandler={toggleHandler}/>
      )}
    </>
  );
};

export default Observation;
