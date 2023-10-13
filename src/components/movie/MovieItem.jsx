/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import styles from "./Movie.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Movie({
  id,
  title,
  genres = [],
  coverImg,
  summary,
  rating,
  setSelectedId,
}) {
  return (
    <div className="col-md-4">
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div
          className={`card-body d-flex flex-column align-items-start ${styles["item_wrap"]}`}
        >
          <strong class="d-inline-block mb-2 text-primary">
            {genres?.[0]}
          </strong>
          <h3
            className={`mb-0 text-dark ${styles.title}`}
            // data-bs-toggle="tooltip"
            // data-bs-title="Default tooltip"
          >
            {title}
          </h3>
          <div class="mb-1 text-muted">
            <FontAwesomeIcon icon={faStar} className={styles["star-checked"]} />
            &nbsp;{rating}
          </div>
          <p
            className={`card-text mb-auto d-inline-block text-truncate ${styles.summary}`}
          >
            {summary}
          </p>

          <a href="#" onClick={() => setSelectedId(id)}>
            Continue reading
          </a>
        </div>
        <img
          class="card-img-right flex-auto d-none d-md-block"
          src={coverImg}
          data-holder-rendered="true"
          alt={title}
        />
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
