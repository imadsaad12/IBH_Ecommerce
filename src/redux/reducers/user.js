import { SET_TOKEN } from "../actions";

const initialState = { token: "" };
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        token: action.payload,
      };

    default:
      return state;
  }
};
