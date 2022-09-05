import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  subscriptionProducts: [],
  pricePerSubscription: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const { subscriptionProducts, pricePerSubscription } = action.payload;
      console.log("In redux here", action, subscriptionProducts);
      state.subscriptionProducts = subscriptionProducts;
      //   .push(...subscriptionProducts);
      state.pricePerSubscription = pricePerSubscription;
    },
  },
});

export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;
