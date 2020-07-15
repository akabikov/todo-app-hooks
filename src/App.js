import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
import NewItemInput from "./NewItemInput";

import "./App.css";

// const mockTodos = [
//   {
//     id: uuidv4(),
//     text: "test1",
//     isChecked: false,
//   },
//   {
//     id: uuidv4(),
//     text: "test2",
//     isChecked: true,
//   },
// ];

function App() {
  const [items, itemsSet] = useState([]);

  const handlers = {
    add: (text) => {
      const newItem = {
        id: uuidv4(),
        text,
        isChecked: false,
      };

      itemsSet([...items, newItem]);
    },

    check: (id) => {
      itemsSet(
        items.map((el) =>
          el.id === id ? { ...el, isChecked: !el.isChecked } : el
        )
      );
    },

    edit: (id, text) => {
      itemsSet(items.map((el) => (el.id === id ? { ...el, text } : el)));
    },

    remove: (id) => {
      itemsSet(items.filter((el) => el.id !== id));
    },
  };

  const list = items.map((item) => (
    <Item key={item.id} {...item} {...handlers} />
  ));

  return (
    <div className='App'>
      <NewItemInput handleAdd={handlers.add} />
      <ul>{list}</ul>
    </div>
  );
}

export default App;
