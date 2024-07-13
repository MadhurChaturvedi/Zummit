import React from 'react';
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import SearchBar from "../../images/SVG_files/SearchBar.svg"

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
         <img src={SearchBar} alt="SearchBar"/>

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
            <div className="flex shadow-md rounded-md my-3 justify-between items-center px-4 py-2 bg-[#EFF7FF]">
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
