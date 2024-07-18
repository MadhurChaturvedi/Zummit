import React, { useState } from "react";
import Main_Dashboard_img from "../../images/Main_Dashboard_img.png";
import { Link, useNavigate } from "react-router-dom";
import PlusIcon from "../../images/SVG_files/Plus_Icon.svg";
import EditIcon from "../../images/SVG_files/Edit_Icon.svg";
import ClockIcon from "../../images/SVG_files/Clock_Icon.svg";
import CheckIcon from "../../images/SVG_files/Check_Icon.svg";
import AdminSearchBar from "../AdminSearchBar";

const AdminDashboard = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
      id: "1",
      image: Main_Dashboard_img,
      title: "The Power of Therapy in Today's Stressful World",
      review:
        "Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author: "Andy Fold",
      report: "Pending",
    },
    {
      id: "2",
      image: Main_Dashboard_img,
      title: "The Power of Therapy in Today's Stressful World",
      review:
        "Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author: "Andy Fold",
      report: "Published",
    },
    {
      id: "3",
      image: " ../../images/Main_Dashboard_img.png",
      title: "The Power of Therapy in Today's Stressful World",
      review:
        "Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author: "Andy Fold",
      report: "Published",
    },
    {
      id: "4",
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

  // Clock Icon
  const PendingIcon = <img src={ClockIcon} alt="" />;

  // Check Icon
  const PublishedIcon = <img src={CheckIcon} alt="" />;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("adminToken");
    navigate("/admin-login");
  };
  return (
    <>
      <div>
        <AdminSearchBar />
        <div className="flex h-full justify-between items-center">
          <div className="flex justify-between my-4">
            <div>
              <h1 className="text-2xl font-medium">Hello Ragini</h1>
              <p className="text-lg font-medium">
                Welcome to building a Supportive Mental Community.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-10">
          <div className="w-[55%]">
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
                <div onClick={scrollTop} className="cursor-pointer bg-[#0190B1] flex justify-center items-center h-14 w-14 text-center rounded-full">
                  {/* Plus Icon */}
                  <img src={PlusIcon} alt="" />
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
                  <Link to={"/admin/articles-edit"}>
                    <h1 onClick={scrollTop} className="flex justify-center items-center text-[#0190b1] gap-2 cursor-pointer">
                      Edit
                      {/* Edit Icon */}
                      <img src={EditIcon} alt="" />
                    </h1>
                  </Link>
                </div>
              </div>
            ))}
            <div className="flex justify-end items-center mt-3">
              <Link to={"/admin/add-new-articles"}>
                <div onClick={scrollTop} className="bg-[#0190B1] flex justify-center items-center h-14 w-14 text-center rounded-full cursor-pointer">
                  {/* Plus Icon */}
                  <img src={PlusIcon} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
