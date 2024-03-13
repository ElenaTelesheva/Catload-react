import Button from "../button/Button";
import styles from "./historyItem.module.scss";

const HistoryItem = ({ file }) => {
  return (
    <div className={styles.file}>
      <img className={styles["file__picture"]} alt="Файл с котиком" src={file.url} />
      <Button className={styles["file__delete-btn"]}></Button>
    </div>
  );
};

export default HistoryItem;
