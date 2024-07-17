import React from "react";
import { Link } from "react-router-dom";
const NotificationPopUp = () => {
  const data = [
    {
      notificaton: "lorem ipsum dolor sit amet consectetur.",
      time: "5 hours ago",
      status: "New",
    },
    {
      notificaton: "lorem ipsum dolor sit amet consectetur.",
      time: "5 hours ago",
      status: "New",
    },
    {
      notificaton: "lorem ipsum dolor sit amet consectetur.",
      time: "5 hours ago",
    },
    {
      notificaton: "lorem ipsum dolor sit amet consectetur.",
      time: "5 hours ago",
    },
    {
      notificaton: "lorem ipsum dolor sit amet consectetur.",
      time: "5 hours ago",
    },
  ];
  return (
    <div className="absolute shadow-lg rounded-md bg-white w-[30%] right-32 top-28">
      <div className="flex justify-between items-center pl-6 p-4 border-b-2 border-gray-600">
        <h1 className="text-2xl font-semibold">Notification</h1>
        <Link to={"/user-notification"}>
        <button className="text-[#0190B1]">See All</button>
        </Link>
      </div>
      <div className="p-6">
        {data.map((item, index) => (
          <div key={index} className="w-[85%] mb-5 ">
            <div className="flex gap-2 font-semibold ">
              {item.status === "New" && (
              <div className="w-2 h-2 rounded-full mt-2 bg-[#0190B1]"></div>
              )}
              <p>{item.notificaton}</p>
            </div>
            <p>{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPopUp;
