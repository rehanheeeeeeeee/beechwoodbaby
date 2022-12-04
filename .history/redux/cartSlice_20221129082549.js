import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearBasket : ()=>{
        state.basket = null
        saveCart(JSON.stringify([])
    },
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
      saveCart(JSON.stringify(state.basket));
    },
  },
});

const saveCart = (basket) => {
  localStorage.setItem("basket", basket);
};

export const { addToBasket } = cartSlice.actions;

export const selectBasket = (state) => {
  return state.cart.basket;
};

export default cartSlice.reducer;
