import { useEffect, useState } from "react";

export const useLocalStorage = (name) => {
  
  const initialLocalStorageData = JSON.parse(localStorage.getItem(name));
  const initialValue = initialLocalStorageData !== null ? initialLocalStorageData : [];
  const [value, setValue] = useState(initialValue);

  const getFromLocalStorage = () => {
    const result = JSON.parse(localStorage.getItem(name));
    if (result != null) setValue(result);
  };

  useEffect(() => {
    getFromLocalStorage();
    console.log("скачиваем");
  }, []);

  const setInLocalStorage = (data) => {
    console.log(value);

    localStorage.setItem(name, JSON.stringify(data));
    setValue(data);
    console.log("изменяем " + data);
  };

  return { value, setInLocalStorage };
};
