import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [WayOfRegister, setWayOfRegister] = useState("email");
  const [email, setEmail] = useState("");
  const [phone,setPhone] =useState("")
  const [error,setError] = useState(null)

  const handleEmail = () => {
    setWayOfRegister("email");
  };
  const handlePhone = () => {
    setWayOfRegister("phone");
  };
  const handlePhoneChange = (e)=>{
    setPhone(e.target.value)
    console.log(e.target.value);
  }
  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
    console.log(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();

    if (WayOfRegister=== "email" && email.trim() === "") {
      setError("Email cannot be empty");
      return;
    }
    else if(WayOfRegister === "phone" && phone.trim()===""){
        setError("Phone cannot be empty");
      return;
    }
  }

  return (
    <>
      <form  onSubmit={handleSubmit} className="flex justify-center mx-28 ml-48 my-16 items-center w-full">
        <div className="w-[50%]">
          <div className="w-[50%] flex flex-col gap-5 shadow-lg rounded-lg  bg-white p-5">
            <p className="text-center text-2xl font-medium">Forgot Password</p>
            <div className="flex justify-around gap-10 cursor-pointer">
              <p
                onClick={handleEmail}
                className={WayOfRegister === "email" ? "active" : "inactive"}
              >
                Email
              </p>
              <p
                onClick={handlePhone}
                className={WayOfRegister === "phone" ? "active" : "inactive"}
              >
                Phone
              </p>
            </div>
            <div className="flex flex-col gap-3">
            {WayOfRegister === "phone" ? <input
                className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Registered Phone"
              /> : <input
                className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Registered Email"
              />}
              
            </div>
            <p className="m-0 p-0 text-red-600"> {error} </p>
            <div className="text-center">
              <button className="w-[40%] rounded-lg bg-yellow p-2 text-green-500 text-base">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
