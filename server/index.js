require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const { mysqlDb } = require('./src/configs/sequelize.config');
const corsOptions = require('./src/configs/cors.config');
const vaccineApi = require('./src/apis/vaccine.api');

// import MySQL models
const Address = require('./src/models/mysql/addresses.model');
const AdminAccount = require('./src/models/mysql/admin-accounts.model');
const Customer = require('./src/models/mysql/customers.model');
const District = require('./src/models/mysql/districts.model');
const InjectionHistory = require('./src/models/mysql/injection-history.model');
const Payment = require('./src/models/mysql/payment.model');
const Province = require('./src/models/mysql/provinces.model');
const Registration = require('./src/models/mysql/registration.model');
const VNVCCenter = require('./src/models/mysql/vnvc-centers.model');
const Ward = require('./src/models/mysql/wards.model');

// import MongoDB models
const Category = require('./src/models/mongoose/categories.model');
const VaccinePackage = require('./src/models/mongoose/vaccine-packages.model');
const Vaccine = require('./src/models/mongoose/vaccines.model');

app.use(cors(corsOptions));

// ==================== CONNECT MONGODB ====================
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error', error);
    process.exit(1);
  });

// ==================== API ====================\
app.use('/vaccine', vaccineApi);

// ==================== LISTENING ====================
const normalizePort = (port) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3000);

mysqlDb.sync({ alter: true }).then((_) => {
  console.log('Connected to MySQL');
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
