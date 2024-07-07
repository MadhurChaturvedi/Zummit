import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import flower_img from "../../images/flower-img.png";

const UpcomingGroup = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Data2 = [
    "Abuse",
    "Anxiety",
    "Anger Management",
    "Burn Out",
    "ADHD",
    "Bipolar Disorder",
  ];
  const Data = [
    {
      _id: 1,
      imageFile: flower_img,
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      _id: 2,
      imageFile: flower_img,
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      _id: 3,
      imageFile: flower_img,
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      _id: 4,
      imageFile: flower_img,
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      _id: 5,
      imageFile: flower_img,
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      _id: 6,
      imageFile: flower_img,
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      _id: 7,
      imageFile: flower_img,
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
  ];

  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <div className="nextArrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevron-right"
        width="45"
        height="45"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="prevArrow " onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevron-left"
        width="45"
        height="45"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 6l-6 6l6 6" />
      </svg>
    </div>
  );

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1400,
    autoplaySpeed: 1400,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "60px",
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
    swipe: false,
    pauseOnHover: false,
  };

  return (
    <div className="bg-skin px-28 py-10">
      <p className="text-4xl font-medium my-4">Upcoming Groups</p>
      <div className="relative">
        <div className="absolute w-[20%] h-[485px] top-3 right-0  bg-gradient-to-l from-[#5e5e5e]"></div>
        <Slider {...settings}>
          {Data.map((item) => (
            <Link to="#">
              <div className="flex justify-center inline-none">
                <div className="w-[348px] my-2 h-[485px] p-[10px] rounded-lg hover:shadow-lg cursor-pointer">
                  <div className="relative">
                    <div className="relative group overflow-hidden">
                      <img
                        src={item.imageFile}
                        alt=""
                        className="w-full transition-transform duration-500 transform scale-100 group-hover:scale-125"
                      />
                    </div>
                    <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
                      <p>Starts: {item.startsFrom}</p>
                    </div>
                  </div>
                  <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
                    {item.heading}
                  </p>
                  <p className="leading-[20px] text-[#272529]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <div className="py-10">
        <p className="text-4xl font-medium mb-4">Reach Out To Us For</p>
        <div className="slider-container pt-16 text-3xl font-medium text-center gap-4">
          <Slider {...settings2}>
            {Data2.map((item, index) => (
              <div
                key={index}
                className={`slide flex justify-center items-center ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <h3
                  className={`${
                    index === currentSlide
                      ? "slickCurrent text-4xl transform scale-110 transition-all duration-1000 ease-in-out"
                      : "text-3xl"
                  } `}
                >
                  {item}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UpcomingGroup;
