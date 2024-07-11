const mongoose = require("mongoose");

const therapistClientModel = mongoose.Schema(
    {
        clientId: {
            type: Number,
            required: [true, "please add clientId"]
        },
        Sessions: {
            type: Number,
            required: [true, "please add Sessions"]
        },
        lastSession: {
            type: String,
            required: [true, "please add lastSession"]
        },
        clientName: {
            type: String,
            required: [true, "please add clientName"]
        },
        Description: {
            type: String,
            required: [true, "please add Description"]
        },
        age: {
            type: Number,
            required: [true, "please add age"]
        },
        Gender: {
            type: String,
            required: [true, "please add Gender"]
        },
        relationStatus: {
            type: String,
            required: [true, "please add relationStatus"]
        },
        Education: {
            type: String,
            required: [true, "please add Education"]
        },
        Occupation: {
            type: String,
            required: [true, "please add Occupation"]
        },
        EmergencyContact: {
            type: String,
            required: [true, "please add emergency contact"]
        },
        Location: {
            type: String,
            required: [true, "please add Location"]
        }
    },
)

const therapistClient = mongoose.model("therapistClientModel", therapistClientModel);
module.exports = therapistClient;