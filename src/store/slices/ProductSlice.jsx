/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductService } from "../../services/api";

// Async thunk to fetch products using our service layer
export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await ProductService.getAllProducts();
      return data;
    } catch (error) {
      // Return a clean error message if the API fails
      return rejectWithValue(
        error.response?.data || "Failed to fetch products",
      );
    }
  },
);

const initialState = {
  items: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}, // No synchronous reducers needed yet
  extraReducers: (builder) => {
    builder
      // When the API call starts...
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      // When the API call succeeds...
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      // When the API call fails...
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
