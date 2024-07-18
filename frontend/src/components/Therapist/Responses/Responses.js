import React from "react";
import Searchbar from "../Searchbar";

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
      feedback: "Feedback",
    },
    {
      name: "Group - Substance Recovery",
      feedback: "Feedback",
    },
    {
      name: "Group - Substance Recovery",
      feedback: "Feedback",
    },
    {
      name: "Group - Substance Recovery",
      feedback: "Feedback",
    },
  ];
  return (
    <div className="w-[90%] m-5 mx-10">
      <div className="flex w-[90%] m-5  font-medium">
        <h1 className="text-2xl">Responses</h1>
      </div>
      <div className="flex text-lg items-center gap-5 m-5">
        <h1 className="p-2 bg-white rounded-md rounded-b-none border-b-2 border-[#00677F] text-[#00677F]">
          All
        </h1>
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
};

export default Responses;
