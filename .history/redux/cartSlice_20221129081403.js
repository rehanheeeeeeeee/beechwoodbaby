import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const ids = state.basket.map((item) => item.id);
      if (ids.includes(action.payload.id)) {
        state.basket = state.basket.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.basket.push(action.payload);
      }
    },
  },
});

const saveCart = (basket) => {};

export const { addToBasket } = cartSlice.actions;

export const selectBasket = (state) => {
  return state.cart.basket;
};

export default cartSlice.reducer;
