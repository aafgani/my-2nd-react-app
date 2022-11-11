import { configureStore } from "@reduxjs/toolkit";
import CocktailReducer from "./features/cocktailSlice";
import { todoApi } from "./service/todoService";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    cocktailApp: CocktailReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([todoApi.middleware]),
});

setupListeners(store.dispatch);

export default store;
