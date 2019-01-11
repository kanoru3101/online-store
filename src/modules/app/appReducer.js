import { handleActions } from "redux-actions";
import * as constants from "./appConstants";

const initialState = {
  user: {}
};

export default handleActions(
  {
    [constants.SING_IN_START]: state => ({
      ...state
    }),
    [constants.SING_IN_OK]: (state, actions) => ({
      ...state,
      user: actions.payload.user
    }),
    [constants.SING_IN_ERROR]: (state, actions) => ({
      ...state
    }),
    [constants.REMOVE_TOKEN]: (state, actions) => {
      return {
        ...state,
        user: actions.payload.user
      };
    }
  },
  initialState
);
