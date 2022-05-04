import axiosClient from './axiosClient';

const URL = '/vaccine';

const vaccineApi = {
  getAllVaccines: ({ select = '' }) => {
    return axiosClient.get(`${URL}/all`, { params: { select } });
  },
};

export default vaccineApi;
