function readStorage(key) {
  let result;

  try {
    result = JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error.message);
    throw error;
  }

  return result;
}

function updateStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

export { readStorage, updateStorage };
