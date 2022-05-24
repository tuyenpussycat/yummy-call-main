import axios from "axios";
import { REFRESH_TOKEN } from "../constants/storage";
import { TOKEN } from "../constants/storage";
import { setItem, getItem, removeItem } from "./storage";
const baseURL = "https://yummy-call-server-v2.herokuapp.com/";
// const baseURL = "http://10.0.19.66:8080/api";

const http = axios.create({
  method: "post", // default
  baseURL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

http.interceptors.request.use(
  async (config) => {
    const newConfig = config;
    const token = (await getItem(TOKEN)) || "";
    const refreshToken = (await getItem(REFRESH_TOKEN)) || "";
    if (token && token !== undefined && token !== null) {
      if (newConfig !== undefined && newConfig.headers) {
        newConfig.headers.Authorization = `Bearer ${token}`;
      }
    }

    if (refreshToken && refreshToken !== undefined && refreshToken !== null) {
      if (newConfig !== undefined && newConfig.headers) {
        newConfig.headers.refresh_token = `Bearer ${refreshToken}`;
      }
    }

    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (errors) => {
    const { data } = errors.response ? errors.response : { data: null };
    if (errors?.response?.status === 401) {
      const originalRequest = errors.config;
      if (data.status !== 401) {
        await removeItem(TOKEN);
        await removeItem(REFRESH_TOKEN);
        return Promise.reject(errors);
      }
      const refreshToken = (await getItem(REFRESH_TOKEN)) || "";
      if (!refreshToken) {
        await removeItem(TOKEN);
        await removeItem(REFRESH_TOKEN);
        return Promise.reject(errors);
      }

      const res: any = await http.post("/user/refresh_token", {
        headers: {
          refresh_token: `Bearer ${refreshToken}`,
        },
      });
      originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
      await setItem(TOKEN, res.data.accessToken);
      await setItem(REFRESH_TOKEN, res.data.refreshAccessToken);

      return http(originalRequest);
    }

    return Promise.reject({ message: "error server", data });
  },
);

export default http;
