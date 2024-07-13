import React, { useEffect, useRef, useState } from "react";
import { addUser } from "../../../utils/Slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  BASE_THERAPIST } from "../../../utils/constants";

const Therapist_Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showGif, setShowGif] = useState(true);
  const navigate = useNavigate();

  const loginUser = async (loginData) => {
    try {
      const response = await fetch(
        BASE_THERAPIST+"/therapistLogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
          credentials: "include",
          withCredentials: true,
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("response data : " , data);
      dispatch(addUser(data.newTherapist));
      navigate("/therapist-dashboard");

    localStorage.setItem("token", data.Authorization);
    } catch (error) {
      console.error("Error:", error);
      setError("Login failed. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.trim() === "" || password.trim() === "") {
      setError("Email/phone and password cannot be empty");
      return;
    }

    const loginData = {
      input,
      password,
    };

    await loginUser(loginData);

    setInput("");
    setPassword("");
  };

  const gifRef = useRef(null);
  useEffect(() => {
    const gifDuration = 3500;
    const timer = setTimeout(() => {
      if (gifRef.current) {
        gifRef.current.style.display = "none";
      }
      setShowGif(false);
    }, gifDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center mx-28 ml-48 my-16 items-center w-full"
      >
        {/* Left Container */}
        <div className="w-[50%]">
          <div className="w-[50%] flex flex-col gap-5 shadow-lg rounded-lg bg-white p-5">
            <p className="text-center text-3xl font-medium">Login</p>
            <div className="font-semibold text-2xl">
              <p>Therapist</p>
            </div>
            <div className="flex flex-col font-medium text-lg gap-3">
              <input
                className="bg-cyan-100 p-2 w-[100%] outline-none rounded-lg"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Email or Phone Number"
              />
              <input
                className="bg-cyan-100 p-2 w-[100%] outline-none rounded-lg"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <p className="m-0 p-0 text-red-600"> {error} </p>
              <button
                type="submit"
                className="w-[40%] rounded-lg bg-yellow p-2 text-green-500"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        {/* Right Container */}
        <div className="w-[50%]">
          <div className="bg-cyan-600 rounded-lg w-[306px] flex items-center">
            {showGif ? (
              <img
                src={require(`../../images/aroundwithin-speed.gif`)}
                alt=""
                className="w-full rounded-md"
              />
            ) : (
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&"
                className="w-full rounded-md"
              />
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default Therapist_Login;
