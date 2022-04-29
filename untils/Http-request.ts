import axios from "axios";
import { TOKEN } from "./constants";
import storage from "./storage";
const baseURL = "https://yummy-app-live-server.herokuapp.com/api";
// import { disconnectSocket } from "./socket-io";
// const baseURL = "http://10.0.19.66:8080/api";
const refreshToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjI2YmNmMGQ3MTgxYWM5Nzc4YzcyNzIzIiwiaWF0IjoxNjUxMjQyNjYxLCJleHAiOjE2ODI4MDAyNjF9.EjODiUGndxrq9PhzdClHcsObY4SDmKXuJFhzni9cQeY";
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjI2YmNmMGQ3MTgxYWM5Nzc4YzcyNzIzIiwiaWF0IjoxNjUxMjUxOTY0LCJleHAiOjE2NTEyNTU1NjR9.iaNUEtMngBcrPH8l_1-6t52kKJyVYMPaph1sAeVGb3g";

const http = axios.create({
  method: "post", // default
  baseURL,
  // timeout: 3000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

http.interceptors.request.use(
  (config) => {
    const newConfig = config;

    // (async () => {
    //   token = (await storage.getItem(TOKEN)) || "";
    // })();

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
  (error) => Promise.reject(error),
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
        return Promise.reject(errors);
      }
      const res: any = await http.post("/user/refresh_token");
      originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
      token = res.data.accessToken;

      return http(originalRequest);
    }

    return Promise.reject({ message: "error server", data });
  },
);

export default http;
