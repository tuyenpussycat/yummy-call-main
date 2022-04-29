import { SET_USER } from "../types";

const initialstate = {
  user: null,
};

type Action = {
  type: string;
  payload?: any;
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
    default:
      return state;
  }
};
