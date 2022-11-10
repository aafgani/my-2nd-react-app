import { Grid, Box, Container, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import CustomizedInputBase from "../others/customizedSearch";
import AddIcon from "@mui/icons-material/Add";
import TodoList from "./todoList";
import AccordionComp from "../others/accordion";
import {
  useFetchTodosQuery,
  useUpsertTodoMutation,
} from "../../redux/service/todoService";

const Todo = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useFetchTodosQuery();

  const [upsertTodo, { errorUpsert }] = useUpsertTodoMutation();

  const HandleOnAddItem = (itemName) => {
    const todo = {
      itemName: itemName,
      isCompleted: false,
    };
    upsertTodo(todo);
  };

  if (errorUpsert) {
    alert(errorUpsert);
  }

  return (
    <>
      <Box sx={{ marginTop: "30px" }}>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item xs={6} lg={4} alignContent="center">
            <CustomizedInputBase
              searchHandler={HandleOnAddItem}
              placeholder="To do ..."
              iconButton={<AddIcon />}
            />
            <br />
            {isLoading && <p>Loading...</p>}
            {isSuccess && (
              <>
                {" "}
                <Typography>
                  You have {todos?.filter((i) => !i.isCompleted).length} items
                  to complete!
                </Typography>
                <TodoList todos={todos?.filter((i) => !i.isCompleted)} />
                <br />
                {todos && (
                  <AccordionComp
                    title={
                      "Completed " + todos?.filter((i) => i.isCompleted).length
                    }
                  >
                    <TodoList todos={todos?.filter((i) => i.isCompleted)} />
                  </AccordionComp>
                )}
              </>
            )}
            {isError && (
              <p>
                {error.status} {JSON.stringify(error.data)}
              </p>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Todo;
