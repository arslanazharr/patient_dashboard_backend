const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userImage: { type: String, required: true },
  diseases: [String],
  previousAppointment: { type: Date, required: true },
  status: { type: String, required: true },
  nextAppointment: { type: Date, required: true },
});

module.exports = mongoose.model("Patient", PatientSchema);
