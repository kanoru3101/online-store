import { createAction } from "redux-actions";
import * as constants from "./cartConstants";

export const add = createAction(constants.ADD);
export const removeProduct = createAction(constants.REMOVE_PRODUCT);
export const fetchProductsStart = createAction(constants.FETCH_PRODUCTS_START);
export const fetchProductsOk = createAction(constants.FETCH_PRODUCTS_OK);
export const fetchProductsError = createAction(constants.FETCH_PRODUCTS_ERROR);

export const changeCountProduct = createAction(constants.CHANGE_COUNT_PRODUCT);
