import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      if (state.items.map((item) => item.id) === action.payload.id) {
        return;
      }
      state.items.push(action.payload);
    },
  },
});

export const {} = wishlistSlice.actions;

export default wishlistSlice.reducer;
