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

      <div className="mt-10 mx-5">
        <a className="relative w-[25%] h-12 block overflow-hidden">
          <span id="loader-element"></span>
        </a>
      </div>
      {/* Array list */}
      <div className="w-[90%] mt-10 mx-5 p-4 rounded-md" id="shadow">
        {/* header */}
        <div className="flex gap-2 w-[100%] p-2 rounded-md" id="shadow">
          <a className="relative w-[23%] h-14 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
          <a className="relative w-[20%] h-14 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
          <a className="relative w-[20%] h-14 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
          <a className="relative w-[30%] h-14 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
          <a className="relative w-[15%] h-14 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
          <a className="relative w-[10%] h-14 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
        </div>
        {/* list */}
        <div className="mt-6">
          {Array(8)
            .fill("")
            .map((e, index) => (
              <div className="flex gap-5 w-[100%] px-2 rounded-md mt-2">
                <a className="relative w-[23%] h-10 block overflow-hidden">
                  <span id="loader-element"></span>
                </a>
                <a className="relative w-[20%] h-10 block overflow-hidden">
                  <span id="loader-element"></span>
                </a>
                <a className="relative w-[20%] h-10 block overflow-hidden">
                  <span id="loader-element"></span>
                </a>

                <a className="relative w-[30%] h-10 block overflow-hidden">
                  <span id="loader-element"></span>
                </a>
                <a className="relative w-[15%] h-10 block overflow-hidden">
                  <span id="loader-element"></span>
                </a>
                <a className="relative w-[10%] h-10 block overflow-hidden">
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
