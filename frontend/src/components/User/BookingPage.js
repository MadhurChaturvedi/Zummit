import * as React from "react";
import Therapists from "../HomePage/Our_Therapist";
import Side_Navbar from "../Side_Navbar";
function BookingPage() {
  return (
    <>
      <div className="flex">
        <Side_Navbar />
        <Therapists />
      </div>
    </>
  );
}

export default BookingPage;
