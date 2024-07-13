import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../SearchContainer";
import PrivacyPolicy from "./PrivacyPolicy";

const Section = ({ title, description, isVisible, toggleVisibility }) => {

  return (
    <>
      <div className="text-white rounded-xl m-2">
        <div
          className="flex bg-[#0090b0] p-2 rounded-lg justify-between cursor-pointer"
          onClick={toggleVisibility}
        >
          <h3 className="font-bold text-lg">{title}</h3>
          <button>
            {isVisible ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-down"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-up"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 15l6 -6l6 6" />
              </svg>
            )}
          </button>
        </div>
        {isVisible && (
          <div className=" rounded-xl border mt-2 p-2 text-black">
            <p className="text-start">{description}</p>
          </div>
        )}
      </div>
    </>
  );
};

const FAQs = () => {
  const PrintRef = useRef();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const togglePrivacyPopup = () => {
    setShowPrivacy(!showPrivacy);
  };
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCareers: false,
    showCareers1: false,
    showCareers2: false,
    showCareers3: false,
    showCareers4: false,
    showCareers5: false,
    showCareers6: false,
    showCareers7: false,
    showCareers8: false,
    showCareers9: false,
    showCareers10: false,
    showCareers11: false,
    showCareers12: false,
  });

  const toggleVisibility = (sectionName) => {
    
    setSectionConfig((prevConfig) => {
      // Check if the section being clicked is already open
      if (prevConfig[sectionName]) {
        // If it's open, close all sections
        return {
          showAbout: false,
          showTeam: false,
          showCareers: false,
          showCareers1: false,
          showCareers2: false,
          showCareers3: false,
          showCareers4: false,
          showCareers5: false,
          showCareers6: false,
          showCareers7: false,
          showCareers8: false,
          showCareers9: false,
          showCareers10: false,
          showCareers11: false,
          showCareers12: false,
        };
      } else {
        // If it's not open, close all sections and then open the clicked one
        return {
          showAbout: sectionName === "showAbout",
          showTeam: sectionName === "showTeam",
          showCareers: sectionName === "showCareers",
          showCareers1: sectionName === "showCareers1",
          showCareers2: sectionName === "showCareers2",
          showCareers3: sectionName === "showCareers3",
          showCareers4: sectionName === "showCareers4",
          showCareers5: sectionName === "showCareers5",
          showCareers6: sectionName === "showCareers6",
          showCareers7: sectionName === "showCareers7",
          showCareers8: sectionName === "showCareers8",
          showCareers9: sectionName === "showCareers9",
          showCareers10: sectionName === "showCareers10",
          showCareers11: sectionName === "showCareers11",
          showCareers12: sectionName === "showCareers12",
        };
      }
    });
  };

  return (
    <div className="mb-16 w-full p-4">
      <SearchContainer/>
      <div>
        <p className="text-2xl font-medium mb-10 ml-5">FAQ</p>
      </div>
      <div>
        <div className="flex flex-col h-[20%] w-[70%] mx-40">
          <Section
            title={
              "What is AroundWithin and how can it help me with my mental health?"
            }
            description={
              <>
                AroundWithin is an organization committed to enhancing mental health through diverse avenues by Offering group therapies, support groups, and individual counseling. Through these comprehensive approaches, AroundWithin endeavours to nurture resilience, foster growth, and uplift spirits in 
                the realm of mental health. To know more click 
                <Link to="/about" style={{color:"blue"}}>  About Us.</Link>
              </>
            }
            
            isVisible={sectionConfig.showAbout}
            toggleVisibility={() => toggleVisibility("showAbout")}
          />
          <Section
            title={
              "Is AroundWithin a substitute for psychiatric treatment/medication?"
            }
            description={
              "AroundWithin is an online platform for professional therapy/counseling. Please note that your therapist won’t be able to make any official diagnosis, fulfil any court order, or prescribe medicines. "
            }
            isVisible={sectionConfig.showTeam}
            toggleVisibility={() => toggleVisibility("showTeam")}
          />
          <Section
            title={"How do I sign up for AroundWithin?"}
            description={<>"To sign up please <Link to="/login" style={{color:"blue"}} >click here."</Link> </>}
            isVisible={sectionConfig.showCareers}
            toggleVisibility={() => toggleVisibility("showCareers")}
          />
          <Section
            title={
              "Is my personal information and data secure on AroundWithin?"
            }
            description={
              <>
              The information that you share is protected by data privacy laws, for more information visit our 
               <span onClick={togglePrivacyPopup} style={{color: "blue", cursor: "pointer" }}> Privacy Policy.</span> 
              </>
            }
            isVisible={sectionConfig.showCareers1}
            toggleVisibility={() => toggleVisibility("showCareers1")}
          />
          <Section
            title={
              "What types of mental health support does AroundWithin offer?"
            }
            description={
              <>
              We offer support for all kinds of mental health concerns. To know more please <Link to="/services" style={{color:"blue"}}>click here.</Link> You can write to us info@aroundwithin.com. Or you can set up an appointment with one of our therapists directly to gain more insights.
              </>
            }
            isVisible={sectionConfig.showCareers2}
            toggleVisibility={() => toggleVisibility("showCareers2")}
          />
          <Section
            title={
              "Are the professionals on AroundWithin qualified? How are they verified?"
            }
            description={
              "The professionals at AroundWithin are hand-picked based on their credentials and good standing in society. During our rigorous process of selection, we do a thorough background check and we ensure that the providers have master's degrees in Psychology and relevant fields.   Providers who are picked will have to provide proper documentation and proof of identity. We then cross-check their credential information with previous organizations they have worked with and a few references. "
            }
            isVisible={sectionConfig.showCareers3}
            toggleVisibility={() => toggleVisibility("showCareers3")}
          />
          <Section
            title={
              "How much does AroundWithin cost? Are there free services available?"
            }
            description={
              <>
              AroundWithin is all about affordable mental health. Our charges depend on the type of services that you avail. For information on this please <Link to="/services" style={{color:"blue"}}>click here."</Link>. We are a fee-for-service organization; hence we do not take pro bono cases.
              </>
            }
            isVisible={sectionConfig.showCareers4}
            toggleVisibility={() => toggleVisibility("showCareers4")}
          />
          <Section
            title={"Can I use AroundWithin if I'm experiencing a crisis?"}
            description={
              "No, we are not a crisis helpline. Reach out to the government helplines."
            }
            isVisible={sectionConfig.showCareers5}
            toggleVisibility={() => toggleVisibility("showCareers5")}
          />
          <Section
            title={
              "How does the matching process work if I'm looking for a mental health professional?"
            }
            description={
              <>
              We leave that choice to you. Check your preferences and choose the therapists accordingly. You can browse our professionals by <Link to="/therapist" style={{color:"blue"}}>clicking here.</Link>
              </>
            }
            isVisible={sectionConfig.showCareers6}
            toggleVisibility={() => toggleVisibility("showCareers6")}
          />
          <Section
            title={
              "What types of communication methods are available on AroundWithin?"
            }
            description={
              "We provide telephonic and video communication. We will be coming up with messaging services soon!"
            }
            isVisible={sectionConfig.showCareers7}
            toggleVisibility={() => toggleVisibility("showCareers7")}
          />
          <Section
            title={
              "What if I'm not satisfied with the support, I receive on AroundWithin?"
            }
            description={
              "AroundWithin appreciates your timely feedback. You can express your concern directly to the support team or your therapist so that they will make the required adjustments. If you are still not satisfied, you always have the option to choose another counselor/therapist."
            }
            isVisible={sectionConfig.showCareers8}
            toggleVisibility={() => toggleVisibility("showCareers8")}
          />
          <Section
            title={"How do I cancel or modify my subscription to AroundWithin?"}
            description={"Please go through our cancellation policy."}
            isVisible={sectionConfig.showCareers9}
            toggleVisibility={() => toggleVisibility("showCareers9")}
          />
          <Section
            title={"Can I use AroundWithin anonymously?"}
            description={
              "When you sign up, we provide you with the option of having a preferred name that will be used to identify you in the system. However, when you start the therapy process, we will ask you for your contact information for emergencies, such as if a therapist believes that you or someone else might be in danger. All of this data is protected by the confidentiality requirements of the therapists' ethical and legal guidelines."
            }
            isVisible={sectionConfig.showCareers10}
            toggleVisibility={() => toggleVisibility("showCareers10")}
          />
          <Section
            title={"Is AroundWithin available internationally?"}
            description={
              "AroundWithin is available only in India and for citizens residing in India."
            }
            isVisible={sectionConfig.showCareers11}
            toggleVisibility={() => toggleVisibility("showCareers11")}
          />
          <Section
            title={"Are there any age restrictions for using AroundWithin?"}
            description={
              "People above the age of 18 can sign up with AroundWithin. Children and Adolescents should be accompanied by their parent or guardian. "
            }
            isVisible={sectionConfig.showCareers12}
            toggleVisibility={() => toggleVisibility("showCareers12")}
          />
        </div>
      </div>
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
              </div>
            </div>
          </div>
        </div>
      )}

        <PrivacyPolicy togglePrivacyPopup={togglePrivacyPopup} />
      )} 

    </div>
  );
};

export default FAQs;
