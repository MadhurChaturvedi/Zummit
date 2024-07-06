import React from "react";

const Shimmer = () => {
  return (
    <div className="w-full p-5">
      {/* search bar */}
      <div className="w-[90%]">
        <div className="flex gap-5 w-[65%] ml-40 p-2 rounded-md">
          <a className="relative w-[100%] h-14 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
        </div>
      </div>

      <div className="w-[90%] mt-5 m-5">
        {/* Header */}
        <div className="flex gap-10 justify-between rounded-md ">
          <div className="flex justify-between w-[60%]">
            <a className="relative w-[60%] h-40 block overflow-hidden">
              <span id="loader-element"></span>
            </a>
            <a className="relative w-[35%] h-40 block overflow-hidden">
              <span id="loader-element"></span>
            </a>
          </div>
          <a className="relative w-[40%]  h-40 block overflow-hidden">
            <span id="loader-element"></span>
          </a>
        </div>

        <div className="flex gap-5 mt-10 ">
          <div className="w-[64%] p-4 rounded-md" id="shadow">
            {/* toggle header */}
            <div className="flex w-full gap-5 p-2 rounded-md" id="shadow">
              <a className="relative w-[48%] h-16 block overflow-hidden">
                <span id="loader-element"></span>
              </a>
              <a className="relative w-[48%] h-16 block overflow-hidden">
                <span id="loader-element"></span>
              </a>
            </div>

            {/* left */}
            <div className="mt-4">
              {Array(7)
                .fill("")
                .map((e, index) => (
                  <>
                    <div className="flex mt-3">
                      <div className="flex justify-between gap-5 w-[100%]  p-2 rounded-md">
                        <a className="relative w-[50%] h-16  block overflow-hidden">
                          <span id="loader-element"></span>
                        </a>

                        <div className="w-[30%]">
                          <a className="relative w-[100%] h-7 block overflow-hidden">
                            <span id="loader-element"></span>
                          </a>{" "}
                          <a className="relative w-[100%] mt-2 h-7 block overflow-hidden">
                            <span id="loader-element"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
          {/* right */}
          <div className="w-[40%]">
            <div id="shadow" className="  w-[100%] h-fit  p-2 rounded-md">
              <a className="relative w-[100%] h-56 block overflow-hidden">
                <span id="loader-element"></span>
              </a>
              <div className="flex justify-between mt-2 w-full">
                <a className="relative w-[35%] h-10 block overflow-hidden">
                  <span id="loader-element"></span>
                </a>
                <div className="w-[50%] flex justify-between">
                  <a className="relative w-[45%] h-10 block overflow-hidden">
                    <span id="loader-element"></span>
                  </a>
                  <a className="relative w-[45%] h-10 block overflow-hidden">
                    <span id="loader-element"></span>
                  </a>
                </div>
              </div>
            </div>

            <div id="shadow" className="  w-[100%] h-fit  mt-5 p-2 rounded-md">
              <a className="relative w-[100%] h-80 block overflow-hidden">
                <span id="loader-element"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
