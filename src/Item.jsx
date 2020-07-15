import React, { useState } from "react";

function Item(props) {
  const { id, text, isChecked, check, edit, remove } = props;

  const [isEditMode, isEditModeSet] = useState(false);
  const [editedText, editedTextSet] = useState(text);

  const handleCheck = (evt) => {
    check(id);
  };

  const handleRemove = (evt) => {
    evt.preventDefault();
    remove(id);
  };

  const handleEditMode = (evt) => {
    evt.preventDefault();
    isEditModeSet(true);
  };

  const handleEdited = (evt) => {
    evt.preventDefault();
    edit(id, editedText);
    isEditModeSet(false);
  };

  const handleChange = (evt) => {
    editedTextSet(evt.target.value);
  };

  const editForm = (
    <form onSubmit={handleEdited}>
      <input type='text' value={editedText} autoFocus onChange={handleChange} />
      <button>Save</button>
    </form>
  );

  const item = (
    <div>
      <input
        type='checkbox'
        id={id}
        checked={isChecked}
        onChange={handleCheck}
      />
      {text}
      <button onClick={handleEditMode}>Edit</button>
      <button onClick={handleRemove}>Del</button>
    </div>
  );

  return <li>{isEditMode ? editForm : item}</li>;
}

export default Item;
