import { useContext, useState } from "react";

import styles from "./sidebar.module.scss";

import Button from "../button/Button";
import Tabs from "../tabs/Tabs";
import History from "../history/History";
import { MainContext } from "../../contexts/MainContext";

const Sidebar = ({ setShowModal }) => {
  const [currTab, setCurrTab] = useState("curr");

  const handleShowModal = () => {
    setShowModal(true);
  };

  const { likeHistory } = useContext(MainContext);

  return (
    <div className={styles["history-block"]}>
      <div className={styles["history-block__body"]}>
        <div className={styles["history-block__body-content"]}>
          <Button className={styles["history-block__download-button"]} onClick={handleShowModal}>
            Source
          </Button>

          <Tabs currTab={currTab} setCurrTab={setCurrTab} />

          {/* <History fileArray={currTab === "curr" ? currLikeHistoryStorage : allLikeHistoryStorage} /> */}
          <History fileArray={likeHistory} />

          <Button className={styles["history-block__download-button"]}>Download All</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
