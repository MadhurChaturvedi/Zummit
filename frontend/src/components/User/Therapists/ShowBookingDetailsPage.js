import * as React from "react";
import { Link } from 'react-router-dom';
import UserSidebar from "../UserSidebar";

function ShowBookingDetailsPage() {
    return (<>
    <div className="flex">
        <UserSidebar />
        <div className="flex-col ">
        {/* search bar element */}
        <div className="flex justify-center ml-[18vw] mt-[4vh]">
              <div class="relative  h-[57px]">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-[743px] p-4 ps-10 text-sm rounded-lg bg-[#EFF7FF] border border-[#B4F0FF] outline-none"
                  placeholder="Search "
                  required
                />
              </div>
        </div>
        <div className="ml-[4vw]" > 
         {/* Therapist name */}
         <div className=" flex text-2xl mb-8font-medium leading-9 max-w-[416px] text-slate-950 mt-[2vh] mb-[2vh] ">
            Therapists/Dr. Sundhari Prakhashan
       </div>
       {/* the show booking element */}
       <div className="flex flex-col items-end py-3 font-medium bg-white rounded shadow max-w-[936px]">
      <div className="justify-center self-center px-14 py-1 text-sm bg-sky-50 rounded text-slate-950 max-md:px-5">
        Please complete the booking in 08:38
      </div>
      <div className="self-center mt-8 text-2xl leading-9 text-slate-950">
        Confirm Booking
      </div>
      <div className="flex flex-col justify-center self-stretch px-6 py-4 mt-6 w-full bg-yellow-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap">
          <div className="flex flex-col justify-center bg-white rounded">
            <div className="flex gap-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/37bbaab2353af306963425419c1f8f425ca77adaa78a1da59721fca5bcb34d2d?apiKey=8587097ed3a94b279b125430c3e068a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bbaab2353af306963425419c1f8f425ca77adaa78a1da59721fca5bcb34d2d?apiKey=8587097ed3a94b279b125430c3e068a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bbaab2353af306963425419c1f8f425ca77adaa78a1da59721fca5bcb34d2d?apiKey=8587097ed3a94b279b125430c3e068a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bbaab2353af306963425419c1f8f425ca77adaa78a1da59721fca5bcb34d2d?apiKey=8587097ed3a94b279b125430c3e068a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bbaab2353af306963425419c1f8f425ca77adaa78a1da59721fca5bcb34d2d?apiKey=8587097ed3a94b279b125430c3e068a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bbaab2353af306963425419c1f8f425ca77adaa78a1da59721fca5bcb34d2d?apiKey=8587097ed3a94b279b125430c3e068a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bbaab2353af306963425419c1f8f425ca77adaa78a1da59721fca5bcb34d2d?apiKey=8587097ed3a94b279b125430c3e068a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bbaab2353af306963425419c1f8f425ca77adaa78a1da59721fca5bcb34d2d?apiKey=8587097ed3a94b279b125430c3e068a6&"
                className="shrink-0 aspect-[1.22] w-[92px]"
              />
              <div className="flex flex-col my-auto">
                <div className="text-base text-black">
                  Dr. Sundhari Prakhashan
                </div>
                <div className="mt-3 text-sm text-neutral-700">
                  Experience 10 years
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-auto text-sm text-black max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/210e4a044fe7568e0b47ada53d608fb567257c5c0ef50d2b2d2c09d9113e0d96?apiKey=8587097ed3a94b279b125430c3e068a6&"
              className="ml-10 max-w-full aspect-[9.09] w-[293px] max-md:ml-2.5"
            />
            <div className="flex gap-5 justify-between mt-2 max-md:flex-wrap">
              <div> Mode and Duration</div>
              <div>Slot Selection</div>
              <div>Conformation</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mr-24 text-sm text-slate-950 max-md:mr-2.5 max-md:max-w-full">
        Session details :
      </div>
      <div className="flex gap-5 justify-between mt-6 mr-24 text-xs text-black max-md:flex-wrap max-md:mr-2.5">
        <div className="flex flex-col justify-center px-8 py-1.5 bg-sky-200 rounded max-md:px-5">
          <div className="flex gap-2.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f581051bb5350d718d1bc6fa5a6113e9fc9669b0ba549aedb8aaaa65006cfe13?apiKey=8587097ed3a94b279b125430c3e068a6&"
              className="shrink-0 w-4 aspect-square"
            />
            <div>MODE</div>
          </div>
          <div className="mt-2.5 text-sm font-medium">Video</div>
          <div className="mt-2.5">1 Hour</div>
        </div>
        <div className="flex flex-col px-4 py-1.5 bg-sky-200 rounded max-md:px-5">
          <div className="flex gap-2.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/26119cb2e3500abadf20813506143ede0a09445763a80686de7753effebd0ff1?apiKey=8587097ed3a94b279b125430c3e068a6&"
              className="shrink-0 w-4 aspect-square"
            />
            <div>DATE</div>
          </div>
          <div className="mt-2.5 text-sm font-medium">Feb: 21-2024</div>
          <div className="mt-2.5">Noon 2:00 PM</div>
        </div>
      </div>
      <div className="flex flex-col px-3 py-6 mt-6 mr-24 max-w-full text-sm rounded border-b border-black border-solid text-slate-950 w-[472px] max-md:mr-2.5">
        <div className="max-md:max-w-full">Payment details :</div>
        <div className="flex gap-5 justify-between mt-6 text-neutral-700 max-md:flex-wrap max-md:max-w-full">
          <div>Price for 1 Session</div>
          <div>Rs: 499</div>
        </div>
        <div className="flex gap-5 justify-between mt-3 max-md:flex-wrap max-md:max-w-full">
          <div>Final Amount</div>
          <div>Rs: 499</div>
        </div>
      </div>
      <div className="justify-center px-4 py-3 mt-6 mr-24 text-xl text-yellow-300 bg-cyan-600 rounded max-md:mr-2.5">
        MAKE PAYMENT
      </div>
    </div>
        </div>
        </div>
    </div>
       
//     </>)
}

export default ShowBookingDetailsPage