import { Box, Checkbox } from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import InputBase from "@mui/material/InputBase";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import {
  useUpsertTodoMutation,
  useDeleteTodoMutation,
} from "../../redux/service/todoService";

const TodoItem = ({ item }) => {
  const [edit, setEdit] = useState(false);
  const [upsertTodo, { error }] = useUpsertTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [editedItemName, setEditedItemName] = useState("");
  const { Id, itemName, isCompleted } = item;

  const HandleOnEdit = (e) => {
    setEdit(!edit);
    setEditedItemName(e.target.value);
  };
  const HandleOnRemove = (Id) => {
    deleteTodo({ Id: Id });
  };
  const HandleOnComplete = () => {
    upsertTodo({ Id: Id, itemName: itemName, isCompleted: !isCompleted });
  };

  //   if (error) {
  //     // let errorMsg = {error.status} {JSON.stringify(error.data)};
  //     alert("eror : " + error);
  //   }

  return (
    <Box display="flex" justifyContent="space-between">
      {edit ? (
        <Box>
          <InputBase
            sx={{ ml: 1, flex: 1, width: "700px" }}
            placeholder={itemName}
            inputProps={{ "aria-label": "search google maps" }}
            value={editedItemName}
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
                HandleOnComplete(Id);
              }}
            />
            <span>{itemName}</span>
          </Box>
          <Box m={1} display="flex" justifyContent="flex-end">
            {!isCompleted && (
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
                    HandleOnRemove(Id);
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
