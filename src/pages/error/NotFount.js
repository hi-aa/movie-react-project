import { useNavigate } from "react-router-dom";
import styles from "./error.module.css";

export default function NotFount() {
  const navigate = useNavigate();
  return (
    <>
      Not Fount
      <br />
      <button className={styles.btn} onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}
