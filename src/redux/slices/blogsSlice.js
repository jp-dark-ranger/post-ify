// postsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // or your preferred HTTP client library
import { URL } from "../../constants";

// Define the initial state for posts
const initialState = {
  blogs: [],
  status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
  postData: {},
};

// Create an async thunk for fetching posts from an API
export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
  try {
    const response = await axios.get(URL + "/blogs"); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw Error("Failed to fetch posts");
  }
});

// Create an async thunk for adding a new post
export const addNewBlog = createAsyncThunk(
  "blogs/addNewPost",
  async (postData) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify(postData)
      ); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw Error("Failed to add a new post");
    }
  }
);

// Create a slice for managing posts state
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    saveBlog: (state, action) => {
      console.log("QWE", action);
      state.postData = action.payload;
    },
    saveDepartments: (state, action) => {
      state.postData.department = action.payload;
    },
  },

  extraReducers: {
    [getBlogs.pending]: (state) => {
      state.status = "loading";
    },
    [getBlogs.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.blogs = action.payload;
    },
    [getBlogs.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addNewBlog.fulfilled]: (state, action) => {
      state.blogs.push(action.payload);
    },
  },
});
export const { saveBlog, saveDepartments } = blogsSlice.actions;
export default blogsSlice.reducer;

// Export additional actions or selectors if needed
// For example: export const { selectAll: selectAllPosts } = postsAdapter.getSelectors((state) => state.posts);
