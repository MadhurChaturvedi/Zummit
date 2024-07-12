const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  VerifyClient_ByToken,
} = require("../controllers/User/userController");
const { appointmentList } = require("../controllers/User/appointmentList");
const { protect } = require("../middleware/authMiddleware");

const {
  getIndividualBooking,
} = require("../controllers/Booking/BookingSlotsController");
const {
  getTherapistById,
  getAllTherapists,
} = require("../controllers/Booking/therapistDetails");
const {
  getPatientById,
  getAllPatients,
} = require("../controllers/Booking/patientDetails");
const HandleAppointments = require("../controllers/Booking/bookingAppointment");

const {
  getGroupTherapySessions,
  createGroupTherapySession,
} = require("../controllers/User/groupTherapy");
const {
  getSupportGroupSessions,
  createSupportGroupSession,
} = require("../controllers/User/supportgroup");

const {
  newOrder,
  verifyPayment,
  updatePaymentStatus,
} = require("../controllers/User/paymentController/orders");
const {
  getAllPayments,
  getPaymentById,
  checkPaymentStatus,
  getOrderById,
  getbyClientId,
  getByTherapistId,
} = require("../controllers/User/paymentController/paymentDetails");

const {
  getAllAdminVideos,
} = require("../controllers/Admin/adminVideoController");
const { upCommingGroups } = require("../controllers/User/upcomingGroups");
router.get("/Grouptherapy", getGroupTherapySessions);
router.post("/Grouptherapy", createGroupTherapySession);

router.get("/Supportgroup", getSupportGroupSessions);
router.post("/Supportgroup", createSupportGroupSession);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getUser", getUser);
router.get("/verifyClient", VerifyClient_ByToken);
router.get("/upcomingGroups", upCommingGroups);

router.get("/booking/getAvailableSlotsByTherapist/:id", getIndividualBooking);
router.get("/booking/getTherapistDetails/find/:id", getTherapistById);
router.get("/booking/getTherapistDetails", getAllTherapists);
router.get("/booking/getPatientDetails/:id", getPatientById);
router.get("/booking/getPatientDetails", getAllPatients);
router.post("/booking/appointment", HandleAppointments);

router.post("/newOrder", newOrder);
router.post("/verifyPayment", verifyPayment);
router.post("/updatePaymentStatus",updatePaymentStatus)


router.get("/getAllPayments", getAllPayments);
router.get("/getPaymentById/:id", getPaymentById);
router.get("/checkPaymentStatus/:paymentId", checkPaymentStatus);
router.get("/getOrderById/:orderId", getOrderById);
router.get("/getbyClientId/:clientId", getbyClientId);
router.get("/getByTherapistId/:therapistId", getByTherapistId);


router.get("/appointmentList", appointmentList);
router.route("/adminvideos").get(getAllAdminVideos);

module.exports = router;
