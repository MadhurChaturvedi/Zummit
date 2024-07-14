import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import "./App.css";
import Footer from "./components/HomePage/Footer";
import Home from "./components/HomePage/Home";
import Services from "./components/HomePage/Services";
import Our_Therapist from "./components/HomePage/Our_Therapist";
import Resources from "./components/HomePage/Resources";
import FAQ from "./components/HomePage/FAQ";
import IndividualTherapy from "./components/HomePage/IndividualThearapy";
import GroupTherapy from "./components/HomePage/GroupTherapy";
import SupportTherapy from "./components/HomePage/SupportTherapy";
import ContactSection from "./components/HomePage/ContactSection";
import GroupTherapyDetail from "./components/HomePage/GroupTherapyDetail";
import RegisterLogin from "./components/User/Register/RegisterLogin";
import BookingPage from "./components/User/Therapists/BookingPage";
import ForgotPassword from "./components/User/Forget Password/ForgotPassword";
import TherapistDetailsPage from "./components/User/Therapists/TherapistDetailsPage";
import BookTherapistPage from "./components/User/Therapists/BookTherapistPage";
import ShowBookingDetailsPage from "./components/User/Therapists/ShowBookingDetailsPage";
import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";
import Admin_Appointments from "./components/Admin/Appointment/Admin_Appointments";
import Admin_Groups from "./components/Admin/Groups/Admin_Groups";
import Admin_Profile from "./components/Admin/Profile/Admin_Profile";
import Admin_Therapists from "./components/Admin/Therapist/Admin_Therapists";
import Admin_Resources from "./components/Admin/Resources/Admin_Resources";
import Admin_Clients from "./components/Admin/Client/Admin_Clients";
import Admin_Reviews from "./components/Admin/Reviews/Admin_Reviews";
import Admin_Transactions from "./components/Admin/Transactions/Admin_Transactions";
import Login from "./components/Admin/Register_Loigin/Login";
import SignUp from "./components/Admin/Register_Loigin/SignUp";
import Therapist_Dashboard from "./components/Therapist/Dashboard/Therapist_Dashboard";
import Therapist_Appointment from "./components/Therapist/Appointment/Therapist_Appointment";
import Therapist_Schedules from "./components/Therapist/Schedules/Therapist_Schedules";
import Therapist_Client from "./components/Therapist/Clients/Therapist_Client";
import Therapist_Observation from "./components/Therapist/Observation/Therapist_Observation";
import Therapist_Responses from "./components/Therapist/Responses/Therapist_Responses";
import Therapist_Transactions from "./components/Therapist/Transactions/Therapist_Transactions";
import Therapist_Profile from "./components/Therapist/Profile/Therapist_Profile";
import Therapist_Groups from "./components/Therapist/Groups/Therapist_Groups";
import Therapist_Login from "./components/Therapist/Register_Loigin/Therapist_Login";
import Therapist_SignUp from "./components/Therapist/Register_Loigin/Therapist_Signup";
import UserDashboard from "./components/User/Dashboard/UserDashboard";
import UserGroups from "./components/User/Groups/UserGroups";
import UserResources from "./components/User/Resources/UserResources";
import UserFAQ from "./components/User/FAQ/UserFAQ";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/Slices/userSlice";
import { addTherapist } from "./utils/Slices/therapistSlice";
import { addAdmin } from "./utils/Slices/adminSlice";
import About from "./components/HomePage/About";
import UserAppointments from "./components/User/Appointments/UserAppointments";
import UserGroupTherapy from "./components/User/Groups/UserGroupTherapy";
import UserSupport from "./components/User/Groups/UserSupport";
import UserBillings from "./components/User/Billings/UserBillings";
import UserProfile from "./components/User/Profile/UserProfile";
import Create_Therapist_Credentail from "./components/Admin/Create_Therapist/Create_Therapist_Credentail";
import Create_Another_Admin from "./components/Admin/Create_Admin/Create_Another_Admin";

import IntakeResponse from "./components/Booking/IntakeResponse";
import { BASE_ADMIN, BASE_THERAPIST, BASE_USER } from "./utils/constants";

const WithHeaderAndFooter = ({ children }) => (
  <>
    <Navbar />
    {children}
    <ContactSection />
    <Footer />
  </>
);

