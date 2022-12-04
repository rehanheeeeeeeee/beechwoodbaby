import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser: (state, action) => {
      state.user = {};
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
