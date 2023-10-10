import { useEffect, useState } from "react";
import Movie from "../../components/movie/Movie";
import styles from "../../components/movie/Movie.module.css";
import { fetchMovieList } from "../../api/movie-api";
import { useRecoilValue } from "recoil";
import { searchState } from "../../atom/main-atom";
import Popup from "../../components/common/Popup";
import Detail from "../../components/movie/Detail";
import { isNumber } from "../../util/empty-validation";

function Search() {
  const search = useRecoilValue(searchState); // 검색어
  const [movieList, setMovieList] = useState([]); // 조회결과

  const [open, setOpen] = useState(false); // 팝업 상태
  const [selectedId, setSelectedId] = useState(0); // 상세페이지

  useEffect(() => {
    setMovieList([]);

    // 목록 조회
    fetchMovieList(search).then((response) => {
      const { data } = response;
      setMovieList(data.movies);
    });
  }, [search]);

  // 상세페이지 오픈
  useEffect(() => {
    // console.log({ selectedId });
    setOpen(isNumber(selectedId) && selectedId > 0);
  }, [selectedId]);

  return (
    <>
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
        open={open}
        setOpen={setOpen}
        popContents={<Detail id={selectedId} />}
      />
    </>
  );
}

export default Search;
