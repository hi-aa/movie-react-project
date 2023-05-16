import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Home from "../Home";

function Detail() {
  const { id } = useParams();
  const [ loading, setLoading ] = useState(true);
  const [ movie, setMovie ] = useState({});
  // console.log(id)

  // 영화 조회
  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    // console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {
        loading
        ? <Loading />
        : <div>
          Detail 
          <h2>
            {/* 영화 정보 출력하기 */}
            {movie.title}
          </h2>
        </div>
      }
    </div>
  );
}

export default Detail;