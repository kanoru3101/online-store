import { createSelector } from "reselect";

const getProduct = state => state.search.products;

export const getProductsForSearch = createSelector(
  [getProduct],
  products => {
    if (products.length >= 8) {
      return products.slice(0, 8);
    }
    return products;
  }
);
