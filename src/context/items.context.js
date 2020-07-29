import React, { createContext } from "react";
import useStorageState from "../hooks/useStorageState";

export const ItemsContext = createContext();

export function ItemProvider(props) {
  const [items, dispatch] = useStorageState("items", []);

  return (
    <ItemsContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ItemsContext.Provider>
  );
}
