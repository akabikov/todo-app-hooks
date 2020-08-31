function readStorage(key, initVal = []) {
  let result;

  try {
    result = JSON.parse(localStorage.getItem(key)) || initVal;
  } catch (error) {
    result = initVal;
  }

  return result;
}

function updateStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

export { readStorage, updateStorage };
