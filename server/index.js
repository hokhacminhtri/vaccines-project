require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const { mysqlDb } = require("./src/configs/sequelize.config");
const corsOptions = require("./src/configs/cors.config");
const vaccineApi = require("./src/apis/vaccine.api");

app.use(cors(corsOptions));

// ==================== CONNECT MONGODB ====================
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error", error);
    process.exit(1);
  });

// ==================== API ====================\
app.use("/vaccine", vaccineApi);

// ==================== LISTENING ====================
const normalizePort = (port) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3000);

mysqlDb.sync({ alter: true }).then((_) => {
  console.log("Connected to MySQL");
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
