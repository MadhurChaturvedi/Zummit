import React from "react";
import { Link } from "react-router-dom";
import Side_Navbar from "./Side_Navbar";
import ArrowRightCircle from "./images/SVG_files/ArrowRightCircle.svg";
function UserDashboard() {
  // Card Data
  const therapyOptions = [
    {
      title: "Individual Therapy",
      imageUrl: "./images/Individual Therapy.png",
      altText: "An icon representing individual therapy",
      linkTo: "/services/individual-therapy",
    },
    {
      title: "Group Therapy",
      imageUrl: "./images/Group-Therapy-img.png",
      altText: "An icon representing group therapy",
      linkTo: "/services/group-therapy",
    },
    {
      title: "Support Group",
      imageUrl: "./images/Support_Group-img.png",
      altText: "An icon representing support group",
      linkTo: "/services/support-group",
    },
  ];

  const TherapyOption = ({ title, imageUrl, altText, linkTo }) => (
    <div className="max-md:ml-0 max-md:w-full group">
      <div className="flex flex-col w-[273px] h-[273px] px-8 py-4  items-center text-black whitespace-nowrap bg-white rounded-lg hover:bg-lightyellow max-md:mt-6 shadow-md shadow-md-bottom">
        <h1 className="text-[24px] group-hover:before:scale-x-100 group-hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:top-8 ">
          {title}
        </h1>
        <Link to={linkTo} className="hero-img-link">
          <img
            loading="lazy"
            src={require(`${imageUrl}`)}
            alt={altText}
            className="hero-img transition ease-in-out duration-700 group-hover:scale-[1.3] w-48"
          />
        </Link>
        <div className="invisible ml-14 group-hover:visible group-hover:flex w-full justify-end ">
        <img src={ArrowRightCircle} alt="Arrow Right Circle" />
        </div>
      </div>
    </div>
  );

  // Upcoming Groups Data
  const upcomingGroups = [
    {
      title: "The Power of Therapy in Today's Stressful World",
      description:
        "Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life. ",
      imageUrl: "./images/Upcoming_Groups_Image.png",
      createdBy: "Andy Falld",
      startsOn: "21/02/2023",
      sessionsCount: "10",
      buttonText: "Enroll",
      notification: "Only Few Spots Left",
    },
    {
      title: "The Power of Therapy in Today's Stressful World",
      description:
        "Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life. ",
      imageUrl: "./images/Upcoming_Groups_Image.png",
      createdBy: "Andy Falld",
      startsOn: "21/02/2023",
      sessionsCount: "10",
      buttonText: "Enroll",
      notification: "Only Few Spots Left",
    },
    {
      title: "The Power of Therapy in Today's Stressful World",
      description:
        "Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life. ",
      imageUrl: "./images/Upcoming_Groups_Image.png",
      createdBy: "Andy Falld",
      startsOn: "21/02/2023",
      sessionsCount: "10",
      buttonText: "Enroll",
      notification: "Only Few Spots Left",
    },
  ];

  const UpcomingCards = ({
    title,
    description,
    imageURL,
    createdBy,
    startsOn,
    sessionsCount,
    buttonText,
    notification,
  }) => (
    <div className="h-[166px] w-[954px] bg-white mb-[8px] pl-[12px] pt-[8px] rounded-lg">
      <div className="h-[120px] flex mb-[15px]">
        <img
          className="w-[112px] h-[112px] mr-[15px]"
          src={require(`${imageURL}`)}
          alt="cards"
        />
        <div className="flex">
          <div>
            <h1 className="text-[16px] h-10 leading-[normal] font-semibold w-[229px]">
              {title}
            </h1>
            <p className="text-[14px] h-[72px] w-[254px] leading-[normal] pt-2 text-[#000000]">
              {description}
            </p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div>
              <p className="text-[14px] shadow-md bg-[#F7F131] rounded-[8px] px-[8px] py-[4px]">
                {notification}
              </p>
            </div>
            <div>
              <button className="px-[16px] py-[8px] rounded text-[#0190B1] border-2 border-[#0190B1]">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-[12px] w-[24vw] justify-between">
        <p>Created by: {createdBy}</p>
        <p>Starts On: {startsOn}</p>
        <p>Sessions: {sessionsCount}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex">
        {/* Left Container */}
        <Side_Navbar />

        {/* Main Container */}
        <div className="mainContainer bg-[#f2fcff] pl-[22px] w-[82vw]">
          <div className="max-w-[70vw]">
            <h1 className="text-[#001519] font-semibold text-[28px] pt-[29px]">
              Hello Name
            </h1>
            <p className="text-[#272529] font-semibold text-[22px] pt-[16px] pb-[25px]">
              Welcome to building a Supportive Mental Community.
            </p>
          </div>

          {/* Cards - Group Therapy */}
          <div className="cards">
            <div className="flex flex-row justify-between w-[1004px]">
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

          {/* Upcoming Groups */}

          <div className="upcoming h-[540px] w-[1002px] mt-[19px] bg-[#FDFEF1] overflow-hidden pl-[24px] rounded-xl">
            <h1 className="text-[24px] font-semibold mb-[10px] pt-[24px]">
              Upcoming Groups
            </h1>
            <div>
              {upcomingGroups.map((option) => (
                <UpcomingCards
                  key={option.title}
                  title={option.title}
                  description={option.description}
                  imageURL={option.imageUrl}
                  startsOn={option.startsOn}
                  sessionsCount={option.sessionsCount}
                  createdBy={option.createdBy}
                  buttonText={option.buttonText}
                  notification={option.notification}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
