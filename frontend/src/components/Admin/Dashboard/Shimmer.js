import React from "react";

const Shimmer = () => {
  return (
    <div className="w-full mt-5 flex">
      {/* left */}
      <div className="w-[60%]  p-4 rounded-md">
        <div className="flex items-center">
          <div className="flex flex-col gap-2  w-[80%] p-2 rounded-md">
            <a className="relative w-[50%] h-10 mb-5 block overflow-hidden">
              <span id="loader-element"></span>
            </a>
            <a className="relative w-[95%] h-10 block overflow-hidden">
              <span id="loader-element"></span>
            </a>
          </div>
          <a className="relative w-[30%] h-40 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
        </div>

        <div className="w-[100%] mt-5 p-4 rounded-md" id="shadow">
          {/* header */}
          <div
            className="flex gap-5 w-[100%] justify-between p-2 rounded-md"
            id="shadow"
          >
            <a className="relative w-[35%] h-14 block overflow-hidden">
              <span id="loader-element"></span>
            </a>
            <a className="relative w-[25%] h-14 block overflow-hidden">
              <span id="loader-element"></span>
            </a>
          </div>
          {/* list */}
          <div className="mt-5">
            {Array(8)
              .fill("")
              .map(() => (
                <div className="flex w-[100%] justify-between px-2 mt-2 rounded-md">
                  <a className="relative w-[35%] h-10 block overflow-hidden">
                    <span id="loader-element"></span>
                  </a>
                  <a className="relative w-[25%] h-10 block overflow-hidden">
                    <span id="loader-element"></span>
                  </a>
                </div>
              ))}
            <div className="flex justify-end my-5">
              <a className="relative w-12 rounded-full h-12 block overflow-hidden">
                <span id="loader-element"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-[37%] rounded-md px-2 h-fit pt-10" id="shadow">
        {Array(3)
          .fill("")
          .map(() => (
            <div className="flex flex-col gap-2 mb-2 w-[100%] p-2 rounded-md">
              <div className="flex gap-2 w-[100%]">
                <a className="relative w-[40%] h-[8rem]  block overflow-hidden">
                  <span id="loader-element"></span>
                </a>
                <div className="w-[60%]">
                  <a className="relative w-[100%] h-10 block mb-2 overflow-hidden">
                    <span id="loader-element"></span>
                  </a>{" "}
                  <a className="relative w-[100%] h-[5rem] block overflow-hidden">
                    <span id="loader-element"></span>
                  </a>
                </div>
              </div>
              <div className="flex gap-5">
                <a className="relative w-[40%] h-10 block overflow-hidden">
                  <span id="loader-element"></span>
                </a>
                <a className="relative w-[30%] h-10 block overflow-hidden">
                  <span id="loader-element"></span>
                </a>
                <a className="relative w-[20%] h-10 block overflow-hidden">
                  <span id="loader-element"></span>
                </a>
              </div>
            </div>
          ))}
        <div className="flex justify-end mb-10">
          <a className="relative w-12 rounded-full h-12 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
