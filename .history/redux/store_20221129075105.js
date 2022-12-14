import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import sidebarReducer from "./sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    cart: cartReducer,
  },
});
