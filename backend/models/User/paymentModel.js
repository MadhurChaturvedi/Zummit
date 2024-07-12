const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {

      orderId: { 
        type: String,
        required: [true, "Order ID is required"]
      },
      paymentId: { 
        type: String,
        default:null
      },
      amount: { 
        type: Number,
        required: [true, "Amount is required"]
      },
      status: {
        type: String,
        enum: ["completed", "pending", "cancelled","failed"],
        default: "pending",
      },
      clientName: { 
        type: String,
        required: [true, "Client name is required"]
      },
      clientId: { 
        type: String,
        required: [true, "Client ID is required"]
      },
      therapistId: { 
        type: String,
        required: [true, "Therapist ID is required"]
      },
      therapistName: { 
        type: String,
        required: [true, "Therapist Name is required"]
      },
      appointmentType: { 
        type: String,
        required: [true, "Appointment type is required"]
      },
      therapyType: { 
        type: String,
        required: [true, "Therapy type is required"]
      },
      createdAt: { 
          type: Date,
          default: Date.now 
      },
  });

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = { Payment , mongoose };
