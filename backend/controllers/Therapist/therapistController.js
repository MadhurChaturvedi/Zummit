const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const Therapist = require("../../models/Therapist/therapistModel");
const jwt = require("jsonwebtoken");
const generateToken = require("../../utils/generateToken")

const loginTherapist = asyncHandler(async (req, res) => {
  const { input, password } = req.body;

  if (!input || !password) {
    res.status(400).json({
      message: "Please add email/phone & password",
    });
    throw new Error("Please add email/phone & password");
  }

  const therapist = await Therapist.findOne({ input });

  if (!therapist) {
    res.status(400).json({
      message : "Therapist does not exist",
    })
    throw new Error("Therapist does not exist");
  }

  const passwordIsCorrect = await bcrypt.compare(password, therapist.password);

  if (therapist && passwordIsCorrect) {
    
    therapist.loginCount += 1;
    await therapist.save();

    const token = generateToken(therapist._id);
    const newTherapist = await Therapist.findOne({ input }).select("-password");
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      // secure: true, // for deployment
      // sameSite: none
    });

    res.status(201).json({ newTherapist, Authorization: token });
  } else {
    res.status(400).json({
      message: "Invalid email or password",
    });
    throw new Error("Invalid email or password");
  }
});

const getTherapist = asyncHandler(async (req, res) => {
  const authHeader = req.headers['authorization'];
  const therapistToken = authHeader && authHeader.split(' ')[1];
    if (!therapistToken) {
        return res.status(401).json({ error: "Unauthorized Therapist" });
    }
    try {
      const decoded = jwt.verify(therapistToken, process.env.JWT_SECRET);
      const therapistId = decoded.id;
    
      const therapist = await Therapist.findById(therapistId).select('-password');

      if (!therapist) {
          return res.status(404).json({ error: "Therapist not found" });
      }

      res.status(200).json({
          success: true,
          data: user,
          message: "Therapist retrieved successfully",
      });
  } catch (error) {
      console.error(`Error verifying Therapist by token: ${error.message}`);
      res.status(500).json({ message: "Internal server error" });
  }
});



module.exports = {loginTherapist,getTherapist}