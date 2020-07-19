import { useState } from "react";

function useInputState(initVal) {
  const [value, setValue] = useState(initVal);

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const reset = () => {
    setValue(initVal);
  };

  return [value, handleChange, reset];
}

export default useInputState;
