import * as React from "react";
import UserSidebar from "../UserSidebar";
import Our_Therapist from "../../HomePage/Our_Therapist";

function BookingPage() {
  return (
    <>
      <div className="flex">
        <UserSidebar />
        <Our_Therapist />
      </div>
    </>
  );
}

export default BookingPage;
