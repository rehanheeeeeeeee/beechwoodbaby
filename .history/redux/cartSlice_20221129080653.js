import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
    },
  },
});

export const { addToBasket } = cartSlice.actions;

export const selectBasket = (state) => {
  return state.cart.basket;
};

export default cartSlice.reducer;
