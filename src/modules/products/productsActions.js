import { createAction } from "redux-actions";
import * as constants from "./productsConstants";

export const fetchProductsStart = createAction(constants.FETCH_PRODUCTS_START);
export const fetchProductsOk = createAction(constants.FETCH_PRODUCTS_OK);
export const fetchProductsError = createAction(constants.FETCH_PRODUCTS_ERROR);

export const fetchProduct = createAction(constants.FETCH_PRODUCT);

export const deleteProductStart = createAction(constants.DELETE_PRODUCT_START);
export const deleteProductOk = createAction(constants.DELETE_PRODUCT_OK);
export const deleteProductError = createAction(constants.DELETE_PRODUCT_ERROR);

export const updateProductStart = createAction(constants.UPDATE_PRODUCT_START);
export const updateProductOk = createAction(constants.UPDATE_PRODUCT_OK);
export const updateProductError = createAction(constants.UPDATE_PRODUCT_ERROR);

export const createProductStart = createAction(constants.CREATE_PRODUCT_START);
export const createProductOk = createAction(constants.CREATE_PRODUCT_OK);
export const createProductError = createAction(constants.CREATE_PRODUCT_ERROR);
