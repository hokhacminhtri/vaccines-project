import axiosClient from './axiosClient';

const URL = '/vaccine-package';

const vaccinePackageApi = {
  getAllPackages: ({ select = '' }) => {
    return axiosClient.get(`${URL}/all`, { params: { select } });
  },
  getVaccinePackageList: ({ select = '', sort = 'price', page = 1 }) => {
    return axiosClient.get(`${URL}/list`, { params: { select, sort, page } });
  },
  getVaccinePackageInfo: (packageId = '') => {
    return axiosClient.get(`${URL}/info/${packageId}`);
  },
};

export default vaccinePackageApi;
