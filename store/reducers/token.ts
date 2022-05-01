import { SET_TOKEN } from "../types";

const initialstate = {
  token: null,
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
