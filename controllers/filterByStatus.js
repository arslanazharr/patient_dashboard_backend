// controllers/filterByStatus.js
const PatientsModel = require("../model/patient");

const fetchPatientsByStatus = async (req, res) => {
  const { status } = req.params;

  try {
    const patients = await PatientsModel.find({ status });

    if (patients.length === 0) {
      return res
        .status(404)
        .json({ message: `No patients found with status '${status}'.` });
    }

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching patients by status!",
      error: error.message,
    });
  }
};

module.exports = {
  fetchPatientsByStatus,
};
