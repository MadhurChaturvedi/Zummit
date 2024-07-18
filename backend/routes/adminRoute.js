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
router.post("/createAppointmentLists", protect, admin, createAppointment);
router.post("/createAdmindashboardDetails", protect, admin, createadminDashboard);
router.post("/createClientLists", protect, admin, createClient);
router.post("/createCreategroupsDetails", protect, admin, CreategroupsDetails);
router.post("/createCreateProfiles", protect, admin,createProfiles);
router.post("/createTherapistsDetails", protect, admin,createtherapistsDetails);
router.post("/createTransactions",protect,admin,createtransactions);
router.post("/adminRegister",protect,admin,registerAdmin);
router.post("/adminLogin",protect,admin,loginAdmin);
router.post("/createResource",protect,admin,createResource);
router.post("/createReviews",protect,admin,createReviewsList);
router.post("/createCredentials", protect, admin, createTherapist);
router.post("/createVideo", protect, admin,createAdminVideo);
router.post("/deleteVideo", protect, admin,deleteAdminVideo);



// update API's
router.route("/updateResource").post(updateResource);


// delete API's
router.route("/deleteReview").post(deleteReview);



//get API's
router.route("/getAdmin").get(getAdmin);
router.route("/adminDashboard").get(protect, admin, adminDashboard);
router.route("/appointmentslist").get(protect, admin, appointmentsList);
router.route("/clienlist").get(protect, admin, clientsList);
router.route("/profile").get(protect, admin, profiles);
router.route("/groupsdetails").get(protect, admin, groupsDetails);
router.route("/addedreview").get(protect, admin, reviewsList);
router.route("/reviews").get(protect, admin, reviewsList);
router.route("/therapistsdetails").get(protect, admin, therapistsDetails);
router.route("/transactions").get(protect, admin, transactions);
router.route("/resources").get(protect, admin, resources);


module.exports = router;

