import React from "react";
import Grid from "@material-ui/core/Grid";
import useItemState from "./hooks/useItemState";
import NewItemInput from "./NewItemInput";
import ItemList from "./ItemList";

function App() {
  const { items, handlers } = useItemState();

  return (
    <Grid container justify='center' style={{ marginTop: "1rem" }}>
      <Grid item xs={11} md={8} lg={4}>
        <NewItemInput handleAdd={handlers.add} />
        <ItemList items={items} handlers={handlers} />
      </Grid>
    </Grid>
  );
}

export default App;
