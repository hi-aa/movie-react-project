import PropTypes from "prop-types";
import styles from "./Movie.module.css";
import {
  faStar,
  faStarHalfStroke,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Movie({ id, title, coverImg, summary, rating, setSelectedId }) {
  return (
    <div className={styles.column}>
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <img src={coverImg} alt={`${title} cover`} />
        <p className={styles.summary}>{summary}</p>

        {/* 별점 */}
        {Array.from({ length: 5 }, (_, i) => (i + 1) * 2).map((i) => {
          let calRating = Math.round(rating);
          if (calRating >= i) {
            return (
              <FontAwesomeIcon
                icon={faStar}
                className={styles["star-checked"]}
                key={i}
              />
            );
          } else if (calRating >= i - 1) {
            return (
              <FontAwesomeIcon
                icon={faStarHalfStroke}
                className={styles["star-checked"]}
                key={i}
              />
            );
          } else {
            return <FontAwesomeIcon icon={faStar} key={i} />;
          }
        })}
        <span>&nbsp;&nbsp;{Number(rating).toFixed(1)}</span>

        {/* 상세 오픈 */}
        <button className={styles.button} onClick={() => setSelectedId(id)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string,
  summary: PropTypes.string,
  rating: PropTypes.number,
  setSelectedId: PropTypes.func,
};

export default Movie;
