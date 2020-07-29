import React, { createContext } from "react";
import reducer from "../reducers/item.reducer";
import useStorageReducer from "../hooks/useStorageReducer";

export const ItemsContext = createContext();
export const DispatchContext = createContext();

export function ItemProvider(props) {
  const [items, dispatch] = useStorageReducer("items", [], reducer);

  return (
    <ItemsContext.Provider value={items}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ItemsContext.Provider>
  );
}
