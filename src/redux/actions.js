import { v4 as uuidv4 } from "uuid";
import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, CHECK_ITEM } from "./actionTypes";

export const add = (text) => ({
  type: ADD_ITEM,
  payload: {
    id: uuidv4(),
    text,
    isChecked: false,
  },
});

export const remove = (id) => ({
  type: REMOVE_ITEM,
  payload: { id },
});

export const edit = (id, text) => ({
  type: EDIT_ITEM,
  payload: { id, text },
});

export const check = (id) => ({
  type: CHECK_ITEM,
  payload: { id },
});
