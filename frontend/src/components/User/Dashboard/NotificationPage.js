import React from "react";

const NotificationPage = () => {
  const data = [
    {
      nofication: "Lorem ipsum dolor sit amet consectetur.",
      status: "New",
    },
    {
      nofication: "Lorem ipsum dolor sit amet consectetur.",
      status: "New",
    },
    {
      nofication: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      nofication: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      nofication: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className=" w-[70%]">
        <h1 className="text-2xl mb-10 font-semibold">All Notification</h1>
        <div className="bg-white border rounded-md p-10">
          {data.map((item, idx) => (
            <div key={idx} className="flex gap-5 mb-10 items-center">
              <p className="font-semibold text-lg">{item.nofication}</p>
              {item.status === "New" && (
              <div className="bg-[#0190B1] rounded-md  text-sm text-white py-1 px-2">{item.status}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
