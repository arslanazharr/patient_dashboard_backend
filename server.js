const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const seedSummaryDB = require("./controllers/seedSummaryDataController");
const seedPatientDB = require("./controllers/seedPatientDataController");
const patientRoutes = require("./routes/patientRoutes");
const summaryRoutes = require("./routes/summaryRoutes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", patientRoutes);
app.use("/api", summaryRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port 3001");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to Database");
    await seedSummaryDB();
    await seedPatientDB();
  })
  .catch((err) => console.log(err));
