const mongoose = require("mongoose");

const DiseaseSchema = new mongoose.Schema({
  value: Number,
  color: String,
});
const PercentageChangeSchema = new mongoose.Schema({
  value: Number,
  changeType: String,
});

const SummarySchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  icon: { type: String, required: true },
  total: { type: Number, required: true },
  hasGraph: { type: Boolean, required: true },
  hasDiseases: { type: Boolean, required: true },
  hasPiChart: { type: Boolean, required: true },
  diseases: {
    copd: DiseaseSchema,
    tb: DiseaseSchema,
    asthma: DiseaseSchema,
  },
  color: { type: String, required: true },
  percentageChange: PercentageChangeSchema,
  days: { type: Number },
});

const SummaryModel = mongoose.model("Summary", SummarySchema);
module.exports = SummaryModel;
