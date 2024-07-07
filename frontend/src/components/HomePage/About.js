import React, { useEffect, useRef, useState } from "react";

const About = () => {
  //gif animation ka play once logic
  const gifRef = useRef(null);
  const [showGif, setShowGif] = useState(true);
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
    <div className="justify-center items-center text-5xl font-bold">
      <div className=" bg-[#0190B1] w-full py-8 xl:px-[169px] md:px-[80px]">
        <div className="p-0 m-0 flex justify-between">
          <div className="p-0 m-0 w-[643px]">
            <div>
              <p className="aboutus-title pb-8">About Us</p>
            </div>
            <div className="p-0 m-0">
              <p className="pb-4 aboutus-text text-[#101617]">
                AroundWithin believes in the harmonious process of collective,
                connected and community healing. Often, mental health may feel
                isolating, hence, We aim to develop and bridge this need for
                humanity through group and individual engagements, interactions
                using different secure spaces.
              </p>
              <p className="aboutus-text text-[#101617]">
                Group Therapy, Support Groups and more, AroundWithin hopes to
                create a nurturing environment for each of you who desires it,
                with care and compassion. If you are in the journey of enhancing
                your well-being, allow us to be your fellow traveler and walk
                the ‘road less traveled’ with you. Groups and shared spaces can
                anchor life experiences, unfold empathy, support and
                sensitivity.
              </p>
            </div>
          </div>
          <div className="p-0 m-0 w-[306px] flex align-bottom">
            {showGif ? (
              <img
                src={require(`../images/aroundwithin-speed.gif`)}
                alt=""
                className="object-contain w-full rounded-md"
              />
            ) : (
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&"
                className="object-contain w-full rounded-md"
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-full py-8 xl:px-[169px] md:px-[80px] bg-[#FDFEF1]">
        <div className="p-0 m-0 flex justify-between">
          <div className="p-0 pt-10 pb-10 m-0 lg:w-[643px] md:w-[400px]">
            <p className="pb-4 text-justify aboutus-text">
              Our team integrates members from diverse backgrounds and we unify
              at all things Mental Health and recognize the depth and meaning
              that collaboration holds. From engineering to marketing to
              counseling, we have it all.
            </p>
            <p className="text-justify aboutus-text">
              Well-being, accessible mental health support, empathy and positive
              regard, are ‘core’ to our Core Team. We thrive on enabling
              insights and spaces which address the gap we burn to fill,
              bringing people together to learn, unlearn and relearn from each
              other.
            </p>
          </div>
          <div className="p-0 m-0 sm:w-0 md:w-[300px] lg:w-[447px] flex items-center ">
            <div className="p-0 m-0">
              <img
                src={require(`../images/Premium_Vector___Talk_show_concept_illustration-removebg-preview 2 (2).png`)}
                alt=""
                className="object-contain w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-10 pt-4 xl:px-[169px] md:px-[80px] bg-[#FDFEE6]">
        <div className="w-full">
          <div className="p-0 m-0 pb-8 xl:pe-4 flex items-center justify-between">
            <div className="m-0 p-0 ">
              <div className="m-0 p-0 pe-6 w-[775px]">
                <p className="aboutus-team pb-8">Our Team</p>
                <p className="text-[24px] font-['Quicksand'] font-medium pb-6">
                  Sharaschandra - Co-Founder | Technology and Marketing
                </p>
                <p className=" pb-5 text-[16px] font-['Quicksand'] font-medium text-justify leading-[150%]">
                  Sharaschandra, an accomplished professional with a background
                  in engineering followed by an MBA specializing in Marketing.
                  With IIM as his alma mater and more than a decade of
                  experience in Data science and analytics brings a unique blend
                  of expertise to the table.
                </p>
                <p className="pb-5 text-[16px] font-['Quicksand'] font-medium text-justify leading-[150%]">
                  He was introduced to mental health space during the COVID-19
                  pandemic for his struggles and having witnessed the stigma
                  around mental health and many people going through the same
                  phase. He knew it was not just a personal issue but a societal
                  issue that needed to be addressed and believed that by
                  promoting mental health and well-being we can create a more
                  productive and efficient society.
                </p>
                <p className="pb-5 text-[16px] font-['Quicksand'] font-medium text-justify leading-[150%]">
                  He is deeply committed to revolutionizing mental healthcare in
                  India, leveraging technology to forge partnerships, foster
                  communities, and curate events that aim to make mental health
                  services accessible to all.
                </p>
              </div>
            </div>
            <div className="m-0 p-0 ">
              <div className="m-0 p-4 mt-4 dashed-border">
                <img
                  src={require(`../images/Frame 278.png`)}
                  alt=""
                  height={"357px"}
                  width={"306px"}
                  className="object-contain w-full rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="p-0 m-0 pb-8 xl:pe-4 flex items-center justify-between">
            <div className="m-0 p-0 ">
              <div className="m-0 p-4 mt-4 dashed-border">
                <img
                  src={require(`../images/Group 278.png`)}
                  alt=""
                  height={"357px"}
                  width={"306px"}
                  className="object-contain w-full rounded-md"
                />
              </div>
            </div>
            <div className="m-0 p-0 ">
              <div className="m-0 p-0 ps-6 w-[775px]">
                <p className="text-[24px] font-['Quicksand'] font-medium pb-6">
                  Asha Chillal (She/Her) - Co-Founder
                </p>
                <p className=" pb-5 text-[16px] font-['Quicksand'] font-medium text-justify leading-[150%]">
                  In 2016, Asha quit her job as an engineer and followed her
                  calling of being a Counseling Psychologist. After attaining a
                  Master's in Counseling Psychology from Christ University,
                  Bangalore and working as a Counselor for 3 years, at an EAP,
                  she opened the doors to private practice for clients, pan
                  India. She offers clients a wide range of in-person and online
                  counseling services to guide them through life’s challenges
                  and most trying times. With extensive counseling experience,
                  Asha’s caseload has been demographically diverse and
                  inclusive. She has worked with concerns such as significant 
                  relationships, pre-marital, marriage, grief, trauma, mental
                  health, work and parenting.
                </p>
                <p className="pb-5 text-[16px] font-['Quicksand'] font-medium text-justify leading-[150%]">
                  She endures an eclectic approach to counseling and selectively
                  integrates CBT, REBT, DBT, CAT, Narrative therapy and
                  Humanistic approaches along with mindfulness to best suit the
                  client's needs. She is also a BWRT (Brain Working Recursive
                  Therapy) level 1 practitioner.
                </p>
                <p className="pb-5 text-[16px] font-['Quicksand'] font-medium text-justify leading-[150%]">
                  She has worked at L&T construction for seven years and comes
                  with rich corporate experience which allowed her to travel
                  widely and understand different cultures and human
                  relationships.
                </p>
              </div>
            </div>
          </div>

          <div className="p-0 m-0 pb-8 xl:pe-4 flex items-center justify-between">
            <div className="m-0 p-0 ">
              <div className="m-0 p-0 pe-6 w-[775px]">
                <p className="text-[24px] font-['Quicksand'] font-medium pb-6">
                  Archita Bhalotia (She/Her) - Co-Founder
                </p>
                <p className=" pb-5 text-[16px] font-['Quicksand'] font-medium text-justify leading-[150%]">
                  Archita, a Clinical Mental Health Counselor, finds solace in
                  holding, comforting and safe spaces for her clients,
                  colleagues, communities and close folks. She found her place
                  in AroundWithin after years of experience in the mental health
                  fraternity, through different lenses.
                </p>
                <p className="pb-5 text-[16px] font-['Quicksand'] font-medium text-justify leading-[150%]">
                  She has many feathers in her hat, including a Masters in
                  Clinical Mental Health Counseling and being a National
                  Certified Counselor (USA). Archita finds her deepest insights
                  through an integrated approach to counseling.
                </p>
                <p className="pb-5 text-[16px] font-['Quicksand'] font-medium text-justify leading-[150%]">
                  When she is not knee deep in supporting fellow humans, she
                  draws energy from cooking, exploring, walking, reading and
                  catching a cat nap. Archita contributes to AroundWithin with
                  her knowledge, skills and passion for mental health, managing
                  products and service.
                </p>
              </div>
            </div>
            <div className="m-0 p-0 ">
              <div className="m-0 p-4 mt-4 dashed-border">
                <img
                  src={require(`../images/Group 279.png`)}
                  alt=""
                  height={"357px"}
                  width={"306px"}
                  className="object-contain w-full rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
