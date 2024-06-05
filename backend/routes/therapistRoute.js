const express = require("express");
const router = express.Router();

const { loginTherapist, logoutTherapist, getTherapist } = require("../controllers/Admin/therapistCredentials/createCredentials");

router.route("/loginTherapist").post(loginTherapist);
router.route("/logoutTherapist").get(logoutTherapist);
router.route("/getTherapist").get(getTherapist);



module.exports = router;
