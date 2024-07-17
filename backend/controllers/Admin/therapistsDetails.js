const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Appointment = require("../../models/Admin/adminAppointmentModel");
const AdminTherapists = require("../../models/Admin/adminTherapist.Model");
const { validationResult } = require('express-validator');
const AdminLoginRegister = require("../../models/Admin/AdminRegisterLogin/adminModel");

const therapistsDetails = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {

    const therapists = await AdminTherapists.find({});

    res.status(200).json({
      success: true,
      therapists: therapists,
      message: "Therapists details Granted"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const createtherapistsDetails = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input, token, therapistsDetails } = req.body;

  if (!input || !token || !therapistsDetails) {
    return res.status(402).json({ message: "Please fill all fileds" });
  }

  try {
    const admin = await AdminLoginRegister.findOne({ input }).select(
      "-password"
    )
    if (!admin) {
      return res.status(404).json({ message: "therapist Details not found" });
    }


    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (JSON.stringify(decodedToken.id) !== JSON.stringify(admin._id)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newTherapistDetails = new AdminTherapists(therapistsDetails);
    await newTherapistDetails.save()

    res.status(200).json({
      success: true,
      therapists: newTherapistDetails,
      message: "therapists  created successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = { therapistsDetails, createtherapistsDetails };

