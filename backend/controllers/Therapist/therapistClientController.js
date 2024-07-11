const asyncHandler = require("express-async-handler");
const therapistClient = require("../../models/Therapist/therapistClientModel.js");

const therapistClientList = asyncHandler(async (req, res) => {
    try {
        const TherapistClient = await therapistClient.find({});
        res.status(200).json({
            success: true,
            TherapistClientData: TherapistClient,
            message: "Get All therapist-Client"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

const createTherapistClientList = asyncHandler(async (req, res) => {

    const { therapistClientdata } = req.body;
    console.log(therapistClientdata);
    if (!therapistClientdata) {
        return res.status(402).json({ message: "Please fill all fileds" });
    }
    try {
        const newtherapistClient = new therapistClient(therapistClientdata);
        await newtherapistClient.save();
        res.status(201).json({
            success: true,
            message: "therapistClient created successfully",
            therapistClientData: newtherapistClient
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = { therapistClientList, createTherapistClientList };