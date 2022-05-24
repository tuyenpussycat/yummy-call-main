// import moment from 'moment/moment';
import { Info } from "../screens/profile/Infor.types";
import { DataSignIn, DataSignUp } from "../types";
import HttpRequest from "../untils/Http-request";

const AuthenService = {
  login: async (data: DataSignIn) => {
    return await HttpRequest.post("/user/login", {
      ...data,
      phone: data.phone,
      password: data.password,
    });
  },
  register: async (data: DataSignUp) => {
    return await HttpRequest.post("/user/register", data);
  },
  getMyinfo: async () => {
    return await HttpRequest.get("/user/myinfo");
  },
};

export default AuthenService;
