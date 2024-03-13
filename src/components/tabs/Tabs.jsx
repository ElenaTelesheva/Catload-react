// import { useState } from "react";
import styles from "./tabs.module.scss";
import Button from "../button/Button";
// import { useMemo } from "react";

const Tabs = ({ currTab, setCurrTab }) => {
  const tabs = [
    { name: "Текущие", code: "curr" },
    { name: "Все", code: "all" },
  ];

  const handleChangeTab = (newTabCode) => {
    setCurrTab(newTabCode);
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Button
          key={tab.code}
          className={`${styles["tabs__btn"]} ${tab.code === currTab ? `${styles["tabs__btn--active"]}` : ""}`}
          onClick={() => {
            handleChangeTab(tab.code);
          }}
        >
          {tab.name}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
