import styles from "./Loading.module.css";

function Loading() {
  return (
    <>
      <div className={`${styles.overlay} ${styles.show}`}></div>
      {/* <div className={styles.show}>
        <div className={styles.loader}></div>
      </div> */}
    </>
  );
}

export default Loading;
