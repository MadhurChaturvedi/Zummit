import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from "styled-components";

const FeedbackSection = () => {

  const [ScrollWidth_Marquee, setScrollWidth_Marquee] = useState(0);

  useEffect(() => {

    function handleResize() {
      const MarqueeWidth1 = document.querySelector(".marquee-group1").scrollWidth;
      const MarqueeWidth2 = document.querySelector(".marquee-group2").scrollWidth;

      let BiggerMarquee;
      MarqueeWidth1 > MarqueeWidth2 ? BiggerMarquee = MarqueeWidth1 : BiggerMarquee = MarqueeWidth2;
      if(BiggerMarquee > window.innerWidth){
        setScrollWidth_Marquee(() => MarqueeWidth1 - window.innerWidth)
      } 
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  const Marquee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: fit-content;
  margin: auto;
`;

  const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-${ScrollWidth_Marquee}px);
  }
`;

  const MarqueeGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 40px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  width: 100%;
  animation: ${scrollX} 5s linear infinite;
`;


  return (
    <div className='bg-[#FDFEF1] pb-[29px]'>
      <div className="w-[77vw] mx-auto mt-0 pt-4 my-[32px]">
        <h2 className="font-medium text-[36px] text-[#272529] mb-[32px]">Clients Feedback</h2>
        <p className="text-[24px] font-medium">These quotes represent a few of many positive reviews that we have recieved for therapists.
          If you would like to review your therapists, please send your review to
        </p>
      </div>
      <Marquee>
        <MarqueeGroup className="marquee-group1">
          {
            feedback.map((feedback, index) => {
              if (index % 2 === 0) {
                return (
                  <div className="bg-[rgb(235,247,255)] h-full w-[400px] grid gap-[5px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-3 rounded-[5px]" key={feedback.id}>
                    <p className="font-medium text-[20px] text-[#3D3B3E]">{feedback.message}</p>
                    <div className="self-end text-[#4DB3CB] text-[16px] font-normal">
                      {feedback.author} | {feedback.date}
                    </div>
                  </div>
                )
              }

            })
          }
        </MarqueeGroup>
        <MarqueeGroup className="marquee-group2">
          {
            feedback.map((feedback, index) => {
              if (index % 2 !== 0) {
                return (
                  <div className="bg-[rgb(235,247,255)] h-full w-[400px] grid gap-[5px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-3 rounded-[5px]" key={feedback.id}>
                    <p className="font-medium text-[20px] text-[#3D3B3E]">{feedback.message}</p>
                    <div className="self-end text-[#4DB3CB] text-[16px] font-normal">
                      {feedback.author} | {feedback.date}
                    </div>
                  </div>
                )
              }

            })
          }
        </MarqueeGroup>
      </Marquee>
    </div>
  )

}

export default FeedbackSection

const feedback = [
  {
    id: "1",
    message: "Hands down, One of the best",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "2",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "3",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "4",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "5",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "6",
    message: "Hands down, One of the best theprapist I ever have had, highly recommended",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "7",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "8",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20"
  },

]