import { SET_TOKEN, SET_USER } from "../types";

export const setUser = (payload: any) => ({
  type: SET_USER,
  payload,
});

export const setToken = (payload: any) => ({
  type: SET_TOKEN,
  payload,
});
