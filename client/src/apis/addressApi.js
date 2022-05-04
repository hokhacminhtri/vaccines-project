import axiosClient from './axiosClient';

const URL = '/address';

const addressApi = {
  getAllProvinces: () => {
    return axiosClient.get(`${URL}/province/all`);
  },
  getDistrictsByProvinceId: (provinceId) => {
    return axiosClient.get(`${URL}/district/by-province/${provinceId}`);
  },
  getWardsByDistrictId: (districtId) => {
    return axiosClient.get(`${URL}/ward/by-district/${districtId}`);
  },
  getCenterListByProvinceId: (provinceId = 0) => {
    return axiosClient.get(`${URL}/center-list/${provinceId}`);
  },
};

export default addressApi;
