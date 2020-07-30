import { v4 as uuidv4 } from "uuid";

function reducer(state, action) {
  const { type, id, text } = action;

  const handlers = {
    add: () => [
      ...state,
      {
        id: uuidv4(),
        text,
        isChecked: false,
      },
    ],

    check: () =>
      state.map((el) =>
        el.id === id ? { ...el, isChecked: !el.isChecked } : el
      ),

    edit: () => state.map((el) => (el.id === id ? { ...el, text } : el)),

    remove: () => state.filter((el) => el.id !== id),
  };

  return handlers[type]?.() || state;
}

export default reducer;
