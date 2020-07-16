function readStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function updateStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

export { readStorage, updateStorage };