const routes = [
  {
    path: "/",
    element: (
      <WithHeaderAndFooter>
        <Home />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: "/about",
    element: (
      <WithHeaderAndFooter>
        <About />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: "/services",
    children: [
      {
        path: "",
        element: (
          <WithHeaderAndFooter>
            <Services />
          </WithHeaderAndFooter>
        ),
      },
      {
        path: "individual-therapy",
        element: (
          <WithHeaderAndFooter>
            <IndividualTherapy />
          </WithHeaderAndFooter>
        ),
      },
      {
        path: "group-therapy",
        children: [
          {
            path: "",
            element: (
              <WithHeaderAndFooter>
                <GroupTherapy />
              </WithHeaderAndFooter>
            ),
          },
          {
            path: ":id",
            element: (
              <WithHeaderAndFooter>
                <GroupTherapyDetail />
              </WithHeaderAndFooter>
            ),
          },
        ],
      },
      {
        path: "support-group",
        element: (
          <WithHeaderAndFooter>
            <SupportTherapy />
          </WithHeaderAndFooter>
        ),
      },
    ],
  },
  {
    path: "/therapist",
    children: [
      {
        path: "",
        element: (
          <WithHeaderAndFooter>
            <Our_Therapist />
          </WithHeaderAndFooter>
        ),
      },
      {
        path: ":id",
        element: (
          <WithHeaderAndFooter>
            <TherapistDetailsPage />
          </WithHeaderAndFooter>
        ),
      },
    ],
  },
  {
    path: "/resources",
    element: (
      <WithHeaderAndFooter>
        <Resources />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: "/FAQs",
    element: (
      <WithHeaderAndFooter>
        <FAQ />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: "/login",
    element: (
      <WithHeaderAndFooter>
        <RegisterLogin />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: "/admin-register",
    element: (
      <WithHeaderAndFooter>
        <SignUp />
      </WithHeaderAndFooter>
    ),
  },

  {
    path: "/therapist-login",
    element: (
      <WithHeaderAndFooter>
        <Therapist_Login />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: "/therapist-register",
    element: (
      <WithHeaderAndFooter>
        <Therapist_SignUp />
      </WithHeaderAndFooter>
    ),
  },

  {
    path: "/admin-login",
    element: (
      <WithHeaderAndFooter>
        <Login />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <WithHeaderAndFooter>
        <ForgotPassword />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: "/",
  },
  { path: "/user-dashboard", element: <UserDashboard /> },
  { path: "/user-resources", element: <UserResources /> },
  { path: "/bookingPage", element: <BookingPage /> },
  { path: "/TherapistDetailsPage/:id", element: <TherapistDetailsPage /> },
  {
    path: "/BookTherapistPage",
    children: [
      {
        path: "",
        element: <BookTherapistPage />,
      },
      {
        path: "IntakeForm",
        element: <IntakeResponse />,
      },
    ],
  },
  { path: "/ShowBookingDetailsPage", element: <ShowBookingDetailsPage /> },
  { path: "/admin-dashboard", element: <AdminDashboard /> },
  { path: "/admin-appointments", element: <Admin_Appointments /> },
  { path: "/admin-profile", element: <Admin_Profile /> },
  { path: "/admin-clients", element: <Admin_Clients /> },
  { path: "/admin-reviews", element: <Admin_Reviews /> },
  { path: "/admin-groups", element: <Admin_Groups /> },
  { path: "/admin-therapists", element: <Admin_Therapists /> },
  { path: "/admin-transactions", element: <Admin_Transactions /> },
  { path: "/admin-resources", element: <Admin_Resources /> },
  { path: "/therapist-dashboard", element: <Therapist_Dashboard /> },
  { path: "/therapist-appointments", element: <Therapist_Appointment /> },
  { path: "/therapist-schedules", element: <Therapist_Schedules /> },
  { path: "/therapist-clients", element: <Therapist_Client /> },
  { path: "/therapist-groups", element: <Therapist_Groups /> },
  { path: "/therapist-observation", element: <Therapist_Observation /> },
  { path: "/therapist-responses", element: <Therapist_Responses /> },
  { path: "/therapist-transactions", element: <Therapist_Transactions /> },
  { path: "/therapist-profile", element: <Therapist_Profile /> },
  { path: "/therapist-login", element: <Therapist_Login /> },
  { path: "/therapist-register", element: <Therapist_SignUp /> },
  { path: "/admin-login", element: <Login /> },
  { path: "/admin-register", element: <SignUp /> },
  { path: "/user-groups", element: <UserGroups /> },
  { path: "/user-FAQs", element: <UserFAQ /> },
  { path: "/user-appointments", element: <UserAppointments /> },
  { path: "/user-billings", element: <UserBillings /> },
  { path: "/user-group/:id", element: <UserGroupTherapy /> },
  { path: "/user-support/:id", element: <UserSupport /> },
  { path: "/user-profile", element: <UserProfile /> },
  {
    path: "/admin-create-therapist-credentail",
    element: <Create_Therapist_Credentail />,
  },
  { path: "/admin-create-another-admin", element: <Create_Another_Admin /> },
];

function renderRoutes(routes) {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={route.element}
      children={route.children ? renderRoutes(route.children) : null}
    />
  ));
}

function App() {
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("userToken");
  const therapistToken = localStorage.getItem("therapistToken");
  const adminToken = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [user, therapist, admin] = await Promise.all([
          fetch(BASE_USER + "/getUser", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${userToken}`,
            },

            credentials: "include",
          }),
          fetch(BASE_THERAPIST + "/getTherapist", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${therapistToken}`,
            },

            credentials: "include",
          }),
          fetch(BASE_ADMIN + "/getAdmin", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${adminToken}`,
            },

            credentials: "include",
          }),
        ]);

        const userInfo = await user.json();
        const therapistInfo = await therapist.json();
        const adminInfo = await admin.json();

        dispatch(addUser(userInfo));
        dispatch(addTherapist(therapistInfo));
        dispatch(addAdmin(adminInfo));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Router>
      <Routes>{renderRoutes(routes)}</Routes>
    </Router>
  );
}

export default App;
