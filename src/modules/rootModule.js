import { combineReducers } from "redux";
import products from "./products/productsReducer";
import cart from "./cart/cartReducer";
import entities from "./entities/entitiesReducer";
import app from "./app/appReducer";
import users from "./users/usersReducer";
import search from "./search/searchReducer";

export default combineReducers({
  products,
  users,
  cart,
  entities,
  app,
  search
});
