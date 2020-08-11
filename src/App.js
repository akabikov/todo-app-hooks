import React from "react";
import Grid from "@material-ui/core/Grid";
import NewItemInput from "./components/NewItemInput";
import ItemList from "./components/ItemList";

function App() {
  return (
    <Grid container justify='center' style={{ marginTop: "1rem" }}>
      <Grid item xs={11} md={8} lg={4}>
        <NewItemInput />
        <ItemList />
      </Grid>
    </Grid>
  );
}

export default App;
