// controllers/filterByStatus.js
const PatientsModel = require("../model/patient");

const sortByAscending = async (req, res) => {
  try {
    const patients = await PatientsModel.find().sort({ name: 1 });

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({
      message: "Error Sorting!",
      error: error.message,
    });
  }
};

module.exports = {
  sortByAscending,
};
