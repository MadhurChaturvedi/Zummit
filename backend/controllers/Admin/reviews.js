const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const AdminReview = require("../../models/Admin/adminReviewModel");
const { validationResult } = require('express-validator');
const AdminLoginRegister = require("../../models/Admin/AdminRegisterLogin/adminModel");

const reviewsList = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const review = await AdminReview.find({});

    res.status(200).json({
      success: true,
      review: review,
      message: "reviews Granted"
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

const createReviewsList = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { reviews } = req.body;

  if (!reviews) {
    return res.status(402).json({ message: "Please fill all fileds" });
  }

  try {
    const newReview = new AdminReview(reviews)
    await newReview.save()
    res.status(200).json({
      success: true,
      review: newReview,
      message: "reviews created successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const deleteReview = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input, token, reviewId } = req.body;
  if (!input || !token || !reviewId) {
    return res.status(402).json({ message: "Please fill all fields" });
  }

  try {
    const admin = await AdminLoginRegister.findOne({ input }).select("-password")
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (JSON.stringify(decodedToken.id) !== JSON.stringify(admin._id)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const review = await AdminReview.findByIdAndDelete(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({
      success: true,
      message: "Review deleted successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = { reviewsList, createReviewsList, deleteReview };