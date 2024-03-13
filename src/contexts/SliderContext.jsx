import { createContext, useContext, useState } from "react";
import { MainContext } from "./MainContext";

import "./slider.css";

export const SliderContext = createContext();

const SliderContextProvider = (props) => {
  const { sessionHistory } = useContext(MainContext);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("slide-right");

  const slideLeft = () => {
    console.log(index);
    if (index !== 0) {
      setIndex((prev) => prev - 1);
    }
    setDirection("slide-left");
  };

  const slideRight = () => {
    console.log(index);
    if (index < sessionHistory.length - 1) {
      setIndex((prev) => prev + 1);
    }
    setDirection("slide-right");
  };

  return (
    <SliderContext.Provider value={{ index, direction, slideLeft, slideRight }}>
      {props.children}
    </SliderContext.Provider>
  );
};

export default SliderContextProvider;
