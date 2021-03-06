import React from "react";
import { connect } from "react-redux";
import { remove, check } from "../redux/actions";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function ItemView({ id, text, isChecked, toggleEditMode, remove, check }) {
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

export default connect(null, { remove, check })(ItemView);
