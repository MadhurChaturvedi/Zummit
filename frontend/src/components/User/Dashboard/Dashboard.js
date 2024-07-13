import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../SearchContainer";
import IndividualThearapy from "../../images/Individual Therapy.png";
import GroupTherapyImg from "../../images/Group-Therapy-img.png";
import SupportGroupImg from "../../images/Support_Group-img.png";
import UpcomingGroupsImg from "../../images/Upcoming_Groups_Image.png";


function Dashboard() {
  const [toggleIndividual, setToggleIndividual] = useState(false);
  const [toggleGroupTherapy, setToggleGroupTherapy] = useState(false);
  const [toggleSupportGroup, setToggleSupportGroup] = useState(false);

  const handleIndividualToggle = () => {
    setToggleIndividual(true);
  };

  const handleToggleGroupTherapy = () => {
    setToggleGroupTherapy(true);
  }

  const handleSupportGroupToggle = () => {
    setToggleSupportGroup(true);
  }

  // Card Data
  const therapyOptions = [
    {
      title: "Individual Therapy",
      imageUrl: IndividualThearapy,
      altText: "An icon representing individual therapy",
      linkTo: "/user-dashboard",
      handleClick: handleIndividualToggle
    },
    {
      title: "Group Therapy",
      imageUrl: GroupTherapyImg,
      altText: "An icon representing group therapy",
      linkTo: "/user-dashboard",
      handleClick: handleToggleGroupTherapy
    },
    {
      title: "Support Group",
      imageUrl: SupportGroupImg,
      altText: "An icon representing support group",
      linkTo: "/user-dashboard",
      handleClick: handleSupportGroupToggle
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
      <div className="rounded-lg p-3 bg-white">
        <div className="flex gap-3">
          <img className="w-28 h-28" src={imageURL} alt="cardImage" />
          <div className="flex">
            <div className="w-60">
              <h1 className="font-semibold text-base leading-5 mb-2">{title}</h1>
              <p className="text-xs leading-4">{description}</p>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p className="text-[0.70rem] text-nowrap shadow-md bg-[#F7F131] rounded-lg p-1">{notification}</p>
              <button className="bg-white px-6 py-1 text-[#0190B1] border-2 border-[#0190B1] rounded">{buttonText}</button>
            </div>
          </div>
        </div>
        <div className="w-[28rem] flex text-xs justify-between py-2 mt-3">
          <p>Created by: {createdBy}</p>
          <p>Starts On: {startsOn}</p>
          <p>Sessions: {sessionsCount}</p>
        </div>
      </div>
    )
  };

  const UpcomingCardInfo = ({ title, description, imageURL, createdBy, startsOn, }) => {
    return(
      <div className="w-[92%] rounded-lg p-3 bg-white">
        <div className="flex gap-3">
          <img className="w-22 h-22" src={imageURL} alt="cardImage" />
          <div className="flex">
            <div>
              <h1 className="font-semibold text-base leading-5 mb-2">{title}</h1>
              <p className="text-xs leading-4">{description}</p>
            </div>
          </div>
        </div>
        <div className="w-[21rem] flex text-xs justify-between py-2 mt-3">
          <p>Created by: {createdBy}</p>
          <p>Starts On: {startsOn}</p>
        </div>
      </div>
    )
  }

  const ThearapySessionCard = () => {
    return(
      <div className="w-[90%] rounded-md shadow-md">
        <div className="bg-[#0190B1] text-lg flex flex-col gap-3 px-5 py-4 rounded-md rounded-b-none leading-6">
          <p className="text-[1rem] font-normal">Individual Session</p>
          <h3 className="font-semibold text-white">Appointment with <span className="text-[#F7F131]">Dr. Vaibhav</span></h3>
          <p className="font-medium text-white">Monday: <span className="text-[#F7F131]">26-02-2024</span></p>
          <p className="font-medium text-white">Time: <span className="text-[#F7F131]">02: 00 PM to 03: 00 PM</span></p>
          <p className="text-[1rem] font-normal">Starts in just 30 Minutes</p>
        </div>
        <div className="bg-white flex justify-end rounded-md rounded-t-none p-4">
          <div className="w-44 flex justify-between font-medium">
            <button className="bg-[#0190B1] px-4 py-1 rounded">Join</button>
            <button className="bg-white text-[#0190B1] border-2 px-4 py-1 border-[#0190B1] rounded">Cancel</button>
          </div>
        </div>
      </div>
    )
  }

  const IndividualTherapyView = () => {
    return(
      <div className="flex bg-[#F2FCFF] gap-10">
        <div className="w-[40%] flex flex-col gap-5">
          <div>
            <h3 className="text-[#001519] text-2xl font-medium py-3">Hello Sanjay</h3>
            <p className="text-[#272529] text-xl font-semibold">Welcome to building a Supportive Mental Community</p>
          </div>
          <div className="bg-[#FDFEF1] flex flex-col items-center gap-2 pt-14 pb-4 rounded-lg shadow-lg">
            {upcomingGroups.slice(0, 2).map((card) => (
              <UpcomingCardInfo
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
        <div className="w-[50%] flex flex-col gap-5">
          <ThearapySessionCard />
          <div className="w-[90%] bg-[#FDFEF1] py-4 px-3 rounded-lg shadow-lg pl-2">
            <h2 className="text-2xl leading-9 font-medium py-2">Upcoming Groups</h2>
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
  };

  const GroupTherapyView = () => {
    return (
      <div>
        <SearchContainer />
        <div className="flex h-[28rem] mt-8">
          <div className="w-[45%] flex flex-col gap-5 justify-between">
            <div>
                <h3 className="text-[#001519] text-3xl leading-10 font-medium py-3">Hello Sanjay</h3>
                <p className="text-[#272529] text-xl leading-8 font-semibold">Welcome to building a Supportive Mental Community</p>
            </div>
            <ThearapySessionCard />
          </div>
          <div className="h-full overflow-auto flex flex-col gap-3 bg-[#FDFEF1] py-5 pl-3 rounded-lg shadow-lg">
            <h2 className="text-2xl font-medium">Upcoming Groups</h2>
            {upcomingGroups.slice(0,3).map((option) => (
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
  };

  const SupportGroupView = () => {
    return (
      <div className="w-full">
        <SearchContainer />
        <div className="flex gap-10 p-7">
          <div className="w-[45%] flex flex-col gap-20">
            <div>
                <h3 className="text-[#001519] text-3xl leading-10 font-medium py-3">Hello Sanjay</h3>
                <p className="text-[#272529] text-xl leading-8 font-semibold">Welcome to building a Supportive Mental Community</p>
            </div>
            <ThearapySessionCard />
          </div>
          <div className="w-[50%] h-[30rem] overflow-auto flex flex-col gap-3 bg-[#FDFEF1] py-5 pl-3 rounded-lg shadow-lg">
            <h2 className="text-2xl leading-9 font-medium text-black py-3 pl-3">Upcoming Groups</h2>
            {upcomingGroups.slice(0,3).map((option) => (
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
      <div className="p-10">
        {!toggleIndividual && !toggleGroupTherapy && !toggleSupportGroup ? (<div>
          <div className="font-semibold">
            <h1 className="text-2xl mb-2">Hello Sanjay</h1>
            <p>Welcome to building a Supportive Mental Community.</p>
          </div>

          {/* Cards - Group Therapy */}
          <div className="mt-5">
            <div className="flex gap-10">
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

          <div className="w-[92%] mt-5 bg-[#FDFEF1] overflow-hidden px-6 rounded-xl">
            <h1 className="text-[24px] font-semibold mb-[10px] pt-[24px]">
              Upcoming Groups
            </h1>
            <div className="flex flex-col gap-3">
                {upcomingGroups.map((option) => (
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
        </div>) : toggleIndividual ? (<IndividualTherapyView />) 
              : toggleGroupTherapy ? (<GroupTherapyView />) : (<SupportGroupView />)}
      </div>
    </>
  );
}

export default Dashboard;

