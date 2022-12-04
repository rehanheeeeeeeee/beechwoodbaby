import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlist: (state, action) => {},
    addToWishlist: (state, action) => {
      if (state.wishlistItems.map((item) => item.id) === action.payload.id) {
        return;
      }
      state.wishlistItems.push(action.payload);
    },
    removeFromWislist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (items) => items.id !== action.payload
      );
    },
  },
});

export const {} = wishlistSlice.actions;

export default wishlistSlice.reducer;
