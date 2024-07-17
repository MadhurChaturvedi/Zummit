import React from "react";
import Main_Dashboard_img from "../../images/Main_Dashboard_img.png";
const Resources_Edit = () => {
  return (
    <div className="mx-20 my-16">
      <div className="p-10 rounded-md bg-[#FDFEF1]  ">
        <div className="flex justify-end items-center">
          <div className="bg-[#B00202] rounded-md p-2">
            {/* Delete Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H5H21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 11V17"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 11V17"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="text-xl  mb-10 font-medium">Edit Resources</h1>
          <div className="flex  gap-20 ">
            <div>
              <img src={Main_Dashboard_img} className="w-48" alt="" />
              <div className="flex justify-center items-center my-5">
                <button className="text-white rounded-md px-4  py-2 bg-[#00677F] ">
                  Change Photo
                </button>
              </div>
            </div>
            <div className="text-sm">
              <div className="flex gap-4 mb-2">
                <h1>Edit Heading</h1>
                {/* Edit Icon 2*/}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 14.833H14"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.33333 1.5L12 4.16667L4.66667 11.5H2V8.83333L9.33333 1.5Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                className="border p-2 w-[22rem] outline-none rounded-md"
                type="text"
              />
              <div className="flex gap-2 items-center mt-4 mb-2">
                <h1>Edit Body</h1>
                {/* Edit Icon 2 */}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.22222 1L11 3.77778L3.77778 11H1V8.22222L8.22222 1Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <textarea
                name=""
                className="h-[14rem] outline-none w-[23rem] rounded-md "
                id=""
              ></textarea>
              <div className="flex justify-end gap-2 mt-4">
                <button className="rounded-md px-4 py-2 bg-[#FED365]">
                  Publish
                </button>
                <button className="rounded-md text-white px-4 py-2 bg-[#00677F]">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources_Edit;
