const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: '*',
  credentials: true,
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'device-remember-token',
    'Access-Control-Allow-Origin',
    'Origin',
    'Accept',
  ],
};

module.exports = corsOptions;
