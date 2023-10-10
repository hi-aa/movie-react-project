import styles from "./Popup.module.css";
import PropTypes from "prop-types";

/**
 * popup container
 */
function Popup({ open, setOpen, popContents = <></> }) {
  const popClose = () => {
    setOpen(false);
  };

  return (
    open && (
      <div className={styles["popup-container"]} onClick={popClose}>
        <div className={styles["popup-body"]}>
          <span className={styles.close} onClick={popClose}>
            &times;
          </span>
          {popContents}
        </div>
      </div>
    )
  );
}

Popup.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  popContents: PropTypes.element,
};

export default Popup;
