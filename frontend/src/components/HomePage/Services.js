import React from "react";
import { Link } from "react-router-dom";
import GroupTherapyImg from "../images/services-group-therapy-img.png";
import IndividualTherapyImg from "../images/services-individual-therapy-img.png";
import SupportTherapyImg from "../images/services-support-group-img.png";

const Services = () => {
  return (
    <>
      <div className="bg-white my-20 flex  justify-center ">
        <div className="w-[80%]">
          {/* Card 1 */}
          <div className="flex justify-center gap-10 mb-5">
            {/* left side */}
            <div className="bg-[#B4F0FF] rounded-md relative h-[25rem] w-[45%]">
              <img
                loading="lazy"
                srcSet={GroupTherapyImg}
                className="absolute h-full w-full right-6 bottom-6"
              />
            </div>
            {/* right side */}
            <div className="w-[45%] flex flex-col gap-5 p-5 justify-center font-medium">
              <h1 className="text-3xl font-medium text-[#00677F] ">
                Group Therapy
              </h1>
              <p>
                Group Counselling or Group Therapy is a form of therapy in which
                the group comprises 4-10 members facilitated by one or two group
                therapists who meet at regular intervals to work on certain
                issues. It usually focuses on a particular issue such as grief,
                caregiver burnout, addiction etc. The therapist leads the group
                and the members contribute by sharing their experiences and
                offer support and feedback to each other. It helps people going
                through similar issues come together and counter the feelings of
                isolation.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex justify-center gap-10 mb-5">
            {/* left side */}
            <div className="w-[45%] flex flex-col gap-5 p-5 justify-center font-medium">
              <h1 className="text-3xl font-medium text-[#00677F] ">
                Support Group Therapy
              </h1>
              <p>
                Support group or self-help group is a platform for people going
                through similar concerns or experiences to come together and
                extend emotional support, share experiences, educational
                information and learn coping strategies. The group usually meets
                once a week and aims to garner peer support.
              </p>
            </div>
            {/* right side */}
            <div className="bg-[#B4F0FF] rounded-md relative h-[25rem] w-[45%]">
              <img
                loading="lazy"
                srcSet={SupportTherapyImg}
                className="absolute h-full w-full right-6 top-6"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex justify-center0 gap-10">
            {/* left side */}
            <div className="bg-[#B4F0FF] rounded-md relative h-[25rem] w-[45%]">
              <img
                loading="lazy"
                srcSet={IndividualTherapyImg}
                className="absolute h-full w-full left-6 top-6"
              />
            </div>
            {/* right side */}
            <div className="w-[45%] flex flex-col gap-5 p-5 justify-center font-medium">
              <h1 className="text-3xl font-medium text-[#00677F] ">
                Individual Therapy
              </h1>
              <p>
                Individual counselling which is also called talk therapy or
                psychotherapy is a one-on-one process in which the
                therapist/counsellor works with the clients in a
                confidential,non-judgmental, compassionate and safe environment.
                Counselling aims to resolve emotional difficulties and improve
                overall well-being. It helps clients to reflect on self and
                develop insights which lead to growth and better understanding
                of oneself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
