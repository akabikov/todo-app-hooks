import React from "react";
import useInputState from "../hooks/useInputState";
import { connect } from "react-redux";
import { edit } from "../redux/actions";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";

function ItemEdit({ id, text, edit, toggleEditMode }) {
  const [editedText, handleChange] = useInputState(text);

  const handleEdited = (evt) => {
    evt.preventDefault();
    edit(id, editedText);
    toggleEditMode();
  };

  return (
    <ListItem style={{ height: "4rem" }}>
      <form
        onSubmit={handleEdited}
        style={{ flex: "auto", margin: "0 6rem 0 2rem" }}
      >
        <TextField
          autoFocus
          fullWidth
          value={editedText}
          onChange={handleChange}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label='save' type='submit'>
            <SaveIcon />
          </IconButton>
          <IconButton aria-label='close' edge='end' onClick={toggleEditMode}>
            <CloseIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </form>
    </ListItem>
  );
}

export default connect(null, { edit })(ItemEdit);
