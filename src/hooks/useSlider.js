import { useState } from "react";

export const useSlider = (initialIndex) => {
    const [index, setIndex] = useState(initialIndex);
    
    const [direction, setDirection] = useState("right");

  const slidePrev = () => {
      if (index >= 1) setIndex((prev) => prev - 1);
      setDirection("left");
  };

  const slideNext = (length) => {
      if (index < length - 1) setIndex((prev) => prev + 1);
      setDirection("right");
  };

  const slideLast = (length) => {
    if (length !== 0) setIndex(length - 1);
  };

  return { direction, index, slidePrev, slideNext, slideLast };
};
