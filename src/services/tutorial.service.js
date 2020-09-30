import http from "../http-common";
import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://localhost:8443/api/auth";

const getAll = (params) => {
  return axios.get(`${API_URL}/tutorials`, { params, headers: authHeader() });
};

const get = id => {
    return axios.get(`${API_URL}/tutorials/${id}`);
};

const create = data => {
    return axios.post(`${API_URL}/tutorials`, data);
};

const update = (id, data) => {
  return axios.put(`${API_URL}/tutorials/${id}`, data);
};

const remove = id => {
  return axios.delete(`${API_URL}/tutorials/${id}`);
};

const removeAll = () => {
  return axios.delete(`${API_URL}/tutorials`);
};

const findByTitle = title => {
  return axios.get(`${API_URL}/tutorials?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};