import { configureStore } from "@reduxjs/toolkit";
import CocktailReducer from "./features/cocktailSlice";
import { todoApi } from "./service/todoService";
import { MovieApi } from "./service/movieApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    cocktailApp: CocktailReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [MovieApi.reducerPath]: MovieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([todoApi.middleware, MovieApi.middleware]),
});

setupListeners(store.dispatch);

export default store;
