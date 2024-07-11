const express = require("express");
const router = express.Router();

const { logoutTherapist } = require("../controllers/Admin/therapistCredentials/createCredentials");
const { therapistAppointmentLists, createtherapistAppointmentLists } = require("../controllers/Therapist/therapistAppointmentsController.js")


const { therapistTransactionLists, createtherapistTransactionLists } = require("../controllers/Therapist/therapistTransactionsController.js")

const { therapistGroupLists, createtherapistGroupLists } = require("../controllers/Therapist/therapistGroupsController.js");
const { therapistObservationLists, createTherapistObservationLists } = require("../controllers/Therapist/therapistObservationController.js");

const { therapistScheduleLists, createTherapistSchedule } = require('../controllers/Therapist/therapistScheduleController.js')

const {loginTherapist, getTherapist} =require("../controllers/Therapist/therapistController.js")

const { therapistClientList, createTherapistClientList } = require('../controllers/Therapist/therapistClientController.js')

router.route("/loginTherapist").post(loginTherapist);
router.route("/logoutTherapist").get(logoutTherapist);
router.route("/getTherapist").get(getTherapist);

router.route("/createtherapistAppointment").post(createtherapistAppointmentLists);
router.route("/gettherapistAppointmentLists").get(therapistAppointmentLists);
router.route("/createtherapistGroup").post(createtherapistGroupLists);
router.route("/gettherapistGroupLists").get(therapistGroupLists);

router.route("/createtherapistTransaction").post(createtherapistTransactionLists);
router.route("/gettherapistTransactionLists").get(therapistTransactionLists);

router.route("/getTherapistObservationLists").get(therapistObservationLists);
router.route("/createTherapistObservationLists").post(createTherapistObservationLists);

router.route("/therapistClient").get(therapistClientList);
router.route("/createTherapistClientList").post(createTherapistClientList);

router.route("/therapistLogin").post(loginTherapist)


module.exports = router;
