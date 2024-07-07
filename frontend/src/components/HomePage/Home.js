import React from "react";

import Hero from "./Hero";
import Card from "./Upcoming_Group_Reach_Out_Us/Upcoming_Group";
import Carosel from "./Carosel/Carosel";
// import ContactSection from "./ContactSection";
import FeedbackSection from "./Client_Feedback";
import Meet from "./Meet_Our_Therapist";
import Health from "./Health";

const Home = () => {
  return (
    <div>
      <Hero />
      <Card />
      <Carosel />
      <Meet />
      <Health />
      <FeedbackSection />
      {/* <ContactSection /> */}
    </div>
  );
};

export default Home;
