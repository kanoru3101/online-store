import { handleActions } from "redux-actions";
import * as constants from "./productsConstants";
import merge from "deepmerge";

const initialState = {
  ids: [],
  countProducts: 0,
  isLoading: false,
  error: null
};

export default handleActions(
  {
    [constants.FETCH_PRODUCTS_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [constants.FETCH_PRODUCTS_OK]: (state, actions) => {
      return {
        ...state,
        isLoading: false,
        ids: [...new Set(merge(state.ids, actions.payload.ids))],
        countProducts: actions.payload.count
      };
    },
    [constants.FETCH_PRODUCTS_ERROR]: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload.message
    }),
    [constants.DELETE_PRODUCT_START]: state => ({
      ...state,
      isLoading: true
    }),
    [constants.DELETE_PRODUCT_OK]: (state, actions) => ({
      ...state,
      isLoading: false,
      ids: state.ids.filter(id => id !== actions.payload.deleteId),
      countProducts: actions.payload.count
    }),
    [constants.DELETE_PRODUCT_ERROR]: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload.message
    }),
    [constants.UPDATE_PRODUCT_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [constants.UPDATE_PRODUCT_OK]: (state, actions) => ({
      ...state,
      isLoading: false,
      countProducts: actions.payload.count
    }),
    [constants.UPDATE_PRODUCT_ERROR]: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload.message
    }),
    [constants.CREATE_PRODUCT_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [constants.CREATE_PRODUCT_OK]: (state, actions) => ({
      ...state,
      isLoading: false,
      ids: [actions.payload.ids].concat(state.ids),
      countProducts: actions.payload.count
    }),
    [constants.CREATE_PRODUCT_ERROR]: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload.message
    })
  },

  initialState
);
