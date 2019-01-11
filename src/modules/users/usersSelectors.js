import { createSelector } from "reselect";

const getUser = (state, id) => {
  let result = {};
  state.users.users.forEach(item => {
    if (item.id === id) {
      result = item;
    }
  });
  return result;
};

export const getCurrentUser = createSelector(
  getUser,
  items => items
);
