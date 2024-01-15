import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });
console.log("API",process.env.REACT_APP_BASEURL);
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;// request ke header ke authorisation me token dal denge
  }
  return req;
});

export default API;
