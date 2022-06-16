require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const { mysqlDb } = require('./src/configs/sequelize.config');
const corsOptions = require('./src/configs/cors.config');
const vaccineApi = require('./src/apis/vaccine.api');
const addressApi = require('./src/apis/address.api');
const morgan = require('morgan');

// import MySQL models
const Province = require('./src/models/mysql/provinces.model');
const District = require('./src/models/mysql/districts.model');
const Ward = require('./src/models/mysql/wards.model');
const Address = require('./src/models/mysql/addresses.model');
const Customer = require('./src/models/mysql/customers.model');
const AdminAccount = require('./src/models/mysql/admin-accounts.model');
const Payment = require('./src/models/mysql/payment.model');
const VNVCCenter = require('./src/models/mysql/vnvc-centers.model');
const Registration = require('./src/models/mysql/registration.model');
const InjectionHistory = require('./src/models/mysql/injection-history.model');

// import MongoDB models
const Category = require('./src/models/mongoose/categories.model');
const VaccinePackage = require('./src/models/mongoose/vaccine-packages.model');
const Vaccine = require('./src/models/mongoose/vaccines.model');
const vaccinePackageApi = require('./src/apis/vaccine-package.api');
const customerApi = require('./src/apis/customer.api');
const accountApi = require('./src/apis/account.api');
const testApi = require('./src/apis/test.api');
const syncVaccinesApi = require('./src/apis/sync-vaccines.api');
const syncVaccinePackagesApi = require('./src/apis/sync-vaccine-packages.api');

app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

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

// ==================== API ====================
app.use('/address', addressApi);
app.use('/customer', customerApi);
app.use('/vaccine-package', vaccinePackageApi);
app.use('/vaccine', vaccineApi);
app.use('/account', accountApi);
app.use('/v1/test', testApi);
app.use('/sync-vaccines-mongodb-elasticsearch', syncVaccinesApi);
app.use('/sync-vaccine-packages-mongodb-elasticsearch', syncVaccinePackagesApi);

// ==================== LISTENING ====================
const normalizePort = (port) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3000);

mysqlDb.sync().then((_) => {
  console.log('Connected to MySQL');
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
