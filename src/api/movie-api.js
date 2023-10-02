import { api } from ".";

export const fetchMovieList = async (query = "") => {
  const url = `${process.env.REACT_APP_MOVIE_API}/list_movies.json?`;
  const params = `minimum_rating=3&sort_by=year&limit=20&page_number=1&query_term=${query}`;
  return await api.get(`${url}${params}`);
};

export const fetchMovieDetail = async (id) => {
  const url = `${process.env.REACT_APP_MOVIE_API}/movie_details.json?`;
  const params = `movie_id=${id}`;
  return await api.get(`${url}${params}`);
};
