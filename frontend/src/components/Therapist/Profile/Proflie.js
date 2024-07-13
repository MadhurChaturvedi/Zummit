import React, { useState } from "react";
import profile_img from "../../images/Therapist-Profile-img.png";
import BellIcon from "../../images/SVG_files/BellIcon.svg";

const Proflie = () => {
  const profile = {
    name: "Ragini Meyer",
    email: "ragini.meyer@gmail.com",
    phone: "09874656123",
    dateofBirth: "5 May 2024",
    address: "Tortor fames amet lectus morbi aliquam.",
  };

  const [toggleAbout, setToggleAbout] = useState(true);
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleExpertise, setToggleExpertise] = useState(false);

  const handleToggleAbout = () => {
    setToggleAbout(true);
    setTogglePassword(false);
    setToggleExpertise(false);
  };
  const handleTogglePassword = () => {
    setTogglePassword(true);
    setToggleAbout(false);
    setToggleExpertise(false);
  };
  const handleToggleExpertise = () => {
    setToggleExpertise(true);
    setTogglePassword(false);
    setToggleAbout(false);
  };
  return (
    <div className="w-full m-10 ">
      <div className="flex w-[90%] justify-between items-center">
        <h1 className="text-2xl ">Profile</h1>
        <div className="p-2 rounded-full ">
           <img src={BellIcon} alt=" BellIcon " />
        </div>
      </div>
      <div className="w-[90%] shadow-lg text-lg mb-4 rounded-md bg-white px-10 py-3">
        <div className="flex items-end gap-8">
          <img className="h-36" src={profile_img} alt="" />
          <div>
            <h1>Dr. Jordan Patel</h1>
            <h1>Therapist</h1>
            <h1>Dr.JordanPatel@gmail.com</h1>
          </div>
        </div>
        <div className="flex mt-10 gap-10 items-center">
          <button
            onClick={handleToggleAbout}
            className={`px-4 py-2 rounded-md ${
              toggleAbout ? "text-white bg-[#00677F]" : "text-black bg-white"
            }`}
          >
            About
          </button>
          <button
            onClick={handleTogglePassword}
            className={`px-4 py-2 rounded-md ${
              togglePassword ? "text-white bg-[#00677F]" : "text-black bg-white"
            }`}
          >
            Password
          </button>
          <button
            onClick={handleToggleExpertise}
            className={`px-4 py-2 rounded-md ${
              toggleExpertise ? "text-white bg-[#00677F]" : "text-black bg-white"
            }`}
          >
            Expertise
          </button>
        </div>
      </div>
      <div className="p-4 shadow-lg w-[90%] rounded-md bg-white ">
        {toggleAbout ? (
            <>
            <div className="flex mb-2 justify-end items-center">
              <button className="px-2 rounded-md text-white text-lg  bg-[#00677F]">
                Edit
              </button>
            </div>
            <div className="bg-[#ffffff] text-sm flex  justify-between rounded-lg w-full p-2 ">
              <div className="flex flex-col gap-5 w-full">
                <div className="flex gap-20">
                  <h1 className="w-[20%]">Name</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                    type="text"
                    value={profile.name}
                  />
                </div>
                <div className="flex gap-20">
                  <h1 className="w-[20%]">Email</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                    type="text"
                    value={profile.email}
                  />
                </div>
                <div className="flex gap-20">
                  <h1 className="w-[20%]">Mobile</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                    type="text"
                    value={profile.phone}
                  />
                </div>
                <div className="flex gap-20">
                  <h1 className="w-[20%]">Date of birth</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                    type="text"
                    value={profile.dateofBirth}
                  />
                </div>
                <div className="flex gap-20">
                  <h1 className="w-[20%]">Address</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                    type="text"
                    value={profile.address}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {togglePassword ? (
         <>
         {" "}
         <div className="flex mb-2 justify-end items-center">
           <button className="px-2 rounded-md text-white text-lg  bg-[#00677F]">
             save
           </button>
         </div>
         <div className="bg-[#ffffff] text-sm flex  justify-between rounded-lg w-full p-2 ">
           <div className="flex flex-col gap-5 w-full">
             <div className="flex gap-20">
               <h1 className="w-[20%]">Current Passowrd</h1>
               <input
                 className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                 type="Password"
                 value={profile.name}
               />
             </div>
             <div className="flex gap-20">
               <h1 className="w-[20%]">New Password</h1>
               <input
                 className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                 type="password"
                 value={profile.email}
               />
             </div>
             <div className="flex gap-20">
               <h1 className="w-[20%]">Retype Password</h1>
               <input
                 className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                 type="password"
                 value={profile.phone}
               />
             </div>
           </div>
         </div>
       </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Proflie;
