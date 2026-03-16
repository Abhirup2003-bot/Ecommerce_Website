import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (page = 1) => {
    // ✅ default page
    const limit = 10;
    const skip = (page - 1) * limit;

    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );

    const data = await res.json();

    return {
      products: data.products,
      total: data.total,
    };
  },
);

const productSlice = createSlice({
  name: "products",

  initialState: {
    products: [],
    page: 1,
    total: 0,
    loading: false,
    hasMore: true,
  },

  reducers: {
    nextPage: (state) => {
      if (!state.loading && state.hasMore) {
        state.page += 1;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;

        const newProducts = action.payload?.products || []; // ✅ safe

        const existingIds = new Set(state.products.map((p) => p.id));

        const filteredProducts = newProducts.filter(
          (p) => !existingIds.has(p.id),
        );

        state.products = [...state.products, ...filteredProducts];

        state.total = action.payload.total;

        if (state.products.length >= state.total) {
          state.hasMore = false;
        }
      });
  },
});

export const { nextPage } = productSlice.actions;
export default productSlice.reducer;
