import axiosClient from './axiosClient';

const URL = '/vaccine-package';

const vaccinePackageApi = {
  getAllPackages: ({ select = '' }) => {
    return axiosClient.get(`${URL}/all`, { params: { select } });
  },
};

export default vaccinePackageApi;
