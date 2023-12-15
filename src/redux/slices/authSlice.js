import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  uid: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("action", action);
      state.isLoggedIn = true;
      state.uid = action.payload;
      // Handle other login-related state changes if needed
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.uid = "";
      // Clear other relevant authentication state upon logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
