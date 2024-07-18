import React, { useState } from "react";
import admin_lady from "../../images/admin_lady.png";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Ragini Meyer",
    email: "ragini.meyer@gmail.com",
    phone: "09874656123",
    dateofBirth: "5 May 2024",
    address: "Tortor fames amet lectus morbi aliquam.",
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("adminToken");
    navigate('/admin-login');
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <div className="flex w-[90%] justify-between items-center my-2">
        <div className="flex w-[85%] justify-between items-center">
          <h1 className="text-2xl ">Profile</h1>
          <div className="p-2 rounded-full ">
            <img src={BellIcon} alt="Bell Icon" />
          </div>
        </div>
        <button onClick={logout} className="bg-[#0190B1] px-4 py-2 rounded-md text-white">Logout</button>
      </div>
      <div className="w-[90%] text-lg mb-4 rounded-md bg-white px-10 py-3">
        <div className="flex items-end gap-8">
          <img className="h-36" src={admin_lady} alt="Admin Lady" />
          <div>
            <h1>{profile.name}</h1>
            <h1>Admin</h1>
            <h1>{profile.email}</h1>
          </div>
        </div>
        <div className="flex mt-10 gap-10 items-center">
          <button className="px-4 py-2 rounded-md text-white bg-[#00677F]">About</button>
          <h1>Password</h1>
        </div>
      </div>
      <div className="p-4 w-[90%] rounded-md bg-white ">
        <div className="flex mb-2 justify-end items-center">
          <button onClick={handleEditToggle} className="px-2 rounded-md text-white text-lg bg-[#00677F]">
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <div className="bg-[#ffffff] text-sm flex flex-col gap-5 justify-between rounded-lg w-full p-2">
          <div className="flex gap-20">
            <h1 className="w-[20%]">Name</h1>
            <input
              className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
              type="text"
              disabled={!isEditing}
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>
          <div className="flex gap-20">
            <h1 className="w-[20%]">Email</h1>
            <input
              className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
              type="text"
              disabled={!isEditing}
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>
          <div className="flex gap-20">
            <h1 className="w-[20%]">Mobile</h1>
            <input
              className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
              type="text"
              disabled={!isEditing}
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
          </div>
          <div className="flex gap-20">
            <h1 className="w-[20%]">Date of Birth</h1>
            <input
              className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
              type="text"
              disabled={!isEditing}
              value={profile.dateofBirth}
              onChange={(e) => setProfile({ ...profile, dateofBirth: e.target.value })}
            />
          </div>
          <div className="flex gap-20">
            <h1 className="w-[20%]">Address</h1>
            <input
              className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
              type="text"
              disabled={!isEditing}
              value={profile.address}
              onChange={(e) => setProfile({ ...profile, address: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
