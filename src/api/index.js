import axios from "axios";
import { getToken } from "../storage/token";

const baseURL = "http://5508f105f77e.ngrok.io/";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(async (config) => {
  config.headers["Authorization"] = await getToken();
  return config;
});

export const apiCall = async (apiFn) => {
  let data, error;
  try {
    const response = await apiFn();
    data = response.data;
  } catch (e) {
    error = e.message;
    data = e.response?.data;
  }
  return [data, error];
};

export default instance;
