const asyncHandler = require("express-async-handler");
const therapistTransactions = require("../../models/Therapist/therapistTransactionsModel");

const therapistTransactionLists = asyncHandler(async (req, res) => {
    try {
        const therapistTransaction = await therapistTransactions.find({});
        res.status(200).json({
            success: true,
            therapistTransaction: therapistTransaction,
            message: "Transactions list"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


const createtherapistTransactionLists = asyncHandler(async (req, res) => {

    const { therapistTransactionData } = req.body;
    if (!therapistTransactionData) {
        return res.status(402).json({ message: "Please fill all fileds" });
    }
    try {
        const therapistTransaction = new therapistTransactions(therapistTransactionData);
        await therapistTransaction.save();
        res.status(201).json({
            success: true,
            message: "Therapist Transaction created successfully",
            therapistTransactionData: therapistTransaction
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = { therapistTransactionLists, createtherapistTransactionLists };