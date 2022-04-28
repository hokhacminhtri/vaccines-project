import axiosClient from './axiosClient';

const URL = '/vaccine';

const vaccineApi = {
  getAllVaccines: () => {
    return axiosClient.get(`${URL}/all`);
  },
};

export default vaccineApi;
