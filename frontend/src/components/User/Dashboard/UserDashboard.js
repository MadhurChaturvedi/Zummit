import React, { useState } from "react";
import { Link } from "react-router-dom";
import Side_Navbar from "../UserSidebar";
import IndividualThearapy from "../../images/Individual Therapy.png";
import GroupTherapyImg from "../../images/Group-Therapy-img.png";
import SupportGroupImg from "../../images/Support_Group-img.png";
import UpcomingGroupsImg from "../../images/Upcoming_Groups_Image.png";


function UserDashboard() {
  const [toggleIndividual, setToggleIndividual] = useState(false);

  const handleIndividualToggle = () => {
    setToggleIndividual(true);
  };

  // Card Data
  const therapyOptions = [
    {
      title: "Individual Therapy",
      imageUrl: IndividualThearapy,
      altText: "An icon representing individual therapy",
      linkTo: "/userdashboard",
      handleClick: handleIndividualToggle
    },
    {
      title: "Group Therapy",
      imageUrl: GroupTherapyImg,
      altText: "An icon representing group therapy",
      linkTo: "/services/group-therapy",
      handleClick: handleIndividualToggle
    },
    {
      title: "Support Group",
      imageUrl: SupportGroupImg,
      altText: "An icon representing support group",
      linkTo: "/services/support-group",
      handleClick: handleIndividualToggle
    },
  ];

  const TherapyOption = ({ title, imageUrl, altText, linkTo, handleClick }) => (
    <div className="max-md:ml-0 max-md:w-full group" onClick={handleClick}>
      <div className="flex flex-col w-[273px] h-[273px] px-8 py-4  items-center text-black whitespace-nowrap bg-white rounded-lg hover:bg-lightyellow max-md:mt-6 shadow-md shadow-md-bottom">
        <h1 className="text-[24px] group-hover:before:scale-x-100 group-hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:top-8 ">
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

  // Upcoming Groups Data
  const upcomingGroups = [
    {
      title: "The Power of Therapy in Today's Stressful World",
      description:
        "Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life. ",
      imageUrl: UpcomingGroupsImg,
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
      imageUrl: UpcomingGroupsImg,
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
      imageUrl: UpcomingGroupsImg,
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
          src={imageURL}
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

  const UpcomingCard = ({ 
    title,
    description,
    imageURL,
    createdBy,
    startsOn,
    sessionsCount,
    buttonText,
    notification
  }) => {
    return(
      <div className="w-[95%] bg-white rounded-lg px-3 py-2">
      <div className="h-[120px] flex mb-[15px]">
        <img
          className="w-28 h-28"
          src={imageURL}
          alt="cards"
        />
        <div className="flex px-3">
          <div>
            <h1 className="w-[90%] leading-normal text-[1rem] font-semibold">
              {title}
            </h1>
            <p className="w-[95%] text-[0.88rem] leading-normal text-black">
              {description}
            </p>
          </div>
          {buttonText && notification ? (
            <div className="w-[40%] flex flex-col items-center justify-between">
            <div>
              <p className="text-xs shadow-md bg-[#F7F131] rounded-lg px-2 py-1">
                {notification}
              </p>
            </div>
            <div>
              <button className="px-[16px] py-[8px] rounded text-[#0190B1] border-2 border-[#0190B1]">
                {buttonText}
              </button>
            </div>
          </div>
          ): (null)}
        </div>
      </div>
      <div className="flex text-xs justify-between py-2">
        <p>Created by: {createdBy}</p>
        <p>Starts On: {startsOn}</p>
        <p>Sessions: {sessionsCount}</p>
      </div>
    </div>
    )
  };

  const IndividualThearapyCard = () => {
    return(
      <div className="w-[95%]">
        <div className="bg-[#0190B1] flex flex-col gap-3 px-5 py-4">
          <p className="text-[1rem] leading-5 font-normal text-black">Individual Session</p>
          <h3 className="text-[1.30rem] leading-8 font-semibold text-white">Appointment with <span className="text-[#F7F131]">Dr. Vaibhav</span></h3>
          <p className="text-xl leading-6 font-medium text-white">Monday: <span className="text-[#F7F131]">26-02-2024</span></p>
          <p className="text-xl leading-6 font-medium text-white">Time: <span className="text-[#F7F131]">02: 00 PM to 03: 00 PM</span></p>
          <p className="text-[1rem] leading-5 font-normal text-black">Starts in just 30 Minutes</p>
        </div>
        <div className="bg-white flex justify-end pr-4">
          <div className="w-48 py-2 flex justify-between">
            <button className="bg-[#0190B1] text-black px-4 py-3 rounded text-xl leading-6 font-medium">Join</button>
            <button className="bg-white text-[#0190B1] border-2 px-4 py-3 border-[#0190B1] rounded text-xl leading-6 font-medium">Cancel</button>
          </div>
        </div>
      </div>
    )
  }

  const IndividualTherapyView = () => {
    return(
      <div className="w-full flex bg-[#F2FCFF] pt-20 pl-4">
        <div className="flex flex-col items-center gap-5">
          <div className="w-[75%]">
            <h3 className="text-[#001519] text-3xl leading-10 font-medium py-3">Hello Sanjay</h3>
            <p className="text-[#272529] text-xl leading-8 font-semibold">Welcome to building a Supportive Mental Community</p>
          </div>
          <div className="w-[80%] bg-[#FDFEF1] flex flex-col items-center gap-2 pt-14 pb-4 rounded-lg shadow-lg">
            {upcomingGroups.slice(0, 2).map((card) => (
              <UpcomingCard
                key={card.key}
                title={card.title}
                description={card.description}
                imageURL={card.imageUrl}
                startsOn={card.startsOn}
                sessionsCount={card.sessionsCount}
                createdBy={card.createdBy}
              />
            ))}
          </div>
        </div>
        <div className="w-[70%] flex flex-col gap-5">
          <IndividualThearapyCard />
          <div className="w-[95%] bg-[#FDFEF1] py-5 rounded-lg shadow-lg">
            <h2 className="text-2xl leading-9 font-medium text-black py-3 pl-3">Upcoming Groups</h2>
            {upcomingGroups.slice(0,1).map((option) => (
            <UpcomingCard
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
    )
  }

  return (
    <>
      <div className="flex">
        {/* Left Container */}
        <Side_Navbar />

        {/* Main Container */}
        {!toggleIndividual ? (<div className="mainContainer bg-[#f2fcff] pl-[22px] w-[82vw]">
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
                  handleClick={option.handleClick}
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
        </div>) : (<IndividualTherapyView />)}
      </div>
    </>
  );
}

export default UserDashboard;

