import { Grid, Box, Container, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import CustomizedInputBase from "../others/customizedSearch";
import AddIcon from "@mui/icons-material/Add";
import TodoList from "./todoList";
import AccordionComp from "../others/accordion";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      itemName: "task 1",
      isCompleted: false,
      edit: false,
    },
    {
      id: 2,
      itemName: "task 2",
      isCompleted: true,
      edit: false,
    },
    {
      id: 3,
      itemName: "task 3",
      isCompleted: false,
      edit: true,
    },
    {
      id: 4,
      itemName: "task 4",
      isCompleted: false,
      edit: false,
    },
    {
      id: 5,
      itemName: "task 5",
      isCompleted: false,
      edit: false,
    },
  ]);

  const handleEdit = (id, itemName, isCompleted, edit) => {
    const updatedTodos = todos.map((item) =>
      item.id === id
        ? { id: id, itemName: itemName, isCompleted: isCompleted, edit: edit }
        : item
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <Box sx={{ marginTop: "30px" }}>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item xs={4} lg={4} alignContent="center">
            <CustomizedInputBase
              searchHandler={() => {
                alert(123);
              }}
              placeholder="To do ..."
              iconButton={<AddIcon />}
            />
            <br />
            <Typography>
              You have {todos.filter((i) => !i.isCompleted).length} items to
              complete!
            </Typography>
            {/* <Divider /> */}
            <TodoList
              todos={todos.filter((i) => !i.isCompleted)}
              handleEdit={handleEdit}
            />
            <br />
            <AccordionComp
              title={"Completed " + todos.filter((i) => i.isCompleted).length}
            >
              <TodoList todos={todos.filter((i) => i.isCompleted)} />
            </AccordionComp>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Todo;
