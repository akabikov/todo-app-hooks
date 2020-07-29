import { v4 as uuidv4 } from "uuid";

function reducer(state, action) {
  const { type, id, text } = action;

  switch (type) {
    case "add":
      const newItem = {
        id: uuidv4(),
        text,
        isChecked: false,
      };

      return [...state, newItem];

    case "check":
      return state.map((el) =>
        el.id === id ? { ...el, isChecked: !el.isChecked } : el
      );

    case "edit":
      return state.map((el) => (el.id === id ? { ...el, text } : el));

    case "remove":
      return state.filter((el) => el.id !== id);

    default:
      return state;
  }
}

export default reducer;
