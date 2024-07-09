const data = require("../utils/constants");
const SummaryModal = require("../model/summary");

const seedSummaryDB = async () => {
  try {
    await SummaryModal.deleteMany({});
    await SummaryModal.create(data.summary);
    console.log("Summary Database seeded successfully");
  } catch (error) {
    console.error("Error seeding summary database:", error);
  }
};

module.exports = seedSummaryDB;
