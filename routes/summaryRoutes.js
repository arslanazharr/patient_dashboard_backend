const express = require("express");
const { fetchSummary } = require("../controllers/getSummaryController");

const router = express.Router();

router.get("/summary/", fetchSummary);

module.exports = router;
