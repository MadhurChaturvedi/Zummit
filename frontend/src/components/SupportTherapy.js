import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SupportGroupComponent = () => {
  const currentGroupsData = [
    {
      imageFile: "./images/support-group-card1.png",
      heading: "Anxiety",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/support-group-card2.png",
      heading: "Loneliness",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
  ];

  const data = [
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
  ];

  return (
    <>
      <div className="">
        <div>
          <img
            src={require("./images/SupportgroupHeader.png")}
            className="support-group-header"
          />
        </div>

        <div className="support-group-container mx-40 my-10">
          <div className="support-group-title  text-3xl mb-5 text-[#00677F] font-semibold">
            Support Group
          </div>
          <div className="support-group-description mb-5 font-medium">
            Support group or self-help group is a platform for people going
            through similar concerns or experiences to come together and extend
            emotional support, share experiences, educational information and
            learn coping strategies. The group usually meets once a week and
            aims to garner peer support.
          </div>
          <div className="support-group-current-groups flex mt-14 ">
            <div className="support-group-current-groups-title flex flex-col pt-5 gap-5 w-[20m]">
              <h1 className="font-semibold text-3xl text-[#00677F]">
                Current Groups
              </h1>
              <p>
                Adipiscing nisl auctor mattis sit at integer odio risus
                ridiculus.
              </p>
              <div className="flex gap-5 items-center mt-5">
                <svg
                  width="35"
                  height="36"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 41.75C12.1447 41.75 3.75 33.3553 3.75 23C3.75 12.6447 12.1447 4.25 22.5 4.25C32.8553 4.25 41.25 12.6447 41.25 23C41.25 33.3553 32.8553 41.75 22.5 41.75Z"
                    stroke="black"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.5 15.5L15 23L22.5 30.5M30 23H16.875"
                    stroke="black"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <svg
                  width="35"
                  height="36"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 41.75C32.8553 41.75 41.25 33.3553 41.25 23C41.25 12.6447 32.8553 4.25 22.5 4.25C12.1447 4.25 3.75 12.6447 3.75 23C3.75 33.3553 12.1447 41.75 22.5 41.75Z"
                    stroke="black"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.5 15.5L30 23L22.5 30.5M15 23H28.125"
                    stroke="black"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="support-group-current-groups-list flex gap-10">
              {currentGroupsData.map((item) => ( 
                <div className="support-group-item relative w-[15rem] ">
                  <img
                    src={require(`${item.imageFile}`)}
                    alt=""
                    className="support-group-image"
                  />
                  <div className="support-group-starts absolute top-2 right-2 bg-yellow px-2 py-1 w-fit rounded-md">Startes {item.startsFrom}</div>
                  <div className="support-group-details">
                    <h3 className="text-center font-semibold text-xl mb-2">{item.heading}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="support-group-more-groups">
            <div className="support-group-more-groups-title font-semibold text-3xl text-[#00677F] my-10">More Groups</div>
            <div className="support-group-more-groups-list grid grid-cols-3 mx-3 gap-10">
              {data.map((item) => (
                <div className="support-group-item relative">
                  <img
                    src={require(`${item.imageFile}`)}
                    alt=""
                    className="support-group-image"
                  />
                  <div className="support-group-starts absolute top-2 right-2 bg-yellow p-1 rounded-md">Starts{item.startsFrom}</div>
                  <div className="support-group-details">
                    <h3 className="text-center font-medium text-xl mb-2">{item.heading}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportGroupComponent;
