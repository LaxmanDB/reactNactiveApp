import axios, { apiCall } from ".";

const endpoint = "/user";

export const login = (mobile, pin) =>
  apiCall(() => axios.post(endpoint + "/login", { mobile, pin }));

export const register = (userInfo) =>
  apiCall(() => axios.post(endpoint + "/register", userInfo));

export const reset = (email) =>
  apiCall(() => axios.post(endpoint + "/reset", { email }));

export const confirmotp = (otp) =>
  apiCall(() => axios.post(endpoint + "/confirmotp", { otp }));

export const setpin = (pin, token) =>
  apiCall(() => axios.post(endpoint + "/setpin", { pin, token }));
