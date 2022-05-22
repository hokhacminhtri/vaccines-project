import axiosClient from './axiosClient';

const URL = '/account';

const accountApi = {
  postLogin: (username, password) => {
    return axiosClient.post(`${URL}/login`, { username, password });
  },
  getCheckToken: (token) => {
    return axiosClient.get(`${URL}/check-token`, { params: { token } });
  },
};

export default accountApi;
