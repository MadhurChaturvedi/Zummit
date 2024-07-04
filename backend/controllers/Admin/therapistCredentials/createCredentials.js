const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Therapist = require("../../../models/Therapist/therapistModel");
const Admin = require("../../../models/Admin/AdminRegisterLogin/adminModel");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};


const createTherapist = asyncHandler(async (req, res) => {
  const { name, input, password, role } = req.body;
  const allowedDomain = "zummit.aroundwithin.com";
  const emailRegex = new RegExp(`^[^@]+@${allowedDomain}$`);

  if (!emailRegex.test(input)) {
    return res
      .status(400)
      .json({ success: false, msg: "Invalid email domain" });
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);


  const adminId = req.user.id;

  const registrationsToday = await Therapist.aggregate([
    { $match: { registeredAt: { $gte: today }, admin: adminId } }, 
    { $group: { _id: null, count: { $sum: 1 } } },
  ]);

  const dailyCount =
    registrationsToday.length > 0 ? registrationsToday[0].count : 0;


  if (dailyCount >= 5) {
    return res
      .status(400)
      .json({ success: false, msg: "Registration limit reached for today" });
  }

  const therapistExists = await Therapist.findOne({ input });
  if (therapistExists) {
    res.status(400).json({
      message: "Therapist already registered",
    });
    throw new Error("Therapist already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const therapist = await Therapist.create({
    name,
    input,
    role,
    password: hashedPassword,
    admin: adminId,
    loginCount : 1
  });

  if (therapist) {
    const { _id, input, role } = therapist;
    const token = generateToken(_id);
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      // secure: true, // for deployment
      // sameSite: none
    });

    res.status(201).json({
      success: true,
      data: _id,
      name,
      input,
      role,
      loginCount,
      token,
      message: "Registered successfully",
    });
  } else {
    res.status(400).json({ error: "Invalid therapist data" });
  }
});



const logoutTherapist = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Successfully logged out",
  });
});

const getTherapist = asyncHandler(async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, msg: "No token provided, authorization denied" });
  }

  try {
    const therapist = await Therapist.find({}).select("-password");
    if (!therapist) {
      return res
        .status(404)
        .json({ success: false, msg: "Therapists not found" });
    }

    res.status(200).json({
      success: true,
      data: therapist,
      msg: "Therapists found"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = {
  createTherapist,
  logoutTherapist,
  getTherapist,
};
