import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "../../utils/Hooks/checkToken.js";
import LoginReq_pop from "../PopUps/LoginReq_pop.js";
import { addCouncellor } from "../../utils/Slices/bookingSlice.js";
import useFetch from "../../utils/Hooks/fetchData.js";
import SearchContainer from "../User/SearchContainer.js"
import { BASE_USER } from "../../utils/constants.js";

const Our_Therapist = () => {
  const [allTherapists, setAllTherapists] = useState([]);
  const [searchInput, setSearchInput] = useState(undefined);
  const [ShowPopUp, setShowPopUp] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url = searchInput
    ? BASE_USER+`/booking/getTherapistDetails?name=${searchInput}`
    : BASE_USER+"/booking/getTherapistDetails";

  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    setAllTherapists(data);
  }, [data]);

  const user = useSelector((store) => store.user.data);

  const handleSearchInput = (event) => {
    if (event.key == "Enter") {
      setSearchInput(event.target.value);
    }
  };

  function handleView(therapistID) {
    sessionStorage.setItem("selectedCouncellor", therapistID)
    if (!checkToken("token")) {
      navigate(`/therapist/${therapistID}`)
    } else {
      navigate(`/TherapistDetailsPage/${therapistID}`)
    }
  }

  function handleBook(therapistID) {
    if (!checkToken("token")) {
      setShowPopUp(true);
    } else {
      sessionStorage.setItem("selectedCouncellor", therapistID)
      dispatch(addCouncellor(therapistID));
      navigate("/BookTherapistPage");
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
    {ShowPopUp && <LoginReq_pop setShowPopUp={setShowPopUp} />}
    <div>
      <div className="p-10 ">
        <SearchContainer />
        <div className="text-2xl mb-5 font-medium">
          Therapists
        </div>
        <div className="flex flex-wrap gap-10">
          {allTherapists.map((therapist, index) => {
            return (
              <div
                className="w-[45%] border border-[#1d96b4] rounded-md"
                key={therapist.name + index}
              >
                <div className="h-[209px] m-0 p-[24px] pb-[19px] bg-[#0190B1] rounded-t-md">
                  <div className="flex gap-10">
                    <div>
                      <img
                        src={require(`../images/${therapists_info[0].profile_image}`)}
                        alt={therapist.name}
                        className="w-32 rounded-md"
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

                <div className="flex justify-between rounded-b-md bg-[#EFF7FF] p-4">
                  <div>
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
                  <div>
                    <button
                      class="bg-[#0190B1] text-white font-semibold py-2 px-4 rounded"
                      onClick={() => handleBook(therapist._id)}
                    >
                      Book Appointment
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

export default Our_Therapist;
