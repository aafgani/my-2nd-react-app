import {
  Typography,
  Grid,
  Container,
  Box,
  Checkbox,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import InputBase from "@mui/material/InputBase";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";

const TodoForm = ({ todos, handleEdit }) => {
  const [edit, setEdit] = useState("");
  const handleOnEdit = (id, itemName, isCompleted, edit) => {
    handleEdit(id, itemName, isCompleted, edit);
  };
  return (
    <>
      <Container>
        <Grid item>
          {todos?.map((item, id) => (
            <Box key={id} display="flex" justifyContent="space-between">
              {item.edit ? (
                <Box>
                  <InputBase
                    sx={{ ml: 1, flex: 1, width: "700px" }}
                    placeholder={item.itemName}
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                    onClick={() => {
                      handleOnEdit(
                        item.id,
                        item.itemName,
                        item.isCompleted,
                        !item.edit
                      );
                    }}
                  >
                    <EditAttributesIcon />
                  </IconButton>
                </Box>
              ) : (
                <>
                  <Box>
                    <Checkbox checked={item.isCompleted ? true : false} />
                    <span>{item.itemName}</span>
                  </Box>
                  <Box m={1} display="flex" justifyContent="flex-end">
                    {!item.isCompleted && (
                      <>
                        <IconButton
                          aria-label="edit"
                          onClick={() => {
                            handleOnEdit(
                              item.id,
                              item.itemName,
                              item.isCompleted,
                              !item.edit
                            );
                          }}
                        >
                          <CreateIcon />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            alert("on remove");
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    )}
                  </Box>
                </>
              )}
            </Box>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TodoForm;
