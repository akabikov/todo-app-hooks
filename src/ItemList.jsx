import React from "react";
import Item from "./Item";
import List from "@material-ui/core/List";

function ItemList({ items, handlers }) {
  const list = items.map((item) => (
    <Item key={item.id} {...item} {...handlers} />
  ));

  return <List dense>{list}</List>;
}

export default ItemList;
