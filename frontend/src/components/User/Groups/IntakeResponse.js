import React, { useState } from "react";
import UserSidebar from "../UserSidebar";
import SearchContainer from "../SearchContainer";
import { Link } from "react-router-dom";

const IntakeResponse = () => {
  const [IntakeForm, setIntakeForm] = useState({
    name: "",
    DOB: "",
    age: null,
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setIntakeForm((obj) => ({ ...obj, [name]: value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(IntakeForm);
  }
  return (
    <div className="flex bg-[#F2FCFF]">
      <UserSidebar />
      <div className="w-[80%] my-5">
        <SearchContainer />
        <h1 className=" flex text-2xl m-10 font-medium text-slate-950">
          Therapists/Dr. Sundhari Prakhashan
        </h1>
        <div className="flex justify-center">
          <div className="w-[80%] flex rounded-md bg-white px-20 py-10">
            <div className="flex w-full flex-col gap-3">
              <h1 className="text-xl font-semibold">Intake response</h1>
              <p className="text-sm font-medium">
                Help us to know you better by filling this intake form
              </p>
              <form
                className="flex flex-col mt-5 gap-10"
                onSubmit={handleFormSubmit}
              >
                <div className="w-[520px] mx-auto text-base justify-center flex flex-col gap-[24px]">
                  <div className="flex items-center justify-between">
                    <h1>Name:</h1>
                    <input
                      type="text"
                      id="name"
                      value={IntakeForm.name}
                      name="name"
                      className="bg-[#fff6c3] w-[20rem] px-2 py-1.5 outline-none rounded-md"
                      onChange={handleChange}
                    />
                  </div>
                  <span className="flex items-center justify-between">
                    <label htmlFor="DOB">Date of birth:</label>
                    <input
                      type="date"
                      name="DOB"
                      id="DOB"
                      className="bg-[#fff6c3] w-[20rem] px-2 py-1.5 outline-none rounded-md "
                      onChange={handleChange}
                    />
                  </span>
                  <span className="flex items-center justify-between">
                    <label htmlFor="age">Age:</label>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      className="bg-[#fff6c3] w-[20rem] px-2 py-1.5 outline-none rounded-md"
                      onChange={handleChange}
                    />
                  </span>
                </div>
                <div className="flex justify-end ">
                <Link to={"/group-booking"}>
                <button
                  type="submit"
                  className="bg-[#0190B1] rounded-md text-lg px-7 p-1 font-medium text-black cursor-pointer"
                >
                  Next
                </button>
                </Link>
                </div>
              </form>
              {}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeResponse;
