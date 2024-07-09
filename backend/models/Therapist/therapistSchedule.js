const mongoose = require("mongoose");

const therapistScheduleModel = mongoose.Schema(
    {
        TherapistID: {
            type: String,
            required: true
        },
        TherapistName: {
            type: String,
            required: true
        },
        ScheduleDates: {
            type: [ String ],
            required: [true, "please add session date"]
        }
    },
)

const therapistSchedule = mongoose.model("therapistSchedule", therapistScheduleModel);
module.exports = therapistSchedule;