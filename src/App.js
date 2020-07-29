import React from "react";
import Grid from "@material-ui/core/Grid";
import NewItemInput from "./NewItemInput";
import ItemList from "./ItemList";
import { ItemProvider } from "./context/items.context";

function App() {
  return (
    <Grid container justify='center' style={{ marginTop: "1rem" }}>
      <Grid item xs={11} md={8} lg={4}>
        <ItemProvider>
          <NewItemInput />
          <ItemList />
        </ItemProvider>
      </Grid>
    </Grid>
  );
}

export default App;
