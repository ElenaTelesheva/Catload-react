import styles from "../tinder/tinder.module.scss";
import Button from "../button/Button";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

const TopPanel = () => {
  const { movePrevInSessionHistory, moveNextInSessionHistory, moveLastInSessionHistory } = useContext(MainContext);

  return (
    <div className={styles["tinder-block__switch-buttons-container"]}>
      <Button
        onClick={movePrevInSessionHistory}
        className={`${styles["tinder-block__top-panel-button"]} ${styles["tinder-block__prev-button"]}`}
      >
        &#706; Back
      </Button>

      <div className={styles["tinder-block__pair"]}>
        <div className={styles["tinder-block__emoji-block"]}>
          <img src="" alt="Эмодзи" />
        </div>
        <div className={styles["tinder-block__counter"]}>752</div>
      </div>

      <div className={styles["tinder-block__near-buttons-block"]}>
        <Button
          className={`${styles["tinder-block__top-panel-button"]} ${styles["tinder-block__next-button"]}`}
          onClick={moveNextInSessionHistory}
        >
          &#5171; Next
        </Button>

        <Button
          className={`${styles["tinder-block__top-panel-button"]} ${styles["tinder-block__last-button"]}`}
          onClick={moveLastInSessionHistory}
        >
          &#10150; Last
        </Button>
      </div>
    </div>
  );
};

export default TopPanel;
