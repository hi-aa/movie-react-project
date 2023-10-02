import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Movie from "../../components/movie/Movie";
import styles from "../../components/movie/Movie.module.css";
import { fetchMovieList } from "../../api/movie-api";
import { useRecoilValue } from "recoil";
import { searchState } from "../../atom/main-atom";
// import { useLocation } from "react-router-dom";

function Search() {
  const search = useRecoilValue(searchState);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList([]);

    // 목록 조회
    fetchMovieList(search).then((response) => {
      const { data } = response;
      setMovieList(data.movies);
    });
  }, [search]);

  return (
    <div className={styles.row}>
      {movieList?.length > 0 ? (
        movieList?.map((v) => (
          <Movie
            key={v.id}
            id={v.id}
            title={v.title}
            coverImg={v.medium_cover_image}
            summary={v.summary}
            rating={v.rating}
          />
        ))
      ) : (
        <>empty</>
      )}
    </div>
  );
}

Search.propTypes = {
  // query: PropTypes.string,
};

export default Search;
