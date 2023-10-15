/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import MovieItem from "../../components/movie/MovieItem";
import { fetchMovieList } from "../../api/movie-api";
import Popup from "../../components/common/Popup";
import Detail from "../../components/movie/MovieDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const observerTarget = useRef(null); // detect last item

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(""); // 검색어
  const [isSearch, setIsSearch] = useState(false); // 검색어 변경 체크

  const [movieList, setMovieList] = useState([]); // 영화 목록
  const [selectedId, setSelectedId] = useState(0); // 상세페이지 연결

  useEffect(() => {
    // 목록 조회
    setIsSearch(false);
    // onSubmit();
  }, []);

  useEffect(() => {
    setIsSearch(true);
    onSubmit(1);
  }, [search]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // setPage((p) => p + 1);
          onSubmit(page + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  // 목록 조회
  const onSubmit = (updatePage = page) => {
    // let updatePage = page;
    if (isSearch) {
      updatePage = 1;
      setMovieList([]);
      setSelectedId(0);
    }

    setPage(updatePage);

    fetchMovieList(search, updatePage).then((response) => {
      setIsSearch(false);
      console.log({ isSearch, updatePage });
      const { data } = response;
      if (updatePage > 1) {
        setMovieList((prev) => [...prev, ...data.movies]);
      } else {
        setMovieList(data.movies);
      }
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
        <div ref={observerTarget}></div>
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
