import React from "react";
import useInputState from "../hooks/useInputState";
import { connect } from "react-redux";
import { add } from "../redux/actions";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function NewItemInput({ add }) {
  const [text, handleChange, reset] = useInputState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    add(text);
    reset();
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "0.5rem 1rem" }}>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item style={{ flex: "auto" }}>
            <TextField
              label='Add new...'
              fullWidth
              value={text}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <IconButton edge='end' aria-label='add' type='submit'>
              <AddCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default connect(null, { add })(NewItemInput);
