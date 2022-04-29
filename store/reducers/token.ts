import { SET_TOKEN, SET_USER } from "../types";

const initialstate = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjI2YmNmMGQ3MTgxYWM5Nzc4YzcyNzIzIiwiaWF0IjoxNjUxMjM2NTIxLCJleHAiOjE2NTEyNDAxMjF9.VpdVnd82ndLSWUYKAjSum8ctaf9e9cQAMn04gRkHdqY",
};

type Action = {
  type: string;
  payload?: any;
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: action.payload,
      });
    default:
      return state;
  }
};
