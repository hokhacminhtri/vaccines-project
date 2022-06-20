import axiosClient from './axiosClient';

const URL = '/vaccine';

const vaccineApi = {
  getAllVaccines: ({ select = '' }) => {
    return axiosClient.get(`${URL}/all`, { params: { select } });
  },
  getVaccineList: ({
    select = '',
    sort = 'price',
    page = 1,
    categoryId = '',
  }) => {
    return axiosClient.get(`${URL}/list`, {
      params: { select, sort, page, categoryId },
    });
  },
  getVaccineInfo: (vaccineId) => {
    return axiosClient.get(`${URL}/info/${vaccineId}`);
  },
  getVaccineForHomePage: () => {
    return axiosClient.get(`${URL}/vaccineforhomepage`);
  },
};

export default vaccineApi;
