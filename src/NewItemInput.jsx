import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function NewItemInput({ handleAdd }) {
  const [text, handleChange, reset] = useInputState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAdd(text);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label='Add new...' value={text} onChange={handleChange} />
      <IconButton aria-label='add' type='submit'>
        <AddCircleIcon />
      </IconButton>
    </form>
  );
}

export default NewItemInput;
