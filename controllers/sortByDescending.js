// controllers/filterByStatus.js
const PatientsModel = require("../model/patient");

const sortByDescending = async (req, res) => {
  try {
    const patients = await PatientsModel.find().sort({ name: -1 });

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({
      message: "Error sorting!",
      error: error.message,
    });
  }
};

module.exports = {
  sortByDescending,
};
