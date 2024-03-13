import { useState } from "react";
import { createPortal } from "react-dom";

import styles from "./layout.module.scss";
import classNames from "classnames";

import MainContextProvider from "../../contexts/MainContext";
import Button from "../button/Button";

const Layout = ({ sidebar, portalContent, children }) => {
  const [isShowHistory, setIsShowHistory] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleShowHistory = () => {
    setIsShowHistory((prev) => !prev);
  };

  const layoutClasses = classNames(styles.layout, {
    [styles["layout--hidden-history"]]: !isShowHistory,
  });

  const renderToggleBtnIcon = () => {
    return isShowHistory ? "⮜" : "➤";
  };

  return (
    <MainContextProvider>
      <div className={layoutClasses}>
        <Button className={styles["layout__sidebar-toggle-btn"]} onClick={handleShowHistory}>
          {renderToggleBtnIcon()}
        </Button>

        <div className={styles.layout__sidebar}>{sidebar(setIsShowModal)}</div>
        <div className={styles.layout__main}>{children}</div>
        {createPortal(portalContent(isShowModal, setIsShowModal), document.body)}
      </div>
    </MainContextProvider>
  );
};

export default Layout;
