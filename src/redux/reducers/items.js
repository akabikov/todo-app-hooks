import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, CHECK_ITEM } from "./actionTypes";

const initState = [];

export default function (state = initState, action) {
  const { type, payload } = action;
  const { id, text, isChecked } = payload || {};

  return (
    {
      [ADD_ITEM]: () => [...state, { id, text, isChecked }],

      [REMOVE_ITEM]: () => state.filter((el) => el.id !== id),

      [EDIT_ITEM]: () =>
        state.map((el) => (el.id === id ? { ...el, text } : el)),

      [CHECK_ITEM]: () =>
        state.map((el) =>
          el.id === id ? { ...el, isChecked: !el.isChecked } : el
        ),
    }[type]?.() || state
  );
}
