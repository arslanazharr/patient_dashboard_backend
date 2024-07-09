const PatientsModel = require("../model/patient");

const fetchPatients = async (req, res) => {
  try {
    const patients = await PatientsModel.find();
    res.status(200).json(patients);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching expenses!", error: error.message });
  }
};

module.exports = {
  fetchPatients,
};
