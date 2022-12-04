import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
};

const sidebarSlice = createSlice({
  initialState,
  reducers: {
    setShowSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { setShowSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
