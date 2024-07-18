import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_ADMIN } from "../../../utils/constants";
import ClockIcon from "../../images/SVG_files/Clock_Icon.svg";
import CheckIcon from "../../images/SVG_files/Check_Icon.svg";
import EditIcon from "../../images/SVG_files/Edit_Icon.svg";

const Resources = () => {
  const [addedReview, setAddedReview] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("adminToken");
      if (!token) {
        console.error("No token found");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }; 

    axios
      .get(BASE_ADMIN + "/resources", config)
      .then((response) => {
        if (response.data.success) {
          setAddedReview(response.data.resource);
        } else {
          console.error("Failed to fetch appointments");
        }
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  const pendingStyle = { color: "#FED365" };
  const publishedStyle = { color: "#02B04A" };

  const PendingIcon = <img src={ClockIcon} alt="" />;

  const PublishedIcon = <img src={CheckIcon} alt="" />;
  return (
    <div>
      <div className="flex w-[90%] justify-between items-center">
        <h1 className="text-2xl  my-8">Resources</h1>
        <button className="rounded-md py-2 px-4   text-lg bg-[#00677F] text-white">
          Add New
        </button>
      </div>
      <div className="w-[90%] pt-5 pl-5 bg-[#ffffff]">
        <div className="flex gap-10 mb-8 text-lg">
          <h1>Publised</h1>
          <h1>Pending</h1>
        </div>
        <div className="w-full flex gap-5 justify-center flex-wrap">
          {addedReview.map((item) => (
            <>
              <div className=" w-[40%] p-2 mb-2">
                <div className="flex gap-4 justify-between">
                  <img
                    className="w-24 h-24"
                    src={require("../../images/Main_Dashboard_img.png")}
                    alt=""
                  />
                  <div>
                    <h1 className="text-sm leading-[20px] w-[88%] font-medium mb-2">
                      {item.title}
                    </h1>
                    <p className="text-xs leading-[15px] w-[95%] font-light ">
                      {item.review}
                    </p>
                  </div>
                </div>
                <div className="flex text-xs mt-4 justify-between">
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
                    {/* Edit Icon */}
                    <img src={EditIcon} alt="" />
                  </h1>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
