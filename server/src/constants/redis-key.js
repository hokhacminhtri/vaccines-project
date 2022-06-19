module.exports = {
  REDIS_KEY: {
    VACCINE_LIST: 'vaccine-list',
    VACCINE_PACKAGE_LIST: 'vaccine-package-list',
  },
  REDIS_TTL: {
    VACCINE_LIST: 600, // 10 minutes
    VACCINE_PACKAGE_LIST: 600,
  },
};
