import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constants";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  uid: "",
  name: "",
  email: "",
};

// Create an async thunk for fetching posts from an API
export const addUser = createAsyncThunk("user/createUser", async (postData) => {
  try {
    const response = await axios.post(URL + "users", postData); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw Error("Failed to add Users");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("action", action);
      state.isLoggedIn = true;
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.name = action.payload.name;
      // Handle other login-related state changes if needed
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.uid = "";
      state.email = '';
      state.name = '';
      // Clear other relevant authentication state upon logout
    },
    setName: (state,action) => {
      state.name = action.payload;
      // Clear other relevant authentication state upon logout
    },
  },
  extraReducers: {
    [addUser.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { login, logout,setName } = authSlice.actions;
export default authSlice.reducer;
