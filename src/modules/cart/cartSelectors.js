import { createSelector } from "reselect";

const getProductsIds = state => state.cart.items;
const getUniqueIds = state => state.cart.ids;
const getProductEntities = state => state.entities.products;

/*
finding the number of units of the current product
 */
const getCountProduct = (id, arr) =>
  arr.reduce((count, currentId) => {
    if (currentId === id) count++;
    return count;
  }, 0);

export const getProducts = createSelector(
  [getProductsIds, getProductEntities, getUniqueIds],
  (ids, entities, uniqueIds) => {
    if (Object.keys(entities).length === 0) {
      return undefined;
    }

    const result = uniqueIds.map(id => {
      const count = getCountProduct(id, ids);
      if (entities[id]) {
        return { ...entities[id], count: count };
      }
      return undefined;
    });
    return result.filter(item => item); // delete undefined object
  }
);

export const totalPrice = createSelector(
  [getProducts],
  items => {
    if (!items) {
      return 0;
    }
    return items.reduce((acc, item) => acc + item.price * item.count, 0);
  }
);
