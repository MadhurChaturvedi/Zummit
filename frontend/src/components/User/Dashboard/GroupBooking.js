import * as React from "react";
import { Link } from 'react-router-dom';
import UserSidebar from "../UserSidebar";
import SearchContainer from "../SearchContainer";
import groupBookingImg from "../../images/groupBookingImg.png";

function GroupBooking() {
  return (
    <div className="w-full flex bg-[#F2FCFF]">
      <UserSidebar />
      <div className="w-full p-5">
        <SearchContainer />
        <div className="w-full">
          <h2 className="text-2xl font-medium py-5">Support Group / Anxiety</h2>
          <div className="flex flex-col items-center">
            <div className="w-[90%] flex flex-col items-center bg-white shadow-md rounded-md">
              <p className="bg-[#F2FCFF] px-5 py-1 rounded-md my-4">Please complete the booking in 08:38</p>
              <h2 className="text-2xl font-medium mb-5">Confirm Booking</h2>
              <div className="w-full bg-[#FDFEE6] flex items-center gap-20 p-3">
                <div className="flex bg-white items-center p-3 gap-2">
                  <img src={groupBookingImg} alt="groupBookingImg" />
                  <div>
                    <p>Support Group Anxiety</p>
                    <p>Every Monday</p>
                  </div>
                </div>
                <div className="flex flex-col text-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/210e4a044fe7568e0b47ada53d608fb567257c5c0ef50d2b2d2c09d9113e0d96?apiKey=8587097ed3a94b279b125430c3e068a6&"
                    className="ml-10 max-w-full aspect-[9.09] w-[293px] max-md:ml-2.5"
                  />
                  <div className="flex gap-5 justify-between mt-2">
                    <div>Mode and Duration</div>
                    <div>Slot Selection</div>
                    <div>Confirmation</div>
                  </div>
                </div>
              </div>
              <div className="w-[70%] flex justify-end">
                <div className="w-[66%] flex flex-col gap-5 p-5">
                  <p className="font-medium">Session Details:</p>
                  <div className="flex gap-5">
                    <div className="w-[32%] bg-[#B4F0FF] rounded-md p-3">
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.4002 7.73325L14.6668 4.66659V11.3333L10.4002 8.33325V7.66659V7.73325ZM2.66683 3.33325H8.66683C9.02045 3.33325 9.35959 3.47373 9.60964 3.72378C9.85969 3.97382 10.0002 4.31296 10.0002 4.66659V11.3333C10.0002 11.6869 9.85969 12.026 9.60964 12.2761C9.35959 12.5261 9.02045 12.6666 8.66683 12.6666H2.66683C2.31321 12.6666 1.97407 12.5261 1.72402 12.2761C1.47397 12.026 1.3335 11.6869 1.3335 11.3333V4.66659C1.3335 3.93325 1.9335 3.33325 2.66683 3.33325Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Mode</p>
                      </div>
                      <p>Video</p>
                      <p>1 Hour</p>
                    </div>
                    <div className="w-[38%] bg-[#B4F0FF] rounded-md p-3">
                      <div className="flex gap-2 items-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z" stroke="#3D3B3E" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M10.6665 1.33325V3.99992" stroke="#3D3B3E" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M5.3335 1.33325V3.99992" stroke="#3D3B3E" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M2 6.66675H14" stroke="#3D3B3E" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Date</p>
                      </div>
                      <p>Feb 18, 2024</p>
                      <p>Noon: 3:00 PM</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 border-b border-black p-2">
                    <h2 className="font-medium">Payment details:</h2>
                    <div className="flex gap-7">
                      <div className="flex flex-col gap-3">
                        <p>Price for 20 sessions:</p>
                        <p className="font-medium">Final Amount:</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p>Rs. 4000</p>
                        <p className="font-medium">Rs. 4000</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-end">
                    <button className="bg-[#0190B1] text-[#F7F131] px-5 py-2 font-medium rounded-md">Make Payment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupBooking;