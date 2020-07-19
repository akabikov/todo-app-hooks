import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function NewItemInput(props) {
  const [text, textSet] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAdd(text);
    textSet("");
  };

  const handleChange = (evt) => {
    textSet(evt.target.value);
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
