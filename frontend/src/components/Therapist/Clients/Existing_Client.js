import React from "react";
import ToggleHandler from "../../images/SVG_files/ToggleHandler.svg";

const Existing_Client = ({toggleHandler}) => {
  return (
    <div className="w-[90%] p-5">
      <div className="flex gap-5 items-center">
        <svg
          width="14"
          height="14"
          viewBox="0 0 22 22"
          fill="none"
          onClick={toggleHandler}
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.6667 10.8333H3.33333M11.3333 1.5L2 10.8333L11.3333 20.1667"
            stroke="black"
            stroke-width="2.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1>Existing Client</h1>
        <h1>Substance Recovery</h1>
        <h1>Client Intake response</h1>
      </div>
      <div className="flex gap-5 p-5 w-[90%]">
        {/* left */}
        <div>
          <div className="flex gap-2 bg-white border border-[#B4F0FF] rounded-md px-4 py-2">
            <img src={ToggleHandler} alt="ToggleHandler"/>

            <input type="text" placeholder="search" />
          </div>
          <div className="flex flex-col gap-2 mt-2 p-2 shadow-md rounded-md bg-white">
            <p>R. Raghuwaran</p>
            <p>Age: 28</p>
            <p>Gender:Male</p>
            <p>Relation status: Single</p>
            <p>Education: Undergraduate</p>
            <p>Occupation: Lawyer</p>
            <p>Location: Hindupur</p>
            <p>Emergency contact: 9848687521</p>
          </div>
        </div>
        {/* right */}
        <div className="bg-[#B4F0FF] p-2 rounded-md shadow-md w-[60%]">
          <div className="flex justify-between items-center px-4 py-2 rounded-md bg-[#EFF7FF]">
            <h1>What are you trying to accomplish through counselling?</h1>
            <svg
              width="14"
              height="10"
              viewBox="0 0 17 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.12305 1.375L8.74837 9.625L15.3737 1.375"
                stroke="black"
                stroke-width="2.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-end p-2">
            <div className="flex  items-center gap-2">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 14L2 8L8 2"
                  stroke="#989A9B"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1>1 to 5</h1>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 14L8 8L2 2"
                  stroke="black"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="px-4">
            <h1>
              What are you trying to accomplish through counselling?
            </h1>
            <p className="text-sm leading-tight mt-2">
              Lorem ipsum dolor sit amet consectetur. Tincidunt quis tellus et
              id at quis. Ornare adipiscing duis faucibus congue. In non ut
              egestas eget massa. Duis pulvinar aliquam neque vehicula nisi amet
              pulvinar. Quis sit sollicitudin proin sollicitudin facilisi
              rhoncus. Dignissim ut pellentesque mus eget venenatis arcu vitae
              nisi. At mattis semper sapien et ac adipiscing. Pulvinar tristique
              condimentum sed maecenas. Vitae etiam neque non integer. Quam
              adipiscing at sem egestas nunc leo velit. Cursus ultricies
              bibendum cras pharetra diam tincidunt. Congue sit tempor venenatis
              vestibulum. Lorem ac egestas eget diam odio. Lorem quis auctor
              consectetur platea at id at sit non.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Existing_Client;
