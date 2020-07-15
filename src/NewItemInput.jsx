import React, { useState } from "react";

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
      <input
        type='text'
        placeholder='Add new...'
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default NewItemInput;
