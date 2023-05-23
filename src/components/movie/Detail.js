import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

function Detail({id}) {
  // const { id } = useParams();
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
          <h3>Detail {movie.id}</h3>
          <h2>
            <Link to={movie.url}>
              {movie.title_long}
            </Link>
          </h2>
          <img src={movie.medium_cover_image} alt={`${movie.title} cover`}/>
          <div>
            <h3>Genre</h3>
            {movie.genres.join(', ')}
          </div>
          <div>
            <h3>Upload Date</h3>
            {movie.date_uploaded}
          </div>
          <div>
            <h3>Description</h3>
            {movie.description_intro}
          </div>
          <div>
            <h3>Download Count</h3>
            {movie.download_count}
          </div>
          <div>
            <h3>Rating</h3>
            {movie.rating}
          </div>
        </div>
      }
    </div>
  );
}

Detail.propTypes = {
  id: PropTypes.number.isRequired
}
export default Detail;