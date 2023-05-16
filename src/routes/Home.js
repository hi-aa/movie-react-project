import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Home() {
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]); 

  // 영화목록 조회
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
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
        : <div>
          {
            movies.map(v => {
              return (
                <div key={v.id}>
                  <Link to={`/movie/${v.id}`}>
                    {v.title}
                  </Link>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  );
}

export default Home;