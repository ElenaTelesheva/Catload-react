import { useEffect, useState } from "react";
import { useSlider } from "./useSlider";

const getNewCatUrl = async () => {
  const requestOptions = {
    method: "GET",
    mode: "cors",
  };
  const response = await fetch(`https://api.thecatapi.com/v1/images/search`, requestOptions);

  try {
    const data = await response.json();

    return data;
  } catch (e) {
    alert(e.message);
    return 1;
  }
};

const getNewHistoryObject = async () => {
  const result = await getNewCatUrl();
  return { id: result[0].id, url: result[0].url, emoji: 0 };
};

export const useSessionHistory = () => {
  const [sessionHistory, setSessionHistory] = useState([]);

  const { index, direction, slidePrev, slideNext, slideLast } = useSlider(0);

  const movePrevInSessionHistory = () => {
    slidePrev();
  };

  const moveNextInSessionHistory = async () => {
    // if (index === sessionHistory.length - 1) {
    //   await appendSessionHistory();
    // }
    slideNext(sessionHistory.length);
  };

  const moveLastInSessionHistory = async () => {
    // if (index === sessionHistory.length - 1) {
    //   await appendSessionHistory();
    // }
    slideLast(sessionHistory.length);
  };

  const initializeSessionHistory = async () => {
    let tempSessionHistory = [...sessionHistory];
    tempSessionHistory.push(await getNewHistoryObject());
    setSessionHistory(tempSessionHistory);
  };

  useEffect(() => {
    const init = async () => {
      await initializeSessionHistory();
    };
    init();
  }, []);

  const updateSessionHistory = async (index, emoji) => {
    let tempSessionHistory = [...sessionHistory];

    tempSessionHistory[index].emoji = emoji;

    if (index === sessionHistory.length - 1) {
      tempSessionHistory.push(await getNewHistoryObject());
    }
    setSessionHistory(tempSessionHistory);
    moveNextInSessionHistory();
  };

  return {
    index,
    direction,
    sessionHistory,
    updateSessionHistory,
    movePrevInSessionHistory,
    moveNextInSessionHistory,
    moveLastInSessionHistory,
  };
};
