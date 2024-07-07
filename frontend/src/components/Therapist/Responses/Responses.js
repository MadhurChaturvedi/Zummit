import React from 'react';
import BellIcon from "../../images/SVG_files/BellIcon.svg";

const Responses = () => {
  const data = [
    {
      name: "G. Ramesh",
      feedback: "Feedback",
    },
    {
      name: "Group - Anxiety",
      feedback: "Feedback",
    },
    {
      name: "k. Harish",
      feedback: "Feedback",
    },
    {
      name: "Group - Substance Recovery",
      feedback: "Feedback"
    },
    {
      name: "Group - Substance Recovery",
      feedback: "Feedback"
    },
    {
      name: "Group - Substance Recovery",
      feedback: "Feedback"
    },
    {
      name: "Group - Substance Recovery",
      feedback: "Feedback"
    },
  ];
  return (
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
           <img src={BellIcon} alt=" BellIcon " />
        </div>
      </div>
      <div className="flex w-[90%] m-5  font-medium">
        <h1 className="text-2xl">Responses</h1>
      </div>
      <div  className='flex text-lg items-center gap-5 m-5'>
        <h1 className='p-2 bg-white rounded-md rounded-b-none border-b-2 border-[#00677F] text-[#00677F]'>All</h1>
        <h1>Group</h1>
        <h1>Individual</h1>
      </div>
      <div className="w-[90%] ">
        <div className="flex text-lg font-medium rounded-md justify-between items-center px-4 py-2 bg-[#989A9B]">
          <h1>Name</h1>
          <h1>Feedback</h1>
        </div>
        <div>
          {data.map((item) => (
            <div className="flex rounded-md my-2 justify-between items-center px-4 py-2 bg-[#EFF7FF]">
                <h1>{item.name}</h1>
              <h1>{item.feedback}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Responses
