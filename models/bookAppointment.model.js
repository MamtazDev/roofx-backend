const mongoose = require("mongoose");

const bookAppointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BookAppointment = mongoose.model(
  "BookAppointment",
  bookAppointmentSchema
);
module.exports = BookAppointment;
