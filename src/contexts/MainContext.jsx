import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { useSlider } from "../hooks/useSlider";
import { useArray } from "../hooks/useArray";
import { useSessionHistory } from "../hooks/useSessionHistory";
import { useLikeHistory } from "../hooks/useLikeHistory";

const LOCAL_STORAGE_CURR = "curr";
const LOCAL_STORAGE_ALL = "all";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  // const { currLikeHistory, setCurrLikeHistory } = useArray([], 10);
  // const { allLikeHistory, setAllLikeHistory } = useMassiv([], 5);

  const {
    index,
    direction,
    sessionHistory,
    updateSessionHistory,
    movePrevInSessionHistory,
    moveNextInSessionHistory,
    moveLastInSessionHistory,
  } = useSessionHistory();

  const { likeHistory, appendLikeHistory } = useLikeHistory(LOCAL_STORAGE_CURR, 10);

  const onLikeHandler = async () => {
    console.log("кидаем лайкосик");
    console.log("like history", likeHistory);

    appendLikeHistory(sessionHistory[index]);
    await updateSessionHistory(index, 1);
    //   slideRight();

    console.log("new like history", likeHistory);
  };

  return (
    <MainContext.Provider
      value={{
        sessionHistory,
        likeHistory,
        index,
        onLikeHandler,
        direction,
        movePrevInSessionHistory,
        moveNextInSessionHistory,
        moveLastInSessionHistory,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
