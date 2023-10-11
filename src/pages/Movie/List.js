/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Movie from "../../components/movie/Movie";
import styles from "../../components/movie/Movie.module.css";
import { fetchMovieList } from "../../api/movie-api";
import Popup from "../../components/common/Popup";
import Detail from "../../components/movie/Detail";
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
      <div className="input-group">
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
              setSelectedId={setSelectedId}
            />
          ))
        ) : (
          <>empty</>
        )}
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
