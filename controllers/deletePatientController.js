const PatientsModel = require("../model/patient");

const deletePatientById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPatient = await PatientsModel.findByIdAndDelete(id);

    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found!" });
    }

    res.status(200).json({ message: "Patient deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting patient!", error: error.message });
  }
};

module.exports = {
  deletePatientById,
};
