const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: "*",
  credentials: true,
};

module.exports = corsOptions;
