import React, { useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./transition.css";

import styles from "./imageView.module.scss";
import classNames from "classnames";

const ImageView = ({ currImage, cssTransitionDirection }) => {
  const imageViewClasses = classNames({
    "slide-left": cssTransitionDirection === "left",
    "slide-right": cssTransitionDirection === "right",
  });

  const childFactory = (child) => {
    return React.cloneElement(child, {
      classNames: imageViewClasses,
      key: child.key,
    });
  };

  const nodeRef = useRef(null);

  return (
    <div className={styles["image-view__main"]}>
      <div className={styles["image-view__main-container"]}>
        {currImage !== undefined && (
          <TransitionGroup childFactory={childFactory}>
            {/* nodeRef={nodeRef} */}
            <CSSTransition key={currImage.url} timeout={1000} classNames={imageViewClasses}>
              <img ref={nodeRef} src={currImage.url} />
            </CSSTransition>
          </TransitionGroup>
        )}
      </div>
    </div>
  );
};

export default ImageView;
