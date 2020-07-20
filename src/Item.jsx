import React from "react";
import useToggleState from "./hooks/useToggleState";
import ItemEdit from "./ItemEdit";
import ItemView from "./ItemView";

function Item({ id, text, isChecked, check, edit, remove }) {
  const [isEditMode, toggleEditMode] = useToggleState();

  return (
    <>
      {isEditMode ? (
        <ItemEdit {...{ id, text, edit, toggleEditMode }} />
      ) : (
        <ItemView {...{ id, text, isChecked, check, remove, toggleEditMode }} />
      )}
    </>
  );
}

export default Item;
