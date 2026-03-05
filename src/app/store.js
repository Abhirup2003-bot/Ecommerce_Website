import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/product/productSlice";

export default configureStore({
  reducer: {
    products: productReducer,
  },
});
