import { useState, useEffect } from "react";
import { readStorage, updateStorage } from "../helpers/storageHelpers";

function useStorageState(key, initVal) {
  const [state, stateSet] = useState(() => {
    let val;

    try {
      val = readStorage(key) || initVal;
    } catch {
      val = initVal;
    }

    return val;
  });

  useEffect(() => updateStorage(key, state));

  return [state, stateSet];
}

export default useStorageState;
