import React from "react";
import Divider from "@material-ui/core/Divider";
import useToggleState from "./hooks/useToggleState";
import ItemEdit from "./ItemEdit";
import ItemView from "./ItemView";

function Item({ id, text, isChecked, check, edit, remove, isLast }) {
  const [isEditMode, toggleEditMode] = useToggleState();

  return (
    <>
      {isEditMode ? (
        <ItemEdit {...{ id, text, edit, toggleEditMode }} />
      ) : (
        <ItemView {...{ id, text, isChecked, check, remove, toggleEditMode }} />
      )}
      {isLast ? null : <Divider />}
    </>
  );
}

export default Item;
