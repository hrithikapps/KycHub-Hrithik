import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

const compareSlice = createSlice({
  name: "compare",
  initialState: [],
  reducers: {
    addToCompare: (state, action) => {
      if (state.length < 4 && !state.some((p) => p.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFromCompare: (state, action) =>
      state.filter((p) => p.id !== action.payload),
  },
});

export const { setProducts } = productSlice.actions;
export const { addToCompare, removeFromCompare } = compareSlice.actions;

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    compare: compareSlice.reducer,
  },
});

export default store;
