import axiosClient from './axiosClient';

const URL = '/customer';

const customerApi = {
  getInfoByMemberCode: (code = '') =>
    axiosClient.get(`${URL}/info/by-code/${code}`),
};

export default customerApi;
