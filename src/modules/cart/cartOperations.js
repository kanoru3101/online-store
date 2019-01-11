import { normalize } from "normalizr";
import * as schemes from "../../api/schemes";
import * as actions from "./cartActions";
import * as Api from "../../api/Api";

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const { items, ids } = getState().cart;
    if (ids.length === 0) {
      return;
    }

    dispatch(actions.fetchProductsStart());
    const res = await Api.Products.fetchProductsByIds(ids);
    const { entities } = normalize(res.data, schemes.ProductCollection);
    dispatch(
      actions.fetchProductsOk({
        items,
        ids,
        entities
      })
    );
  } catch (err) {
    dispatch(actions.fetchProductsError(err.message));
  }
};

export const changeCountProduct = (id, value) => (dispatch, getState) => {
  const newItems = [...getState().cart.items];

  if (value === "REMOVE") {
    const idx = newItems.lastIndexOf(id);
    if (idx !== -1) {
      newItems.splice(idx, 1);
    }
  }
  if (value === "INCREASE") {
    newItems.push(id);
  }

  dispatch(
    actions.changeCountProduct({
      newItems
    })
  );
};
