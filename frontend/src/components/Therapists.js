import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../utils/fetchData";
import { checkToken } from "../utils/checkToken";
import LoginReq_pop from "./PopUps/LoginReq_pop.js";
import { addCouncellor } from "../utils/bookingSlice";

const Therapists = () => {
  const [allTherapists, setAllTherapists] = useState([]);
  const [searchInput, setSearchInput] = useState(undefined);
  const [ShowPopUp, setShowPopUp] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url = searchInput
    ? `https://zummit-chandan.onrender.com/api/users/booking/getTherapistDetails?name=${searchInput}`
    : "https://zummit-chandan.onrender.com/api/users/booking/getTherapistDetails";

  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    console.log(data);
    setAllTherapists(data);
  }, [data]);

  const user = useSelector((store) => store.user.data);

  const handleSearchInput = (event) => {
    if (event.key == "Enter") {
      setSearchInput(event.target.value);
    }
  };

  function handleBook(therapistID) {
    if(!checkToken("token")){
      setShowPopUp(true)
    }else{
      dispatch(addCouncellor(therapistID))
      navigate("/BookTherapistPage")
    }
  }

  const therapists_info = [
    {
      _id: 1,
      name: "Dr. Sundhari Prakhashan",
      experience: 10,
      languages: ["Hindi", "English", "Kannada"],
      expertise: ["ADHD", "Anxiety", "Body Image"],
      charge: 499,
      bio: "I have always been fascinated by human behavior and why people become the way they are. While we all may be individually different, we all derive our thoughts, patterns, and behaviors in the same way: life experience. We also all share the ability to show great strength, resilience, and insight when put to the test. My clients inspire me and continuously motivate me to be a better therapist and person. It is a privilege to hold space for people to be vulnerable and share their stories and I am honored to play a small part in their journeys of self-discovery and empowerment.",
      appeal:
        "In our busy lives, we can often suppress our thoughts and feelings in ways that feel convenient but can build up over time and become burdensome. I can help you recognize your triggers and sources of anxiety so you can better deal with the unique challenges that come your way. My identity as an Asian-American woman also informs my practice through my passion to help those of the 1st to 2nd generation immigrant families. Have you felt stuck and in-between worlds",
      qualification:
        "I am a National Certified Counselor with the National Board for Certified Counselors",
      testimonials: [
        "In our busy lives, we can often suppress our thoughts and feelings in ways that feel convenient but can build up over time and become burdensome. I can help you recognize your triggers and sources of anxiety so you can better deal with the unique challenges",
      ],
      profile_image: "therapist_card_image.jpeg",
    },
    {
      _id: 2,
      name: "Dr. Sundhari Prakhashan",
      experience: 10,
      languages: ["Hindi", "English", "Kannada"],
      expertise: ["ADHD", "Anxiety", "Body Image"],
      charge: 499,
      bio: "I have always been fascinated by human behavior and why people become the way they are. While we all may be individually different, we all derive our thoughts, patterns, and behaviors in the same way: life experience. We also all share the ability to show great strength, resilience, and insight when put to the test. My clients inspire me and continuously motivate me to be a better therapist and person. It is a privilege to hold space for people to be vulnerable and share their stories and I am honored to play a small part in their journeys of self-discovery and empowerment.",
      appeal:
        "In our busy lives, we can often suppress our thoughts and feelings in ways that feel convenient but can build up over time and become burdensome. I can help you recognize your triggers and sources of anxiety so you can better deal with the unique challenges that come your way. My identity as an Asian-American woman also informs my practice through my passion to help those of the 1st to 2nd generation immigrant families. Have you felt stuck and in-between worlds",
      qualification:
        "I am a National Certified Counselor with the National Board for Certified Counselors",
      testimonials: [
        "In our busy lives, we can often suppress our thoughts and feelings in ways that feel convenient but can build up over time and become burdensome. I can help you recognize your triggers and sources of anxiety so you can better deal with the unique challenges",
      ],
      profile_image: "therapist_card_image.jpeg",
    },
    {
      _id: 3,
      name: "Dr. Sundhari Prakhashan",
      experience: 10,
      languages: ["Hindi", "English", "Kannada"],
      expertise: ["ADHD", "Anxiety", "Body Image"],
      charge: 499,
      bio: "I have always been fascinated by human behavior and why people become the way they are. While we all may be individually different, we all derive our thoughts, patterns, and behaviors in the same way: life experience. We also all share the ability to show great strength, resilience, and insight when put to the test. My clients inspire me and continuously motivate me to be a better therapist and person. It is a privilege to hold space for people to be vulnerable and share their stories and I am honored to play a small part in their journeys of self-discovery and empowerment.",
      appeal:
        "In our busy lives, we can often suppress our thoughts and feelings in ways that feel convenient but can build up over time and become burdensome. I can help you recognize your triggers and sources of anxiety so you can better deal with the unique challenges that come your way. My identity as an Asian-American woman also informs my practice through my passion to help those of the 1st to 2nd generation immigrant families. Have you felt stuck and in-between worlds",
      qualification:
        "I am a National Certified Counselor with the National Board for Certified Counselors",
      testimonials: [
        "In our busy lives, we can often suppress our thoughts and feelings in ways that feel convenient but can build up over time and become burdensome. I can help you recognize your triggers and sources of anxiety so you can better deal with the unique challenges",
      ],
      profile_image: "therapist_card_image.jpeg",
    },
    {
      _id: 4,
      name: "Dr. Sundhari Prakhashan",
      experience: 10,
      languages: ["Hindi", "English", "Kannada"],
      expertise: ["ADHD", "Anxiety", "Body Image"],
      charge: 499,
      bio: "I have always been fascinated by human behavior and why people become the way they are. While we all may be individually different, we all derive our thoughts, patterns, and behaviors in the same way: life experience. We also all share the ability to show great strength, resilience, and insight when put to the test. My clients inspire me and continuously motivate me to be a better therapist and person. It is a privilege to hold space for people to be vulnerable and share their stories and I am honored to play a small part in their journeys of self-discovery and empowerment.",
      appeal:
        "In our busy lives, we can often suppress our thoughts and feelings in ways that feel convenient but can build up over time and become burdensome. I can help you recognize your triggers and sources of anxiety so you can better deal with the unique challenges that come your way. My identity as an Asian-American woman also informs my practice through my passion to help those of the 1st to 2nd generation immigrant families. Have you felt stuck and in-between worlds",
      qualification:
        "I am a National Certified Counselor with the National Board for Certified Counselors",
      testimonials: [
        "In our busy lives, we can often suppress our thoughts and feelings in ways that feel convenient but can build up over time and become burdensome. I can help you recognize your triggers and sources of anxiety so you can better deal with the unique challenges",
      ],
      profile_image: "therapist_card_image.jpeg",
    },
  ];
  return (
    <React.Fragment>
      {
        ShowPopUp && <LoginReq_pop setShowPopUp={setShowPopUp} />
      }
      <div className="m-0 p-0">
        <div className="px-[194px] m-0 pb-[68px]">
          <div className="h-[120px] m-0 pt-[33px]">
            <div className="p-0 m-0 flex justify-center">
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
                  onKeyDown={handleSearchInput}
                />
              </div>
            </div>
          </div>
          <div className=" flex text-2xl mb-8font-medium leading-9 max-w-[416px] text-slate-950 mb-[2vh] ">
            Therapists
          </div>
          <div className="grid grid-cols-1 xlg:grid-cols-2 m-0 p-0  gap-x-[27px] gap-y-[32px]">
            {allTherapists.map((therapist, index) => {
              return (
                <div
                  className=" h-[288px] border border-[#1d96b4] rounded-md"
                  key={therapist.name + index}
                >
                  <div className="h-[209px]  m-0 p-[24px] pb-[19px] bg-[#0190B1] rounded-t-md">
                    <div className="m-0 p-0 h-full flex gap-[12px]">
                      <div className="m-0 p-0 h-full xlg:w-[0] xlg2:w-[100px] sm:w-[129px] w-[0px] ">
                        <img
                          src={require(`./images/${therapists_info[0].profile_image}`)}
                          alt={therapist.name}
                          className="object-contain w-full rounded-md"
                        />
                      </div>
                      <div className="m-0 p-0 ">
                        <p className="therapist-page__name 2xl:text-[28px] xl:text-[24px] lg:text-[22px] sm:text-[18px]">
                          {therapist.name}
                        </p>
                        <p className="therapist-page__desc lg:text-[14px] xl:text-[14px] mt-[8px] sm:text-[14px]">
                          I have experience over {therapists_info[0].experience}{" "}
                          years
                        </p>
                        <p className="therapist-page__desc lg:text-[14px] xl:text-[14px] mt-0 xl:mt-[8px] sm:text-[14px] lg:mt-[5px] sm:mt-[2px] flex flex-row gap-1">
                          Expertise:
                          {therapists_info[0].expertise.map((expertise) => {
                            return <span>{expertise}</span>;
                          })}
                        </p>
                        <p className="therapist-page__desc lg:text-[14px] xl:text-[14px] mt-0 xl:mt-[8px] sm:text-[14px] lg:mt-[5px] sm:mt-[2px]">
                          {" "}
                          <span>Starts@ {therapists_info[0].charge}</span> for
                          one session
                        </p>
                        <p className="therapist-page__desc lg:text-[14px] xl:text-[14px] mt-0 xl:mt-[8px]  sm:text-[14px] lg:mt-[5px] sm:mt-[2px] flex flex-row gap-1">
                          Languages:{" "}
                          {therapists_info[0].languages.map((language) => {
                            return <span>{language}</span>;
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="m-0 p-0 h-[77px]  rounded-b-md bg-[#EFF7FF] grid xl:grid-cols-[0.6fr_0.6fr_1fr_0.8fr] 2xl:grid-cols-[0.8fr_0.8fr_1fr_0.8fr] sm:grid-cols-[1fr_1fr]">
                    <div id="dummy"></div>
                    <div id="dummy"></div>
                    <div className="xl:mt-4 sm:mt-2 sm:ms-4">
                      <Link
                        to={
                          user._id == undefined
                            ? `/therapist/${therapist._id}`
                            : `/TherapistDetailsPage/${therapist._id}`
                        }
                        target="_top"
                      >
                        <button class="bg-transparent  text-[#0190B1] font-semibold py-2 px-4 border border-[#0190B1] rounded">
                          View Profile
                        </button>
                      </Link>
                    </div>
                    <div className="xl:mt-4 sm:mt-2 sm:ms-4">
                      <button class="bg-[#0190B1] text-white font-semibold py-2 px-4 rounded"
                        onClick={() => handleBook(therapist._id)}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Therapists;
