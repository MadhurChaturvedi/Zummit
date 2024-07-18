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
      <div className="w-[95%] mt-10 p-4 rounded-md" id="shadow">
        <div className="flex items-end gap-10">
          <a className="relative w-[30%] h-44 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
          <div className="flex flex-col gap-2 w-[100%] p-2 rounded-md">
            <a className="relative w-[35%] h-10 mb-5 block overflow-hidden">
              <span id="loader-element"></span>
            </a>
            <a className="relative w-[25%] h-8 block overflow-hidden">
              <span id="loader-element"></span>
            </a>
            <a className="relative w-[25%] h-8 block overflow-hidden">
              <span id="loader-element"></span>
            </a>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <a className="relative w-[13%] h-12 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
          <a className="relative w-[13%] h-12 mb-5 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
        </div>
      </div>

      <div className="p-2 mt-10 w-[95%] rounded-md" id="shadow">
        <div className="flex justify-end mb-2">
          <a className="relative w-[10%] h-10 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
        </div>
        <div>
          {Array(5)
            .fill("")
            .map(() => (
              <div className="flex gap-40 mb-2">
                <a className="relative w-[15%] h-10 block overflow-hidden">
                  <span id="loader-element"></span>
                </a>
                <a className="relative w-[50%] h-10 block overflow-hidden">
                  <span id="loader-element"></span>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
