import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (page) => {
    const limit = 10;
    const skip = (page - 1) * limit;

    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );

    const data = await res.json();
    return data.products;
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    page: 1,
    loading: false,
  },

  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...state.products, ...action.payload];
      });
  },
});

export const { nextPage } = productSlice.actions;
export default productSlice.reducer;
