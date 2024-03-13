import styles from "./select.module.scss";

const SmartSelect = ({ showSourceOptions, setShowSourceOptions }) => {
  const handleSourceOptions = () => {
    setShowSourceOptions((prev) => !prev);
  };

  return (
    <div className={styles["smart-select"]}>
      <div className={styles["smart-select__select-box"]}>
        {showSourceOptions && (
          <div className={styles["smart-select__options-container"]}>
            <div className={styles["smart-select__option"]}>
              <input type="radio" className="radio" name="category" />
              <label>catAPI</label>
            </div>
            <div className={styles["smart-select__option"]}>
              <input type="radio" className="radio" name="category" />
              <label>catass</label>
            </div>
          </div>
        )}
        <div className={styles["smart-select__selected"]} onClick={handleSourceOptions}>
          Select cat source
        </div>

        {showSourceOptions && (
          <div className={styles["smart-select__search-box"]}>
            <input className={styles["smart-select__input"]} type="text" placeholder="Start Typing..." />
          </div>
        )}
      </div>
    </div>
  );
};
export default SmartSelect;
