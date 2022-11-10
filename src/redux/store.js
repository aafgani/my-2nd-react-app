import { configureStore } from "@reduxjs/toolkit";
import CocktailReducer from "./features/cocktailSlice";
import { todoApi } from "./service/todoService";

export default configureStore({
  reducer: {
    cocktailApp: CocktailReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([todoApi.middleware]),
});
