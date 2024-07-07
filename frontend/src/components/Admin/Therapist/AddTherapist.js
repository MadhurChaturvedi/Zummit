import React from "react";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
const AddTherapist = () => {
  return (
    <div className="w-full m-10">
      <div className="w-[95%] flex justify-between items-center text-2xl ">
        <h1>Appointments</h1>
        <div className="p-2  cursor-pointer   rounded-full ">
           <img src={BellIcon} alt=" BellIcon " />
        </div>
      </div>
      <div className="px-10 shadow-lg  py-5 w-[70%] rounded-md bg-[#FDFEE6] mt-5">
        <div className="flex items-center mb-4">
          <h1 className="w-[8rem]">Name</h1>
          <input className="px-4  py-1 bg-[#E6E1E5] outline-none rounded-md w-full"  type="text" />
        </div>
        <div className="flex items-center gap-10 mb-4">
          <h1 className="w-[5rem]">Email</h1>
          <input className="px-4 py-1 bg-[#E6E1E5] outline-none rounded-md w-full"  type="text" />
        </div>
        <div className="flex items-center gap-10 mb-4">
          <h1 className="w-[5rem]">Role</h1>
          <input className="px-4 py-1 bg-[#E6E1E5] outline-none rounded-md w-full"  type="text" />
        </div>
        <div className="text-end">
          <button className="px-4 py-1 rounded-md bg-[#00677F] text-white cursor-pointer">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTherapist;
