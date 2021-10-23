import axios from '../config/axiosInstance';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_USER,
  GET_USERS,
  GET_USER_PROFILE,
  LOGIN,
  REGISTERATION,
  UPDATE_USER
} from '../constants/URLS.CONSTANT';

export const registerUser = (data) => {
  return axios.post(REGISTERATION, data);
};

export const login = (data) => {
  return axios.post(LOGIN, data);
};

export const getProducts = () => {
  return axios.get(GET_PRODUCTS);
};

export const getProductsByUser = (id) => {
  return axios.get(GET_PRODUCTS_BY_USER + id);
};

export const getUsers = () => {
  return axios.get(GET_USERS);
};

export const getUserProfile = (id) => {
  return axios.get(GET_USER_PROFILE + id);
};

export const updateUserProfile = (id, data) => {
  return axios.put(UPDATE_USER + id, data);
};
