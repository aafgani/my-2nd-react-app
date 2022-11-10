import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7278/api" }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    fetchTodos: builder.query({
      query: () => "/TodoFunction-GetAll",
      providesTags: ["Todo"],
    }),
    upsertTodo: builder.mutation({
      query: (todo) => ({
        url: "/TodoFunction-Upsert",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation({
      query: (todo) => ({
        url: "/TodoFunction-Delete",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useUpsertTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
