import React from "react";

const Shimmer = () => {
  return (
    <div className="w-full">
      {/* search bar */}
      <div className="w-[90%] mx-5 flex items-center">
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex items-center gap-5">
            <a className="relative w-[70%] h-12 block overflow-hidden">
              <span id="loader-element"></span>
            </a>
            <a className="relative w-12 rounded-full h-12 block overflow-hidden">
              <span id="loader-element"></span>
            </a>
          </div>
          <a className="relative w-24 h-12 rounded-md block overflow-hidden">
            <span id="loader-element"></span>
          </a>
        </div>
      </div>

      <div className="w-[90%] flex justify-between mt-10 mx-5">
        <a className="relative w-[25%] h-12 block overflow-hidden">
          <span id="loader-element"></span>
        </a>
        <a className="relative w-[15%] h-12 block overflow-hidden">
          <span id="loader-element"></span>
        </a>
      </div>

      {/* Array list */}
      <div className="w-[90%] mt-10 mx-5 rounded-md p-5" id="shadow">
        <div className="w-[90%] flex gap-10 mb-5 ">
          <a className="relative w-[25%] h-12 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
          <a className="relative w-[15%] h-12 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
        </div>
        <div className="px-10 w-full flex flex-wrap mt-5">
          {Array(6)
            .fill("")
            .map(() => (
              <div className="flex flex-col gap-2 mb-2 w-[50%]  p-2 rounded-md">
                <div className="flex gap-2 w-[100%]">
                  <a className="relative w-[35%] h-[8rem]  block overflow-hidden">
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
                  <a className="relative w-[35%] h-10 block overflow-hidden">
                    <span id="loader-element"></span>
                  </a>
                  <a className="relative w-[30%] h-10 block overflow-hidden">
                    <span id="loader-element"></span>
                  </a>
                  <a className="relative w-[22%] h-10 block overflow-hidden">
                    <span id="loader-element"></span>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
