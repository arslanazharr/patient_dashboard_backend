const data = require("../utils/constants");
const PatientSchema = require("../model/patient");

const seedPatientDB = async () => {
  try {
    await PatientSchema.deleteMany({});
    await PatientSchema.create(data.patientsData);
    console.log("Patient Database seeded successfully");
  } catch (error) {
    console.error("Error seeding patient database:", error);
  }
};

module.exports = seedPatientDB;
