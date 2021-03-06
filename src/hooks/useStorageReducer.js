import { useReducer, useEffect } from "react";
import { readStorage, updateStorage } from "../helpers/storageHelpers";

function useStorageReducer(key, initVal, reducer) {
  const init = (initVal) => {
    let val;

    try {
      val = readStorage(key) || initVal;
    } catch {
      val = initVal;
    }

    return val;
  };

  const [state, dispatch] = useReducer(reducer, initVal, init);

  useEffect(() => updateStorage(key, state));

  return [state, dispatch];
}

export default useStorageReducer;
