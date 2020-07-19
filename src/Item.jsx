import React from "react";
import useInputState from "./hooks/useInputState";
import useToggleState from "./hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";

function Item({ id, text, isChecked, check, edit, remove }) {
  const [isEditMode, EditModeToggle] = useToggleState();
  const [editedText, handleChange] = useInputState(text);

  const handleCheck = (evt) => {
    check(id);
  };

  const handleRemove = (evt) => {
    evt.preventDefault();
    remove(id);
  };

  const handleEditMode = (evt) => {
    evt.preventDefault();
    EditModeToggle();
  };

  const handleEdited = (evt) => {
    evt.preventDefault();
    edit(id, editedText);
    EditModeToggle();
  };

  const editForm = (
    <ListItem>
      <form onSubmit={handleEdited}>
        <TextField autoFocus value={editedText} onChange={handleChange} />
        <IconButton aria-label='save' type='submit'>
          <SaveIcon />
        </IconButton>
      </form>
    </ListItem>
  );

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

  return <>{isEditMode ? editForm : item}</>;
}

export default Item;
