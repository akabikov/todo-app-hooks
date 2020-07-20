import React from "react";
import useInputState from "./hooks/useInputState";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";

function ItemEdit({ id, text, edit, toggleEditMode }) {
  const [editedText, handleChange] = useInputState(text);

  const handleEdited = (evt) => {
    evt.preventDefault();
    edit(id, editedText);
    toggleEditMode();
  };

  return (
    <ListItem>
      <form onSubmit={handleEdited}>
        <TextField autoFocus value={editedText} onChange={handleChange} />
        <ListItemSecondaryAction>
          <IconButton aria-label='save' type='submit'>
            <SaveIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </form>
    </ListItem>
  );
}

export default ItemEdit;