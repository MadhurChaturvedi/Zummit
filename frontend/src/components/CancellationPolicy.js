import React from "react";

const CancellationPolicy = ({toggleCancellationPrivacy}) => {
  return (
    <div className="background-overlay">
      <div className="fixed inset-0 flex items-center justify-center z-50  ">
        <div className="privacy-popup ">
          <div className="privacy-popup-header">
            <i
              className="privacy-popup-close-icon h-10 cursor-pointer font-bold  text-5xl"
              onClick={toggleCancellationPrivacy}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </i>
          </div>
          <div className="privacy-popup-content scrollable-y">
            <div className="content">
              <h2 className="privacy-popup-title text-center">
                Cancellation and Rescheduling Policy:
              </h2>
              <p>
                We understand that unforeseen circumstances may arise,
                necessitating the cancellation or rescheduling of therapy
                appointments. However, to ensure the smooth functioning of our
                practice and to accommodate all clients effectively, we have
                established the following cancellation policy:{" "}
              </p>

              <h2 className="privacy-popup-title">Cancellation Notice:</h2>
              <div className="privacy-popup-body">
                <li>
                  {" "}
                  Clients are required to provide at least 24 hours’ notice for
                  any cancellation or rescheduling of appointments. This allows
                  us ample time to offer the vacant slot to another client who
                  may need assistance.
                </li>
              </div>
              <h2 className="privacy-popup-title">
                Late Cancellations/No-Shows:
              </h2>
              <div className="privacy-popup-body">
                {" "}
                <li>
                  Appointments cancelled with less than 24 hours’ notice or
                  missed without prior notification will be considered late
                  cancellations or no-shows.
                </li>
                {""}
                <h2 className="privacy-popup-title">
                  Late Cancellation/No-Show Fee:
                </h2>
                <div className="privacy-popup-body">
                  <li>
                    {" "}
                    Clients will be charged the full session fee for late
                    cancellations or no-show appointments. This fee is
                    non-negotiable and must be paid before scheduling any future
                    appointments.{" "}
                  </li>
                </div>
                {""}
                <h2 className="privacy-popup-title">Exceptions:</h2>
                <div className="privacy-popup-body">
                  <li>
                    We understand that emergencies and unforeseen events may
                    occur. In such cases, exceptions to the cancellation policy
                    may be made at the discretion of the therapist.
                  </li>
                </div>
                {""}
                <h2 className="privacy-popup-title">
                  Repeated Late Cancellations/No-Shows:
                </h2>
                <div className="privacy-popup-body">
                  <li>
                    Clients who demonstrate a pattern of repeated late
                    cancellations or no-shows may be subject to further action,
                    including termination of services.
                  </li>
                </div>
                {""}
                <h2 className="privacy-popup-title">Communication:</h2>
                <div className="privacy-popup-body">
                  <li>
                    Clients are encouraged to communicate any scheduling
                    conflicts or emergencies as soon as they arise. Open
                    communication helps us to better serve you and accommodate
                    your needs effectively.
                  </li>
                </div>
                {""}
                <h2 className="privacy-popup-title">Rescheduling:</h2>
                <div className="privacy-popup-body">
                  <li>
                    We will make every effort to accommodate requests for
                    rescheduling appointments, provided that it does not disrupt
                    the regular flow of our practice and does not inconvenience
                    other clients.
                  </li>
                </div>
                <h2 className="privacy-popup-title">
                  Confirmation of Appointments:{" "}
                </h2>
                <div className="privacy-popup-body">
                  <li>
                    {" "}
                    We will send reminders or confirmations for upcoming
                    appointments via email, text, or phone call. It is the
                    client's responsibility to confirm their appointment in
                    advance.
                  </li>
                </div>
                <div className="privacy-popup-body my-2">
                  <p>
                    By scheduling an appointment with our practice, you
                    acknowledge and agree to adhere to the terms of this
                    cancellation policy. We appreciate your cooperation and
                    understanding in this matter. If you have any questions or
                    concerns regarding this policy, please feel free to discuss
                    them with your therapist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
