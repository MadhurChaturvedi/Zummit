const asyncHandler = require("express-async-handler");
const Admin = require("../../models/Admin/AdminDashboard/adminSecurity");
const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');
const AdminGroups = require("../../models/Admin/adminGroupsModel");
const AdminLoginRegister = require("../../models/Admin/AdminRegisterLogin/adminModel");

const groupsDetails = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const groupDetails = await AdminGroups.find({});

    res.status(200).json({
      success: true,
      groups: groupDetails,
      message: "Groups Details Granted"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


const CreategroupsDetails = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input, token, groupsDetails } = req.body;

  if (!input || !token || !groupsDetails) {
    return res.status(402).json({ message: "Please fill all fileds" });
  }

  try {
    const admin = await  AdminLoginRegister.findOne({ input });
    if (!admin) {
      return res.status(404).json({ message: "Group Details not found" });
    }


    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (JSON.stringify(decodedToken.id)!== JSON.stringify(admin._id)){
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newGroupDetails = new AdminGroups(groupsDetails);
    await newGroupDetails.save()

    res.status(200).json({
      success: true,
      groups: newGroupDetails,
      message: "Groups  created successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = { groupsDetails , CreategroupsDetails };