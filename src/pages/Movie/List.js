import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Movie from "../../components/movie/Movie";
import styles from "../../components/movie/Movie.module.css";
import { fetchMovieList } from "../../api/movie-api";

function Search({ query = "" }) {
  const [movieList, setMovieList] = useState([]);

  // 목록 조회
  const getMovies = async (query) => {
    const { data } = await fetchMovieList(query);
    setMovieList(data.movies);
  };

  useEffect(() => {
    getMovies();
  }, [query]);

  return (
    <div className={styles.row}>
      {movieList?.map((v) => (
        <Movie
          key={v.id}
          id={v.id}
          title={v.title}
          coverImg={v.medium_cover_image}
          summary={v.summary}
          rating={v.rating}
        />
      ))}
    </div>
  );
}

Search.propTypes = {
  query: PropTypes.string,
};

export default Search;
