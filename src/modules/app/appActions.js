import { createAction } from "redux-actions";
import * as constants from "./appConstants";

export const singInStart = createAction(constants.SING_IN_START);
export const singInOk = createAction(constants.SING_IN_OK);
export const singInError = createAction(constants.SING_IN_ERROR);

export const removeToken = createAction(constants.REMOVE_TOKEN);
