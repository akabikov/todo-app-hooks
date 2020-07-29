import React, { useContext } from "react";
import { ItemsContext } from "./context/items.context";
import Paper from "@material-ui/core/Paper";
import Item from "./Item";
import List from "@material-ui/core/List";

function ItemList() {
  const { items } = useContext(ItemsContext);

  if (!items.length) return null;

  const list = items.map((item, i) => (
    <Item key={item.id} {...item} isLast={i === items.length - 1} />
  ));

  return (
    <Paper>
      <List>{list}</List>
    </Paper>
  );
}

export default ItemList;
