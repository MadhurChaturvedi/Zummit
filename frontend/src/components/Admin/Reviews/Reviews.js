import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_ADMIN } from "../../../utils/constants";
import DeleteIcon from "../../images/SVG_files/Delete_Icon.svg"
import StarIcon from "../../images/SVG_files/Star_Icon.svg"
import AdminSearchBar from "../AdminSearchBar"
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

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
      .get(BASE_ADMIN + "/reviews",  config)
      .then((response) => {
        if (response.data.success) {
          setReviews(response.data.review);
        } else {
          console.error("Failed to fetch appointments");
        }
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  const renderStars = (reviewValue) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img src={StarIcon} alt="" />
      );
    }
    return stars;
  };
  return (
    <div>
      <AdminSearchBar/>
      <div className="flex w-[90%] justify-between items-center">
        <h1 className="text-2xl  my-8">Reviews</h1>
      </div>
      <div className="p-4 w-[95 %] rounded-lg bg-white ">
        <div className="bg-[#DCDCDD] text-lg mb-4 gap-2 rounded-lg w-full p-2 text-black flex items-center">
          <h1 className="w-[10rem]">Doctor Name</h1>
          <h1 className="w-[10rem]">Reviews</h1>
          <h1 className="w-[22rem]">Comment</h1>
          <h1 className="w-[8rem] text-center">Action</h1>
        </div>

        {reviews.map((item) => (
          <div className="flex gap-4 w-full p-2 text-lg rounded-lg items-center">
            <h1 className="w-[10rem]">{item.doctorName}</h1>
            <h1 className="flex gap-2 w-[10rem]">{renderStars(item.review)}</h1>
            <h1 className="w-[22rem] text-sm">
              {item.comment.description}
              <p className="mt-3 text-[#00677F]">{item.comment.date}</p>
            </h1>
            <h1 className="flex items-center h-8 gap-2  bg-[#B00202] p-1 rounded-md text-sm">
              Delete
             <img src={DeleteIcon} alt="" />
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
