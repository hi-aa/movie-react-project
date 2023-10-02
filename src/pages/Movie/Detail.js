import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetail } from "../../api/movie-api";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    // 상세 조회
    fetchMovieDetail(id).then((response) => {
      const { data } = response;
      setMovie(data?.movie);
    });
  }, [id]);

  return (
    <div>
      <h3>Detail {movie.id}</h3>
      <h2>
        <Link to={movie.url}>{movie.title_long}</Link>
      </h2>
      <img src={movie.medium_cover_image} alt={`${movie.title} cover`} />
      <div>
        <h3>Genre</h3>
        {movie.genres.join(", ")}
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
  );
}

export default Detail;
