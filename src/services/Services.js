import axios from '../config/axiosInstance';
import { GET_PRODUCTS, LOGIN, REGISTERATION } from '../constants/URLS.CONSTANT';

export const registerUser = (data) => {
  return axios.post(REGISTERATION, data);
};

export const login = (data) => {
  return axios.post(LOGIN, data);
};

export const getProducts = () => {
  return axios.get(GET_PRODUCTS);
};
