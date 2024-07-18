const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken"); 
const Appointment = require("../../models/Admin/adminAppointmentModel");
const { validationResult } = require('express-validator');
const AdminLoginRegister = require("../../models/Admin/AdminRegisterLogin/adminModel");

const appointmentsList = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    try {
      const appointmentsLists=await Appointment.find({});
      

      res.status(200).json({
        success: true,
        adminAppointmentList:appointmentsLists,
        message: "Appointments list Granted"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

const createAppointment = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { appointmentData } = req.body;

  if (

    !appointmentData
  ) {
    return res.status(402).json({ message: "Please fill all fileds" });
  }

  try {

    const newAppointment = new Appointment(appointmentData);

    await newAppointment.save();

    res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      appointment: newAppointment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports={appointmentsList,createAppointment};