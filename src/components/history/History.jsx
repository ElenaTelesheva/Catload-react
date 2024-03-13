import HistoryItem from "../history-item/HistoryItem";

import styles from "./history.module.scss";

const History = ({ fileArray }) => {
  const files = fileArray.map((file) => <HistoryItem key={file.id} file={file} />);

  return <div className={styles["history-container"]}>{files}</div>;
};

export default History;
