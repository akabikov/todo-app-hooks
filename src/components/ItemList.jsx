import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateStorage } from "../helpers/storageHelpers";
import Paper from "@material-ui/core/Paper";
import Item from "./Item";
import List from "@material-ui/core/List";

function ItemList({ items }) {
  useEffect(() => updateStorage("items", items), [items]);

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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ItemList);
