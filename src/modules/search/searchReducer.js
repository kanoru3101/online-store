import { handleActions } from "redux-actions";
import * as constants from "./searchConstans";

const initialState = {
  products: [],
  isLoadingSearchProducts: false,
  error: null
};

export default handleActions(
  {
    [constants.FETCH_SEARCH_PRODUCTS_START]: state => ({
      ...state,
      isLoadingSearchProducts: true,
      error: null
    }),
    [constants.FETCH_SEARCH_PRODUCTS_OK]: (state, action) => ({
      ...state,
      isLoadingSearchProducts: false,
      products: action.payload.products
    }),
    [constants.FETCH_SEARCH_PRODUCTS_ERROR]: (state, action) => ({
      ...state,
      isLoadingSearchProducts: false,
      error: action.payload.message
    })
  },
  initialState
);
