import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useArray } from "../hooks/useArray";

export const useLikeHistory = (storageName, maxLengthValue) => {
  const { value: likeHistory, setInLocalStorage } = useLocalStorage(storageName);

  // const {
  //   array: likeHistory,
  //   setArray: setLikeHistory,
  //   addToHistory,
  //   deleteFromHistory,
  //   updateInHistory,
  // } = useArray([], maxLengthValue);

  // const [likeHistory, setLikeHistory] = useState([]);

  const appendLikeHistory = (newElem) => {
    let tempHistory = [...likeHistory];

    if (tempHistory.length >= maxLengthValue) tempHistory.shift();
    tempHistory.push(newElem);

    // setLikeHistory(tempHistory);
    setInLocalStorage(tempHistory);
  };

  // useEffect(() => {
  //   if (likeStorage) {
  //     setLikeHistory(likeStorage);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (likeStorage) {
  //     setLikeHistory(likeStorage);
  //   }
  // }, [likeStorage]);

  // const updateLikeHistory = (newElem) => {
  //   addToHistory(newElem, maxLengthValue);
  //   setInLocalStorage(likeHistory);
  // };

  return { likeHistory, appendLikeHistory };
};
