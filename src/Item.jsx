import React from "react";
import useToggleState from "./hooks/useToggleState";
import ItemEdit from "./ItemEdit";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function Item({ id, text, isChecked, check, edit, remove }) {
  const [isEditMode, toggleEditMode] = useToggleState();

  const handleCheck = (evt) => {
    check(id);
  };

  const handleRemove = (evt) => {
    evt.preventDefault();
    remove(id);
  };

  const handleEditMode = (evt) => {
    evt.preventDefault();
    toggleEditMode();
  };

  const item = (
    <ListItem dense button onClick={handleCheck}>
      <ListItemIcon>
        <Checkbox edge='start' checked={isChecked} />
      </ListItemIcon>
      <ListItemText primary={text} />
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

  return (
    <>
      {isEditMode ? <ItemEdit {...{ id, text, edit, toggleEditMode }} /> : item}
    </>
  );
}

export default Item;
