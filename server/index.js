require("dotenv").config();

const express = require("express");
const app = express();
const { db } = require("./src/configs/sequelize.config");

// ==================== LISTENING ====================
const normalizePort = (port) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3000);

db.sync({ after: true }).then((_) => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
