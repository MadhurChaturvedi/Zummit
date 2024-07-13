import React, { useState, useEffect } from "react";
import axios from "axios";
import BellIcon from "../../images/SVG_files/BellIcon.svg";
import SearchBar from "../../images/SVG_files/SearchBar.svg";
import { BASE_ADMIN} from "../../../utils/constants";
const Reviews = () => {

 const [reviews,setReviews] = useState([])  

  useEffect(() => {
    axios
      .post(BASE_ADMIN+"/reviews", {
        input: "Dom@gmail.com",
        token: 
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWFiOGNjNDQ1MmIxM2Q1MGJmYTYzNCIsImlhdCI6MTcxNzIyMTU4MCwiZXhwIjoxNzE5ODEzNTgwfQ.ZKxsQmALrx7CpkOpNzA1i1Ub1exmI9ghmsdY9bQVzuI",
      })
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
        <svg
          key={i}
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill={i < reviewValue ? "#FED365" : "#ffffff"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.667 1.12963L13.3086 6.48131C13.3814 6.62874 13.522 6.73097 13.6847 6.75474L19.5928 7.6183L15.3181 11.7818C15.2002 11.8967 15.1464 12.0623 15.1742 12.2245L16.1829 18.1058L10.8997 15.3275C10.754 15.2508 10.58 15.2508 10.4343 15.3275L5.15108 18.1058L6.1598 12.2245C6.18763 12.0623 6.1338 11.8967 6.01586 11.7818L1.7412 7.6183L7.64931 6.75474C7.81198 6.73097 7.95258 6.62874 8.02535 6.48131L10.667 1.12963Z"
            stroke={i < reviewValue ? "#FED365" : "#000000"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
    return stars;
 };
  return (
    <div className="w-full m-10 ">
      <div className="flex justify-center gap-10 items-center">
        <div className="flex items-center bg-white w-[70%] border  pl-4 rounded-lg border-[#B4F0FF] ">
         <img src={SearchBar} alt="SearchBar"/>

          <input
            type="text"
            placeholder="Search"
            className="h-12 ml-5 rounded-lg outline-none w-[100%]"
          />
        </div>
        <div className="p-2 rounded-full ">
           <img src={BellIcon} alt=" BellIcon " />
        </div>
      </div>
      <div className="flex w-[90%] justify-between items-center">
        <h1 className="text-2xl  my-8">Clients</h1>
      </div>
      <div className="p-4 w-[90%] rounded-lg bg-white ">
        <div className="bg-[#DCDCDD] text-lg mb-4 gap-2 rounded-lg w-full p-2 text-black flex items-center">
          <h1 className="w-[10rem]">Doctor Name</h1>
          <h1 className="w-[10rem]">Reviews</h1>
          <h1 className="w-[22rem]">Comment</h1>
          <h1 className="w-[8rem] text-center">Action</h1>
        </div>

        {reviews.map((item) => (
          <div className="flex gap-4 w-full p-2 text-lg rounded-lg items-center">
            <h1 className="w-[10rem]">{item.doctorName}</h1>
            <h1 className="flex gap-2 w-[10rem]">
            {renderStars(item.review)}
            </h1>
            <h1 className="w-[22rem] text-sm">
              {item.comment.description}
              <p className="mt-3 text-[#00677F]">{item.comment.date}</p>
            </h1>
            <h1 className="flex items-center h-8 gap-2  bg-[#B00202] p-1 rounded-md text-sm">
              Delete
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H5H21"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 11V17"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 11V17"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
