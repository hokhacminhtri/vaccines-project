import axiosClient from './axiosClient';

const URL = '/vaccine-package';

const vaccinePackageApi = {
  getAllPackages: ({ select = '' }) => {
    return axiosClient.get(`${URL}/all`, { params: { select } });
  },
  getVaccinePackageList: ({
    select = '',
    sort = 'price',
    page = 1,
    categoryId = '',
  }) => {
    return axiosClient.get(`${URL}/list`, {
      params: { select, sort, page, categoryId },
    });
  },
  getVaccinePackageInfo: (packageId = '') => {
    return axiosClient.get(`${URL}/info/${packageId}`);
  },
};

export default vaccinePackageApi;
