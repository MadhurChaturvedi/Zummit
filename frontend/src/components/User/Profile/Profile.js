import React, { useState } from "react";
import profile_img from "../../images/Therapist-Profile-img.png";
import BellIcon from "../../images/SVG_files/BellIcon.svg";

const Profile = () => {
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
    <div className="w-full flex flex-col items-center text-[#001519]">
      <div className="flex w-[90%] justify-between items-center my-6">
        <h1 className="text-3xl leading-10 font-medium text-[#001519]">Profile</h1>
        <div className="p-2 rounded-full ">
           <img src={BellIcon} alt=" BellIcon " />
        </div>
      </div>
      <div className="w-[90%] text-lg mb-4 shadow-md rounded-md bg-white px-10 py-3">
        <div className="flex items-end gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl leading-10 font-medium">Sanjay</h1>
            <p className="text-[#272529] text-xl leading-6 font-medium">0987425163</p>
          </div>
        </div>
        <div className="flex mt-10 gap-10  items-center text-xl leading-6 font-medium">
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
      <div className="p-4 w-[90%] shadow-md rounded-md bg-white ">
        {toggleAbout ? (
            <>
            <div className="flex mb-2 justify-end items-center">
              <button className="px-2 rounded-md text-white text-lg  bg-[#00677F]">
                Edit
              </button>
            </div>
            <div className="bg-[#ffffff] text-sm flex  justify-between rounded-lg w-full p-2 ">
              <div className="flex flex-col gap-5 w-full">
                <div className="flex gap-20 text-[1rem] leading-5">
                  <h1 className="w-[20%] font-medium text-[#1A1C21]">Name</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD] font-normal text-[#343741]"
                    type="text"
                    value={profile.name}
                  />
                </div>
                <div className="flex gap-20 text-[1rem] leading-5">
                  <h1 className="w-[20%] font-medium text-[#1A1C21]">Email</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD] font-normal text-[#343741]"
                    type="text"
                    value={profile.email}
                  />
                </div>
                <div className="flex gap-20 text-[1rem] leading-5">
                  <h1 className="w-[20%] font-medium text-[#1A1C21]">Mobile</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD] font-normal text-[#343741]"
                    type="text"
                    value={profile.phone}
                  />
                </div>
                <div className="flex gap-20 text-[1rem] leading-5">
                  <h1 className="w-[20%] font-medium text-[#1A1C21]">Date of birth</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD] font-normal text-[#343741]"
                    type="text"
                    value={profile.dateofBirth}
                  />
                </div>
                <div className="flex gap-20 text-[1rem] leading-5">
                  <h1 className="w-[20%] font-medium text-[#1A1C21]">Address</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD] font-normal text-[#343741]"
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

export default Profile;
