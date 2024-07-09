const SummaryModel = require("../model/summary");

const fetchSummary = async (req, res) => {
  try {
    const summary = await SummaryModel.find();
    res.status(200).json(summary);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching summary!", error: error.message });
  }
};

module.exports = {
  fetchSummary,
};
