// routes/patients.js
const express = require("express");
const { fetchPatients } = require("../controllers/getPatientsController");
const { fetchPatientByName } = require("../controllers/getPatientsByName");
const { fetchPatientsByStatus } = require("../controllers/filterByStatus");
const { sortByAscending } = require("../controllers/sortByAscending");
const { sortByDescending } = require("../controllers/sortByDescending");
const { deletePatientById } = require("../controllers/deletePatientController");

const router = express.Router();

router.get("/patients", fetchPatients);
router.get("/patients/:name", fetchPatientByName);
router.get("/patients/status/:status", fetchPatientsByStatus);
router.get("/patients/sort/ascending", sortByAscending);
router.get("/patients/sort/descending", sortByDescending);
router.delete("/delete/:id", deletePatientById);

module.exports = router;
