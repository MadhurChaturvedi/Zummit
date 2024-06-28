import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Therapists from "./components/Therapists";
import Resources from "./components/Resources";
import FAQ from "./components/FAQ";
import IndividualTherapy from "./components/IndividualThearapy";
import GroupTherapy from "./components/GroupTherapy";
import SupportTherapy from "./components/SupportTherapy";
import ContactSection from "./components/ContactSection";
import GroupTherapyDetail from "./components/GroupTherapyDetail";
import RegisterLogin from "./components/RegisterLogin";
import BookingPage from "./components/BookingPage";
import ForgotPassword from "./components/ForgotPassword";
import UserDashboard from "./components/UserDashboard";
import TherapistDetailsPage from "./components/TherapistDetailsPage";
import BookTherapistPage from "./components/BookTherapistPage";
import ShowBookingDetailsPage from "./components/ShowBookingDetailsPage";
import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";
import Admin_Appointments from "./components/Admin/Appointment/Admin_Appointments";
import Admin_Groups from "./components/Admin/Groups/Admin_Groups";
import Admin_Profile from "./components/Admin/Profile/Admin_Profile";
import Admin_Therapists from "./components/Admin/Therapist/Admin_Therapists";
import Admin_Resources from "./components/Admin/Resources/Admin_Resources";
import Admin_Clients from "./components/Admin/Client/Admin_Clients";
import Admin_Reviews from "./components/Admin/Reviews/Admin_Reviews";
import Admin_Transactions from "./components/Admin/Transactions/Admin_Transactions";
import TherapistHome from "./components/TherapistHome";
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
            <Therapists />
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
  { path: "/userdashboard", element: <UserDashboard /> },
  { path: "/bookingPage", element: <BookingPage /> },
  { path: "/TherapistDetailsPage/:id", element: <TherapistDetailsPage /> },
  { path: "/BookTherapistPage", element: <BookTherapistPage /> },
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
  { path: "/Therapist-home", element: <TherapistHome /> },
  { path: "/therapist-dashboard", element: <Therapist_Dashboard /> },
  { path: "/therapist-appointments", element: <Therapist_Appointment /> },
  { path: "/therapist-schedules", element: <Therapist_Schedules /> },
  { path: "/therapist-clients", element: <Therapist_Client /> },
  { path: "/therapist-groups", element: <Therapist_Groups /> },
  { path: "/therapist-observation", element: <Therapist_Observation /> },
  { path: "/therapist-responses", element: <Therapist_Responses /> },
  { path: "/therapist-transactions", element: <Therapist_Transactions /> },
  { path: "/therapist-profile", element: <Therapist_Profile /> },
  { path: "/admin-login", element: <Login /> },
  { path: "/admin-register", element: <SignUp /> },
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
  return (
    <Router>
      <Routes>{renderRoutes(routes)}</Routes>
    </Router>
  );
}

export default App;
