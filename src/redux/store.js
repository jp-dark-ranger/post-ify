import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/taskSlice";
import authReducer from "./slices/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  tasksReducer,
  authReducer,
});

const persistConfig = {
  key: "root", // key for the persist storage
  storage, // storage engine
  whitelist: ["authReducer"],
  // Optionally, you can whitelist or blacklist specific reducers
  // whitelist: ['someReducer'], // reducers to be persisted (whitelist takes priority)
  // blacklist: ['someReducer'], // reducers to be excluded from persistence
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
