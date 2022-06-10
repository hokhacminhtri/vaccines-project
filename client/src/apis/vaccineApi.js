import axiosClient from './axiosClient';

const URL = '/vaccine';

const vaccineApi = {
  getAllVaccines: ({ select = '' }) => {
    return axiosClient.get(`${URL}/all`, { params: { select } });
  },
  getVaccineList: ({ select = '', sort = 'price', page = 1 }) => {
    return axiosClient.get(`${URL}/list`, { params: { select, sort, page } });
  },
  getVaccineInfo: (vaccineId) => {
    return axiosClient.get(`${URL}/info/${vaccineId}`);
  },
};

export default vaccineApi;
