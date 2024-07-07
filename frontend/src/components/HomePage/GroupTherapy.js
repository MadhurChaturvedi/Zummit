import React from "react";

function GroupTherapy() {
  return (
    <>
      <div className="h-[226px]">
        <img
          src={require("../images/Group-Banner.png")}
          alt=""
          className="object-cover w-full h-[100%]"
        />
      </div>

      <div className="body-IndividualTherapy h-[577px] w-[1101px] m-auto">
        <h1 className="text-[32px] text-[#00677F] font-semibold mt-[32px] mb-[32px]">
          {" "}
          Group Therapy{" "}
        </h1>
        <p className="text-justify text-[16px] mb-[32px] text-[#000]">
          Group Counselling or Group Therapy is a form of therapy in which the
          group comprises 4-10 members facilitated by one or two group
          therapists who meet at regular intervals to work on certain issues. It
          usually focuses on a particular issue such as grief, caregiver
          burnout, addiction etc. The therapist leads the group and the members
          contribute by sharing their experiences and offer support and feedback
          to each other. It helps people going through similar issues come
          together and counter the feelings of isolation.
        </p>

        {/* Curren Groudps Section Starts Here */}

        <div className="w-[1101px] h-[393px] flex justify-between mb-[32px]">
          <div className="w-[381px] mt-[37.5px]">
            <h2 className="text-[28px] text-[#00677F] font-medium">
              Current Groups
            </h2>
            <p className="text-[#001519] pt-[24px] pb-[24px]">
              Adipiscing nisl auctor mattis sit at integer odio risus ridiculus.
            </p>
            <button>
              {" "}
              <img
                src={require("../images/Aroe_left.png")}
                alt=""
                className="h-[45px] pr-[24px]"
              />{" "}
            </button>
            <button>
              {" "}
              <img src={require("../images/Aroe.png")} alt="" />{" "}
            </button>
          </div>

          <div>
            <div className="bg-[#B4F0FF] w-[651px] h-[70px] rounded absolute">&nbsp;</div>
            <div className="w-[651px] rounded flex justify-around relative">
              <div className="h-[363px] w-[265px]">
                <div className="w-[265px] h-[265px] p-[10px] rounded-lg cursor-pointer">
                  <div className="relative">
                    <div className="relative group overflow-hidden">
                      <img
                        src={require("../images/Anxiety-Group.png")}
                        alt=""
                        className="w-[243px] m-auto"
                      />
                    </div>
                    <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
                      <p>Starts: 16 March</p>
                    </div>
                  </div>
                  <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
                    Lacus amet egestas ullamcorper fermentum
                  </p>
                  <p className="leading-[20px] text-[#272529]">
                    Trauma, Anxiety, Depression, Life Transitions, Career
                    Uncertainty, Relationship Challenges, Quarter-Life Crisis,
                    Couples Therapy
                  </p>
                </div>
              </div>

              <div className="h-[363px] w-[265px]">
                <div className="w-[265px] h-[265px] p-[10px] rounded-lg cursor-pointer">
                  <div className="relative">
                    <div className="relative group overflow-hidden">
                      <img
                        src={require("../images/Loneliness-Group.png")}
                        alt=""
                        className="w-[243px] m-auto"
                      />
                    </div>
                    <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
                      <p>Starts: 16 March</p>
                    </div>
                  </div>
                  <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
                    Lacus amet egestas ullamcorper fermentum
                  </p>
                  <p className="leading-[20px] text-[#272529]">
                    Trauma, Anxiety, Depression, Life Transitions, Career
                    Uncertainty, Relationship Challenges, Quarter-Life Crisis,
                    Couples Therapy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Curren Grouds Section Ends Here */}
      </div>

      {/* More Groups Section Starts here */}

      <div className="h-[1080p] w-[1101px] m-auto">
        <h2 className="text-[28px] text-[#00677F] font-medium">More Groups</h2>
      </div>

      <div className="flex w-[1101px] justify-between m-auto mb-[76px]">
        <div className="w-[348px] my-2 h-[485px] p-[10px] rounded-lg hover:shadow-lg cursor-pointer">
          <div className="relative">
            <div className="relative group overflow-hidden">
              <img
                src={require("../images/flower-img.png")}
                alt=""
                className="w-[316px] m-auto"
              />
            </div>
            <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
              <p>Starts: 16 March</p>
            </div>
          </div>
          <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
            Lacus amet egestas ullamcorper fermentum
          </p>
          <p className="leading-[20px] text-[#272529]">
            Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty,
            Relationship Challenges, Quarter-Life Crisis, Couples Therapy
          </p>
        </div>
        <div className="w-[348px] my-2 h-[485px] p-[10px] rounded-lg hover:shadow-lg cursor-pointer">
          <div className="relative">
            <div className="relative group overflow-hidden">
              <img
                src={require("../images/flower-img.png")}
                alt=""
                className="w-[316px] m-auto"
              />
            </div>
            <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
              <p>Starts: 16 March</p>
            </div>
          </div>
          <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
            Lacus amet egestas ullamcorper fermentum
          </p>
          <p className="leading-[20px] text-[#272529]">
            Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty,
            Relationship Challenges, Quarter-Life Crisis, Couples Therapy
          </p>
        </div>
        <div className="w-[348px] my-2 h-[485px] p-[10px] rounded-lg hover:shadow-lg cursor-pointer">
          <div className="relative">
            <div className="relative group overflow-hidden">
              <img
                src={require("../images/flower-img.png")}
                alt=""
                className="w-[316px] m-auto"
              />
            </div>
            <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
              <p>Starts: 16 March</p>
            </div>
          </div>
          <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
            Lacus amet egestas ullamcorper fermentum
          </p>
          <p className="leading-[20px] text-[#272529]">
            Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty,
            Relationship Challenges, Quarter-Life Crisis, Couples Therapy
          </p>
        </div>
      </div>

      <div className="flex w-[1101px] justify-between m-auto mb-[455px]">
        <div className="w-[348px] my-2 h-[485px] p-[10px] rounded-lg hover:shadow-lg cursor-pointer">
          <div className="relative">
            <div className="relative group overflow-hidden">
              <img
                src={require("../images/flower-img.png")}
                alt=""
                className="w-[316px] m-auto"
              />
            </div>
            <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
              <p>Starts: 16 March</p>
            </div>
          </div>
          <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
            Lacus amet egestas ullamcorper fermentum
          </p>
          <p className="leading-[20px] text-[#272529]">
            Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty,
            Relationship Challenges, Quarter-Life Crisis, Couples Therapy
          </p>
        </div>
        <div className="w-[348px] my-2 h-[485px] p-[10px] rounded-lg hover:shadow-lg cursor-pointer">
          <div className="relative">
            <div className="relative group overflow-hidden">
              <img
                src={require("../images/flower-img.png")}
                alt=""
                className="w-[316px] m-auto"
              />
            </div>
            <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
              <p>Starts: 16 March</p>
            </div>
          </div>
          <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
            Lacus amet egestas ullamcorper fermentum
          </p>
          <p className="leading-[20px] text-[#272529]">
            Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty,
            Relationship Challenges, Quarter-Life Crisis, Couples Therapy
          </p>
        </div>
        <div className="w-[348px] my-2 h-[485px] p-[10px] rounded-lg hover:shadow-lg cursor-pointer">
          <div className="relative">
            <div className="relative group overflow-hidden">
              <img
                src={require("../images/flower-img.png")}
                alt=""
                className="w-[316px] m-auto"
              />
            </div>
            <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
              <p>Starts: 16 March</p>
            </div>
          </div>
          <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
            Lacus amet egestas ullamcorper fermentum
          </p>
          <p className="leading-[20px] text-[#272529]">
            Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty,
            Relationship Challenges, Quarter-Life Crisis, Couples Therapy
          </p>
        </div>
      </div>
    </>
  );
}

export default GroupTherapy;