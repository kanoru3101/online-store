import * as action from "./searchActions";
import * as Api from "../../api/Api";

export const fetchSearchProducts = searchString => async dispatch => {
  try {
    dispatch(action.fetchSearchProductsStart());
    const res = await Api.Products.fetchProductsSearch(searchString);

    dispatch(
      action.fetchSearchProductsOk({
        products: res.data
      })
    );
  } catch (err) {
    dispatch(action.fetchSearchProductsError(err.message));
  }
};
