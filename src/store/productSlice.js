import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatues(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatues } = productSlice.actions;
export default productSlice.reducer;

//thunk

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, setState) {
    dispatch(setStatues(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatues(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatues(STATUSES.ERROR));
    }
  };
}
