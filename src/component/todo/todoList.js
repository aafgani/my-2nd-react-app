import { Grid, Container } from "@mui/material";
import React from "react";
import TodoItem from "./todoItem";
const TodoForm = ({ todos }) => {
  return (
    <>
      <Container>
        <Grid item>
          {todos?.map((item, id) => (
            <TodoItem item={item} key={id} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TodoForm;
