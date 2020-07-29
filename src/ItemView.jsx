import React, { useContext } from "react";
import { DispatchContext } from "./context/items.context";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function ItemView({ id, text, isChecked, toggleEditMode }) {
  const dispatch = useContext(DispatchContext);

  const handleCheck = (evt) => {
    dispatch({ type: "check", id });
  };

  const handleRemove = (evt) => {
    evt.preventDefault();
    dispatch({ type: "remove", id });
  };

  const handleEditMode = (evt) => {
    evt.preventDefault();
    toggleEditMode();
  };

  return (
    <ListItem
      button
      onClick={handleCheck}
      style={{ height: "4rem", paddingRight: "6rem" }}
    >
      <ListItemIcon style={{ minWidth: "2rem" }}>
        <Checkbox edge='start' checked={isChecked} />
      </ListItemIcon>
      <ListItemText
        primary={text}
        style={{
          textDecoration: isChecked ? "line-through" : "none",
          overflow: "auto",
        }}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={handleEditMode}>
          <EditIcon />
        </IconButton>
        <IconButton edge='end' onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ItemView;
