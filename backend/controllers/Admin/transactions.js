const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');
const AdminTransaction = require("../../models/Admin/adminTransactionModel");
const AdminLoginRegister = require("../../models/Admin/AdminRegisterLogin/adminModel");

const transactions = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  try {
  const transactions = await AdminTransaction.find({});
  res.status(200).json({
      success: true,
      transaction: transactions,
      message: "Transaction Details Granted"
    });
  }catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const createtransactions = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input, token, transaction } = req.body;

  if (!input || !token || !transaction) {
    return res.status(402).json({ message: "Please fill all fileds" });
  }

  try {
    const admin = await AdminLoginRegister.findOne({ input }).select("-password")
    if (!admin) {
      return res.status(404).json({ message: "transactions not found" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (JSON.stringify(decodedToken.id) !== JSON.stringify(admin._id)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newTransactions = new AdminTransaction(transaction);
    await newTransactions.save()
    res.status(200).json({
      success: true,
      transactions: newTransactions,
      message: "Transactions  created successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = { transactions, createtransactions };



