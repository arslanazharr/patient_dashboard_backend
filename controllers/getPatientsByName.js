const PatientsModel = require("../model/patient");

const fetchPatientByName = async (req, res) => {
  const name = req.params.name;

  try {
    const patients = await PatientsModel.find({
      name: { $regex: new RegExp(name, "i") },
    });

    if (patients.length === 0) {
      return res
        .status(404)
        .json({ message: "No patients found with this name." });
    }

    res.status(200).json(patients);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching name!", error: error.message });
  }
};

module.exports = {
  fetchPatientByName,
};
