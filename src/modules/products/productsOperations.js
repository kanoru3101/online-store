import { normalize } from "normalizr";
import * as schemes from "../../api/schemes";
import * as actions from "./productsActions";
import * as Api from "../../api/Api";

export const fetchProducts = props => async (dispatch, getState) => {
  try {
    const countProducts = getState().products.countProducts;
    const oldId = getState().products.ids;
    if (
      (Number(countProducts) > 1 && Number(countProducts) === oldId.length) ||
      oldId.length >= props.limit + props.offset
    ) {
      return;
    }

    dispatch(actions.fetchProductsStart());
    //const res = await Api.Products.fetchProducts();
    const res = await Api.Products.fetchProductsLimit(
      props.limit,
      props.offset
    );
    const count = await Api.Products.getCountProducts();
    let { result, entities } = normalize(res.data, schemes.ProductCollection);

    //result = merge(oldId, result);
    //entities = merge(oldEntities, entities);

    dispatch(
      actions.fetchProductsOk({
        ids: result,
        entities,
        count: Number(count.data.count)
      })
    );
  } catch (err) {
    dispatch(actions.fetchProductsError(err.message));
  }
};

export const fetchProductsById = props => async dispatch => {
  try {
    dispatch(actions.fetchProductsStart());
    const res = await Api.Products.fetchProductById(props);

    let { result, entities } = normalize(res.data, schemes.ProductCollection);

    //result = merge({}, result);
    //entities = merge({}, entities);

    dispatch(
      actions.fetchProductsOk({
        ids: result,
        entities,
        count: 1
      })
    );
  } catch (err) {
    dispatch(actions.fetchProductsError(err.message));
  }
};

export const deleteProduct = deleteId => async dispatch => {
  try {
    dispatch(actions.deleteProductStart());

    await Api.Products.deleteProduct(deleteId);
    const count = await Api.Products.getCountProducts();
    dispatch(
      actions.deleteProductOk({
        deleteId,
        count: Number(count.data.count)
      })
    );
  } catch (e) {
    console.log(e);
    dispatch(actions.deleteProductError(e.message));
  }
};

export const updateProducts = newProduct => async dispatch => {
  try {
    dispatch(actions.updateProductStart());

    const data = await Api.Products.updateProduct(newProduct.id, newProduct);
    const count = await Api.Products.getCountProducts();
    const upDate = data.data[0];

    dispatch(
      actions.updateProductOk({
        entities: {
          products: {
            [upDate.id]: upDate
          }
        },
        count: Number(count.data.count)
      })
    );
  } catch (e) {
    console.log(e);
    dispatch(actions.updateProductError(e.message));
  }
};

export const addProducts = newProduct => async dispatch => {
  try {
    dispatch(actions.createProductStart());

    const addProduct = await Api.Products.setProduct(newProduct);
    const count = await Api.Products.getCountProducts();
    const { result, entities } = normalize(
      addProduct.data,
      schemes.ProductCollection
    );
    dispatch(
      actions.createProductOk({
        ids: result[0],
        entities,
        count: Number(count.data.count)
      })
    );
  } catch (e) {
    console.log(e);
    dispatch(actions.createProductError(e.message));
  }
};
