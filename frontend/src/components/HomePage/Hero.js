import React from "react";
import { Link } from "react-router-dom";
import GroupTherapayImg from "../images/Group-Therapy-img.png"
import SupportGroupImg from "../images/Support_Group-img.png"
import IndividualTherapayImg from "../images/Individual-Therapy-img.png"
const Hero = () => {
  const therapyOptions = [
    {
      title: "Group Therapy",
      imageUrl: GroupTherapayImg,
      altText: "An icon representing group therapy",
      linkTo: "/services/group-therapy",
    },
    {
      title: "Support Group",
      imageUrl: SupportGroupImg,
      altText: "An icon representing support group",
      linkTo: "/services/support-group",
    },
    {
      title: "Individual Therapy",
      imageUrl: IndividualTherapayImg,
      altText: "An icon representing individual therapy",
      linkTo: "/services/individual-therapy",
    },
  ];

  const TherapyOption = ({ title, imageUrl, altText, linkTo }) => (
    <div className="max-md:ml-0 max-md:w-full group">
      <div className="flex flex-col w-[100%] h-[17rem] px-8 py-4  items-center text-black whitespace-nowrap bg-white rounded-lg hover:bg-lightyellow max-md:mt-6 ">
        <h1 className="text-2xl group-hover:before:scale-x-100 group-hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:top-8 ">
          {title}
        </h1>
        <Link to={linkTo} className="hero-img-link">
          <img
            loading="lazy"
            src={imageUrl}
            alt={altText}
            className="hero-img transition ease-in-out duration-700 group-hover:scale-[1.3] w-48"
          />
        </Link>
        <div className="invisible ml-14 group-hover:visible group-hover:flex w-full justify-end ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="black"
            class="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <main className="flex justify-center items-center px-40 py-10 bg-skyblue">
        <div className="flex flex-col  gap-5">
          <div className="flex flex-col justify-center items-center">
            <div className="w-fit">
              <h1 className="text-[45px] font-medium text-neutral-900 max-md:max-w-full truncate  max-md:text-4xl w-fit text-center">
                "Who looks outside, dreams; who looks inside, awakes."
              </h1>
              <p className="font-medium text-[28px] text-right w-full px-1 mb-[24px] mt-[18px]">
                - Carl Jung
              </p>
            </div>
            <p className="text-[28px] text-center font-medium leadin  g-10 text-zinc-800 max-md-w-full">
              Join a community of individuals committed to mental well-being and
              gain access to <p>valuable resources and support</p>
            </p>
          </div>
          <div className="flex gap-8 max-md:flex-col justify-center max-md:gap-0 max-md:">
            {therapyOptions.map((option) => (
              <TherapyOption
                key={option.title}
                title={option.title}
                imageUrl={option.imageUrl}
                altText={option.altText}
                linkTo={option.linkTo}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
