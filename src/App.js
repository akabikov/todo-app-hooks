import React from "react";
import useItemState from "./hooks/useItemState";
import NewItemInput from "./NewItemInput";
import ItemList from "./ItemList";

function App() {
  const { items, handlers } = useItemState();

  return (
    <>
      <NewItemInput handleAdd={handlers.add} />
      <ItemList items={items} handlers={handlers} />
    </>
  );
}

export default App;
