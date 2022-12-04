import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import sidebarReducer from "./sidebarSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
