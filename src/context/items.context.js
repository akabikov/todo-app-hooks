import React, { createContext } from "react";
import useStorageState from "../hooks/useStorageState";

export const ItemsContext = createContext();
export const DispatchContext = createContext();

export function ItemProvider(props) {
  const [items, dispatch] = useStorageState("items", []);

  return (
    <ItemsContext.Provider value={items}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ItemsContext.Provider>
  );
}
