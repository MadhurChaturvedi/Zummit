import React, { useEffect, useState } from "react";
import Side_Navbar from "./Side_Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import VerifyClient from "../utils/verifyClient";
import { addUser } from "../utils/userSlice";

function BookTherapistPage() {
  const [IsAuthorized, setIsAuthorized] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [Selected_session_Mode, setSelect_session_mode] = useState("video");

  const dispatch = useDispatch();
  
  const slotsCount = 3;
  const [CurrentDate, setCurrentDate] = useState(new Date());
  const [CurrentSlots, setCurrentSlots] = useState([]);
  const [CurrentFirstSlot, setCurrentFirstSlot] = useState(new Date());
  const [SelectedSlot, setSelectedSlot] = useState(new Date());

  //verify user
  async function authorizeClient(){
    setLoading(true);
    const { error, data } = await VerifyClient();
    if(error){  
      setIsAuthorized(false)
    } else {
      if(data.client.id){
        dispatch(addUser())
      } else {
        setIsAuthorized(false)
      }
    }
    setLoading(false);
  }

  //get therapist data 
  async function GetTherapistData(){
    // Your implementation here
  }

  //useEffect to run at the time of loading and every time id changes in params
  useEffect(() => {
    authorizeClient();
    GetTherapistData();
  }, []);

  useEffect(() => {
    (async function () {
      await setCurrentSlots(loadSlots(slotsCount, CurrentFirstSlot));
    })();
  }, [CurrentFirstSlot]);

  function loadSlots(count, startDate) {
    const slots = [];
    for (let i = 0; i < count; i++) {
      const date = new Date(
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + i
        ).toLocaleString()
      );
      slots.push(date);
    }
    return slots;
  }

  function moveNext() {
    setCurrentFirstSlot(
      new Date(
        new Date(
          CurrentFirstSlot.getFullYear(),
          CurrentFirstSlot.getMonth(),
          CurrentFirstSlot.getDate() + slotsCount
        )
      )
    );
  }

  function movePrev() {
    setCurrentFirstSlot(
      new Date(
        new Date(
          CurrentFirstSlot.getFullYear(),
          CurrentFirstSlot.getMonth(),
          CurrentFirstSlot.getDate() - slotsCount
        )
      )
    );
  }

  function selectSlot(slotData) {
    setSelectedSlot(slotData);
  }

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if(Loading){
    return (<div>Loading</div>)
  }

  if(!IsAuthorized){
    return (<div>Not authorized</div>)
  }

  return (<>
    <div className="flex gap-[50px] bg-[#F2FCFF]">
      <Side_Navbar />
      <div className="flex-col flex-1">
        {/* search bar element */}
        <div className="flex justify-center mt-[4vh]">
          <div className="relative  h-[57px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
              class="block w-[743px] p-4 ps-10 text-sm rounded-lg bg-white border border-[#B4F0FF] outline-none"
              placeholder="Search "
              required
            />
          </div>
        </div>
        {/* Therapist name */}
        <div className=" flex text-2xl mb-8font-medium leading-9 max-w-[416px] text-slate-950 mt-[2vh] mb-[2vh] ">
          Therapists/Dr. Sundhari Prakhashan
        </div>
        <div className="m-[38px]" >
          {/* book page */}
          <div className="flex justify-center items-center px-16 py-5 bg-white rounded max-w-[935px] max-md:px-5 shadow-lg" >
            <div className="flex flex-col px-12 w-full max-w-[707px] max-md:px-5 max-md:max-w-full">
              <div className="self-center text-2xl font-medium leading-9 text-slate-950">
                Session Booking
              </div>
              <div className="self-center mt-6 text-xl font-medium text-slate-950 max-md:max-w-full">
                Select your mode
              </div>
              <div className="flex gap-5 justify-between self-start mt-8 ml-16 text-sm text-center whitespace-nowrap text-slate-950 max-md:ml-2.5">
                <button
                  onClick={() => setSelect_session_mode("video")}
                  className={`flex flex-col px-8 py-2.5 ${Selected_session_Mode === "video" ? `bg-cyan-600` : `border border-solid border-neutral-900`}  rounded max-md:px-5`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none"
                    className={Selected_session_Mode === "video" ? "text-white" : "text-[#121014]"}
                  >
                    <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M21.3003 15.4667L29.8337 9.33335V22.6667L21.3003 16.6667V15.3334V15.4667ZM5.83366 6.66669H17.8337C18.5409 6.66669 19.2192 6.94764 19.7193 7.44774C20.2194 7.94783 20.5003 8.62611 20.5003 9.33335V22.6667C20.5003 23.3739 20.2194 24.0522 19.7193 24.5523C19.2192 25.0524 18.5409 25.3334 17.8337 25.3334H5.83366C5.12641 25.3334 4.44814 25.0524 3.94804 24.5523C3.44794 24.0522 3.16699 23.3739 3.16699 22.6667V9.33335C3.16699 7.86669 4.36699 6.66669 5.83366 6.66669Z" />
                  </svg>
                  <div className="mt-2.5">Video</div>
                </button>
                <button
                  onClick={() => setSelect_session_mode("call")}
                  className={`flex flex-col px-8 py-2.5 ${Selected_session_Mode === "call" ? `bg-cyan-600` : `border border-solid border-neutral-900`}  rounded max-md:px-5`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none"
                    className={Selected_session_Mode === "call" ? "text-white" : "text-[#121014]"}
                  >
                    <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M29.8329 22.56V26.56C29.8344 26.9314 29.7584 27.2989 29.6096 27.6392C29.4608 27.9794 29.2427 28.2848 28.969 28.5358C28.6954 28.7869 28.3724 28.978 28.0206 29.097C27.6688 29.2159 27.2961 29.2601 26.9263 29.2267C22.8234 28.7809 18.8823 27.3789 15.4196 25.1334C12.198 23.0862 9.4667 20.3549 7.41959 17.1334C5.16622 13.655 3.76391 9.69469 3.32625 5.57336C3.29293 5.20465 3.33675 4.83304 3.45492 4.48219C3.57309 4.13135 3.76301 3.80895 4.01261 3.53552C4.2622 3.2621 4.56599 3.04364 4.90464 2.89406C5.24329 2.74447 5.60937 2.66704 5.97959 2.66669H9.97959C10.6267 2.66033 11.254 2.88947 11.7446 3.3114C12.2352 3.73334 12.5557 4.31929 12.6463 4.96003C12.8151 6.24012 13.1282 7.497 13.5796 8.70669C13.759 9.18393 13.7978 9.70258 13.6915 10.2012C13.5851 10.6998 13.3381 11.1575 12.9796 11.52L11.2863 13.2134C13.1843 16.5514 15.9482 19.3153 19.2863 21.2134L20.9796 19.52C21.3421 19.1615 21.7998 18.9145 22.2984 18.8082C22.797 18.7018 23.3157 18.7406 23.7929 18.92C25.0026 19.3714 26.2595 19.6845 27.5396 19.8534C28.1873 19.9447 28.7788 20.271 29.2016 20.77C29.6245 21.2691 29.8491 21.9061 29.8329 22.56Z" />
                  </svg>
                  <div className="mt-2.5">Call</div>
                </button>
              </div>
              <div className="self-center mt-8 text-xl font-medium text-slate-950 max-md:max-w-full">
                Session Duration
              </div>
              <div className="justify-center self-start px-8 py-3 mt-6 ml-16 text-sm font-medium text-yellow-300 bg-cyan-600 rounded max-md:px-5 max-md:ml-2.5">
                1 Hour
              </div>
              <div className="flex gap-5 justify-between self-center mt-6 max-w-full text-sm font-medium w-[490px] max-md:flex-wrap">
                <div className="text-black">1 Session</div>
                <div className="text-cyan-600">
                  RS: <span className="text-cyan-600">499</span>/Session
                </div>
              </div>
              <div className="mt-8 text-xl font-medium text-slate-950 max-md:max-w-full">
                Check Available slots
              </div>
              <div className="flex gap-5 justify-between items-center mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                <button
                  onClick={movePrev}
                  disable={(CurrentFirstSlot <= CurrentDate).toString()}
                  className="w-8"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbe922afa8f28ad6e0e909b4e5ee12c30a33d9c9e3843442c012faf84e2cdf90?apiKey=8587097ed3a94b279b125430c3e068a6&"
                    className={`shrink-0 self-stretch my-auto w-8 aspect-square ${CurrentFirstSlot <= CurrentDate ? `hidden` : `block`
                      }`}
                  />
                </button>
                <div className="self-stretch max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {CurrentSlots.map((slot, index) => (
                      <div
                        className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                        key={index}
                        onClick={() => selectSlot(slot)}
                      >
                        <div className="flex flex-col grow text-black max-md:mt-6">
                          <div className="self-center text-xl font-medium">
                            {days[slot.getDay()].toUpperCase()}
                          </div>
                          <div
                            className={`flex flex-col px-7 py-2.5 mt-3 rounded border ${SelectedSlot.getDate() === slot.getDate() &&
                                SelectedSlot.getMonth() === slot.getMonth() &&
                                SelectedSlot.getFullYear() === slot.getFullYear()
                                ? `bg-[#0190B1]`
                                : `border-solid border-neutral-900`
                              } max-md:px-5`}
                          >
                            <div
                              className={`text-xl font-medium ${SelectedSlot.getDate() === slot.getDate() &&
                                  SelectedSlot.getMonth() === slot.getMonth() &&
                                  SelectedSlot.getFullYear() === slot.getFullYear()
                                  ? `text-[#F7F131]`
                                  : ``
                                } `}
                            >
                              {months[slot.getMonth()] + " " + slot.getDate()}
                            </div>
                            <div className="mt-2.5 text-xs">8 Available slots</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={moveNext}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f56796728be6404f086fe8f6474bf54542cf5b1095ffb1e699b497945b9a19bd?apiKey=8587097ed3a94b279b125430c3e068a6&"
                    className="shrink-0 self-stretch my-auto w-8 aspect-square"
                  />
                </button>
              </div>
              <div className="flex gap-5 justify-between self-center mt-8 max-w-full text-base text-black w-[547px] max-md:flex-wrap">
                <div className="flex gap-5 justify-between whitespace-nowrap">
                  <div className="flex flex-col justify-center text-cyan-600">
                    <div className="justify-center px-1 py-2.5 border-b border-cyan-600 border-solid">
                      Morning
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="justify-center px-1 py-2.5 border-b border-black border-solid">
                      Noon
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="justify-center px-1 py-2.5 border-b border-black border-solid">
                      Evening
                    </div>
                  </div>
                </div>
                <div className="my-auto">09: 00 AM - 12:00 PM</div>
              </div>
              <button className="justify-center self-start px-4 py-3 mt-6 ml-8 text-sm bg-white rounded border border-solid border-neutral-900 text-neutral-900 max-md:ml-2.5">
                10: 00 AM
              </button>
              <button className="justify-center self-end px-10 py-3 mt-8 text-xl font-medium text-yellow-300 whitespace-nowrap bg-cyan-600 rounded max-md:px-5">
                <Link to="/ShowBookingDetailsPage">Book</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>)
}

export default BookTherapistPage