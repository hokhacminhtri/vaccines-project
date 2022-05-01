import axiosClient from './axiosClient';

const URL = '/address';

const addressApi = {
  getAllProvinces: () => {
    return axiosClient.get(`${URL}/province/all`);
  },
};

export default addressApi;
