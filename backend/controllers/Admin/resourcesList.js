const asyncHandler = require("express-async-handler");
const Admin = require("../../models/Admin/AdminDashboard/adminSecurity");
const jwt = require("jsonwebtoken");
const AdminResources = require("../../models/Admin/adminResourcesModel");
const { validationResult } = require('express-validator');
const AdminLoginRegister = require("../../models/Admin/AdminRegisterLogin/adminModel");

const resources = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  try {

    const resources = await AdminResources.find({});
    res.status(200).json({
      success: true,
      resource: resources,
      message: "Resources Granted"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const createResource = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { resource } = req.body;

  if (!resource) {
    return res.status(402).json({ message: "Please fill all fileds" });
  }

  try {

    const newResource = new AdminResources(resource)
    await newResource.save()
    res.status(200).json({
      success: true,
      resources: newResource,
      message: "resources created successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const updateResource = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input, token, resource, resourceId } = req.body;

  if (!input || !token || !resource) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const admin = await AdminLoginRegister.findOne({ input }).select(
      "-password"
    )
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (JSON.stringify(decodedToken.id) !== JSON.stringify(admin._id)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    let newResource;
    if (resourceId) {
      newResource = await AdminResources.findByIdAndUpdate(resourceId, resource, { new: true });
      if (!newResource) {
        return res.status(404).json({ message: "Resource not found" });
      }
    } else {
      newResource = new AdminResources(resource);
      await newResource.save();
    }
    res.status(200).json({
      success: true,
      resource: newResource,
      message: resourceId ? "Resource updated successfully" : "Resource created successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = {
  resources, createResource, updateResource
};
