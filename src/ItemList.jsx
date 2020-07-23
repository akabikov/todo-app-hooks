import React from "react";
import Paper from "@material-ui/core/Paper";
import Item from "./Item";
import List from "@material-ui/core/List";

function ItemList({ items, handlers }) {
  if (!items.length) return null;

  const list = items.map((item, i) => (
    <Item
      key={item.id}
      {...item}
      {...handlers}
      isLast={i === items.length - 1}
    />
  ));

  return (
    <Paper>
      <List>{list}</List>
    </Paper>
  );
}

export default ItemList;
