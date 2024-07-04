const mongoose = require("mongoose");

const therapistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    professional_title: {
      type: String,
      // required: true,
    },
    input: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    about: {
      why_therapist: {
        type: String,
      },
      work_with_me: {
        type: String,
      },
      qualification: {
        type: String,
      },
    },
    date_of_birth: {
      type: Date,
    },
    experience: {
      type: Number,
      default: 0,
    },
    expertise: {
      type: [String],
    },
    languages: {
      type: [String],
    },
    appointments: {
      type: [String],
    },
    groups: {
      type: [String],
    },
    session_fee: {
      type: Number,
      default: 499,
    },
    review: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      default: "therapist",
    },
    registeredAt: {
      type: Date,
      default: Date.now,
    },
    observation: {
      type: [String],
    },
    admin: {
      type: String,
    },
    loginCount: {
      type : Number,
      default : 0
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Therapist", therapistSchema);
