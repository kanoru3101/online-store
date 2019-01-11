import { schema } from "normalizr";

export const Product = new schema.Entity("products");

export const ProductCollection = [Product];
