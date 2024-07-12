import React from 'react';

const PrivacyPolicy = ({ togglePrivacyPopup }) => {
  return (
    <div className="background-overlay">
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="privacy-popup">
              <div className="privacy-popup-header">
                <i
                  className="privacy-popup-close-icon h-10 cursor-pointer font-bold  text-5xl"
                  onClick={togglePrivacyPopup}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                </i>
              </div>
            <div className="privacy-popup-content scrollable-y">
              <div className="content" >
              <h2 className="privacy-popup-title">
                Privacy and Confidentiality Policy
              </h2>
              <p>
                At AroundWithin, we recognize the sensitivity and importance
                of maintaining the privacy and confidentiality of our users'
                personal information, especially when it comes to matters of
                mental health. This Privacy and Confidentiality Policy
                outlines how we collect, use, disclose, and protect your
                personal information when you use our online mental health
                platform, which provides group therapies, support groups, and
                individual counseling.{" "}
              </p>

              <h2 className="privacy-popup-title">
                Collection of Personal Information:
              </h2>
              <div className="privacy-popup-body">
                <li>
                  {" "}
                  We collect personal information from you when you register
                  an account on our platform, participate in group therapies
                  or support groups, or engage in individual counseling
                  sessions. This information may include your name, email
                  address, date of birth, gender identity, contact
                  information, and any other information you choose to share
                  with us.
                </li>

                <li>
                  {" "}
                  We may also collect information about your interactions with
                  our platform, including your usage patterns,session logs,
                  and device information.{" "}
                </li>
              </div>
              <h2 className="privacy-popup-title">
                Use of Personal Information:
              </h2>
              <div className="privacy-popup-body">
                {" "}
                <li>
                  We use your personal information to provide you with access
                  to our platform and its services, including group therapies,
                  support groups, and individual counseling sessions.
                </li>
                <li>
                  Your information may be used to personalize your experience
                  on our platform and to communicate with you about our
                  services, updates, and relevant information.
                </li>
                <li>
                  We may use aggregated and anonymized data for research and
                  analytical purposes to improve our services and better
                  understand mental health trends and needs.
                </li>
                {""}
                <h2 className="privacy-popup-title">
                  Disclosure of Personal Information:
                </h2>
                <div className="privacy-popup-body">
                  <li>
                    {" "}
                    We do not sell, trade, or rent your personal information
                    to third parties.{" "}
                  </li>

                  <li>
                    {" "}
                    We may share your personal information with authorized
                    third-party service providers who assist us in operating
                    our platform and delivering our services. These service
                    providers are contractually obligated to maintain the
                    confidentiality and security of your information.
                  </li>

                  <li>
                    {" "}
                    We may disclose your personal information if required by
                    law or in response to valid legal requests, such as
                    subpoenas or court orders.
                  </li>
                </div>
                {""}
                <h2 className="privacy-popup-title">Confidentiality:</h2>
                <div className="privacy-popup-body">
                  <li>
                    Your privacy and confidentiality are of utmost importance
                    to us.All interactions, communications, and information
                    shared within group therapies, support groups, and
                    individual counseling sessions are treated with the
                    strictest confidence.
                  </li>

                  <li>
                    {" "}
                    Our therapists and moderators are bound by professional
                    ethical standards and legal obligations to maintain the
                    confidentiality of your information.
                  </li>

                  <li>
                    {" "}
                    However, it's important to note that while we take every
                    precaution to protect your information, no method of
                    transmission over the internet or electronic storage is
                    completely secure. Therefore, we cannot guarantee absolute
                    security.{" "}
                  </li>
                </div>
                {""}
                <h2 className="privacy-popup-title">Data Retention:</h2>
                <div className="privacy-popup-body">
                  <li>
                    We retain your personal information only for as long as
                    necessary to fulfill the purposes outlined in this Privacy
                    and Confidentiality Policy, unless a longer retention
                    period is required or permitted by law.
                  </li>
                </div>
                {""}
                <h2 className="privacy-popup-title">
                  Your Choices and Rights:
                </h2>
                <div className="privacy-popup-body">
                  <li>
                    You have the right to access, update, or delete your
                    personal information. You can do this by accessing your
                    account settings or contacting us directly.{" "}
                  </li>

                  <li>
                    You have the right to withdraw your consent to our
                    processing of your personal information at any time, where
                    applicable.
                  </li>
                </div>
                {""}
                <h2 className="privacy-popup-title">Children's Privacy: :</h2>
                <div className="privacy-popup-body">
                  <li>
                    Our platform is not intended for use by individuals under
                    the age of 18. We do not knowingly collect personal
                    information from children. If you believe that we have
                    inadvertently collected personal information from a child,
                    please contact us immediately.{" "}
                  </li>
                </div>
                <h2 className="privacy-popup-title">
                  Updates to this Policy:{" "}
                </h2>
                <div className="privacy-popup-body">
                  <li>
                    {" "}
                    We may update this Privacy and Confidentiality Policy from
                    time to time to reflect changes in our practices or legal
                    requirements. We will notify you of any material changes
                    by posting the updated policy on our website or by other
                    means of communication.
                  </li>

                  <li>
                    {" "}
                    By using our online mental health platform, you consent to
                    the collection, use, and disclosure of your personal
                    information as described in this Privacy and
                    Confidentiality Policy. If you have any questions or
                    concerns about this policy or our practices, please
                    contact us at [Contact Information].
                  </li>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PrivacyPolicy