import React from 'react';
import { Link } from "react-router-dom";

const LoginReqPop = ({ setShowPopUp }) => {
  const handleClose = () => {
    setShowPopUp(false);
  };

  const handlePopupClick = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to the overlay
  };

  return (
    <div
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 w-[100vw] h-[100vh] flex justify-center items-center bg-[rgba(148,157,156,0.53)]"
    >
      <div
        className="relative w-[70%] bg-white rounded-lg shadow"
        onClick={handlePopupClick}
      >
        <div className="text-center relative border-b-2 border-[#0190B1]">
          <h3 className="w-[100%] my-5 text-[28px] md:text-[24px] sm:text-[20px] text-[#0190B1]">
            Login Required
          </h3>
          <i class="fa-solid fa-xmark absolute top-0 right-5 text-lg cursor-pointer" onClick={handleClose}></i>
        </div>
        <div className="my-[24px] mx-[15vw]">
          <p className="text-[20px] md:text-[16px] sm:text-[14px]">
            To complete the process, Login or Sign Up is required, so please{" "}
            <Link to="/login" target="_top" className="text-[#0190B1]">
              click here
            </Link>{" "}
            to LOGIN.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginReqPop;
