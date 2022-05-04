import axiosClient from './axiosClient';

const URL = '/customer';

const customerApi = {
  getInfoByMemberCode: (code = '') => {
    return axiosClient.get(`${URL}/info/by-code/${code}`);
  },

  postRegistration: ({ isRegistered, info, contactInfo, center, vaccine }) => {
    return axiosClient.post(`${URL}/registration`, {
      isRegistered,
      info,
      contactInfo,
      center,
      vaccine,
    });
  },
};

export default customerApi;
