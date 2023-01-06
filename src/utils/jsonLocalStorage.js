export const addItem = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const readItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
