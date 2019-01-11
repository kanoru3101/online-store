import { handleActions } from "redux-actions";
import * as constants from "./usersConstants";

const initialState = {
  users: {},
  countUsers: 0,
  error: null,
  isLoadingUsers: false
};

export default handleActions(
  {
    [constants.FETCH_USERS_START]: state => ({
      ...state,
      isLoadingUsers: true
    }),
    [constants.FETCH_USERS_OK]: (state, actions) => ({
      ...state,
      isLoadingUsers: false,
      users: actions.payload.users,
      countUsers: actions.payload.count
    }),
    [constants.FETCH_USERS_ERROR]: (state, actions) => ({
      ...state,
      isLoadingUsers: false,
      error: actions.payload.error
    }),
    [constants.DELETE_USER_START]: state => ({
      ...state,
      isLoadingUsers: true
    }),
    [constants.DELETE_USER_OK]: (state, actions) => {
      debugger;
      return {
        ...state,
        isLoadingUsers: false,
        users: state.users.filter(item => item.id !== actions.payload.deleteId),
        countUsers: actions.payload.count
      };
    },
    [constants.DELETE_USER_ERROR]: (state, actions) => ({
      ...state,
      isLoadingUsers: false,
      error: actions.payload.error
    }),
    [constants.UPDATE_USER_START]: state => ({
      ...state,
      isLoadingUsers: true
    }),
    [constants.UPDATE_USER_OK]: (state, actions) => ({
      ...state,
      isLoadingUsers: false,
      users: state.users.map(item =>
        item.id === actions.payload.data.product.id
          ? actions.payload.data.product
          : item
      )
    }),
    [constants.UPDATE_USER_ERROR]: (state, actions) => ({
      ...state,
      isLoadingUsers: false,
      error: actions.payload.error
    })
  },
  initialState
);
