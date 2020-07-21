import { v4 as uuidv4 } from "uuid";
import useStorageState from "./useStorageState";

function useItemState() {
  const [items, itemsSet] = useStorageState("items", []);

  const handlers = {
    add: (text) => {
      if (!text) return;

      const newItem = {
        id: uuidv4(),
        text,
        isChecked: false,
      };

      itemsSet([...items, newItem]);
    },

    check: (id) => {
      itemsSet(
        items.map((el) =>
          el.id === id ? { ...el, isChecked: !el.isChecked } : el
        )
      );
    },

    edit: (id, text) => {
      itemsSet(items.map((el) => (el.id === id ? { ...el, text } : el)));
    },

    remove: (id) => {
      itemsSet(items.filter((el) => el.id !== id));
    },
  };

  return { items, handlers };
}

export default useItemState;
