import React, { createContext } from "react";
import useItemState from "../hooks/useItemState";

export const ItemsContext = createContext();

export function ItemProvider(props) {
  const itemStuff = useItemState();

  return (
    <ItemsContext.Provider value={itemStuff}>
      {props.children}
    </ItemsContext.Provider>
  );
}
