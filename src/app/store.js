import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/product/productSlice";
import cartReducer from "../feature/cart/cartSlice";

export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
