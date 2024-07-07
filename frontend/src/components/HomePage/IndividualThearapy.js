import React, {useState} from "react";
import { Link } from "react-router-dom";
import { checkToken } from "../../utils/Hooks/checkToken";

const IndividualThearapy = () => {
  return (
    <>
      <div className="banner-IndividualTherapy">
        <img
          src={require("../images/Individual_therapy_page.png")}
          alt="A Lady talking to her Therapist"
          className="object-contain w-full"
        />
      </div>
      <div className="body-IndividualTherapy h-[482px] w-[1123px] m-auto">
        <div className="text-IndividualTherapy h-[219px] gap-8">
          <p className="text-[28px] text-[#00677Fl] bg-red mt-[32px] text-[#00677F] leading-[42px]">
            Individual Therapy
          </p>
          <p className="leading-[20px] mt-[20px] text-[#001519]">
            Lorem ipsum dolor sit amet consectetur. Aliquet lorem a eget
            pulvinar. In semper faucibus scelerisque nulla duis. Eget sed ornare
            proin eu. Tincidunt sit egestas phasellus est luctus viverra mattis
            gravida vel. A sit mattis commodo egestas rhoncus iaculis a arcu
            condimentum. Pharetra sit bibendum aliquam faucibus. Lectus velit
            justo aliquam tellus. Tincidunt amet aliquam aliquam duis integer
            amet amet convallis. Tincidunt nulla at accumsan etiam Lorem ipsum
            dolor sit amet consectetur. Aliquet lorem a eget pulvinar. In semper
            faucibus scelerisque nulla duis. Eget sed ornare proin eu. Tincidunt
            sit egestas phasellus est luctus viverra mattis gravida vel. A sit
            mattis commodo egestas rhoncus iaculis a arcu condimentum. Pharetra
            sit bibendum aliquam faucibus. Lectus velit justo aliquam tellus.
            Tincidunt amet aliquam aliquam duis integer amet amet convallis.
            Tincidunt nulla at accumsan etiam..
          </p>
        </div>
        <div className="bookAppointment-individualTherapy gap-2.5 flex justify-center items-end h-[90px]">
          <Link to={checkToken("token") ? "/bookingPage" : "/therapist"}>
          <button
            className="bg-[#4DB3CB] text-[28px] rounded gap-2.5 text-[#FDFEF1] w-[270px] h-[58px]"
          >
            Book Appointment
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default IndividualThearapy;
