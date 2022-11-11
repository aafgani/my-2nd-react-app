import { Box, Checkbox, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import {
  useUpsertTodoMutation,
  useDeleteTodoMutation,
} from "../../redux/service/todoService";

const TodoItem = ({ item }) => {
  const [edit, setEdit] = useState(false);
  const [upsertTodo] = useUpsertTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [formValue, setFormValue] = useState({});

  const HandleOnEdit = (e) => {
    setEdit(!edit);
    upsertTodo(formValue);
  };
  const HandleOnRemove = (Id) => {
    deleteTodo({ Id: Id });
  };
  const HandleOnComplete = () => {
    upsertTodo({
      Id: formValue.Id,
      itemName: formValue.itemName,
      isCompleted: !formValue.isCompleted,
    });
  };

  useEffect(() => {
    setFormValue({ ...item });
  }, [item]);

  const HandleItemNameOnChange = (e) => {
    setFormValue({ ...formValue, itemName: e.target.value });
  };

  return (
    <Box display="flex" justifyContent="space-between">
      {edit ? (
        <Box>
          <TextField
            variant="standard"
            defaultValue={formValue.itemName}
            onChange={HandleItemNameOnChange}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={HandleOnEdit}
          >
            <EditAttributesIcon />
          </IconButton>
        </Box>
      ) : (
        <>
          <Box>
            <Checkbox
              checked={item.isCompleted ? true : false}
              onChange={() => {
                HandleOnComplete(formValue.Id);
              }}
            />
            <span>{formValue.itemName}</span>
          </Box>
          <Box m={1} display="flex" justifyContent="flex-end">
            {!formValue.isCompleted && (
              <>
                <IconButton
                  aria-label="edit"
                  onClick={() => {
                    setEdit(!edit);
                  }}
                >
                  <CreateIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    HandleOnRemove(formValue.Id);
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
  );
};

export default TodoItem;
