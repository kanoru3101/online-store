import createAction from "redux-actions/es/createAction";
import * as constants from "./usersConstants";

export const fetchUsersStart = createAction(constants.FETCH_USERS_START);
export const fetchUsersOK = createAction(constants.FETCH_USERS_OK);
export const fetchUsersError = createAction(constants.FETCH_USERS_ERROR);

export const deleteUserStart = createAction(constants.DELETE_USER_START);
export const deleteUserOk = createAction(constants.DELETE_USER_OK);
export const deleteUserError = createAction(constants.DELETE_USER_ERROR);

export const updateUserStart = createAction(constants.UPDATE_USER_START);
export const updateUserOk = createAction(constants.UPDATE_USER_OK);
export const updateUserError = createAction(constants.UPDATE_USER_ERROR);
