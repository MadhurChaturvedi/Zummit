import React from "react";

const Add_Observation = ({toggleHandler}) => {
  return (
    <div className="w-[90%] m-5">
      <div className="flex gap-5 items-center text-xl font-semibold">
        <svg
          width="14"
          height="14"
          viewBox="0 0 22 22" 
          fill="none"
          onClick={toggleHandler}
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.6667 10.8333H3.33333M11.3333 1.5L2 10.8333L11.3333 20.1667"
            stroke="black"
            stroke-width="2.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 className="text-[#0190B1]">Observation</h1>
        <h1>New file</h1>
      </div>

      <div className="flex gap-5 my-5">
        {/* left */}
        <div className="bg-[#DCDCDD] p-4 rounded-md w-[15rem] h-[18rem]">
          <h1 className="my-2 text-lg ">12/12/2023</h1>
          <div className="flex flex-col gap-2">
            <h1>Title</h1>
            <textarea
              className="px-4 outline-none resize-none py-2 rounded-md bg-[#EFF7FF] border border-[#B4F0FF]"
              type="text"
              placeholder="Carrier counselling with Aaryan"
            />
            <h1>client</h1>
            <textarea
              className="px-4 outline-none resize-none py-2 rounded-md bg-[#EFF7FF] border border-[#B4F0FF]"
              placeholder="AARUAWESOME12222"
              type="text"
            />
          </div>
        </div>
        {/* right */}
        <div className=" w-[60%]">
          <div className="rounded-md p-2 bg-[#B4F0FF] h-[100vh]">
            <textarea
              className="p-2 outline-none bg-[#B4F0FF] resize-none overflow-y-scroll w-[100%]"
              type="text"
              placeholder="Type your text here"
            />
          </div>
          <div className="flex justify-between px-2 py-4 ">
            {/* Add File Icon  */}
            <svg
              width="23"
              height="28"
              viewBox="0 0 29 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5867 14.2336L15.3334 26.4869C13.8323 27.988 11.7963 28.8313 9.67339 28.8313C7.55048 28.8313 5.51452 27.988 4.01339 26.4869C2.51227 24.9858 1.66895 22.9498 1.66895 20.8269C1.66895 18.704 2.51227 16.668 4.01339 15.1669L16.2667 2.91355C17.2675 1.9128 18.6248 1.35059 20.0401 1.35059C21.4553 1.35059 22.8126 1.9128 23.8134 2.91355C24.8141 3.9143 25.3764 5.27161 25.3764 6.68688C25.3764 8.10216 24.8141 9.45947 23.8134 10.4602L11.5467 22.7136C11.0464 23.2139 10.3677 23.495 9.66006 23.495C8.95242 23.495 8.27377 23.2139 7.77339 22.7136C7.27302 22.2132 6.99191 21.5345 6.99191 20.8269C6.99191 20.1192 7.27302 19.4406 7.77339 18.9402L19.0934 7.63355"
                stroke="#0190B1"
                stroke-width="2.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <button className="p-2 text-white bg-[#0190B1] rounded-md">Save File</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Observation;
