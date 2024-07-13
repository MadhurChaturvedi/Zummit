import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCouncellor } from "../../../utils/Slices/bookingSlice";
import { checkToken } from "../../../utils/Hooks/checkToken";
import LoginReq_pop from "../../PopUps/LoginReq_pop";
import axios from "axios";
import UserSidebar from "../UserSidebar";
import {  BASE_USER } from "../../../utils/constants";

function TherapistDetailsPage() {

  const [showPopUp, setShowPopUp] = useState(false);
  const [noResultError, setNoResultError] = useState({ error: false, status: null });
  const [CouncellorData, setCouncellorData] = useState(null);
  const [loading, setLoading] = useState(true);  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const user = localStorage.getItem("userID")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); //start displaying loader

        // Fetch therapist details
        await axios.get(BASE_USER+`/booking/getTherapistDetails/find/${id}`).then((res) => {
          if(res.data.name){
            dispatch(addCouncellor({ _id: id }))
            setCouncellorData(res.data);
          }else{
            setNoResultError({ error: true })
          }
        }).catch((err) => {
          if(err.response.status === 404 || 500){
            setNoResultError({ error: true, status: err.response.status})
          }
        });
        setLoading(false); //stop displaying loader
      } catch (error) {
        setNoResultError({ error: true, status: error})
        setLoading(false); //stop displaying loader
        console.error("Error during fetch", error);
      }
    };

    fetchData();
  }, [dispatch, id]);

  if (loading) {
    return (<div>Loading...</div>);
  }

  if (noResultError.error) {
    return (<div>No result</div>);
  }

  const handleBookingClick = (e) => {
    e.preventDefault();
    if (!checkToken("token")) {
      setShowPopUp(true);
    } else {
      navigate("/BookTherapistPage");
    }
  };

  return (<>
    {
      showPopUp && <LoginReq_pop setShowPopUp={setShowPopUp} />
    }
    <div className={user ? "flex" : "flex justify-center"}>
      {
        user && <UserSidebar />
      }
      <div className="flex-col ml-[2vw] ">
        {/* search bar element */}
        <div className="flex justify-center mt-[4vh]">
          <div className="relative  h-[57px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-[743px] p-4 ps-10 text-sm rounded-lg bg-[#EFF7FF] border border-[#B4F0FF] outline-none"
              placeholder="Search "
              required
            />
          </div>
        </div>
        {/* Therapist name */}
        <div className=" flex text-2xl mb-8font-medium leading-9 max-w-[416px] text-slate-950 mt-[2vh] mb-[2vh] ">
          Therapists/{CouncellorData && CouncellorData.name}
        </div>
        {/* Therapist details card */}
        <div className="flex flex-col justify-center max-w-[983px]">

          <div className="justify-center pr-6 w-full bg-white rounded shadow max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 mt-[5vh]">

                    <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                      <img
                        alt="doctor profile"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9eff4a30a60078ee6faa48a221b86524e94b6d9a9e98bc57984a01f47e712c9c?apiKey=8587097ed3a94b279b125430c3e068a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eff4a30a60078ee6faa48a221b86524e94b6d9a9e98bc57984a01f47e712c9c?apiKey=8587097ed3a94b279b125430c3e068a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eff4a30a60078ee6faa48a221b86524e94b6d9a9e98bc57984a01f47e712c9c?apiKey=8587097ed3a94b279b125430c3e068a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eff4a30a60078ee6faa48a221b86524e94b6d9a9e98bc57984a01f47e712c9c?apiKey=8587097ed3a94b279b125430c3e068a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eff4a30a60078ee6faa48a221b86524e94b6d9a9e98bc57984a01f47e712c9c?apiKey=8587097ed3a94b279b125430c3e068a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eff4a30a60078ee6faa48a221b86524e94b6d9a9e98bc57984a01f47e712c9c?apiKey=8587097ed3a94b279b125430c3e068a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eff4a30a60078ee6faa48a221b86524e94b6d9a9e98bc57984a01f47e712c9c?apiKey=8587097ed3a94b279b125430c3e068a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eff4a30a60078ee6faa48a221b86524e94b6d9a9e98bc57984a01f47e712c9c?apiKey=8587097ed3a94b279b125430c3e068a6&"
                        className="grow w-full aspect-[0.91] max-md:mt-3"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col mt-7 text-xl font-medium max-md:mt-10">
                        <div className="text-3xl font-semibold text-black">
                        {CouncellorData && CouncellorData.name}
                        </div>
                        <div className="flex gap-5 justify-between mt-8">
                          <div className="text-black">Experience</div>
                          <div className="text-zinc-800">10 Years</div>
                        </div>
                        <div className="flex gap-5 justify-between mt-3 whitespace-nowrap">
                          <div className="text-black">Languages</div>
                          <div className="flex gap-3 text-zinc-800">
                            <div>Hindi</div>
                            <div>English</div>
                            <div>Kannada</div>
                          </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-3">
                          <div className="text-black">Expertise</div>
                          <div className="flex gap-3 text-cyan-600">
                            <div>ADHD</div>
                            <div>Anxiety</div>
                            <div>Body Image</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-11 max-md:mt-10">
                  <div className="text-xl font-medium text-black">Review</div>
                  <div className="mt-3 text-xl font-medium text-black">
                    Most Helpful
                  </div>
                  <div className="flex gap-1 pr-11 mt-3 max-md:pr-5">
                    <img
                      alt="rating"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8f639d8b423b8b5577cc25beee786211b4d0ce50f405ef2e07fddf6cc0a79f9?apiKey=8587097ed3a94b279b125430c3e068a6&"
                      className="shrink-0 w-8 aspect-square"
                    />
                    <img
                      alt="rating"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8f639d8b423b8b5577cc25beee786211b4d0ce50f405ef2e07fddf6cc0a79f9?apiKey=8587097ed3a94b279b125430c3e068a6&"
                      className="shrink-0 w-8 aspect-square"
                    />
                    <img
                      alt="rating"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8f639d8b423b8b5577cc25beee786211b4d0ce50f405ef2e07fddf6cc0a79f9?apiKey=8587097ed3a94b279b125430c3e068a6&"
                      className="shrink-0 w-8 aspect-square"
                    />
                    <img
                      alt="rating"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8f639d8b423b8b5577cc25beee786211b4d0ce50f405ef2e07fddf6cc0a79f9?apiKey=8587097ed3a94b279b125430c3e068a6&"
                      className="shrink-0 w-8 aspect-square"
                    />
                    <img
                      alt="rating"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eed5732c7afa620313d3806b2ba64c1302afa705682c7532cb06ce25b74bc804?apiKey=8587097ed3a94b279b125430c3e068a6&"
                      className="shrink-0 w-8 aspect-square"
                    />
                  </div>
                  <Link onClick={handleBookingClick}>
                    <div className="justify-center px-10 py-4 mt-11 text-xl font-medium text-black bg-cyan-600 rounded max-md:px-5 max-md:mt-10">
                      Book a Session
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[6vh]"></div>
        {/* The therapist q&a */}
        <div className="flex flex-col justify-center px-5 py-6 text-2xl font-semibold leading-8 text-sky-800 rounded max-w-[983px] mt-[2vh] bg-[#FDFEE6] shadow-lg">
          <div className="max-md:max-w-full">Why I became a therapist</div>
          <div className="mt-3 text-base leading-5 text-black max-md:max-w-full">
            I have always been fascinated by human behavior and why people become
            the way they are. While we all may be individually different, we all
            derive our thoughts, patterns, and behaviors in the same way: life
            experience. We also all share the ability to show great strength,
            resilience, and insight when put to the test. My clients inspire me and
            continuously motivate me to be a better therapist and person. It is a
            privilege to hold space for people to be vulnerable and share their
            stories and I am honored to play a small part in their journeys of
            self-discovery and empowerment.
          </div>
          <div className="mt-6 max-md:max-w-full">Work with me</div>
          <div className="mt-3 text-base leading-5 text-black max-md:max-w-full">
            In our busy lives, we can often suppress our thoughts and feelings in
            ways that feel convenient but can build up over time and become
            burdensome. I can help you recognize your triggers and sources of
            anxiety so you can better deal with the unique challenges that come your
            way. My identity as an Asian-American woman also informs my practice
            through my passion to help those of the 1st to 2nd generation immigrant
            families. Have you felt stuck and in-between worlds{" "}
          </div>
          <div className="mt-6 max-md:max-w-full">My Qualification</div>
          <div className="mt-3 text-base leading-5 text-black max-md:max-w-full">
            I am a National Certified Counselor with the National Board for
            Certified Counselors{" "}
          </div>
        </div>
        {/* The testimonials section */}
        <div className="mt-[6vh]"></div>
        <div className="flex flex-col justify-center px-10 py-4 text-sky-800 rounded max-w-[983px] max-md:px-5 bg-[#FDFEE6] shadow-lg mb-[6vh]">
          <div className="flex gap-3 text-2xl font-semibold leading-8 whitespace-nowrap max-md:flex-wrap">
            <div>Testimonials</div>
            <div className="shrink-0 my-auto max-w-full h-1.5 border-b border-cyan-600 border-dashed w-[758px]" />
          </div>
          <div className="mt-2 text-base leading-5 text-black max-md:max-w-full">
            In our busy lives, we can often suppress our thoughts and feelings in
            ways that feel convenient but can build up over time and become
            burdensome. I can help you recognize your triggers and sources of
            anxiety so you can better deal with the unique challenges{" "}
          </div>
          <div className="self-end text-sm font-medium">- Anonymous client</div>
        </div>
      </div>
    </div>
  </>)
}

export default TherapistDetailsPage