import axios from "axios";
import store from "store2";

let _token = null;
const ApiUrl = "";

export const isAuthenticated = () => {
  return !!_token;
};

export const removeToken = () => {
  //localStorage.removeItem('token');
  store.remove("token");
  axios.defaults.headers.common.Authorization = null;
};

export const setToken = token => {
  _token = token;
  store.local.set("token", _token);
  //window.localStorage.setItem('token', token);
  axios.defaults.headers.common.Authorization = _token
    ? `Bearer ${_token}`
    : null;
};

export const initApi = () => {
  //const token = localStorage.getItem('token');
  //const token = tokenUser;
  const token = store.local.get("token");
  setToken(token);
};

export const Products = {
  fetchProducts() {
    return axios.get(`${ApiUrl}/api/v3/products`);
  },
  fetchProductsLimit(limit, offset) {
    return axios.get(
      `${ApiUrl}/api/v3/products?limit=${limit}&&offset=${offset}`
    );
  },

  fetchProductsSearch(searchString) {
    return axios.get(`${ApiUrl}/api/v3/search/products?search=${searchString}`);
  },
  fetchProductsByIds(arrId) {
    let query = arrId.reduce((acc, item) => `${acc}ids[]=${item}&`, "?");
    return axios.get(`${ApiUrl}/api/v3/products${query}`);
  },

  fetchProductById(id) {
    return axios.get(`${ApiUrl}/api/v3/products/${id}`);
  },
  getCountProducts() {
    return axios.get(`${ApiUrl}/api/v3/count/products`);
  },
  setProduct(data) {
    return axios.post(`${ApiUrl}/api/v3/products`, data);
  },

  updateProduct(id, updateData) {
    return axios.patch(`${ApiUrl}/api/v3/products/${id}`, updateData);
  },

  deleteProduct(id) {
    return axios.delete(`${ApiUrl}/api/v3/products/${id}`);
  }
};

export const Auth = {
  login(body) {
    return axios.post(`${ApiUrl}/api/v3/auth/login`, body);
  },

  register(body) {
    return axios.post(`${ApiUrl}/api/v3/auth/register`, body);
  },

  rememberPass(body) {
    return axios.post(`${ApiUrl}/api/v3/auth/remember`, body);
  }
};

export const User = {
  getUsers() {
    return axios.get(`${ApiUrl}/api/v3/users`);
  },

  fetchUsersLimit(limit, offset) {
    return axios.get(`${ApiUrl}/api/v3/users?limit=${limit}&&offset=${offset}`);
  },

  getCountUsers() {
    return axios.get(`${ApiUrl}/api/v3/count/users`);
  },
  deleteUser(id) {
    return axios.delete(`${ApiUrl}/api/v3/users/${id}`);
  },

  updateUser(id, updateData) {
    return axios.patch(`${ApiUrl}/api/v3/users/${id}`, updateData);
  },

  getCurrent() {
    return axios.get(`${ApiUrl}/api/v3/users/current`);
  }
};
