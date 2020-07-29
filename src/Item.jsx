import React, { memo } from "react";
import Divider from "@material-ui/core/Divider";
import useToggleState from "./hooks/useToggleState";
import ItemEdit from "./ItemEdit";
import ItemView from "./ItemView";

function Item({ id, text, isChecked, isLast }) {
  const [isEditMode, toggleEditMode] = useToggleState();

  return (
    <>
      {isEditMode ? (
        <ItemEdit {...{ id, text, toggleEditMode }} />
      ) : (
        <ItemView {...{ id, text, isChecked, toggleEditMode }} />
      )}
      {isLast ? null : <Divider />}
    </>
  );
}

export default memo(Item);
