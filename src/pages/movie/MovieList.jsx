/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MovieItem from "../../components/movie/MovieItem";
import { fetchMovieList } from "../../api/movie-api";
import Popup from "../../components/common/Popup";
import Detail from "../../components/movie/MovieDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [search, setSearch] = useState(""); // 검색어
  const [movieList, setMovieList] = useState([]); // 조회결과
  const [selectedId, setSelectedId] = useState(0); // 상세페이지

  useEffect(() => {
    // 목록 조회
    onSubmit();
  }, []);

  // 목록 조회
  const onSubmit = () => {
    setMovieList([]);

    fetchMovieList(search).then((response) => {
      const { data } = response;
      console.log({ data });
      setMovieList(data.movies);
    });
  };

  // enter
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <>
      {/* search */}
      <div className="input-group mb-4">
        <input
          type="text"
          aria-label="search"
          className="form-control"
          placeholder="검색어"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={onCheckEnter}
        />
        <span className="btn btn-outline-secondary" onClick={onSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>

      {/* list */}
      <div class="row mb-2">
        {movieList.map((v) => (
          <MovieItem
            key={v.id}
            id={v.id}
            title={v.title}
            genres={v.genres}
            coverImg={v.medium_cover_image}
            summary={v.summary}
            rating={v.rating}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>

      <Popup
        open={selectedId > 0}
        setOpen={(value) => {
          if (!value) {
            // 팝업 닫기
            setSelectedId(0);
          }
        }}
        popContents={<Detail id={selectedId} />}
      />
    </>
  );
}

export default Search;
