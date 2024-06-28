const mongoose = require("mongoose");

const therapistScheduleModel = mongoose.Schema(
    {
        TherapistID: {
            type: String,
            required: true
        },
        ScheduleDate: {
            type: String,
            required: [true, "please add session date"]
        }
    },
)

const therapistSchedule = mongoose.model("therapistSchedule", therapistScheduleModel);
module.exports = therapistSchedule;