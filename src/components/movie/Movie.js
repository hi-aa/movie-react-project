import PropTypes from "prop-types";
import styles from "./Movie.module.css";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Movie({id, title, coverImg, summary, rating}) {
  return (
    <div className={styles.column}>
      <Link to={`/movie/${id}`} style={{textDecoration: 'none', color: 'black'}}>
        <div className={styles.card}>
          <h3 className={styles.title}>{title}</h3>
          <img src={coverImg} alt={`${title} cover`}/>
          <p className={styles.summary}>{summary}</p>
          {
            Array.from({length: 5}, (_, i) => (i + 1) * 2).map(i => {
              let calRating = Math.round(rating);
              console.log(rating, calRating)
              if(calRating >= i) {
                return <FontAwesomeIcon icon={faStar} className={styles['star-checked']} key={i}/>
              } else if(calRating >= i - 1) {
                return <FontAwesomeIcon icon={faStarHalfStroke} className={styles['star-checked']} key={i} />
              } else {
                return <FontAwesomeIcon icon={faStar} key={i} />
              }
            })
          }
          <span>&nbsp;&nbsp;{Number(rating).toFixed(1)}</span>
        </div>
      </Link>
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