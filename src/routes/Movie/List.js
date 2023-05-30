import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "../../components/Loading";
import Movie from "../../components/movie/Movie";
import styles from "../../components/movie/Movie.module.css";

function Search({ query, search }) {
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]); 

  // 영화목록 조회
  const getMovies = useCallback(async () => {
    setLoading(true);

    const url = `https://yts.mx/api/v2/list_movies.json?`;
    const params = `minimum_rating=3&sort_by=year&limit=20&page_number=1`;
    let appendQuery = "";
    if(query) {
      appendQuery = `&query_term=${query}`;
    }
    const response = await fetch(url + params + appendQuery);
    // console.log(appendQuery)
    
    const json = await response.json();
    // console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
  }, [search]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div>
      {
        loading
        ? <Loading />
        : <div className={styles.row}>
          {
            movies != null && movies.length > 0
              ? movies.map(v => 
                <Movie key={v.id} id={v.id} 
                  title={v.title}
                  coverImg={v.medium_cover_image}
                  summary={v.summary}
                  rating={v.rating}
                />
              )
              : <div>No Result</div>
          }
        </div>
      }
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.number.isRequired,
  query: PropTypes.string,
};


export default Search;