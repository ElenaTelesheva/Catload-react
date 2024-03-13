import { useState } from "react";

export const useArray = (initialValue) => {
  // массив
  // операции с ним - лайк, дизлайк и др.
  // добавить localstorage хук

  const [array, setArray] = useState(initialValue);

  const addToHistory = (newElem, maxLengthValue) => {
    let tempHistory = [...array];

    if (tempHistory.length >= maxLengthValue) tempHistory.shift();
    tempHistory.push(newElem);

    setArray(tempHistory);
  };

  const deleteFromHistory = (elem) => {
    let tempHistory = [...array];

    tempHistory.forEach((item, index) => {
      if (item.url === elem.url) {
        tempHistory.splice(index, 1);
      }
    });

    setArray(tempHistory);
  };

  const updateInHistory = (index, newElem) => {
    let tempHistory = [...array];

    tempHistory[index] = { ...newElem };
    setArray(tempHistory);
  };

  return { array, setArray, addToHistory, deleteFromHistory, updateInHistory };
};
