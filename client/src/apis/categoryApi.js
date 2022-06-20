import axiosClient from './axiosClient';

const URL = '/category';

const categoryApi = {
  getAllCategory: () => {
    return axiosClient.get(`${URL}/all`);
  },
};

export default categoryApi;
