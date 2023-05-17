import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function Movie({id, title, coverImg, summary, rating}) {
  return (
    <div className={styles.column}>
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <img src={coverImg} alt={`${title} cover`}/>
        <p className={styles.summary}>{summary}</p>
        <p>{rating}</p>
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
};

export default Movie;