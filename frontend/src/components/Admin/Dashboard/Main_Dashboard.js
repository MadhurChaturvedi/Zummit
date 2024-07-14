import React, { useState } from "react";
import Main_Dashboard_img from "../../images/Main_Dashboard_img.png";
import { useNavigate } from "react-router-dom";
const Main_Dashboard = () => {
  const data = [
    {
      therapists: "Dr.Jordan Patel",
      date: "02/08/2023",
    },
    {
      therapists: "Dr.Jasmine Joshi",
      date: "02/08/2023",
    },
    {
      therapists: "Dr.Jasmine Joshi",
      date: "02/08/2023",
    },
    {
      therapists: "Dr.Jasmine Joshi",
      date: "02/08/2023",
    },
    {
      therapists: "Dr.Jasmine Joshi",
      date: "02/08/2023",
    },
    {
      therapists: "Dr.Jasmine Joshi",
      date: "02/08/2023",
    },
    {
      therapists: "Dr.Jasmine Joshi",
      date: "02/08/2023",
    },
    {
      therapists: "Dr.Jasmine Joshi",
      date: "02/08/2023",
    },
    {
      therapists: "Dr.Jasmine Joshi",
      date: "02/08/2023",
    },
    {
      therapists: "Dr.Jasmine Joshi",
      date: "02/08/2023",
    },
  ];
  const AddedReview = [
    {
      image: Main_Dashboard_img,
      title: "The Power of Therapy in Today's Stressful World",
      review:
        "Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author: "Andy Fold",
      report: "Pending",
    },
    {
      image: Main_Dashboard_img,
      title: "The Power of Therapy in Today's Stressful World",
      review:
        "Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author: "Andy Fold",
      report: "Published",
    },
    {
      image: " ../../images/Main_Dashboard_img.png",
      title: "The Power of Therapy in Today's Stressful World",
      review:
        "Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author: "Andy Fold",
      report: "Published",
    },
    {
      image: Main_Dashboard_img,
      title: "The Power of Therapy in Today's Stressful World",
      review:
        "Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author: "Andy Fold",
      report: "Published",
    },
  ];

  const pendingStyle = { color: "#FED365" };
  const publishedStyle = { color: "#02B04A" };

  const PendingIcon = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0001 28.3333C22.3639 28.3333 28.3334 22.3638 28.3334 15C28.3334 7.63616 22.3639 1.66663 15.0001 1.66663C7.63628 1.66663 1.66675 7.63616 1.66675 15C1.66675 22.3638 7.63628 28.3333 15.0001 28.3333Z"
        stroke="#FED365"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 7V15L20.3333 17.6667"
        stroke="#FED365"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const PublishedIcon = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.3334 13.44V14.6666C28.3318 17.5419 27.4008 20.3395 25.6792 22.6424C23.9576 24.9453 21.5378 26.63 18.7806 27.4452C16.0233 28.2604 13.0764 28.1625 10.3794 27.1661C7.68232 26.1697 5.37962 24.3281 3.8147 21.9161C2.24977 19.504 1.50647 16.6507 1.69565 13.7817C1.88483 10.9127 2.99636 8.18175 4.86445 5.99608C6.73255 3.81041 9.25713 2.28716 12.0617 1.65351C14.8662 1.01986 17.8004 1.30976 20.4268 2.47998"
        stroke="#02B04A"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.3333 4L15 17.3467L11 13.3467"
        stroke="#02B04A"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear("adminToken");
    navigate('/admin-login')

  }
  return (
    <>
      <div className="mx-10 my-5">
        <div className="flex justify-end">
          <button onClick={logout} className="bg-[#0190B1] px-4 py-2 rounded-md text-white text-lg font-medium">Logout</button>
        </div>
        <div className="flex gap-5 mt-10">
          <div className="w-[55%]">
            <div className="flex justify-between mb-10">
              <div>
                <h1 className="text-2xl font-medium  my-4">Hello Ragini</h1>
                <p className="text-lg font-medium my-4">
                  Welcome to building a Supportive Mental Community.
                </p>
              </div>
            </div>
            <div className=" p-4 rounded-lg text-lg shadow-xl bg-white ">
              <div className="flex font-medium justify-between rounded-lg p-2 mb-4 bg-[#FDFEE6]">
                <h1>Therapists Name</h1>
                <h1>Added On</h1>
              </div>
              {data.map((item) => (
                <div className="flex justify-between rounded-lg p-2 ">
                  <h1>{item.therapists}</h1>
                  <h1>{item.date}</h1>
                </div>
              ))}
              <div className="flex justify-end items-center mt-3 mb-8">
                <div className="cursor-pointer bg-[#0190B1] flex justify-center items-center h-14 w-14 text-center rounded-full">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1.66663V20.3333"
                      stroke="black"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.66675 11H20.3334"
                      stroke="black"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[48%] rounded-xl px-5 py-10 shadow-xl bg-[#FDFEF1]">
            {AddedReview.map((item) => (
              <div className="bg-white p-2 mb-2">
                <div className="flex gap-3 justify-between">
                  <img
                    className="w-28"
                    src={require("../../images/Main_Dashboard_img.png")}
                    alt=""
                  />
                  <div>
                    <h1 className="text-base leading-[20px] w-[88%] font-medium mb-2">
                      {item.title}
                    </h1>
                    <p className="text-sm leading-[15px] w-[95%] font-light ">
                      {item.review}
                    </p>
                  </div>
                </div>
                <div className="flex text-sm mt-4 justify-between">
                  <h1>Added By: {item.author}</h1>
                  <h1
                    className="flex justify-center items-center gap-1"
                    style={
                      item.report === "Pending" ? pendingStyle : publishedStyle
                    }
                  >
                    {item.report}
                    {item.report === "Pending" ? PendingIcon : PublishedIcon}
                  </h1>

                  <h1 className="flex justify-center items-center text-[#0190b1] gap-2 cursor-pointer">
                    Edit
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 18.8801V26.0001C26 26.7073 25.719 27.3856 25.219 27.8857C24.7189 28.3858 24.0406 28.6667 23.3333 28.6667H4.66667C3.95942 28.6667 3.28115 28.3858 2.78105 27.8857C2.28095 27.3856 2 26.7073 2 26.0001V7.33341C2 6.62617 2.28095 5.94789 2.78105 5.4478C3.28115 4.9477 3.95942 4.66675 4.66667 4.66675H11.7867"
                        stroke="#0190B1"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23.3333 2L28.6667 7.33333L15.3333 20.6667H10V15.3333L23.3333 2Z"
                        stroke="#0190B1"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </h1>
                </div>
              </div>
            ))}
            <div className="flex justify-end items-center mt-3">
              <div className="bg-[#0190B1] flex justify-center items-center h-14 w-14 text-center rounded-full cursor-pointer">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.66663V20.3333"
                    stroke="black"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.66675 11H20.3334"
                    stroke="black"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_Dashboard;
