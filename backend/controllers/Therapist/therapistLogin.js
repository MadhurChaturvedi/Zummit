const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const Therapist = require("../../models/Therapist/therapistModel");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

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


module.exports = {loginTherapist}