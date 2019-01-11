import { createSelector } from "reselect";

const getProductIds = state => state.products.ids;
const getProductById = (state, id) => state.entities.products[id];
const getProductEntities = state => state.entities.products;

export const getProducts = createSelector(
  [getProductIds, getProductEntities],
  (products, entities) => {
    return products.map(id => entities[id]);
  }
);

export const getProduct = createSelector(
  getProductById,
  result => result
);
