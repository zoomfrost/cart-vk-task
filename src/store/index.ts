import { configureStore } from "@reduxjs/toolkit";

import products from "../slices/productsSlice";

const store = configureStore({
  reducer: { products },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
