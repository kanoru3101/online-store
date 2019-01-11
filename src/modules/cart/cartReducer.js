import { handleActions } from "redux-actions";
import * as constants from "./cartConstants";

const initialState = {
  items: [],
  ids: [],
  isLoading: false
};

export default handleActions(
  {
    [constants.ADD]: (state, actions) => ({
      ...state,
      items: [actions.payload.id].concat(state.items),
      ids: [...new Set([actions.payload.id].concat(state.ids))]
    }),

    [constants.REMOVE_PRODUCT]: (state, action) => {
      const newIds = [...state.ids].filter(id => id !== action.payload);
      const newItems = [...state.items].filter(item => item !== action.payload);
      return {
        ...state,
        items: newItems,
        ids: newIds
      };
    },

    [constants.FETCH_PRODUCTS_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [constants.FETCH_PRODUCTS_OK]: (state, actions) => ({
      ...state,
      isLoading: false,
      items: actions.payload.items,
      ids: actions.payload.ids
    }),
    [constants.FETCH_PRODUCTS_ERROR]: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload.message
    }),
    [constants.CHANGE_COUNT_PRODUCT]: (state, actions) => {
      const newItems = [...state.items];
      switch (actions.payload.typeAction) {
        case "INCREASE": {
          newItems.push(actions.payload.id);
          break;
        }
        case "REMOVE": {
          const idx = newItems.lastIndexOf(actions.payload.id);
          if (idx !== -1) {
            newItems.splice(idx, 1);
          }
          break;
        }
        default:
          break;
      }
      return {
        ...state,
        items: newItems
      };
    }
  },
  initialState
);
