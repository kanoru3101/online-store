import { createAction } from "redux-actions";
import * as constants from "./searchConstans";

export const fetchSearchProductsStart = createAction(
  constants.FETCH_SEARCH_PRODUCTS_START
);
export const fetchSearchProductsOk = createAction(
  constants.FETCH_SEARCH_PRODUCTS_OK
);
export const fetchSearchProductsError = createAction(
  constants.FETCH_SEARCH_PRODUCTS_ERROR
);
