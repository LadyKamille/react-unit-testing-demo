import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["auth"]
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// All Unit tests fail with the following error
// TypeError: baseReducer is not a function
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);
