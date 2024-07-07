import React, { useEffect, useState } from "react";
import Client2 from "../images/Client-2.png";
import Client3 from "../images/Client-3.png";
import Client1 from "../images/Client-1.png";
import Client4 from "../images/Client-4.webp";
import { Link } from "react-router-dom";

const Meet = () => {
  const images = [Client1, Client2, Client3, Client4];
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(1);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(2);
  const [currentImageIndex4, setCurrentImageIndex4] = useState(3);
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    const interval2 = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    const interval3 = setInterval(() => {
      setCurrentImageIndex3((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    const interval4 = setInterval(() => {
      setCurrentImageIndex4((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [images.length]);


  return (
    <>
      <div className="bg-[#001618] text-white flex px-28 py-10 justify-between items-center">
        {/* Left side container */}
        <div className="w-[35%] h-[80vh] flex flex-col  pt-10 gap-5">
          <h1 className="text-4xl font-medium text-yellow ">
            Meet our Therapist
          </h1>
          <p className="font-light text-base text-justify">
            Meet our Therapist Tap into the world's largest network of
            credentialled and experienced therapists who can help you with a
            range of issues including depression, anxiety, relationships,
            trauma, grief, and more. With our therapists, you get the same
            professionalism and quality you would expect from an in-office
            therapist, but with the ability to communicate when and how you
            want.
          </p>
{/* 
          <Link to="/therapist" target="_top">
            <button className="bg-cyan-500 text-black text-xl font-medium rounded-md w-[35%] px-2 py-1">
              Know more
            </button>
          </Link> */}

        </div>
        {/* Right side container */}
        <div className="w-[60%] flex gap-3 overflow-hidden justify-center items-center text-black text-xl font-semibold">
          {/* Client 1 */}
          <div className="bg-gradient-to-b from-cyan-600 from-10% via-cyan-600 via-[percentage:20%_60%] to-yellow to-100% w-[30%] h-[65vh] overflow-hidden flex flex-col justify-between  relative p-2 rounded-lg">
            <h1>Therapist Kamalesh</h1>
            <div className="flex justify-between absolute bottom-0  gap-8 items-end h-[80%]">
              <div>
                <p className="text-lg font-semibold mt-48 w-0 h-0 mb-10 p-0  -rotate-90 whitespace-pre">
                  5 years of experience
                </p>
              </div>
              <div className="relative h-[100%] rounded-lg w-[25vw] overflow-hidden">
                <div
                  className="absolute bottom-0 -left-10 h-[47vh] w-[80%]"
                  style={{
                    backgroundImage: `url(${images[currentImageIndex1 % images.length]})`,
                    backgroundSize: "contain",
                    borderRadius: "2rem",
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* Client 2 */}
          <div className="bg-gradient-to-b from-cyan-600 from-10% via-cyan-600 via-[percentage:20%_60%] to-yellow to-100% w-[30%] h-[72vh] overflow-hidden flex flex-col justify-between  relative p-2 rounded-lg">
            <h1>Kamalesh</h1>
            <div className="flex justify-between absolute bottom-0  gap-8 items-end h-[80%]">
              <div>
                <p className="text-lg font-semibold mt-48 w-0 h-0 mb-10 p-0  -rotate-90 whitespace-pre">
                  5 years of experience
                </p>
              </div>
              <div className="relative h-[100%] rounded-lg w-[25vw] overflow-hidden">
                <div
                  className="absolute bottom-0 -left-10 h-[50vh] w-[83%]"
                  style={{
                    backgroundImage: `url(${images[currentImageIndex2 % images.length]})`,
                    backgroundSize: "contain",
                    borderRadius: "2rem",
                    backgroundRepeat: "no-repeat"
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* Client 3 */}
          <div className="bg-gradient-to-b from-cyan-600 from-10% via-cyan-600 via-[percentage:20%_60%] to-yellow to-100% w-[31%] h-[80vh] overflow-hidden flex flex-col justify-between  relative p-2 rounded-lg bg-cyan-500">
            <h1>Kamalesh</h1>
            <div className="flex justify-between absolute bottom-0  gap-8 items-end h-[80%]">
              <div>
                <p className="text-lg font-semibold mt-48 w-0 h-0 mb-10 p-0  -rotate-90 whitespace-pre">
                  5 years of experience
                </p>
              </div>
              <div className="relative h-[100%] rounded-lg w-[25vw] overflow-hidden">
                <div
                  className="absolute bottom-0 -left-14 h-[55vh] w-[92%]"
                  style={{
                    backgroundImage: `url(${images[currentImageIndex3 % images.length]})`,
                    backgroundSize: "contain",
                    borderRadius: "2rem",
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* Client 4 */}
          <div className="bg-gradient-to-b from-cyan-600 from-10% via-cyan-600 via-[percentage:20%_60%] to-yellow to-100% w-[30%] h-[65vh] overflow-hidden flex flex-col justify-between  relative p-2 rounded-lg">
            <h1>Kamalesh</h1>
            <div className="flex justify-between absolute bottom-0  gap-8 items-end h-[80%]">
              <div>
                <p className="text-lg font-semibold mt-48 w-0 h-0 mb-10 p-0  -rotate-90 whitespace-pre">
                  5 years of experience
                </p>
              </div>
              <div className="relative h-[100%] rounded-lg w-[25vw] overflow-hidden">
                <div
                  className="absolute bottom-0 -left-10 h-[50vh] w-[83%]"
                  style={{
                    backgroundImage: `url(${images[currentImageIndex4 % images.length]})`,
                    backgroundSize: "contain",
                    borderRadius: "2rem",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;
