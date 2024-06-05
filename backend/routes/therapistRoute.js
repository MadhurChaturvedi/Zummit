const express = require("express");
const router = express.Router();

const { loginTherapist, logoutTherapist, createTherapist, getTherapist } = require("../controllers/Admin/therapistCredentials/createCredentials");

router.route("/loginTherapist").post(loginTherapist);
router.route("/logoutTherapist").get(logoutTherapist);
router.route("/createTherapist").post(createTherapist);
router.route("/getTherapist").get(getTherapist);



module.exports = router;
