import { REMOVE_TOKEN, SET_TOKEN } from "../actions";

const initialState = { token: "" };
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        token: action.payload,
      };
    case REMOVE_TOKEN:
      return {
        token: "",
      };
    default:
      return state;
  }
};
