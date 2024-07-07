import React from "react";
import { Link } from "react-router-dom";

const Health = () => {
  return (
    <div className="bg-skyblue flex pt-[62px] pb-[8px] mb-0 gap-5 justify-center items-center ">
      <div className="flex flex-col gap-5 justify-center items-center ">
        <h1 className="font-medium text-[36px] text-[#272529] pb-0 text-center">
          Resources for Better health from AroundWithin team
        </h1>
        <p className="text-gray-500">
          "Deep breathing is our nervous system's love language."- Dr.Laurem Fogel
          Mersy
        </p>
        <div className="flex justify-center  gap-5">
          <div className="bg-white p-4 h-fit rounded-lg flex flex-col gap-2 ">
            <img
              className="w-[257px] h-[162px] rounded-lg"
              src={require("../images/Health-1.webp")}
              alt=""
            />
            <p className="text-xs text-gray-500">Article| 5min</p>
            <p className="text-sm">Meditation helps you to clam your mind</p>
          </div>
          <div className="bg-white p-4 h-fit rounded-lg flex flex-col gap-2 ">
            <img
              className="w-[257px] h-[162px] rounded-lg"
              src={require("../images/health-2.webp")}
              alt=""
            />
            <p className="text-xs text-gray-500">Article| 5min</p>
            <p className="text-sm">Reach your fitness goal by following</p>
          </div>
          <div className="bg-white p-4 h-fit rounded-lg flex flex-col gap-2 ">
            <img
              className="w-[257px] h-[162px] rounded-lg"
              src={require("../images/health-3.webp")}
              alt=""
            />
            <p className="text-xs text-gray-500">Article| 5min</p>
            <p className="text-sm">Some breathing techniques which helps</p>
          </div>
        </div>
        <Link to="/resources" target="_top" className="self-end">
          <h1 className="hover:cursor-pointer">See all </h1>
        </Link>
      </div>
    </div>
  );
};

export default Health;
