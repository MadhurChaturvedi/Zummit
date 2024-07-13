import React, { useEffect, useRef, useState } from "react";
import { addUser } from "../../../utils/Slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BASE_ADMIN } from "../../../utils/constants";

//main component toh yaha hey
const NewTherapist = () => {
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(true);
  const [role, setRole] = useState("Client");
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [showSection, setShowSection] = useState(false);
  const [error, setError] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [OTP, setOTP] = useState("");
  const [otpVerify, setOtpVerify] = useState("");
  const [showGif, setShowGif] = useState(true);
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const registerAdmin = async (userData) => {
    console.log(userData);
    // Check if OTP and verifyOTP are equal
    if (OTP != otpVerify) {
      alert("OTP verification failed");
      return;
    }

    try {
      const response = await fetch(
        BASE_ADMIN+"/adminRegister",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
          credentials: "include", // Changed from 'true' to 'include' for clarity
          withCredentials: true,
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();

      dispatch(addUser(data));
      console.log(data);

      //reload kee baad bhi data remain constant
      localStorage.setItem("token", data.token);
      navigate("/user-dashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const loginUser = async (loginData) => {
    try {
      const response = await fetch(
        BASE_ADMIN+"/adminRegister",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
          credentials: "include", // Changed from 'true' to 'include' for clarity
          withCredentials: true,
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log(data);
      dispatch(addUser(data.newUser));
      navigate("/user-dashboard");
      console.log(response);

      //jaao token leke aao
      const token = data.Authorization;
      if (!token) {
        throw new Error("Token not found in response headers");
      } else if (token) {
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

 
  //token check karo reload kee baad
  const checkForToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // Dispatch an action to set the user state with the token
      dispatch(addUser({ token }));
    }
  };

  const handleClick = () => {
    setSignUp(!signUp);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOtpVerify = (e) => {
    setOtpVerify(e.target.value);
  };

  //OTP send karne ka handler
  const handleSendOtp = (e) => {
    OTPhandler();
    setShowSection(true);
  };

  //OTP Generator
  const OTPhandler = () => {
    const generatedOTP = Math.floor(Math.random() * 9000) + 1000;
    setOTP(generatedOTP);
    setShowOTP(true);
  };

  //OTP ka page ka Handler hey
  const handleSubmission = (e) => {
    //name filed blank hua toh show error set karo
    if (!signUp && name.trim() === "") {
      setError("Name cannot be empty");
      return;
    }

    //email or number blank hua toh show error set karo
    if (input.trim() === "") {
      setError("Email/phone cannot be empty");
      return;
    }
    //Passowrd AUTHORIZE KARO
    if (!signUp && password !== reEnterPassword) {
      setError("password didn't match !! reEnter ");
      return;
    }

    //navigate karo
    if (!signUp) {
      handleSendOtp();
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async (e) => {
    if (e) await e.preventDefault();

    if (input.trim() === "") {
      setError("Input cannot be empty");
      return;
    }
    if (!signUp && password !== reEnterPassword) {
      setError("password didn't match !! reEnter ");
      return;
    }

    const userData = {
      name,
      input,
      password,
      role,
    };

    if (!signUp) {
      await registerAdmin(userData);
    } else {
      const loginData = {
        input,
        role,
        password,
      };
      await loginUser(loginData);
    }

    //cleanup toh karo ree
    setName("");
    setInput("");
    setPassword("");
    setReEnterPassword("");
    setRole("Client");
  };

  //gif animation ka play once logic
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
        onSubmit={async (e) => {
          await handleSubmit(e);
        }}
        className="flex justify-center mt-20 m-10 w-full"
      >
        {/* Left Container */}
        <div className="w-[37%]">
          {showOTP && (
            <div className="bg-cyan-600 text-white text-center font-semibold p-4 animate-bounce  rounded-xl">
              <h1>Your OTP is {OTP} </h1>
            </div>
          )}
          <div className="flex flex-col gap-5 shadow-lg rounded-lg  bg-white p-5">
            <p className="text-center text-2xl mb-6 font-medium">Create Therapist Account</p>
            {/* <div className="font-semibold text-2xl">
              <p>Admin</p>
            </div> */}
            <div className="flex flex-col font-medium gap-5 mb-10">
              <input
                className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Full Name"
              />
              <input
                className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Email or Phone Number"
              />
              <div className="flex rounded-md items-center bg-cyan-100">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  className="w-[90%] p-2 bg-cyan-100 rounded-md outline-none"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="password-toggle-icon"
                >
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="gray"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="gray"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                      <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                      <path d="M3 3l18 18" />
                    </svg>
                  )}
                </span>
              </div>
              <div className="flex rounded-md items-center bg-cyan-100">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  value={reEnterPassword}
                  onChange={(e) => setReEnterPassword(e.target.value)}
                  placeholder="Re-Enter Your Password"
                  className="w-[90%] p-2 bg-cyan-100 rounded-md outline-none"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="password-toggle-icon"
                ></span>
              </div>
              <p className="m-0 p-0 text-red-600"> {error} </p>
              <button
                onClick={handleSubmission}
                className="w-[40%] rounded-lg bg-yellow p-2 text-green-500"
              >
                {signUp ? "SignUp" : "Send OTP"}
              </button>
              {/* <Link to={"/admin-login"}>
                <p
                  onClick={handleClick}
                  className="text-cyan-500 text-base cursor-pointer"
                >
                  Already Registered ? Login Now
                </p>
              </Link>
              {signUp && (
                <Link to="/forgot-password">
                  <p className="text-cyan-500 text-base cursor-pointer mt-[-10px]">
                    Forgot Password?
                  </p>
                </Link>
              )} */}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewTherapist;
