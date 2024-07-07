const express = require("express");
const { adminDashboard, createadminDashboard } = require("../controllers/Admin/adminDashboardController");
const { appointmentsList, createAppointment } = require("../controllers/Admin/appointmentsList");
const { clientsList, createClient } = require("../controllers/Admin/clientList");
const { profiles, createProfiles } = require("../controllers/Admin/profile");
const { groupsDetails, CreategroupsDetails } = require("../controllers/Admin/groupDetails");
const { reviewsList, createReviewsList, deleteReview } = require("../controllers/Admin/reviews");
const { therapistsDetails, createtherapistsDetails } = require("../controllers/Admin/therapistsDetails");
const { transactions, createtransactions } = require("../controllers/Admin/transactions");
const { registerAdmin, loginAdmin, getAdmin } = require("../controllers/Admin/adminController/register_Login");
const { resources, createResource, updateResource } = require("../controllers/Admin/resourcesList");
const { protect, admin } = require("../middleware/authorizationMiddleware");
const { createTherapist } = require("../controllers/Admin/therapistCredentials/createCredentials");
const { createAdminVideo, deleteAdminVideo } = require("../controllers/Admin/adminVideoController");


const router = express.Router();

//Create API's
router.route("/createAppointmentLists").post(createAppointment);
router.route("/createAdmindashboardDetails").post(createadminDashboard);
router.route("/createClientLists").post(createClient);
router.route("/createCreategroupsDetails").post(CreategroupsDetails);
router.route("/createCreateProfiles").post(createProfiles);
router.route("/createTherapistsDetails").post(createtherapistsDetails);
router.route("/createTransactions").post(createtransactions);
router.route("/adminRegister").post(registerAdmin);
router.route("/adminLogin").post(loginAdmin);
router.route("/createResource").post(createResource);
router.route("/createReviews").post(createReviewsList);
router.post("/createCredentials", protect, admin, createTherapist);
router.route("/createVideo").post(createAdminVideo);
router.route("/deleteVideo").post(deleteAdminVideo);



// update API's
router.route("/updateResource").post(updateResource);


// delete API's
router.route("/deleteReview").post(deleteReview);



//get API's
router.route("/getAdmin").get(getAdmin);
router.route("/adminDashboard").get(adminDashboard);
router.route("/appointmentslist").post(appointmentsList);
router.route("/clienlist").post(clientsList);
router.route("/profile").get(profiles);
router.route("/groupsdetails").post(groupsDetails);
router.route("/addedreview").get(reviewsList);
router.route("/reviews").post(reviewsList);
router.route("/therapistsdetails").post(protect, admin, therapistsDetails);
router.route("/transactions").post(transactions);
router.route("/resources").post(resources);


module.exports = router;

