import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Movie from "../../components/movie/Movie";
import styles from "../../components/movie/Movie.module.css";

function Search() {
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]); 

  // 영화목록 조회
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=3&sort_by=year&limit=20&page_number=1`);
    const json = await response.json();
    // console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {
        loading
        ? <Loading />
        : <div className={styles.row}>
          {
            movies.map(v => 
              <Movie key={v.id} id={v.id} 
                title={v.title}
                coverImg={v.medium_cover_image}
                summary={v.summary}
                rating={v.rating}
              />
            )
          }
        </div>
      }
    </div>
  );
}

export default Search;