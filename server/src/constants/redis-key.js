module.exports = {
  REDIS_KEY: {
    VACCINE_LIST: 'vaccine-list',
    VACCINE_PACKAGE_LIST: 'vaccine-package-list',
    CATEGORY_ALL: 'category:all',
  },
  REDIS_TTL: {
    VACCINE_LIST: 600, // 10 minutes
    VACCINE_PACKAGE_LIST: 600,
    CATEGORY_ALL: 86400,
  },
};
