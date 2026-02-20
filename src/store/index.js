/** @format */

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductSlice";
import cartReducer from "./slices/cartSlices";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
