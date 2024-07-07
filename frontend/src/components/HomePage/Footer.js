import React, { useState , useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const togglePrivacyPopup = () => {
    setShowPrivacy(!showPrivacy);
  };
  const currentDate = new Date().toLocaleDateString();

  const PrintRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => PrintRef.current,
  // });

  return (
    <div className="flex flex-col py-11 bg-cyan-600">
      <div className="flex gap-0 items-start self-center mt-5 w-full max-w-[1109px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-1 justify-center items-center self-start ">
          <div className="max-w-full w-[729px]">
            <div className="flex gap-5 justify-between max-md:flex-col max-md:gap-0 ">
              <div className="flex flex-col w-[46%] mr-40 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&"
                  className=" w-full  max-md:mt-10"
                />
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-lg font-medium text-red-50 whitespace-nowrap max-md:mt-10">
                    <Link to="/about" target="_top">
                      <div className="text-xl font-bold">About Us</div>
                    </Link>
                    <Link to="/FAQs" target="_top">
                      <div className="mt-3.5">FAQ</div>
                    </Link>

                    <div className="mt-2.5">Terms of use</div>
                    <div className="mt-2.5">Team</div>
                    <div
                      className="mt-2.5 cursor-pointer"
                      onClick={togglePrivacyPopup}
                    >
                      Privacy policy
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-lg font-medium text-red-50 max-md:mt-10">
                    <div className="text-xl font-bold">Contact us</div>
                    <a href="mailto:around@gmail.com">
                      <div className="mt-3.5">Around@gmail.com</div>
                    </a>
                    <div className="mt-2.5">+225548411213</div>   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3.5 self-end mt-36 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e4c1f0ccb3b9a5d13a18a37cfba335a970ddd6c019a76d8655f5e83f6dcfe14?apiKey=8587097ed3a94b279b125430c3e068a6&"
            className="w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10667eb531249253de022798166883ba71bff957aa9fd064dce2efdd2b36651d?apiKey=8587097ed3a94b279b125430c3e068a6&"
            className="w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fd3d0c777e3bad036a6014f6b58f16da0c080a2717c79f3b6889bdfdacd77d3?apiKey=8587097ed3a94b279b125430c3e068a6&"
            className="w-6 aspect-square"
          />
        </div>
      </div>
      <div className="mt-5 w-full bg-yellow-300 min-h-[1px] max-md:max-w-full" />
         
      {showPrivacy && (
        <div className="background-overlay">
          <div className="fixed inset-0 flex items-center justify-center z-50  ">
            <div className="privacy-popup ">
                <div className="privacy-popup-header">
                  <i
                    className="fa-regular fa-circle-xmark privacy-popup-close-icon h-10 cursor-pointer font-bold  text-5xl"
                    onClick={togglePrivacyPopup}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                  </i>
                </div>
              <div className="privacy-popup-content scrollable-y">
                <div  ref={PrintRef} className="content" >
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
                <div className="privacy-popup-footer">
                  <div className="privacy-popup-footer-button">
                  {/* <button
                    onClick={handlePrint}
                    className="privacy-popup-footer-link"
                  > */}
                    {/* Print
                  </button> */}
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
