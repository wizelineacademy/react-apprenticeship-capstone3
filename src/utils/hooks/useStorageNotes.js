import { useState, useEffect } from "react";

const getValuesFromStorage = (key, defaultValue) => {
    const savedNotes = localStorage.getItem(key);
    const initialValue = JSON.parse(savedNotes);
    return initialValue || defaultValue;
}

export const useStorageNotes = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getValuesFromStorage(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStorageNotes;