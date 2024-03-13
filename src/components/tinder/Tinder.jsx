import { useContext } from "react";

import styles from "./tinder.module.scss";
import LikeIconComponent from "../../assets/svg-components/Like";
import DislikeIconComponent from "../../assets/svg-components/Dislike";

import TopPanel from "../top-panel/TopPanel";
import ImageView from "../image-view/ImageView";
import Button from "../button/Button";

import { MainContext } from "../../contexts/MainContext";

const Tinder = () => {
  const { onLikeHandler } = useContext(MainContext);

  const { sessionHistory } = useContext(MainContext);

  const { index, direction } = useContext(MainContext);

  return (
    <div className={styles["tinder-block"]}>
      <TopPanel />
      <ImageView currImage={sessionHistory[index]} cssTransitionDirection={direction} />
      <div className={styles["tinder-block__emotion-buttons-container"]}>
        <Button className={styles["tinder-block__like-button"]} onClick={onLikeHandler}>
          <LikeIconComponent />
        </Button>
        <Button className={styles["tinder-block__dislike-button"]}>
          <DislikeIconComponent />
        </Button>
      </div>
    </div>
  );
};

export default Tinder;
