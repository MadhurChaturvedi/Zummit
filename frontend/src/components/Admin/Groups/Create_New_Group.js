import React, { useState } from "react";
import AdminSearchBar from "../AdminSearchBar";
import TherapistClientImg from "../../images/Therapist-Client-img.png";

const Create_New_Group = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  console.log(selectedDoctor);
  const doctorList = [
    {
      name: "Dr. Suresh Kumar",
      image: "../../images/admin_lady.png",
    },
    {
      name: "Dr. Ajaya Nand Jha",
      image: "../../images/Frame 278.png",
    },
    {
      name: "Dr. Abhijit Dey",
      image: "../../images/Group 279.png",
    },
    {
      name: "Dr. Aroop Mukherjee",
      image: "../../images/Therapist-Client-img.png",
    },
    {
      name: "Dr. Divya ",
      image: "../../images/Therapist-Client-img.png",
    },
  ];
  return (
    <div>
      <AdminSearchBar />
      <h1 className="text-2xl font-medium my-5">Create New Group</h1>
      <div className="w-[90%] shadow-md bg-white p-4 rounded-md flex gap-5 ">
        {/* left side container */}
        <div className="group flex flex-col gap-5 w-[35%]">
          <h1 className="text-lg font-medium">Select Theraist</h1>
            <img src={TherapistClientImg} className="w-52" />
          <select className="text-sm p-2 outline-none border border-black rounded-md font-medium">
            <option value="">Select therapist</option>
            {doctorList.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
        </div>
        {/* right side container */}
        <div className="flex flex-col w-[75%] gap-2">
          <div className="w-full flex items-center gap-5">
            <h1 className="w-[25%]">Group Name :</h1>
            <input
              type="text"
              className="rounded-md w-[65%] border outline-none bg-[#FDFEE6] px-2 py-1"
            />
          </div>
          <div className="w-full flex items-center gap-5">
            <h1 className="w-[25%]">Description :</h1>
            <input
              type="text"
              className="rounded-md w-[65%] border outline-none bg-[#FDFEE6] px-2 py-1"
            />
          </div>
          <div className="w-full flex items-center gap-5">
            <h1 className="w-[25%]">Purpose & Goals :</h1>
            <input
              type="text"
              className="rounded-md w-[65%] border outline-none bg-[#FDFEE6] px-2 py-1"
            />
          </div>
          <div className="w-full flex items-center gap-5">
            <h1 className="w-[25%]">No of Sessions :</h1>
            <input
              type="text"
              className="rounded-md w-[65%] border outline-none bg-[#FDFEE6] px-2 py-1"
            />
          </div>
          <div className="w-full flex items-center gap-5">
            <h1 className="w-[25%]">No of Slots :</h1>
            <input
              type="text"
              className="rounded-md w-[65%] border outline-none bg-[#FDFEE6] px-2 py-1"
            />
          </div>
          <div className="w-full flex items-center gap-5">
            <h1 className="w-[25%]">Start date :</h1>
            <input
              type="text"
              className="rounded-md w-[65%] border outline-none bg-[#FDFEE6] px-2 py-1"
            />
          </div>
          <div className="w-full flex items-center gap-5">
            <h1 className="w-[25%]">Price :</h1>
            <input
              type="text"
              className="rounded-md w-[65%] border outline-none bg-[#FDFEE6] px-2 py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create_New_Group;
